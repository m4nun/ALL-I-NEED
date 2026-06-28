---
name: yt-video-summarizer
description: Summarize any YouTube video: fetch transcript with bun yt-transcript, analyze key themes, and create interactive narrative presentation website.
---

# YouTube Video Summarizer

Fetch transcript from any YouTube video, distill key themes, and produce a polished interactive presentation website.

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                       YT VIDEO SUMMARIZER                            │
├─────────────────────────────────────────────────────────────────────┤
│  1. GET TRANSCRIPT                                            │
│     bun /tmp → youtube-transcript → Extract full text              │
│                                                                     │
│  2. ANALYZE CONTENT                                          │
│     Identify speakers, core thesis, arguments, examples, closing    │
│                                                                     │
│  3. STRUCTURE NARRATIVE                                      │
│     Map beats: Opening → Problem → Insight → How it Works →        │
│     Examples → Vision → Future → Closing                           │
│                                                                     │
│  4. CREATE PRESENTATION                                       │
│     Single HTML file with accumulate-on-click narrative style      │
│     Dark/light theme matching video tone, interactive navigation   │
│                                                                     │
│  5. SCREENSHOT TEST (optional)                                │
│     BrowserOS renders all beats, detect text overflow & overlaps   │
└─────────────────────────────────────────────────────────────────────┘
```

## Prerequisites

- **bun** (for `youtube-transcript`): `which bun`
- The package is installed on-demand: `bun install youtube-transcript` in `/tmp`

## Step 1: Get Transcript

### Install & fetch in one shot

Run in `/tmp` (clean workspace, no project pollution):

```bash
cd /tmp && bun add youtube-transcript && bun -e "
import { YoutubeTranscript } from 'youtube-transcript';
import fs from 'fs';
const id = process.argv[1] || 'o-zkvb0iFDQ';
const t = await YoutubeTranscript.fetchTranscript(id);
fs.writeFileSync('transcript.txt', t.map(x => x.text).join(' '));
console.log('OK:', t.length, 'segments');
" <VIDEO_ID>
```

Alternative if `youtube-transcript` is already installed:

```bash
bun -e "
import { YoutubeTranscript } from 'youtube-transcript';
const t = await YoutubeTranscript.fetchTranscript('VIDEO_ID');
process.stdout.write(t.map(x => x.text).join(' '));
" 2>/dev/null
```

**Video ID extraction**: From URL `https://www.youtube.com/watch?v=o-zkvb0iFDQ` → ID is `o-zkvb0iFDQ`.

### Fallback: Python with stdlib

If `bun` is unavailable, use Python with `urllib` to extract caption tracks from the YouTube page HTML:

1. Fetch page HTML, extract `ytInitialPlayerResponse`
2. Parse `captionTracks` to find English track `baseUrl`
3. Fetch track URL to get transcript XML/JSON

## Step 2: Analyze Content

Read the full transcript and extract:

| Element | What to look for |
|---------|-----------------|
| **Speakers** | Names, roles, affiliations (from intro/outro) |
| **Core Thesis** | The central claim or problem being solved |
| **Key Arguments** | 3-5 main points with supporting evidence |
| **Examples/Demos** | Real-world applications shown |
| **Data/Stats** | Numbers, adoption metrics, comparisons |
| **Vision/Future** | Where the technology is headed |
| **Call to Action** | How to get involved or next steps |

## Step 3: Structure the Narrative

Map the content into presentation beats. Follow the [narrative-presenter skill](../narrative-presenter/SKILL.md) beat types:

| Beat Type | When to use |
|-----------|-------------|
| `opening` | Title, speakers, context |
| `argument` | Core problem or claim |
| `insight` | Key mental model or "aha" moment |
| `phase` | Numbered chapter for multi-part content |
| `architecture` | Technical flow / how it works (custom type) |
| `demo` | Live example walkthrough |
| `adoption` | Industry adoption / ecosystem |
| `stat` | Impactful numbers or metrics |
| `section` | Side-by-side comparison of options |
| `vision` | Future outlook or paradigm shift |
| `community` | How to get involved |
| `productivity` | What's next / roadmap |
| `closing` | Final thought, call to action |

**Guidelines:**
- 12-18 total beats for a 20-30min talk
- Each beat = one complete thought, digestible in 10-30s
- Group related ideas; split dense ones
- Add transitional breaths between major sections

## Step 4: Create Presentation

Generate a single self-contained HTML file.

### Style: Minimal & Easy-to-Read

Always use a clean, minimal design — white background, subtle gray cards, one accent color (indigo). No gradients, no orbs, no heavy shadows. Prioritize readability with generous whitespace and clear hierarchy.

