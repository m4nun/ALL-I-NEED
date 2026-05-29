# MN Gallery Real Screenshot Mockup Template

A spacious device mockup presentation showing **real screenshots** of the mngallery website inside a laptop frame and phone frame. Best for showcasing actual product UI.

---

## Output Specs

| Property | Value |
|----------|-------|
| **Dimensions** | 1280×1080 px |
| **Format** | PNG (still image) |
| **Background** | Light warm `#F8F7F5` with dot grid |
| **Style** | Clean, minimal with subtle dot pattern |

---

## Layout Structure

```
+-------------------------------------------------------------+
|                                                             |
|  REAL SCREENSHOTS                                           |
|  MN Gallery                                                 |
|  Description text...                                        |
|                                                             |
|  +------------------------------------------+  +---------+  |
|  | Laptop Frame                             |  | Phone   |  |
|  | +--------------------------------------+ |  | Frame   |  |
|  | | Browser Chrome (dots + URL)          | |  |         |  |
|  | |                                      | |  | landing |  |
|  | | Real landing-page.png screenshot     | |  | viewport|  |
|  | | (full page, object-fit: cover)       | |  | .png    |  |
|  | |                                      | |  |         |  |
|  | +--------------------------------------+ |  |         |  |
|  | Hinge bar                                |  |         |  |
|  +------------------------------------------+  +---------+  |
|                                                             |
|  [Vite+React] [Tailwind CSS] [Supabase] [Vercel]            |
|                                                             |
+-------------------------------------------------------------+
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#F8F7F5` | Page background |
| `dotGrid` | `#D8D5CF` | Dot pattern dots (1px) |
| `frameOuter` | `#111111` | Device bezel/frame |
| `frameHinge` | `#D1CFC9` | Laptop base bar |
| `textDark` | `#111111` | Headings, primary text |
| `textGray` | `#555555` | Body text |
| `textLight` | `#8A8A8A` | Labels, section headers |
| `border` | `#E5E2DC` | Border on tech badges |

---

## Device Frames

### Laptop (left)

| Property | Value |
|----------|-------|
| Position | `left: 100, top: 140` |
| Screen width | 640px |
| Screen height | 490px |
| Bezel | 10px (dark `#111`) |
| Border radius | Screen: 10px, Outer: 16px |
| Shadow | `0 24px 50px rgba(0,0,0,0.12)` |
| Browser chrome | 32px height, 3 dots + URL |

**Inside:** `<Img src={staticFile("landing-page.png")} />` with `object-fit: cover; object-position: top center`

### Phone (right)

| Property | Value |
|----------|-------|
| Position | `left: 820, top: 380` |
| Screen width | 202px |
| Screen height | 422px |
| Bezel | 9px (dark `#111`) |
| Outer radius | 32px |
| Inner radius | 22px |
| Notch | 72×18px pill |

**Inside:** `<Img src={staticFile("landing-viewport.png")} />` with `object-fit: cover; object-position: top center`

---

## Left Text Panel

| Element | Content | Position |
|---------|---------|----------|
| Section label | "REAL SCREENSHOTS" (uppercase, letter-spacing 2px) | `left: 100, top: 38` |
| H1 | "MN Gallery" (Playfair Display, 36px, weight 400) | Below label |
| Description | Full description text (14px, max-width: 340px) | Below H1 |

---

## Bottom Tech Badges

Position: `left: 100, bottom: 50`

| Badge | Appearance |
|-------|------------|
| Vite + React | 10px, pill shape, border |
| Tailwind CSS | Same style |
| Supabase | Same style |
| Vercel | Same style |

---

## Dot Grid Background

```css
background-image: radial-gradient(#D8D5CF 1px, transparent 1px);
background-size: 28px 28px;
opacity: 0.45;
```

---

## Component Checklist

- [ ] Dot grid background layer
- [ ] Left text panel (section label + H1 + description)
- [ ] Laptop frame with browser chrome + real screenshot
- [ ] Phone frame with notch + real screenshot
- [ ] Bottom tech badges
- [ ] 20px outer frame border (same color as bg)

---

## Assets Needed

Place these in `public/` folder:

| File | Description |
|------|-------------|
| `landing-page.png` | Full-page screenshot of mngallery landing page (724×2430) |
| `landing-viewport.png` | Viewport-only screenshot |

Reference in code:
```tsx
<Img src={staticFile("landing-page.png")} style={{ objectFit: "cover" }} />
```

---

## Remotion Code Pattern

```tsx
import { Still, AbsoluteFill, Img, staticFile } from "remotion";

const MnGalleryRealMockup: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#F8F7F5" }}>
    <div style={{ /* dot grid background */ }} />
    {/* Left text panel */}
    {/* Laptop frame with Img */}
    {/* Phone frame with Img */}
    {/* Bottom tech badges */}
  </AbsoluteFill>
);

export const RemotionRoot = () => (
  <Still id="MnGalleryRealMockup" component={MnGalleryRealMockup} width={1280} height={1080} />
);
```

---

## Render Command

```bash
npx remotion still MnGalleryRealMockup out/mngallery-mockup-real.png --frame=0
```

---

## Variations

- Use `landing-page.png` for a large centered single-frame showcase
- Add more device frames (tablet) for a multi-device layout
- Replace phone screenshot with `about-page.png` for variety
- Adjust `objectPosition` to focus on different page sections
