# MN Gallery Device Mockup Template

A clean, minimalist creative portfolio landing page mockup with laptop and phone device frames, built in the style of mngallery's artistic aesthetic.

---

## Output Specs

| Property | Value |
|----------|-------|
| **Dimensions** | 1800×1200 px |
| **Format** | PNG (still image) |
| **Background** | Warm off-white `#F5F3EE` |
| **Font** | Inter (sans-serif) + Playfair Display (serif for artist name) |

---

## Layout Structure

```
+-------------------------------------------------------------+
|  [BURAPAT / MN Gallery]           [Work] [About] [Contact]  |
+-------------------------------------------------------------+
|                                                             |
|  CREATIVE PORTFOLIO GALLERY                                 |
|                                                             |
|  Burapat                                     +-----------------------+
|  MANUN                                       | Laptop Frame           |
|                                              | +-------------------+ |
|  A modern gallery website showcasing         | | Browser Chrome    | |
|  creative projects across categories —       | | BURAPAT   ⇄   ☰  | |
|  ME, TODAY?, SHINE!, TO US, and ABOUT.       | |                    | |
|  Built with a minimalist design and          | |    Burapat         | |
|  smooth shuffle interactions.                | |    MANUN           | |
|                                              | |                    | |
|  [ View Gallery ]                            | | [ME][TODAY?][...]  | |
|                                              | | ┌──┐┌──┐┌──┐┌──┐ | |
|                                              | | │  ││  ││  ││  │ | |
|                                              | | │  ││  ││  ││  │ | |
|                                              | | └──┘└──┘└──┘└──┘ | |
|                                              | +-------------------+ |
|                                              +-----------------------+
|                                                          +----------+
|                                                          | Phone    |
|                                                          | Frame    |
|                                                          +----------+
+-------------------------------------------------------------+
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#F5F3EE` | Page background |
| `bgWhite` | `#FFFFFF` | Device screens, card backgrounds |
| `textDark` | `#111111` | Headings, primary text, brand text |
| `textGray` | `#555555` | Body text, descriptions |
| `textLight` | `#8A8A8A` | Labels, captions, secondary text |
| `border` | `#E5E2DC` | Dividers, card borders, pill borders |
| `cardBg` | `#FAFAFA` | Card backgrounds |
| `imagePlaceholder` | `#E8E5DF` | Placeholder image backgrounds |
| `imagePlaceholderDark` | `#D5D1C9` | Placeholder image icons |

---

## Typography

| Element | Size | Weight | Color | Font Family | Extras |
|---------|------|--------|-------|-------------|--------|
| Logo "BURAPAT" (top nav) | 22px | 700 | `textDark` | Inter | Letter-spacing: 5px |
| Logo subtitle "MN Gallery" | 10px | 400 | `textLight` | Inter | Uppercase, letter-spacing: 2px |
| Nav links | 14px | 500 | `textDark` | Inter | — |
| Section label | 11px | 600 | `textLight` | Inter | Uppercase, letter-spacing: 2px |
| H1 "Burapat" | 52px | 400 | `textDark` | Playfair Display | Line-height: 1.1, letter-spacing: -1px |
| Subtitle "MANUN" | 14px | 600 | `textLight` | Inter | Letter-spacing: 4px |
| Body text | 16px | 400 | `textGray` | Inter | Line-height: 1.6 |
| CTA Button | 14px | 500 | `textDark` | Inter | Border: 1.5px solid, padding: 14px 36px |
| Hero name (in laptop) | 36px | 400 | `textDark` | Playfair Display | Centered |
| Hero subtitle (in laptop) | 10px | 600 | `textLight` | Inter | Uppercase, letter-spacing: 3px |
| Category pills (in laptop) | 10px | 500 | — | Inter | Border: 1px, border-radius: 16px |
| Project name (in laptop) | 10px | 600 | `textDark` | Inter | — |
| Project date (in laptop) | 8px | 400 | `textLight` | Inter | — |

---

## Device Frames

### Laptop

| Property | Value |
|----------|-------|
| Screen width | 760px |
| Screen height | 520px |
| Bezel | 10px (dark `#1A1A1A`) |
| Border radius | 14px screen / 18px outer |
| Base/hinge | Two-tier cream gradient bar below |
| Shadow | `0 30px 60px rgba(0,0,0,0.1)` |

**Inside the laptop screen:**
1. Browser chrome (3 colored dots + URL)
2. Top bar: "BURAPAT" logo (left) + shuffle icon (center) + hamburger (right)
3. Hero: "Burapat" (serif, centered) + "MANUN" subtitle
4. Category pills: ME, TODAY?, SHINE!, TO US, ABOUT (first one active)
5. 4-column masonry grid of 8 project cards (image placeholder + name + date)

### Phone

| Property | Value |
|----------|-------|
| Screen width | 200px |
| Screen height | 400px |
| Bezel | 8px (dark `#1A1A1A`) |
| Border radius | 26px screen / 32px outer |
| Notch | 72×18px dark pill at top center |
| Shadow | `0 20px 40px rgba(0,0,0,0.15)` |

**Inside the phone screen:**
1. Status bar notch
2. Header: "BURAPAT" logo (small) + hamburger
3. Hero: "Burapat" (serif) + "MANUN" subtitle
4. Category scroll row: ME, TODAY?, SHINE!, TO US
5. 2-column image grid with 6 project cards
6. Bottom nav: ME, TODAY?, SHINE!, ABOUT

---

## Component Checklist

- [ ] `LaptopScreen` — Browser chrome + mngallery navbar + hero + category pills + masonry grid
- [ ] `PhoneScreen` — Mobile layout with hero + category scroll + image grid + bottom nav
- [ ] `LaptopMockup` — Frame + bezel + hinge + screen content
- [ ] `PhoneMockup` — Frame + notch + screen content
- [ ] `BrowserChrome` — 3 colored dots + URL bar
- [ ] Left content panel — Section label, heading, subtitle, description, CTA button
- [ ] Navbar (top) — "BURAPAT" logo + tagline + nav links
- [ ] Devices positioned at `x: 600, y: 150` (laptop) and `x: 1280, y: 420` (phone)

---

## Remotion Code Pattern

```tsx
import { Still, AbsoluteFill } from "remotion";

const MnGalleryDeviceMockup: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#F5F3EE", fontFamily: "'Inter', sans-serif" }}>
    <Navbar />
    <div style={{ position: "absolute", left: 100, top: 220, width: 420 }}>
      <span>CREATIVE PORTFOLIO GALLERY</span>
      <h1>Burapat</h1>
      <span>MANUN</span>
      <p>Description...</p>
      <button>View Gallery</button>
    </div>
    <LaptopMockup x={600} y={150} />
    <PhoneMockup x={1280} y={420} />
  </AbsoluteFill>
);

export const RemotionRoot = () => (
  <Still id="MnGalleryMockup" component={MnGalleryDeviceMockup} width={1800} height={1200} />
);
```

---

## Assets Needed

None — all UI is drawn with CSS/Divs. If using real screenshots instead of CSS mockups, place images in `public/` and reference with `staticFile()`.

---

## Render Command

```bash
npx remotion still MnGalleryMockup out/mngallery-mockup.png --frame=0
```
