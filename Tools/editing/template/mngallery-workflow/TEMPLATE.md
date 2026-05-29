# MN Gallery Workflow Diagram Template

An architectural grid-style workflow diagram showing how MN Gallery works end-to-end: from visitor landing on the site to browsing categories, shuffling the gallery, viewing projects, and the underlying data/infrastructure layers.

---

## Output Specs

| Property | Value |
|----------|-------|
| **Dimensions** | 1200×800 px |
| **Format** | PNG (still image) |
| **Background** | Warm cream `#F8F6F1` |
| **Grid** | 60px cells, `#EAE6DE` lines |
| **Font** | Inter / Helvetica Neue / system sans-serif |

---

## Layout Structure

```
+----------------------------------------------------------------+
|                    MN Gallery Workflow                          |
|             From visitor to interactive gallery experience      |
+----------------------------------------------------------------+
|  +----------------------------------------------------------+  |
|  | USER JOURNEY                                             |  |
|  |                                                          |  |
|  | [Visitor] → [Browse] → [Shuffle] → [View Project] → [About]|
|  |                ↓                      ↑                   |  |
|  |                | (dashed data)        |                   |  |
|  |                ↓                      |                   |  |
|  | DATA LAYER                                          |     |  |
|  |                                                          |  |
|  |        [Supabase] → [Category Filter]                    |  |
|  |           ↑ (images + metadata)                          |  |
|  |           |                                              |  |
|  | INFRASTRUCTURE                                           |  |
|  |                                                          |  |
|  | [Vite+React] → [Tailwind] → [Vercel] → [Static Site] →   |  |
|  |                                                  → [Visitor]|
|  +----------------------------------------------------------+  |
+----------------------------------------------------------------+
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#F8F6F1` | Page background |
| `grid` | `#EAE6DE` | Grid lines |
| `black` | `#111111` | Start/end actor nodes (Visitor, About) |
| `gray` | `#4A4A4A` | Process/service nodes |
| `grayLight` | `#8A8A8A` | Labels, arrows, captions |
| `white` | `#FFFFFF` | Text on dark nodes |
| `border` | `#D5D0C5` | Dashed container border |

---

## Node Types

### Black Node (Actor)
- **Background:** `#111111`
- **Size:** 120–130×100px
- **Border radius:** 14px
- **Content:** Icon (28px, white) + Label (12px, white, weight 600) + optional subtitle (9px, white 60%)
- **Shadow:** `0 8px 24px rgba(0,0,0,0.08)`
- **Used for:** Visitor, About

### Gray Node (Process/Service)
- **Background:** `#4A4A4A`
- **Size:** 120–150×100–110px
- **Border radius:** 14px
- **Content:** Icon (28px, white) + Label (12px, white, weight 600) + optional subtitle (9px, white 60%)
- **Shadow:** `0 8px 24px rgba(0,0,0,0.08)`
- **Used for:** Browse, Shuffle, View Project, Supabase, Category Filter, Vite+React, Tailwind, Vercel, Static Site

---

## Flow Rows (3 layers)

### User Journey (y ≈ 190–240)

| Node | x | y | w | h | Subtitle |
|------|---|---|---|---|---|
| Visitor | 100 | 190 | 120 | 100 | "Lands on site" |
| Browse | 295 | 190 | 130 | 100 | "ME · TODAY? · SHINE! · TO US · ABOUT" |
| Shuffle | 500 | 185 | 120 | 110 | "Randomize layout" |
| View Project | 695 | 190 | 130 | 100 | "Full-size artwork" |
| About | 900 | 190 | 120 | 100 | "Artist contact" |

### Data Layer (y = 440)

| Node | x | y | w | h | Subtitle |
|------|---|---|---|---|---|
| Supabase | 260 | 440 | 150 | 100 | "Images + metadata" |
| Category Filter | 485 | 440 | 150 | 100 | "ME · TODAY? · SHINE! · TO US · ABOUT" |

### Infrastructure (y = 640)

| Node | x | y | w | h | Subtitle |
|------|---|---|---|---|---|
| Vite + React | 100 | 640 | 140 | 100 | "Frontend build" |
| Tailwind | 315 | 640 | 120 | 100 | "Styling system" |
| Vercel | 510 | 640 | 120 | 100 | "Hosting + CDN" |
| Static Site | 705 | 640 | 140 | 100 | "Fast global delivery" |
| Visitor | 900 | 640 | 120 | 100 | "Any device" |

