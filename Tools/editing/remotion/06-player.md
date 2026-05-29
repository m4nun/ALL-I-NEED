# 06 - Player (`@remotion/player`)

Embed Remotion videos in any React app (Next.js, Vite, CRA, etc.) with runtime-customizable content.

## Basic Usage

```tsx
import { Player } from '@remotion/player';
import { MyVideo } from './remotion/MyVideo';

export const App = () => {
  return (
    <Player
      component={MyVideo}
      durationInFrames={120}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
    />
  );
};
```

## Core Props

| Prop | Default | Description |
|------|---------|-------------|
| `component` / `lazyComponent` | — | React component to render |
| `durationInFrames` | — | Video duration in frames |
| `fps` | — | Frame rate |
| `compositionWidth` | — | Render width (use `style` for display size) |
| `compositionHeight` | — | Render height |
| `inputProps` | — | Props passed to the component |
| `loop?` | `false` | Restart when ended |
| `autoPlay?` | `false` | Start immediately after load |
| `controls?` | `false` | Show seek bar and play/pause button |
| `showVolumeControls?` | `true` | Show volume slider (requires `controls`) |
| `allowFullscreen?` | `true` | Allow fullscreen |
| `clickToPlay?` | `true` if controls | Click to play/pause |
| `doubleClickToFullscreen?` | `false` | Double-click for fullscreen |
| `spaceKeyToPlayOrPause?` | `true` | Space key control |
| `moveToBeginningWhenEnded?` (v3.1.3+) | `true` | Go to start when ended |
| `style?` | — | CSS styles for the container |
| `className?` | — | CSS class name |
| `initialFrame?` (v3.1.14+) | `0` | Start frame (immutable after mount) |
| `playbackRate?` | `1` | Speed multiplier (-10 to 10, excl. 0) |

## Poster & Loading

| Prop | Description |
|------|-------------|
| `renderLoading?` | Custom loading UI callback `({height, width})` |
| `renderPoster?` (v3.2.14+) | Custom poster overlay callback `({height, width, isBuffering})` |
| `showPosterWhenUnplayed?` | Show poster before first play |
| `showPosterWhenPaused?` | Show poster when paused |
| `showPosterWhenEnded?` | Show poster when ended |
| `showPosterWhenBuffering?` (v4.0.111+) | Show poster during buffer |
| `showPosterWhenBufferingAndPaused?` (v4.0.290+) | Show poster while buffering+paused |
| `posterFillMode` (v4.0.78+) | `"player-size"` or `"composition-size"` |

## Playback Range

- `inFrame?` (v3.2.15+): Only play after this frame
- `outFrame?` (v3.2.15+): Only play before this frame

## Audio

| Prop | Description |
|------|-------------|
| `numberOfSharedAudioTags?` | Pre-mounted silent audio tags (default: 5) |
| `initiallyMuted?` (v3.3.81+) | Start muted (for autoplay) |
| `volumePersistenceKey?` (v4.0.305+) | Custom localStorage key for volume |
| `initialVolume?` (v4.0.453+) | Fixed initial volume (bypasses localStorage) |

## Controls Customization

| Prop | Description |
|------|-------------|
| `initiallyShowControls?` (v3.2.24+) | Flash controls on mount (default: true) |
| `alwaysShowControls?` (v3.3.55+) | Never hide controls |
| `hideControlsWhenPointerDoesntMove?` (v4.0.124+) | Auto-hide after inactivity |
| `showPlaybackRateControl?` (v3.3.98+) | Show speed selector |
| `renderPlayPauseButton?` (v3.2.32+) | Custom play/pause button |
| `renderFullscreenButton?` (v3.2.32+) | Custom fullscreen button |
| `renderMuteButton?` (v4.0.188+) | Custom mute button |
| `renderVolumeSlider?` (v4.0.188+) | Custom volume slider |
| `renderCustomControls?` (v4.0.418+) | Custom controls in control bar |

## Error & Buffering

| Prop | Description |
|------|-------------|
| `errorFallback?` | Custom error UI callback `({error})` |
| `bufferStateDelayInMilliseconds` (v4.0.111+) | Delay before showing buffer UI (default: 300ms) |
| `overflowVisible` (v4.0.173+) | Render outside canvas bounds |

## `PlayerRef`

Control the player imperatively via a React ref:

```tsx
import { PlayerRef } from '@remotion/player';
const playerRef = useRef<PlayerRef>(null);

playerRef.current?.play();
playerRef.current?.pause();
playerRef.current?.seekTo(120);
playerRef.current?.getCurrentFrame();
playerRef.current?.setVolume(0.5);
playerRef.current?.getVolume();
playerRef.current?.mute();
playerRef.current?.unmute();
playerRef.current?.isMuted();
playerRef.current?.toggle();
playerRef.current?.isPlaying();
playerRef.current?.getContainerNode();
playerRef.current?.requestFullscreen();
playerRef.current?.exitFullscreen();
playerRef.current?.isFullscreen();
playerRef.current?.getScale();
playerRef.current?.pauseAndReturnToPlayStart(); // v4.0.67+
```

## Events (via `addEventListener`)

| Event | Description | Detail |
|-------|-------------|--------|
| `play` | Started/resumed playing | — |
| `pause` | Paused or ended | — |
| `seeked` | Time position changed | `{ frame: number }` |
| `timeupdate` | Periodic (throttled ~250ms) | `{ frame: number }` |
| `frameupdate` (v3.2.27+) | Every frame change | `{ frame: number }` |
| `ended` | Video ended (no loop) | — |
| `ratechange` | Playback rate changed | `{ playbackRate: number }` |
| `volumechange` | Volume changed | `{ volume: number }` |
| `mutechange` | Mute state changed | `{ isMuted: boolean }` |
| `fullscreenchange` | Fullscreen toggled | `{ isFullscreen: boolean }` |
| `scalechange` | Scale changed | `{ scale: number }` |
| `error` | Uncaught error in component | `{ error: Error }` |
| `waiting` (v4.0.111+) | Entered buffer state | — |
| `resume` (v4.0.111+) | Exited buffer state | — |

## Templates with Player

- Next.js (App dir) — remotion.dev/templates/next
- Next.js (Pages dir) — remotion.dev/templates/next-pages-dir
- Vercel Sandbox — remotion.dev/templates/vercel
- React Router 7 (Remix) — remotion.dev/templates/react-router
