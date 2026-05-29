# 02 - Core Concepts

## The Fundamentals

Remotion gives you a **frame number** and a **blank canvas**. You render anything using React. If you change content every frame, you get animation.

```tsx
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const MyComposition = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
        backgroundColor: "white",
      }}
    >
      The current frame is {frame}.
    </AbsoluteFill>
  );
};
```

## Video Properties

Every composition has 4 properties:
- **width** — in pixels
- **height** — in pixels
- **durationInFrames** — total number of frames
- **fps** — frames per second

Access them with `useVideoConfig()`:

```tsx
import { AbsoluteFill, useVideoConfig } from 'remotion';

export const MyComposition = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();

  return (
    <AbsoluteFill>
      This {width}x{height}px video is {durationInFrames / fps} seconds long.
    </AbsoluteFill>
  );
};
```

Note: The first frame is `0`, the last frame is `durationInFrames - 1`.

## Compositions

A **Composition** is the combination of a React component + video metadata. Register compositions in `src/Root.tsx`:

```tsx
import { Composition } from 'remotion';
import { MyComposition } from './MyComposition';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MyComposition"
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      component={MyComposition}
    />
  );
};
```

You can register multiple compositions:
```tsx
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="Comp1" ... component={Comp1} />
      <Composition id="Comp2" ... component={Comp2} />
    </>
  );
};
```

## Key Hooks

### `useCurrentFrame()`

Returns the current frame number (0-indexed). Inside a `<Sequence>`, it returns the frame relative to when the Sequence starts.

```tsx
import { useCurrentFrame } from 'remotion';

const Component = () => {
  const frame = useCurrentFrame(); // e.g., 25
  return <div>{frame}</div>;
};
```

**Getting the absolute frame inside a Sequence**: Pass `useCurrentFrame()` from the top-level component down as a prop.

### `useVideoConfig()`

Returns an object with video metadata:

```tsx
const {
  width,            // Composition width in pixels
  height,           // Composition height in pixels
  fps,              // Frames per second
  durationInFrames, // Total frames
  id,               // Composition ID
  defaultProps,     // Default props defined in <Composition>
  props,            // Resolved props (v4.0+)
  defaultCodec,     // Default codec (v4.0.54+)
} = useVideoConfig();
```

## Root Registration

```tsx
// src/index.ts
import { registerRoot } from 'remotion';
import { RemotionRoot } from './Root';

registerRoot(RemotionRoot);
```

## registerRoot()

Registers the root component of your Remotion project. Must be called in the entry point file.

```tsx
import { registerRoot } from 'remotion';
import { RemotionRoot } from './Root';

registerRoot(RemotionRoot);
```
