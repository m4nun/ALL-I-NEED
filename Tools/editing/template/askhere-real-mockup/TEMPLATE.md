# Askhere Real Screenshot Mockup Template

A device mockup presentation showing **real screenshots** of the Askhere website inside laptop and phone frames. Best for showcasing actual product UI rather than CSS-drawn mockups.

---

## Output Specs

| Property | Value |
|----------|-------|
| **Dimensions** | 1280×1080 px |
| **Format** | PNG (still image) |
| **Background** | White `#FFFFFF` |
| **Style** | Wireframe blueprint with gray tones |

---

## Layout Structure

```
+----------------------------------------------------------------+
|                                                                |
|   [Left Panel: Real Landing Page Screenshot]                   |
|   +------------------------+    [Right Top: Dashboard]         |
|   |                        |    +------------------+           |
|   |  askhere.fun           |    | Askhere | Account Dashboard|  |
|   |  (full page screenshot)|    | Your classes               |  |
|   |                        |    | Physics 101 | History      |  |
|   |                        |    +------------------+           |
|   |                        |                                  |
|   |                        |    [Right Bottom: Chat]          |
|   |                        |    +------------------+           |
|   |                        |    | Physics 101 (Ready)        |  |
|   |                        |    | Assistant bubble           |  |
|   |                        |    | User bubble                |  |
|   |                        |    | Assistant bubble           |  |
|   |                        |    | [Input bar]                |  |
|   +------------------------+    +------------------+           |
|                                                                |
+----------------------------------------------------------------+
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#6B7B8E` | Primary UI color |
| `primaryDark` | `#5A6A7D` | Dark accents |
| `primaryLight` | `#8A9AAF` | Light accents |
| `bgWhite` | `#FFFFFF` | Background |
| `bgLight` | `#F0F2F5` | Light gray backgrounds |
| `bgGrey` | `#E8EBF0` | Gray fills, placeholders |
| `textDark` | `#4A5568` | Dark text |
| `textLight` | `#A0AEC0` | Light/caption text |
| `circleBg` | `#E2E8F0` | Decorative circles |
| `border` | `#CBD5E0` | Borders |

---

## Left Panel — Landing Page Screenshot

| Property | Value |
|----------|-------|
| Position | `left: 40, top: 40` |
| Size | `640×1000` |
| Border | 3px solid `primary` |
| Border radius | 16px |
| Shadow | `0 12px 40px rgba(0,0,0,0.1)` |
| Content | `<Img src={staticFile("landing-page.png")} />` |

**Inside:** Browser chrome (3 dots + "askhere.fun" label) + full-page screenshot with `object-fit: cover`, `object-position: top center`.

---

## Right Top — Dashboard Wireframe

| Property | Value |
|----------|-------|
| Position | `left: 720, top: 40` |
| Size | `520×340` |

**Contents:**
- Header: Askhere logo (icon + text) | Account button | Dashboard button
- "Your classes" heading + "3 active of 3 total" subtitle
- 2 class cards in 2-column grid:
  - Icon + class name + green status dot
  - 2 placeholder bars (metadata)
  - 2 action buttons (outline + filled)
- Decorative circle (top-right, `circleBg`, opacity 0.4)

---

## Right Bottom — Chat Wireframe

| Property | Value |
|----------|-------|
| Position | `left: 720, top: 420` |
| Size | `520×620` |

**Contents:**
- Chat header: Avatar circle + "Physics 101" + "Ready to answer" (green)
- Messages area (light gray background):
  - Assistant bubble (white, border, multi-line with bullet list)
  - User bubble (primaryLight background)
  - Assistant bubble (white, border)
- Input bar: Light gray rounded input + dark send button
- Decorative circle (bottom-right, opacity 0.35)

---

## Decorative Elements

- Circle 1: `right: 60, top: 80` — 120×120px, `circleBg`, opacity 0.5
- Circle 2: `right: 100, bottom: 80` — 80×80px, `circleBg`, opacity 0.4

---

## Component Checklist

- [ ] `PhoneMockup` — Tilted phone frame with wireframe chat bubbles (if needed as overlay)
- [ ] Left panel — Browser frame with real screenshot
- [ ] Right top — Dashboard wireframe with class cards
- [ ] Right bottom — Chat wireframe with messages
- [ ] Decorative circles for visual balance

---

## Assets Needed

Place these in `public/` folder:

| File | Description |
|------|-------------|
| `landing-page.png` | Full-page screenshot of askhere.fun landing page |
| `dashboard.png` | (Optional) Real dashboard screenshot |
| `chat.png` | (Optional) Real chat interface screenshot |

Reference in code:
```tsx
<Img src={staticFile("landing-page.png")} style={{ objectFit: "cover" }} />
```

---

## Remotion Code Pattern

```tsx
import { Still, AbsoluteFill, Img, staticFile } from "remotion";

export const RemotionRoot = () => (
  <Still
    id="AskHereMockup"
    component={AskHereMockupReal}
    width={1280}
    height={1080}
  />
);
```

---

## Render Command

```bash
npx remotion still AskHereMockup out/askhere-mockup-real.png --frame=0
```

---

## Variations

- Replace wireframe right panels with real screenshots from `dashboard.png` and `chat.png`
- Add more device frames (tablet, watch) for multi-device showcases
- Change color scheme by updating the `COLORS` object
