# Askhere Workflow Diagram Template

An architectural grid-style workflow diagram showing how Askhere works end-to-end: from teacher uploading materials to student receiving sourced answers.

---

## Output Specs

| Property | Value |
|----------|-------|
| **Dimensions** | 1200×800 px |
| **Format** | PNG (still image) |
| **Background** | Cream `#FAF8F3` |
| **Grid** | 60px cells, `#EBE7DE` lines |
| **Font** | Inter / Helvetica Neue / system sans-serif |

---

## Layout Structure

```
+----------------------------------------------------------+
|              Askhere Workflow                              |
|         From syllabus upload to sourced student answers   |
+----------------------------------------------------------+
|  +----------------------------------------------------+  |
|  | [TEACHER]                                           |  |
|  |                                                     |  |
|  | [Teacher] → [Create Class] → [Upload Materials]     |  |
|  |                              ↓                      |  |
|  |                         [Askhere AI] (orange)       |  |
|  |                              ↓                      |  |
|  |                         [Embed & Index] → [Share Link]|  |
|  |                                                     |  |
|  | [STUDENT]                                           |  |
|  |                                                     |  |
|  | [Student] ← [Answer + Source] ← [Vector Search]     |  |
|  |           ← [Ask Question] ← [Open Link]            |  |
|  |                      ↑                              |  |
|  |                      | (dashed return from index)    |  |
|  +----------------------------------------------------+  |
+----------------------------------------------------------+
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#FAF8F3` | Page background |
| `grid` | `#EBE7DE` | Grid lines |
| `black` | `#1A1A1A` | Start/end actor nodes (Teacher, Student) |
| `gray` | `#5C5C5C` | Process nodes |
| `grayLight` | `#8A8A8A` | Labels, arrows, captions |
| `orange` | `#E06C00` | Central system node (Askhere AI) |
| `white` | `#FFFFFF` | Text on dark nodes |
| `border` | `#D5D0C5` | Dashed container border |

---

## Node Types

### Black Node (Actor)
- **Background:** `black` (`#1A1A1A`)
- **Size:** 120×100px
- **Border radius:** 14px
- **Content:** Icon (28px, white) + Label (12px, white, centered)
- **Shadow:** `0 8px 20px rgba(0,0,0,0.08)`
- **Used for:** Teacher, Student

### Gray Node (Process)
- **Background:** `gray` (`#5C5C5C`)
- **Size:** 120–140×100px
- **Border radius:** 14px
- **Content:** Icon (28px, white) + Label (12px, white, centered)
- **Shadow:** `0 8px 20px rgba(0,0,0,0.08)`
- **Used for:** Create Class, Upload Materials, Embed & Index, Share Link, Open Link, Ask Question, Vector Search, Answer + Source

### Orange Node (System)
- **Background:** `orange` (`#E06C00`)
- **Size:** 140×120px
- **Border radius:** 14px
- **Content:** Icon (32px, white) + Label (12px, white, centered, bold)
- **Shadow:** `0 12px 30px rgba(224,108,0,0.25)`
- **Used for:** Askhere AI

---

## Arrow Styles

| Type | Stroke | Color | Usage |
|------|--------|-------|-------|
| Solid flow | 2px solid | `grayLight` | Main process direction |
| Dashed data | 2px dashed | `grayLight` | Data/index connections |
| Dashed return | 2px dashed | `orange` | Vector DB return path |

**Arrowheads:** Small filled triangle (8×6px) at end of path.

---

## Flow Coordinates (Top-Left Anchored)

### Teacher Row (y ≈ 200–250)
| Node | x | y | w | h |
|------|---|---|---|---|
| Teacher | 100 | 200 | 120 | 100 |
| Create Class | 300 | 200 | 120 | 100 |
| Upload Materials | 500 | 200 | 140 | 100 |
| Askhere AI | 720 | 190 | 140 | 120 |
| Embed & Index | 720 | 380 | 140 | 100 |
| Share Link | 940 | 380 | 140 | 100 |

### Student Row (y ≈ 580–630)
| Node | x | y | w | h |
|------|---|---|---|---|
| Open Link | 940 | 580 | 140 | 100 |
| Ask Question | 720 | 580 | 140 | 100 |
| Vector Search | 500 | 580 | 140 | 100 |
| Answer + Source | 300 | 580 | 120 | 100 |
| Student | 100 | 580 | 120 | 100 |

---

## SVG Curved Arrows

Use SVG `<path>` with `marker-end="url(#arrowhead)"` for all connections.

**Example arrow paths:**
```svg
<!-- Teacher → Create Class -->
<path d="M 220 250 L 290 250" />

<!-- Share Link → Open Link (dashed vertical) -->
<path d="M 1010 480 L 1010 580" stroke-dasharray="6 4" />

<!-- AI → Vector Search (dashed return via elbow) -->
<path d="M 790 480 L 790 520 L 570 520 L 570 580" stroke-dasharray="6 4" stroke="#E06C00" />
```

---

## Section Labels

Positioned at left edge, uppercase, letter-spacing 2px:

| Label | Position | Color |
|-------|----------|-------|
| "TEACHER" | `left: 100, top: 160` | `grayLight` |
| "STUDENT" | `left: 100, top: 540` | `grayLight` |

---

## Dashed Container

Rounded rectangle around entire flow:
- Position: `left: 70, top: 140`
- Size: `1060×580`
- Border: `2px dashed #D5D0C5`
- Border radius: `24px`

---

## Title Block

Centered at top:
- **H1:** "Askhere Workflow" — 32px, weight 500, color `black`
- **Subtitle:** "From syllabus upload to sourced student answers" — 14px, color `grayLight`

---

## Component Checklist

- [ ] `Node` component — accepts x, y, w, h, label, type, icon
- [ ] `CurvedArrow` SVG component — accepts path `d`, dashed flag, color
- [ ] Grid background — CSS `linear-gradient` pattern, 60px grid
- [ ] Title block — centered H1 + subtitle
- [ ] Section labels — "TEACHER" and "STUDENT" in `grayLight`
- [ ] Dashed container border — rounded rectangle
- [ ] All 10 nodes positioned correctly
- [ ] All arrows connecting nodes with proper arrowheads

---

## Icons Used

| Icon | SVG Source | Nodes |
|------|------------|-------|
| User/Student | `<circle>` + `<path>` (person silhouette) | Teacher, Student |
| Plus | Two crossing lines | Create Class |
| Upload | Arrow up into tray | Upload Materials |
| Brain | Two symmetrical lobes | Askhere AI |
| Link | Two chain links | Share Link |
| Chat | Speech bubble | Ask Question |
| Search | Magnifying glass | Vector Search |
| File Check | Document with checkmark | Embed & Index, Answer + Source |

All icons: 20–32px, stroke white, stroke-width 2, no fill.

---

## Remotion Code Pattern

```tsx
import { Still, AbsoluteFill } from "remotion";
import { AskhereWorkflow } from "./Workflow";

export const RemotionRoot = () => (
  <Still
    id="AskhereWorkflow"
    component={AskhereWorkflow}
    width={1200}
    height={800}
  />
);
```

---

## Render Command

```bash
npx remotion still AskhereWorkflow out/askhere-workflow.png --frame=0
```

---

## Variations

- **Color swap:** Change `orange` to brand color for other products
- **Add nodes:** Insert additional process steps (e.g., "Rate Limit Check", "Billing Verify")
- **Animate:** Convert to `<Composition>` with nodes appearing sequentially via `<Sequence>`
- **Vertical layout:** Rotate 90° for mobile/portrait presentations
