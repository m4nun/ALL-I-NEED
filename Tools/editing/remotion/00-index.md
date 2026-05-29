# Remotion Documentation

**Remotion** is a React-based framework for creating videos programmatically. You write React components with CSS, and Remotion renders them as MP4 videos.

Key philosophy: **A video is a function of images over time.** You get a frame number and a blank canvas, to which you render anything using React.

## Products

- **Remotion Core** (`remotion`) — Video creation library
- **@remotion/player** — Embed Remotion videos in any React app
- **@remotion/lambda** — Serverless rendering on AWS Lambda
- **@remotion/media** — WebCodecs-based video/audio components (experimental)
- **Remotion Studio** — GUI for previewing and rendering
- **Mediabunny** — Media parsing library
- **Remotion Recorder** — Screen recording integration

## Quick Links

- Website: https://www.remotion.dev
- GitHub: https://github.com/remotion-dev/remotion
- Templates: https://www.remotion.dev/templates
- License: https://remotion.pro/license

## Document Index

| File | Topic |
|------|-------|
| [01-getting-started.md](./01-getting-started.md) | Installation, system requirements, creating a new project |
| [02-core-concepts.md](./02-core-concepts.md) | Fundamentals, Compositions, video properties, key hooks |
| [03-animation.md](./03-animation.md) | interpolate(), spring(), Easing, Transforms |
| [04-layout-components.md](./04-layout-components.md) | AbsoluteFill, Sequence, Loop, Series, Folder |
| [05-video-audio.md](./05-video-audio.md) | Html5Video, OffthreadVideo, Audio, video tag comparison |
| [06-player.md](./06-player.md) | @remotion/player API reference |
| [07-rendering.md](./07-rendering.md) | Rendering options: Studio, CLI, SSR, Lambda, Cloud Run, Stills |
| [08-props-and-schemas.md](./08-props-and-schemas.md) | Parameterized rendering, input props, schemas, visual editing |
| [09-ai-and-license.md](./09-ai-and-license.md) | AI features, license terms |
| [10-terminology.md](./10-terminology.md) | Key terminology glossary |
| [11-reference.md](./11-reference.md) | Quick API reference (all components, hooks, functions) |

## System Requirements

- Node.js 16+ or Bun 1.0.3+
- macOS 15 (Sequoia) or later
- Linux: Libc 2.35+, additional packages required
- Alpine Linux and nixOS are unsupported

## License

Free for: individuals, companies with <=3 employees, non-profits, evaluation. Companies with 4+ employees need a license. Visit https://remotion.pro/license.
