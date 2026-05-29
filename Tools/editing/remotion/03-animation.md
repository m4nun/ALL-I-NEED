# 03 - Animation

Animation in Remotion works by **changing properties over time**. Always drive animations using `useCurrentFrame()` — CSS transitions/animations will cause flickering during rendering.

## Fade In (Manual)

```tsx
import { AbsoluteFill, useCurrentFrame } from "remotion";

export const FadeIn = () => {
  const frame = useCurrentFrame();
  const opacity = Math.min(1, frame / 60);

  return (
    <AbsoluteFill>
      <div style={{ opacity: opacity }}>Hello World!</div>
    </AbsoluteFill>
  );
};
```

## `interpolate()`

Maps a range of values to another range with a concise syntax.

```tsx
import { interpolate, useCurrentFrame } from 'remotion';

const frame = useCurrentFrame();

// Fade in over 60 frames
const opacity = interpolate(frame, [0, 60], [0, 1], {
  extrapolateRight: "clamp",
});
```

**Fade in and out:**
```tsx
const { durationInFrames } = useVideoConfig();
const opacity = interpolate(
  frame,
  [0, 20, durationInFrames - 20, durationInFrames],
  [0, 1, 1, 0]
);
```

### API

```ts
interpolate(
  input: number,
  inputRange: number[],
  outputRange: number[],
  options?: InterpolateOptions
): number
```

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `extrapolateLeft` | `"extend"` | Behavior when input is below inputRange: `extend`, `clamp`, `wrap`, `identity` |
| `extrapolateRight` | `"extend"` | Behavior when input is above inputRange |
| `easing` | `(x) => x` | Single easing function, or array of per-segment easing functions (v4.0.462+) |

### Interpolate a Spring

```tsx
const driver = spring({ frame, fps });
const marginLeft = interpolate(driver, [0, 1], [0, 200]);
```

## `spring()`

Physics-based spring animation primitive.

```tsx
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const frame = useCurrentFrame();
const { fps } = useVideoConfig();

const value = spring({
  frame,
  fps,
  config: { stiffness: 100 },
});
```

### Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `frame` | (required) | Current time value |
| `fps` | (required) | Frames per second |
| `from` | `0` | Initial value |
| `to` | `1` | End value |
| `reverse` | `false` | Render animation in reverse |
| `config.mass` | `1` | Weight of the spring |
| `config.damping` | `10` | Deceleration |
| `config.stiffness` | `100` | Spring stiffness (bounciness) |
| `config.overshootClamping` | `false` | Prevent overshooting `to` |
| `durationInFrames` | — | Stretch to exact duration (v3.0.27+) |
| `durationRestThreshold` | — | Precision for duration calculation (v3.0.27+) |
| `delay` | — | Frames to delay before starting (v3.3.90+) |

### Order of Operations

1. `durationInFrames` — stretch animation
2. `reverse` — reverse if true
3. `delay` — delay start

## Easing

```tsx
import { Easing, interpolate } from "remotion";

interpolate(frame, [0, 100], [0, 1], {
  easing: Easing.bezier(0.8, 0.22, 0.96, 0.65),
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
});
```

### Predefined Animations

- `Easing.back(s)` — Goes slightly back before forward
- `Easing.bounce` — Bouncing effect
- `Easing.ease` — Basic inertial animation
- `Easing.elastic(bounciness)` — Spring oscillation (default bounciness: 1)

### Standard Functions

- `Easing.linear` — f(t) = t
- `Easing.quad` — f(t) = t^2
- `Easing.cubic` — f(t) = t^3
- `Easing.poly(n)` — f(t) = t^n
- `Easing.sin` — Sinusoidal
- `Easing.circle` — Circular
- `Easing.exp` — Exponential
- `Easing.bezier(x1, y1, x2, y2)` — Cubic bezier

### Direction Modifiers

- `Easing.in(easing)` — Runs easing forwards
- `Easing.out(easing)` — Runs easing backwards
- `Easing.inOut(easing)` — Symmetrical (forward then backward)

## Transforms

The 5 basic transformations:

| Transform | CSS Property | Example |
|-----------|-------------|---------|
| **Opacity** | `opacity` | `opacity: 0.5` |
| **Scale** | `scale` | `scale: 2` |
| **Skew** | `transform` | `transform: "skew(20deg)"` |
| **Translate** | `transform` | `transform: "translateX(100px)"` |
| **Rotate** | `transform` | `transform: "rotate(45deg)"` |

Multiple transforms:
```tsx
transform: `translateX(100px) scale(2)`
```

### Using `makeTransform()` Helper

From `@remotion/animation-utils`:

```tsx
import { makeTransform, rotate, translate } from '@remotion/animation-utils';

const transform = translate(50, 50);
// => "translate(50px, 50px)"

const multiTransform = makeTransform([rotate(45), translate(50, 50)]);
// => "rotate(45deg) translate(50px, 50px)"
```

## Important: Always use `useCurrentFrame()`

Never use CSS transitions or CSS animations for frame-driven animations. Remotion renders frame by frame and CSS animations will not synchronize properly, causing flickering issues.
