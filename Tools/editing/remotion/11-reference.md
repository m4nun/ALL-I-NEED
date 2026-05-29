# 11 - API Reference

Quick reference of all Remotion APIs.

## Components

### Layout & Structure

| Component | Package | Description |
|-----------|---------|-------------|
| `<Composition>` | `remotion` | Register a renderable video with metadata |
| `<Still>` | `remotion` | Define a still image (no timeline) |
| `<Folder>` | `remotion` | Organize compositions in Studio sidebar |
| `<AbsoluteFill>` | `remotion` | Absolutely positioned full-size flex container |
| `<Sequence>` | `remotion` | Time-shift children with optional clipping |
| `<Series>` | `remotion` | Sequence scenes that play sequentially |
| `<Series.Sequence>` | `remotion` | A scene within a `<Series>` |
| `<Loop>` | `remotion` | Repeat content for N iterations |

### Video

| Component | Package | Description |
|-----------|---------|-------------|
| `<Html5Video>` | `remotion` | HTML5 `<video>` wrapper synchronized with Remotion time |
| `<OffthreadVideo>` | `remotion` | Frame-perfect video via Rust/FFmpeg extraction |
| `<Video>` | `@remotion/media` | WebCodecs-based video (experimental) |

### Audio

| Component | Package | Description |
|-----------|---------|-------------|
| `<Html5Audio>` | `remotion` | HTML5 `<audio>` wrapper |
| `<Audio>` | `@remotion/media` | WebCodecs-based audio (experimental) |

### Images

| Component | Package | Description |
|-----------|---------|-------------|
| `<Img>` | `remotion` | Image component with render-time optimization |

### Player

| Component | Package | Description |
|-----------|---------|-------------|
| `<Player>` | `@remotion/player` | Embeddable video player for React apps |
| `<Thumbnail>` | `@remotion/player` | Still image preview in React apps |

### 3D / Three.js

| Component | Package | Description |
|-----------|---------|-------------|
| `<ThreeCanvas>` | `@remotion/three` | Three.js canvas for 3D rendering |

## Hooks

| Hook | Package | Description |
|------|---------|-------------|
| `useCurrentFrame()` | `remotion` | Current frame number (0-indexed) |
| `useVideoConfig()` | `remotion` | Composition metadata (width, height, fps, duration) |
| `useRemotionEnvironment()` | `remotion` | Check if rendering vs preview |
| `Loop.useLoop()` | `remotion` | Current loop info (v4.0.142+) |

## Animation Functions

| Function | Package | Description |
|----------|---------|-------------|
| `interpolate(input, inputRange, outputRange, options?)` | `remotion` | Map value from one range to another |
| `interpolateColors(input, inputRange, colorRange)` | `remotion` | Interpolate between colors |
| `spring({frame, fps, config?})` | `remotion` | Physics-based spring animation |
| `measureSpring({fps, config?})` | `remotion` | Measure spring duration |

## Easing Module

| Method | Description |
|--------|-------------|
| `Easing.linear` | f(t) = t |
| `Easing.quad` | f(t) = t^2 |
| `Easing.cubic` | f(t) = t^3 |
| `Easing.poly(n)` | f(t) = t^n |
| `Easing.sin` | Sinusoidal |
| `Easing.circle` | Circular |
| `Easing.exp` | Exponential |
| `Easing.ease` | Basic inertial |
| `Easing.elastic(bounciness?)` | Spring oscillation |
| `Easing.back(s?)` | Go back, then forward |
| `Easing.bounce` | Bouncing effect |
| `Easing.bezier(x1, y1, x2, y2)` | Cubic bezier curve |
| `Easing.in(easing)` | Run easing forwards |
| `Easing.out(easing)` | Run easing backwards |
| `Easing.inOut(easing)` | Symmetrical (forward then backward) |

## Utility Functions

| Function | Package | Description |
|----------|---------|-------------|
| `staticFile(path)` | `remotion` | Reference file in `public/` folder |
| `registerRoot(component)` | `remotion` | Register root component |
| `delayRender()` | `remotion` | Delay rendering until async work completes |
| `continueRender(handle)` | `remotion` | Signal async work is done |
| `cancelRender(error?)` | `remotion` | Cancel render with error |
| `random(seed)` | `remotion` | Seeded random number generator |

## Animation Utils (`@remotion/animation-utils`)

| Function | Description |
|----------|-------------|
| `makeTransform(transforms)` | Type-safe transform string generator |
| `translate(x, y?)` | Translate transform |
| `rotate(degrees)` | Rotate transform |
| `scale(x, y?)` | Scale transform |
| `skew(x, y?)` | Skew transform |

## Cloud Rendering

### Lambda (`@remotion/lambda`)

| Function | Description |
|----------|-------------|
| `renderMediaOnLambda()` | Render video on Lambda |
| `renderStillOnLambda()` | Render still on Lambda |
| `getRenderProgress()` | Check render status |

### Cloud Run (`@remotion/cloudrun`)

| Function | Description |
|----------|-------------|
| `renderMediaOnCloudRun()` | Render video on Cloud Run |
| `renderStillOnCloudRun()` | Render still on Cloud Run |

## Renderer (`@remotion/renderer`)

| Function | Description |
|----------|-------------|
| `renderMedia()` | Render video via Node.js |
| `renderStill()` | Render still via Node.js |
| `getCompositions()` | List compositions from a bundle |
| `bundle()` | Bundle a Remotion project |

## CLI Commands

```bash
npx remotion render <id> [output]    # Render video
npx remotion still <id> [output]     # Render still
npx remotion preview                 # Start preview server
npx remotion lambda <subcommand>     # Lambda operations
npx remotion cloudrun <subcommand>   # Cloud Run operations
npx remotion benchmark               # Benchmark rendering
npx remotion versions                # Show version info
```

## Types

| Type | Package | Description |
|------|---------|-------------|
| `ExtrapolateType` | `remotion` | `"extend"` \| `"clamp"` \| `"wrap"` \| `"identity"` |
| `InterpolateOptions` | `remotion` | Options for `interpolate()` |
| `PlayerRef` | `@remotion/player` | Imperative player control ref |
| `CallbackListener` | `@remotion/player` | Event listener type |
| `ErrorFallback` | `@remotion/player` | Error callback type |
| `RenderLoading` | `@remotion/player` | Loading callback type |
| `RenderPoster` | `@remotion/player` | Poster callback type |
| `RenderPlayPauseButton` | `@remotion/player` | Play/pause button callback |
| `RenderFullscreenButton` | `@remotion/player` | Fullscreen button callback |
| `RenderMuteButton` | `@remotion/player` | Mute button callback |
| `RenderVolumeSlider` | `@remotion/player` | Volume slider callback |