- **Page**: White (`bg-white`), `text-slate-800`
- **Cards**: `bg-slate-50`, border `border-slate-100`
- **Accent**: `bg-indigo-600` / `text-indigo-600` / `indigo-50`
- **Font**: System Thai font (Noto Sans Thai) + Inter for English
- **No decorative elements**: no gradient backgrounds, no floating orbs, no patterns

### File Naming

Name the file after the YouTube video title. If the title is longer than 2-3 words, shorten it to something intuitive that still clearly identifies the video.

| Video title | File name |
|---|---|
| "MCP UI: Extending the Frontier — Liad Yosef and Ido Salomon" | `mcp-ui-extending-frontier.html` |
| "Agent Skill คืออะไร? มาตรฐานใหม่สำหรับ AI Agent ที่คุณต้องรู้" | `agent-skill.html` |

Save to the directory where the user is working (e.g., `Learning/AI/AI-Engineer-channel/`).

### Required Features

1. **Accumulating narrative** — beats build up, never disappear
2. **Click/keyboard advance** — click anywhere, Space/ArrowRight to go forward, ArrowLeft to go back
3. **Progress indicator** — dot bar + counter showing position
4. **Fade-up animations** — subtle, 0.5s ease-out
5. **Auto-scroll** — centers newest beat in viewport
6. **Back button** — revisit earlier beats

### Beat Types (Minimal Style)

| Type | Style |
|------|-------|
| **title** | Centered, large bold heading, muted sub text |
| **question** | Card with accent label, Q&A style |
| **compare** | 2-column side-by-side card comparison |
| **section** | 3-column grid icon cards |
| **callout** | Tinted accent card with highlight box |
| **list** | Numbered list with circle badges |
| **step** | Timeline-style numbered cards with optional tip |
| **tip** | Amber-tinted card with callout |
| **center** | Centered statement, pull-quote style |
| **end** | Summary checklist + final highlight |

Do NOT use elaborate beat types (phase, architecture, adoption, stat, vision, community, productivity) — keep it to the minimal set above.

### Optional: SVG Graphic Diagrams

For concepts that are **easier to explain visually** than in words, use inline SVG diagrams. This is an **optional choice** — not every beat needs one.

**When to add a graphic:**
- Comparing two approaches side-by-side (e.g., Workflow vs Agent)
- Showing a flow, loop, or sequence (e.g., tool-calling loop)
- Explaining architecture with boxes and arrows
- Visualizing patterns or categories (e.g., 5 workflow patterns as cards)

**When NOT to add a graphic:**
- Simple definitions or quotes
- Lists of bullet points
- Single-statement takeaways

**SVG design rules:**
- Use a single SVG per beat, inside a `.fig` card container
- Set `viewBox="0 0 700 200"` (adjust height per content)
- Set `style="width:100%"` so it scales responsively
- Use `<g class="a-up d1">` … `<g class="a-up d5">` for staggered animation
- Keep text inside the viewBox: calculate `x + (text.length × fontSize × 0.55) < viewBox width`
- Avoid element overlaps: keep 8px+ gap between boxes
- Use `.fig { overflow: hidden; }` to clip anything that does overflow
- Add `role="img"` + `<figcaption class="visually-hidden">` for accessibility

**Graphic beat types available:**

| Type | Use for | Example |
|------|---------|---------|
| `flow-diagram` | Sequence of steps with arrows | LLM → Gate → LLM → Polish |
| `compare-diagram` | Two-column visual comparison | Workflow (scaffolded) vs Agent (unbounded) |
| `loop-diagram` | Circular/looping flow | Agent tool-calling loop |
| `branch-diagram` | Conditional branches | Router → Story / Joke / Poem |
| `grid-diagram` | Card grid (2-5 items) | 5 workflow patterns |
| `stack-diagram` | Stacked vertical flow | Generator → Evaluator → feedback loop |
| `center-quote` | Large centered statement | "Agent = LLM + Tools + Loop" |

### Template Structure

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video Title</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
    * { font-family: 'Noto Sans Thai', 'Inter', sans-serif; }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .animate-fade-up { animation: fadeUp 0.5s ease-out forwards; }
    body { min-height: 100vh; }
  </style>
</head>
<body class="bg-white text-slate-800 cursor-pointer select-none">
  <!-- Top bar with progress -->
  <!-- Content area -->
  <!-- Bottom bar with back button -->
  <script>
    // beats array, renderBeat(), advance(), goBack(), keyboard handlers
  </script>
