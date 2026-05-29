# Agent Skills

Remotion maintains Agent Skills that define best practices for working in Remotion projects. Useful for Claude Code, Codex, and Cursor.

## Installation

```bash
npx skills add remotion-dev/skills
```

Skills are also offered during project creation:

```bash
bun create video
```

## GitHub

The skills source is at [remotion-dev/remotion/packages/skills](https://github.com/remotion-dev/remotion/tree/main/packages/skills).

## Skill Structure

The Remotion skill (`remotion-best-practices`) includes:
- `SKILL.md` — Main skill file with project setup, animation rules, media handling
- `rules/` — Specialized rules for specific topics (3D, audio, captions, fonts, transitions, etc.)

## Available Rules

| Rule | Topic |
|------|-------|
| `video-layout.md` | Video-first layout and text sizing |
| `subtitles.md` | Captions and subtitles |
| `ffmpeg.md` | FFmpeg operations |
| `silence-detection.md` | Detecting/trimming silence |
| `audio-visualization.md` | Spectrum bars, waveforms |
| `sfx.md` | Sound effects |
| `3d.md` | Three.js / React Three Fiber |
| `audio.md` | Trimming, volume, speed, pitch |
| `calculate-metadata.md` | Dynamic duration, dimensions, data |
| `compositions.md` | Stills, folders, nested compositions |
| `google-fonts.md` | Google Fonts loading |
| `local-fonts.md` | Local font loading |
| `gifs.md` | GIF display synchronized with timeline |
| `images.md` | Sizing, positioning, dynamic paths |
| `light-leaks.md` | Light leak overlay effects |
| `lottie.md` | Embedding Lottie animations |
| `html-in-canvas.md` | Rendering HTML into canvas |
| `measuring-dom-nodes.md` | DOM element dimensions |
| `measuring-text.md` | Text fitting and overflow |
| `sequencing.md` | Delay, trim, limit duration |
| `tailwind.md` | TailwindCSS in Remotion |
| `text-animations.md` | Typography and text animation |
| `timing.md` | Advanced timing with easing and springs |
| `transitions.md` | Scene transition patterns |
| `transparent-videos.md` | Videos with transparency |
| `trimming.md` | Cutting beginning/end of animations |
| `videos.md` | Trimming, volume, speed, looping |
| `parameters.md` | Zod schema for parametrizable compositions |
| `maplibre.md` | Complex animated maps |
| `voiceover.md` | AI-generated voiceover with ElevenLabs |
| `get-audio-duration.md` | Audio duration via Mediabunny |
| `get-video-dimensions.md` | Video dimensions via Mediabunny |
| `get-video-duration.md` | Video duration via Mediabunny |
| `display-captions.md` | Displaying captions |
| `transcribe-captions.md` | Transcribing audio to captions |
| `import-srt-captions.md` | Importing SRT caption files |