---

## Arrow Styles

| Type | Stroke | Color | Usage |
|------|--------|-------|-------|
| Solid flow | 2px solid | `grayLight` | Main process direction (→) |
| Dashed vertical | 2px dashed | `border` | Data ↔ Browse connections (↑↓) |
| Dashed horizontal | 2px dashed | `grayLight` | Infrastructure feedback loop |

Arrowheads: Small filled triangle (8×6px) at end of every solid/dashed path.

---

## Section Labels

Positioned at left edge (x: 100), uppercase, letter-spacing 2px:

| Label | y | Color |
|-------|---|-------|
| "USER JOURNEY" | 150 | `grayLight` |
| "DATA LAYER" | 370 | `grayLight` |
| "INFRASTRUCTURE" | 600 | `grayLight` |

---

## Dashed Container

Rounded rectangle around entire flow:
- Position: `left: 70, top: 130`
- Size: `1060×660`
- Border: `2px dashed #D5D0C5`
- Border radius: `24px`

---

## Title Block

Centered at top:
- **H1:** "MN Gallery Workflow" — 32px, weight 500, color `#111111`
- **Subtitle:** "From visitor to interactive gallery experience" — 14px, color `grayLight`

---

## SVG Curved Arrows

Use SVG `<path>` with `marker-end="url(#arrow)"` for all connections.

**Example arrow paths:**
```svg
<!-- Visitor → Browse -->
<path d="M 220 240 L 285 240" />

<!-- Browse → Supabase (dashed down) -->
<path d="M 360 290 L 360 430" stroke-dasharray="6 4" />

<!-- Supabase → Category Filter -->
<path d="M 410 490 L 475 490" />

<!-- Static Site → Visitor (dashed feedback) -->
<path d="M 845 690 L 900 690" stroke-dasharray="6 4" />
```

---

## Icons Used

| Icon | SVG Source | Nodes |
|------|------------|-------|
| User | `<circle>` + `<path>` (person silhouette) | Visitor, About |
| Grid | 4 `<rect>` elements (2×2 grid) | Browse, Category Filter |
| Shuffle | Crossing lines + polyline | Shuffle |
| Eye | `<path>` (eye shape) + `<circle>` (pupil) | View Project |
| Database | `<ellipse>` + `<path>` (cylinder) | Supabase |
| Server | 2 `<rect>` stacks with LED dots | Vercel |
| Globe | `<circle>` + horizontal/vertical lines | Static Site |
| Code | Angle brackets (`< >`) | Vite+React, Tailwind |

All icons: 20–28px, stroke white, stroke-width 2, no fill.

---

## Component Checklist

- [ ] `Node` component — accepts x, y, w, h, label, sub, type, icon
- [ ] `CurvedArrow` SVG component — accepts path `d`, dashed flag, color
- [ ] Grid background — CSS `linear-gradient` pattern, 60px grid
- [ ] Title block — centered H1 + subtitle
- [ ] 3 section labels — "USER JOURNEY", "DATA LAYER", "INFRASTRUCTURE"
- [ ] Dashed container border — rounded rectangle
- [ ] 12 nodes positioned correctly across 3 rows
- [ ] All arrows connecting nodes with proper arrowheads

---

## Remotion Code Pattern

```tsx
import { Still, AbsoluteFill } from "remotion";
import { MnGalleryWorkflow } from "./Workflow";

export const RemotionRoot = () => (
  <Still
    id="MnGalleryWorkflow"
    component={MnGalleryWorkflow}
    width={1200}
    height={800}
  />
);
```

---

## Render Command

```bash
npx remotion still MnGalleryWorkflow out/mngallery-workflow.png --frame=0
```

---

## Variations

- **Animate:** Convert to `<Composition>` with nodes appearing sequentially via `<Sequence>`
- **Dark mode:** Swap `bg` to dark, grid to lighter, nodes to lighter gray
- **Add more infra:** Add Supabase RLS, Edge Functions, git/CICD pipeline
- **Vertical layout:** Rotate 90° for mobile/portrait presentations
