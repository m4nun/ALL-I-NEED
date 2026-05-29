# Askhere Device Mockup Template

A clean, minimalist landing page mockup with laptop and phone device frames, styled after modern SaaS presentation sites (LunitoDesign aesthetic).

---

## Output Specs

| Property | Value |
|----------|-------|
| **Dimensions** | 1800×1200 px |
| **Format** | PNG (still image) |
| **Background** | Warm cream `#F2EFE9` |
| **Font** | Inter / Helvetica Neue / system sans-serif |

---

## Layout Structure

```
+----------------------------------------------------------+
|  [Logo + Tagline]                    [Home] [About] [Contact]  |
+----------------------------------------------------------+
|                                                          |
|  ASKHERE FOR CLASSROOMS                                  |
|                                                          |
|  Turn your syllabus into a 24/7 student Q&A assistant.   |     +---------------------------+
|                                                          |     | Laptop Frame              |
|  Upload your syllabus, readings, and notes. Share one    |     | +---------------------+   |
|  link. Let students get instant answers from your        |     | | Browser Chrome      |   |
|  course materials — no student accounts required.        |     | | Askhere Header      |   |
|                                                          |     | | Hero + Chat Widget  |   |
|  [ Get Started ]                                         |     | +---------------------+   |
|                                                          |     +---------------------------+
|                                                          |          +-----------+
|                                                          |          | Phone     |
|                                                          |          | Frame     |
|                                                          |          +-----------+
+----------------------------------------------------------+
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#F2EFE9` | Page background |
| `bgWhite` | `#FFFFFF` | Device screens, cards |
| `textDark` | `#1A1A1A` | Headings, primary text |
| `textGray` | `#6B6B6B` | Body text, descriptions |
| `textLight` | `#9B9B9B` | Labels, captions, nav hint |
| `border` | `#E8E4DE` | Dividers, card borders |
| `buttonBorder` | `#1A1A1A` | CTA button outline |
| `chatBg` | `#F7F7F7` | Chat widget background |
| `bubbleUser` | `#1A1A1A` | User/assistant message (dark) |
| `bubbleAssistant` | `#FFFFFF` | Student message (light) |

---

## Typography

| Element | Size | Weight | Color | Extras |
|---------|------|--------|-------|--------|
| Logo | 24px | 600 | `textDark` | Letter-spacing: -0.5px |
| Tagline (under logo) | 11px | 400 | `textLight` | Uppercase, letter-spacing: 1.5px |
| Section label | 12px | 600 | `textLight` | Uppercase, letter-spacing: 2px |
| H1 Hero | 46px | 500 | `textDark` | Line-height: 1.15, letter-spacing: -1px |
| Body text | 16px | 400 | `textGray` | Line-height: 1.6 |
| CTA Button | 14px | 500 | `textDark` | Border: 1.5px solid `buttonBorder`, padding: 14px 36px |
| Nav links | 15px | 500 | `textDark` | — |

---

## Device Frames

### Laptop

| Property | Value |
|----------|-------|
| Screen width | 740px |
| Screen height | 500px |
| Bezel | 10px (dark `#1A1A1A`) |
| Border radius | 14px screen / 18px outer |
| Base/hinge | Cream gradient bar below |
| Shadow | `0 30px 60px rgba(0,0,0,0.12)` |

**Inside the laptop screen:**
1. Browser chrome (3 colored dots + URL)
2. Askhere app header (logo left, Account/Dashboard buttons right)
3. Hero section with tagline, heading, description
4. Chat preview widget with mock conversation bubbles

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
2. Chat header (avatar + "Physics 101" + "Ready to answer")
3. Message bubbles (assistant white, user dark)
4. Input bar at bottom

---

## Component Checklist

- [ ] `Navbar` — Logo+tagline left, nav links right, absolute positioned
- [ ] `LaptopMockup` — Frame + hinge + screen content
- [ ] `PhoneMockup` — Frame + notch + screen content
- [ ] `LaptopScreen` — Browser chrome + app UI + chat widget
- [ ] `PhoneScreen` — Chat interface with messages
- [ ] Left content panel — Tagline, H1, body, CTA button
- [ ] Devices positioned at `x: 660, y: 160` (laptop) and `x: 1320, y: 420` (phone)

---

## Remotion Code Pattern

```tsx
import { Still, AbsoluteFill } from "remotion";

const AskhereMockup: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#F2EFE9", fontFamily: "'Inter', sans-serif" }}>
    <Navbar />
    {/* Left text content */}
    <div style={{ position: "absolute", left: 100, top: 240, width: 480 }}>
      <span>ASKHERE FOR CLASSROOMS</span>
      <h1>Turn your syllabus into a 24/7 student Q&A assistant.</h1>
      <p>Upload your syllabus...</p>
      <button>Get Started</button>
    </div>
    {/* Device frames */}
    <LaptopMockup x={660} y={160} />
    <PhoneMockup x={1320} y={420} />
  </AbsoluteFill>
);

export const RemotionRoot = () => (
  <Still id="AskhereMockup" component={AskhereMockup} width={1800} height={1200} />
);
```

---

## Assets Needed

None — all UI is drawn with CSS/Divs. If using real screenshots instead of CSS mockups, place images in `public/` and reference with `staticFile()`.

---

## Render Command

```bash
npx remotion still AskhereMockup out/askhere-mockup.png --frame=0
```
