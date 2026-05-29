# 05 - Video & Audio

Remotion provides three video component options and audio capabilities.

## Video Tags Comparison

| Feature | `<OffthreadVideo>` | `<Html5Video>` | `<Video>` (`@remotion/media`) |
|---------|-------------------|----------------|-------------------------------|
| **Based on** | Rust + FFmpeg | HTML5 `<video>` | Mediabunny + WebCodecs |
| **Frame-perfect** | Yes | Not guaranteed | Yes |
| **Partial download** | No | Only with `muted` | Yes |
| **Render Speed** | Fast | Medium | Fastest |
| **Loopable** | No | Yes | Yes |
| **Client-side rendering** | No | No | Yes |
| **CORS required** | No | No | Yes |
| **Recommendation** | Current default | Legacy | Future default |

## `<Html5Video>`

Wraps the native `<video>` element, synchronized with Remotion's time.

```tsx
import { AbsoluteFill, Html5Video, staticFile } from 'remotion';

<Html5Video src={staticFile('video.webm')} />
```

### Key Props

| Prop | Description |
|------|-------------|
| `src` | Video URL or `staticFile()` reference |
| `trimBefore` (v4.0.319+) | Trim start (in frames) |
| `trimAfter` (v4.0.319+) | Trim end (in frames) |
| `volume` | Static number or per-frame callback `(f) => number` |
| `playbackRate` | Speed multiplier (e.g., `2` = 2x) |
| `muted` | Drop audio (faster render) |
| `loop` | Loop indefinitely |
| `toneFrequency` (v4.0.47+) | Pitch adjustment for render (0.01–2) |
| `preservePitch` (v4.0.463+) | Preserve pitch on speed change (preview) |
| `audioStreamIndex` (v4.0.340+) | Select audio stream |
| `pauseWhenBuffering` (v4.0.100+) | Enter buffer state when loading |
| `name` (v4.0.71+) | Label in Studio timeline |
| `onError` | Error callback |
| `onAutoPlayError` (v4.0.187+) | Autoplay restriction handler |
| `style` | CSS styles |
| `acceptableTimeShiftInSeconds` | Seek threshold (default 0.45s) |
| `crossOrigin` (v4.0.190+) | CORS attribute |
| `useWebAudioApi` (v4.0.306+) | Enable Web Audio API |
| `showInTimeline` (v4.0.122+) | Show/hide in Studio timeline |
| `delayRenderTimeoutInMilliseconds` / `delayRenderRetries` | Timeout customization |

Note: Not supported in `@remotion/web-renderer` (client-side rendering).

## `<OffthreadVideo>`

Uses Rust + FFmpeg for frame-perfect extraction. Renders an `<Img>` during render, `<video>` during preview.

```tsx
import { AbsoluteFill, OffthreadVideo, staticFile } from 'remotion';

<OffthreadVideo src={staticFile('video.webm')} />
```

### Key Props (same as Html5Video plus:)

| Prop | Description |
|------|-------------|
| `transparent` | Extract as PNG (slower, enables transparency) |
| `toneMapped` | HDR tone mapping (default: true) |
| `onVideoFrame` (v4.0.190+) | Callback with `CanvasImageSource` for video manipulation |
| `loop` | **Not supported** — use `<Loop>` wrapper or MediaBunny workaround |

### Supported Codecs
H.264, H.265, VP8, VP9, AV1 (v4.0.6+), ProRes, AAC, AC3, FLAC, MP3, Opus, PCM, Vorbis.

### Supported Containers
`.aac`, `.avi`, `.caf`, `.flac`, `.flv`, `.m4a`, `.mkv`, `.mp3`, `.mp4`, `.ogg`, `.wav`, `.webm`.

### Looping OffthreadVideo

Since OffthreadVideo doesn't support the `loop` prop, use Mediabunny to determine duration and wrap in `<Loop>`:

```tsx
import { Loop, OffthreadVideo } from 'remotion';

// After fetching media duration:
<Loop durationInFrames={Math.floor(durationInSeconds * fps)}>
  <OffthreadVideo {...props} />
</Loop>
```

## `<Video>` and `<Audio>` from `@remotion/media`

WebCodecs-based, experimental components. Fastest rendering, supports client-side rendering. Fallback to OffthreadVideo for unsupported codecs. Requires CORS for remote URLs.

## Using Audio

### `<Audio>` / `<Html5Audio>`

```tsx
import { Html5Audio, staticFile } from 'remotion';

<Html5Audio src={staticFile('audio.mp3')} />
```

Props include: `src`, `volume`, `playbackRate`, `muted`, `loop`, `toneFrequency`, `trimBefore`, `trimAfter`, `audioStreamIndex`.

### Volume Control

Static volume:
```tsx
<Html5Video volume={0.5} src={...} />
```

Per-frame volume ramp:
```tsx
<Html5Video
  volume={(f) => interpolate(f, [0, 100], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })}
  src={...}
/>
```

### Speed Change and Pitch

- `playbackRate`: Changes speed (not reversible)
- `toneFrequency`: Changes pitch during render (0.01–2, where 1 = original)
- `preservePitch`: Controls pitch during preview (browser)

## `staticFile()`

References files in the `public/` folder:

```tsx
import { staticFile } from 'remotion';
<Video src={staticFile('my-video.mp4')} />
```

## `useRemotionEnvironment()`

Use different tags for preview vs rendering:

```tsx
const env = useRemotionEnvironment();
if (!env.isRendering) {
  return <OffthreadVideo {...props} />;
}
return <Video {...props} />;
```
