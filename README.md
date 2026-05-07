# ALL-I-NEED

A personal master workspace and knowledge hub — centralizing learning notes, task tracking, project scaffolding, and AI agent instructions in one repository.

## What's Inside

| Directory | Purpose |
|-----------|---------|
| `Learning/` | Structured learning materials across multiple domains |
| `Task/` | Task tracking system with inbox, active, done, and templates |
| `AGENTS.md` | Instructions for AI coding agents working in this repo |
| `Project/` | Project work (gitignored — fast experiment space, not tracked) |

## Structure

### Learning/

```
Learning/
├── AI/
│   ├── AgenticAI/          # Agentic AI concepts (Andrew Ng course, browser agents)
│   ├── AI-Engineer-channel/ # AI engineering resources
│   └── Traditional/         # Traditional AI techniques
├── LLM/
│   └── TRANSFORMER/        # Transformer architecture deep-dive
├── Abtract-Algebra/
│   └── Group/              # Group theory notes
├── Bussiness/
│   └── 1000women/          # Business learning
└── .agents/
    └── skills/             # Custom agent skill definitions
```

### Task/

```
Task/
├── Inbox/          # Incoming tasks to triage
├── Active/         # Currently in-progress tasks
├── Done/           # Completed tasks
└── Templates/      # Reusable task templates
```

## How to Use

**For humans:** Browse `Learning/` for study notes, manage tasks in `Task/` by moving markdown files between folders.

**For AI coding agents:** Read `AGENTS.md` first — it contains project-specific instructions, server commands, and development workflows.

**Project work:** Drop projects into `Project/` (gitignored). Use this for fast experiments without polluting the tracked repo.

## Setup

```bash
git clone https://github.com/m4nun/ALL-I-NEED.git
cd ALL-I-NEED
```

No dependencies to install. This is a lightweight knowledge repo — just markdown files and static assets.

## Git Notes

- `Project/` is fully gitignored — perfect for throwaway experiments
- Secrets (`.env`, `.env.*`, `*.key`, `*.pem`) are gitignored
- Everything in `Learning/` and `Task/` is tracked
