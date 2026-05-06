# AGENTS.md — ALL-I-NEED

## Repo Structure

```
ALL-I-NEED/
├── Project/          # All projects (gitignored by .gitignore)
│   └── 2Latx/        # Multi-agent LaTeX converter
├── Learning/         # Learning notes (tracked)
├── Task/             # Task tracking (tracked)
└── .gitignore        # Ignores Project/ entirely
```

Everything under `Project/` is NOT committed to git. Work in `Project/` if you need fast experiment space without repo clutter.

## 2Latx Project (`Project/2Latx/`)

Multi-agent system: Worker (drafts LaTeX) → QA (checks quality) → Human (review/approve). Built with FastAPI + LangGraph + React + react-pdf.

### Server Commands

```bash
cd Project/2Latx
./start.sh    # Start server (PID stored in /tmp/2latx.pid)
./stop.sh     # Stop server
```

**Important**: Using `&` + `sleep` + `curl` in one bash-call blocks or times out in this environment. Always use `start.sh` to launch the server, then run other commands in separate calls.

### Development

```bash
# Backend
cd Project/2Latx
source venv/bin/activate
python -m backend.main    # Direct start (prints logs)

# Frontend changes require rebuild
cd frontend && npm run build
```

Python 3.14 is installed — bleeding-edge, some packages may have compat issues.

### LLM API

Configured via `.env` (at project root, NOT in backend/):
```
OPENAI_API_BASE=https://opencode.ai/zen/go/v1
OPENAI_API_KEY=sk-...
DEFAULT_MODEL=kimi-k2.5          # Vision-capable
```
Uses OpenAI-compatible client (`openai` Python lib). The `chat_with_vision()` method on `llm` sends images as base64 data URLs when image materials are detected.

### Agent Graph

- **Worker**: Extracts text (OCR via easyocr fallback), generates LaTeX with skill-enhanced prompt, compiles to PDF. Validates structure before compile (must have `\documentclass`, `\begin{document}`, `\end{document}`). Max 3 retries with progressive simplification, then emergency fallback.
- **QA**: Compares draft vs original source via LLM. Returns `PASS_TO_HUMAN` or `REVISION_NEEDED` with score.
- **Human/Monitor**: Graph pauses via `interrupt_before=["human", "monitor"]`. Resume by sending `human_input` over WebSocket.
- **MemorySaver**: Checkpointing is in-memory (not SQLite). Restart loses graph state; job metadata + events survive in SQLite.
- **Route logic**: `graph/graph.py` — `should_continue` (QA routing), `after_human`, `after_monitoring`. Soft Approve routes to `monitor` node (can be resumed later). Hard Complete routes to `END`.

### LaTeX Compilation

Falls back in order: `tectonic` → `pdflatex`. Tectonic is installed locally at `~/.local/bin/tectonic`. If neither found, returns error string.

### OCR

Falls back: `pytesseract` → `easyocr` (pure Python). easyocr is installed in venv and works without system binary.

### Database

SQLite at `storage/2latx.db`. Two tables:
- `jobs` — job metadata, status, materials list (JSON), draft version
- `job_events` — observability events (agent_start, agent_end, thought, tool_call, tool_result, llm_stream, status_change)

Delete `storage/2latx.db` + `storage/jobs/` to fully reset.

### File Storage

```
storage/jobs/{job_id}/
├── materials/        # Uploaded files
├── drafts/           # draft_{n}.tex + draft_{n}.pdf
└── annotations.json  # PDF comments + drawings
```

### Observability Events

- **Real-time**: WebSocket at `/ws/{job_id}` streams events as they happen
- **Historical**: `GET /api/jobs/{job_id}/events` returns all stored events
- **Emitter pattern**: `backend/graph/events.py` — `set_emitter()` wires callback; agent nodes call `emit(agent, type, data)` for thought events
- **LangGraph events** (tool_call, llm_stream, etc.) captured via `graph.astream_events()` with version="v2"
- **Critical bug fixed**: Events from `format_graph_event()` were previously filtered out by a `payload.get("job_id")` check that always failed (job_id wasn't set on payload). Now stored directly.

### Key API Endpoints

| Method | Path | Purpose |
|---|---|---|
| POST | `/api/jobs` | Create job (form: name, model) |
| POST | `/api/jobs/{id}/materials` | Upload files |
| DELETE | `/api/jobs/{id}/materials/{index}` | Remove material by index |
| POST | `/api/jobs/{id}/start` | Start agent graph |
| GET | `/api/jobs/{id}` | Job details + annotations |
| GET | `/api/jobs/{id}/events` | All observability events |
| GET | `/api/jobs/{id}/draft.pdf` | Download latest PDF |
| GET | `/api/jobs/{id}/draft.tex` | Download latest LaTeX source |
| DELETE | `/api/jobs/{id}` | Delete job + files + events |
| WS | `/ws/{id}` | Real-time event stream |

### LaTeX Skill

`backend/graph/worker_node.py:LATEX_SKILL` contains the skill-enhanced system prompt (csquotes, cleveref, booktabs, microtype, etc.). Backed by `.claude/skills/latex-writing/SKILL.md`.

### Bash Tool Quirk

Background processes (`cmd &`) in the OpenCode bash tool get killed when the overall command times out. For long-running servers, use `./start.sh` which writes a PID file and survives independently.