</body>
</html>
```

## Step 5: Screenshot Testing (Optional but Recommended)

After generating the HTML, use **BrowserOS** to render the file and catch layout bugs automatically.

### Test Script

Open the HTML in BrowserOS, advance through all beats, then run this verification:

```javascript
(function(){
  const issues = [];
  
  // Advance through all beats
  for(let i=0; i<10; i++) {
    document.dispatchEvent(new KeyboardEvent('keydown', {key:' ', bubbles:true}));
  }
  
  // Check each beat for problems
  document.querySelectorAll('.beat-inner').forEach((beat, bi) => {
    const svg = beat.querySelector('svg');
    if (!svg) return;
    
    const vb = (svg.getAttribute('viewBox') || '').split(' ').map(Number);
    const vw = vb[2] || 700;
    
    // 1. Text overflow: check if text extends beyond viewBox width
    svg.querySelectorAll('text').forEach(t => {
      const x = parseFloat(t.getAttribute('x'));
      if (!isNaN(x)) {
        const fs = parseFloat(t.getAttribute('font-size') || '12');
        const w = t.textContent.length * fs * 0.55;
        if (x + w > vw + 2) {
          issues.push({ type: 'text_overflow', beat: bi, text: t.textContent.slice(0,35), exceeds_by: Math.round(x + w - vw) });
        }
      }
    });
    
    // 2. Text-text overlaps
    const texts = Array.from(svg.querySelectorAll('text')).map(t => ({
      r: t.getBoundingClientRect(),
      txt: t.textContent.slice(0,20)
    }));
    for (let i=0; i<texts.length; i++) {
      for (let j=i+1; j<texts.length; j++) {
        const a = texts[i], b = texts[j];
        const overlap = !(a.r.right < b.r.left+2 || a.r.left > b.r.right-2 || a.r.bottom < b.r.top+2 || a.r.top > b.r.bottom-2);
        if (overlap) {
          issues.push({ type: 'text_overlap', beat: bi, t1: a.txt, t2: b.txt });
        }
      }
    }
    
    // 3. Rect-rect overlaps (only siblings, skip parent-child nesting)
    const groups = Array.from(svg.querySelectorAll('g'));
    groups.forEach(g => {
      const rects = Array.from(g.querySelectorAll('rect')).map(r => ({
        el: r, r: r.getBoundingClientRect()
      }));
      for (let i=0; i<rects.length; i++) {
        for (let j=i+1; j<rects.length; j++) {
          const a = rects[i], b = rects[j];
          const overlap = !(a.r.right < b.r.left+2 || a.r.left > b.r.right-2 || a.r.bottom < b.r.top+2 || a.r.top > b.r.bottom-2);
          if (overlap) {
            issues.push({ type: 'rect_overlap', beat: bi });
          }
        }
      }
    });
    
    // 4. Viewport horizontal overflow
    const bRect = beat.getBoundingClientRect();
    if (bRect.right > window.innerWidth + 3) {
      issues.push({ type: 'viewport_overflow', beat: bi });
    }
  });
  
  return JSON.stringify({ issue_count: issues.length, issues }, null, 2);
})()
```

### How to Fix Common Issues

| Issue | Fix |
|-------|-----|
| **Text overflow** | Split long text into multiple `<text>` lines, or reduce `font-size` |
| **Text overlap** | Increase vertical spacing between elements (`y` + gap) |
| **Rect overlap** | Increase box spacing, or make `.fig { overflow: hidden }` |
| **Viewport overflow** | Check `.fig` has `max-width`, ensure SVG scales with `width:100%` |

### BrowserOS Screenshot Workflow

```
1. browseros_new_page(url=file:///path/to/slide.html)
2. browseros_evaluate_script → advance all beats + run test script
3. If issues found → read file → fix coordinates/spacing → reload → retest
4. browseros_take_screenshot → visual spot-check
5. Done
```

## Output

- File: `<working-dir>/<short-video-name>.html`
- Single file, zero dependencies (Tailwind via CDN, Google Fonts)
- Ready to open in any browser

## Quality Checklist

- [ ] Transcript successfully fetched (verify: non-empty output)
- [ ] Content accurately reflects video thesis and arguments
- [ ] All major sections of the talk are represented
- [ ] Beats flow logically from opening to closing
- [ ] Each beat fits one complete thought
- [ ] Navigation: click, keyboard, back button all work
- [ ] Animations are smooth and not distracting
- [ ] Progress indicator accurately tracks position
- [ ] Design theme matches the video's tone
- [ ] No external dependencies beyond CDN links
- [ ] Responsive — readable on projector (1080p+) and laptop
- [ ] **SVG graphics fit within viewBox** (no text overflow)
- [ ] **No element overlaps** in diagrams
- [ ] **Screenshot tested** (if graphics used)
