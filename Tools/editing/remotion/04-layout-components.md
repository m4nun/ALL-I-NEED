# 04 - Layout Components

## `<AbsoluteFill>`

A helper component — an absolutely positioned `<div>` with flexbox column layout:

```tsx
// Equivalent styles:
{
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  width: '100%', height: '100%',
  display: 'flex',
  flexDirection: 'column',
}
```

Useful for layering content:

```tsx
<AbsoluteFill>
  <AbsoluteFill>
    <OffthreadVideo src="https://example.com/video.mp4" />
  </AbsoluteFill>
  <AbsoluteFill>
    <h1>This text is on top!</h1>
  </AbsoluteFill>
</AbsoluteFill>
```

Supports React refs (`useRef<HTMLDivElement>`). TailwindCSS class detection from v4.0.249 — conflicting classes automatically disable inline styles.

## `<Sequence>`

Time-shifts the display of components in the video.

```tsx
import { Sequence } from 'remotion';

const MyTrailer = () => {
  return (
    <>
      <Sequence durationInFrames={30}>
        <Intro />
      </Sequence>
      <Sequence from={30} durationInFrames={30}>
        <Clip />
      </Sequence>
      <Sequence from={60}>
        <Outro />
      </Sequence>
    </>
  );
};
```

- `<Intro>` shows from frame 0–29
- `<Clip>` shows from frame 30–59
- `<Outro>` shows from frame 60 to end

Inside a Sequence, `useCurrentFrame()` returns the shifted time. Sequences cascade when nested.

### Props

| Prop | Default | Description |
|------|---------|-------------|
| `from?` | `0` | Frame at which children assume the timeline starts |
| `durationInFrames?` | `Infinity` | How long the sequence displays; children unmount outside range |
| `height?` (v4.0.80+) | — | Override height for children's `useVideoConfig()` |
| `width?` (v4.0.80+) | — | Override width for children's `useVideoConfig()` |
| `name?` | — | Label shown in Studio timeline |
| `layout?` | `"absolute-fill"` | `"absolute-fill"` or `"none"` |
| `style?` | — | CSS styles for the container |
| `className?` | — | Class name for the container |
| `premountFor?` (v4.0.140+) | `0` (v5: `fps`) | Premount frames before start |
| `postmountFor?` (v4.0.340+) | `0` | Keep mounted after end |
| `styleWhilePremounted?` (v4.0.252+) | — | Styles during premount |
| `showInTimeline?` (v4.0.110+) | `true` | Show track in Studio timeline |
| `hidden?` (v4.0.462+) | `false` | Hide sequence and children |

### Tricks

- **Delay**: `<Sequence from={30}>` delays by 30 frames
- **Trim end**: `<Sequence durationInFrames={45}>` unmounts after 45 frames
- **Trim start**: `<Sequence from={-15}>` starts the animation already 15 frames in
- **Trim and delay**: Nest sequences — inner with negative `from` for trimming, outer with positive `from` for delay

## `<Loop>`

Repeats content for a given duration and number of times.

```tsx
import { Loop } from 'remotion';

<Loop durationInFrames={50} times={2}>
  <BlueSquare />
</Loop>
```

### Props

| Prop | Default | Description |
|------|---------|-------------|
| `durationInFrames` | (required) | Duration of one iteration |
| `times?` | `Infinity` | How many times to loop |
| `layout?` | `"absolute-fill"` | `"absolute-fill"` or `"none"` |
| `style?` | — | CSS styles for container |

### `Loop.useLoop()` (v4.0.142+)

Child components can get loop info:

```tsx
const loop = Loop.useLoop();
if (loop) {
  console.log(loop.durationInFrames); // duration per iteration
  console.log(loop.iteration);        // current iteration (0-indexed)
}
```

## `<Series>`

Stitches scenes that play sequentially.

```tsx
import { Series } from 'remotion';

<Series>
  <Series.Sequence durationInFrames={40}>
    <Square color={'#3498db'} />
  </Series.Sequence>
  <Series.Sequence durationInFrames={20}>
    <Square color={'#5ff332'} />
  </Series.Sequence>
  <Series.Sequence durationInFrames={70}>
    <Square color={'#fdc321'} />
  </Series.Sequence>
</Series>
```

Since v4.0.443, `<Series>` is a `<Sequence>` under the hood (layout defaults to `"none"`).

### `<Series.Sequence>` Props

| Prop | Default | Description |
|------|---------|-------------|
| `durationInFrames?` | — | Display duration (only last can be `Infinity`) |
| `offset?` | — | Positive: delay; Negative: overlap previous |
| `layout?` | `"absolute-fill"` | `"absolute-fill"` or `"none"` |
| `style?` | — | CSS styles |
| `className?` | — | Class name |
| `premountFor?` | — | Premount frames |
| `ref?` | — | React ref (`HTMLDivElement`) |

## `<Folder>`

Organizes compositions in the Studio sidebar:

```tsx
import { Composition, Folder } from 'remotion';

<Folder name="Visuals">
  <Composition id="CompInFolder" ... />
</Folder>
<Composition id="CompOutsideFolder" ... />
```

## `<Composition>`

Registers a renderable video. See [02-core-concepts.md](./02-core-concepts.md) for details.

### Props

| Prop | Description |
|------|-------------|
| `id` | Unique identifier (letters, numbers, `-`) |
| `fps` | Frames per second |
| `durationInFrames` | Total frame count |
| `height` | Height in pixels |
| `width` | Width in pixels |
| `component` | React component (direct) |
| `lazyComponent` | Function returning dynamic import |
| `defaultProps?` | Default props (JSON-serializable) |
| `calculateMetadata?` | Dynamic metadata calculation |
| `schema?` | Zod schema for visual editing |

## `<Still>`

Defines a still image (no timeline, no duration/FPS). Used for thumbnails and static image rendering.

```tsx
import { Still } from 'remotion';

<Still
  id="my-thumbnail"
  width={1920}
  height={1080}
  component={MyThumbnail}
/>
```
