---
name: remotion-video-image
description: Create videos and images programmatically using Remotion (React-based framework). Use when the user wants to create motion graphics, animated videos, programmatic images, video compositions, or any frame-based visual content. Handles video composition, animation, audio, rendering, and AI-assisted video generation workflows.
metadata:
  tags: remotion, video, animation, react, motion-graphics, ai-agents
---

# Remotion: Video & Image Creation

Remotion is a React-based framework for creating videos and images programmatically. Core idea: **a video is a function of images over time** — you get a frame number and a blank canvas, render anything with React.

## Source of Truth

This directory contains the full Remotion documentation:
- [`remotion/`](./remotion/) — Complete 12-file reference (index, getting started, core concepts, animation, layout, video/audio, player, rendering, props/schemas, AI/license, terminology, API reference)

**Always consult `remotion/` docs before writing Remotion code.** Start with `remotion/00-index.md` for the full document index.

## Quick Reference

| Concept | API |
|---------|-----|
| **Creating videos** | `<Composition>` with `durationInFrames`, `fps`, `width`, `height` |
| **Creating images** | `<Still>` (no duration/fps) |
| **Animating** | `useCurrentFrame()` + `interpolate()` / `spring()` — never CSS transitions |
| **Layout** | `<AbsoluteFill>` for layers, `<Sequence>` for timing, `<Series>` for scenes |
| **Rendering video** | `npx remotion render <composition-id>` |
| **Rendering image** | `npx remotion still <still-id>` |

## AI Integration

Remotion has first-class AI support. Here are the key workflows:

### 1. Prompting Videos with Coding Agents

Use Claude Code, Codex, or OpenCode to prompt videos:

```bash
npx create-video@latest   # Select Blank template, enable TailwindCSS + Skills
cd my-video
npm install && npm run dev
# In another terminal:
cd my-video && claude      # or: codex / opencode
```

### 2. Code Generation with LLMs

Generate Remotion components from natural language using the Vercel AI SDK:

```ts
import {generateText} from 'ai';
import {openai} from '@ai-sdk/openai';

const systemPrompt = `
You are a Remotion component generator.
Export a named component called "MyComposition".
Use useCurrentFrame() and useVideoConfig() from "remotion".
Animate with interpolate() or spring().
Only output code, no explanations.
`;

const {text: code} = await generateText({
  model: openai('gpt-5.2'),
  system: systemPrompt,
  prompt: 'Create a countdown from 5 to 1 with smooth motion',
});
```

For structured output, use `Output.object()` with a Zod schema.

### 3. Just-in-Time Compilation

Compile AI-generated code in the browser using `@babel/standalone` and the `Function` constructor:

```
AI code string → Babel.transform() → new Function('React', ...) → <Player>
```

See full implementation at [`remotion/09-ai-and-license.md`](./remotion/09-ai-and-license.md).

### 4. MCP (Model Context Protocol)

Install Remotion's MCP server for editor AI chat:

```bash
# Cursor: Add to MCP config
npx @remotion/mcp@latest
```

```json
{
  "mcpServers": {
    "remotion-documentation": {
      "command": "npx",
      "args": ["@remotion/mcp@latest"]
    }
  }
}
```

### 5. System Prompt for LLMs

The full Remotion system prompt is at `https://www.remotion.dev/llms.txt` — teaches LLMs Remotion APIs, project structure, animation rules, and rendering commands. Use this as a base when building custom AI generation pipelines.

### 6. Prompt to Motion Graphics SaaS

Scaffold a full AI SaaS template:

```bash
npx create-video@latest --template prompt-to-motion-graphics
```

Includes chat interface, live preview, smart editing, input validation, and self-correction.

## Project Scaffolding

```bash
npx create-video@latest --yes --blank --no-tailwind my-video
cd my-video && npm install
```

Standard structure:
```
src/
├── index.ts          # registerRoot() call
├── Root.tsx          # Entry point, registers compositions/stills
└── Composition.tsx   # Your video/image component
public/               # Static assets (use staticFile())
```

## Creating a Video

```tsx
// src/Root.tsx
import { Composition } from "remotion";
import { MyVideo } from "./MyVideo";

export const RemotionRoot = () => (
  <Composition
    id="MyVideo"
    durationInFrames={150}
    fps={30}
    width={1920}
    height={1080}
    component={MyVideo}
  />
);
```

## Creating a Still Image

```tsx
// src/Root.tsx
import { Still } from "remotion";
import { MyThumbnail } from "./MyThumbnail";

export const RemotionRoot = () => (
  <Still
    id="MyThumbnail"
    width={1920}
    height={1080}
    component={MyThumbnail}
  />
);
```

## Animation Rules

- **Always drive animations with `useCurrentFrame()`** — never CSS transitions/animations
- **Tailwind animation classes are FORBIDDEN** — they won't render correctly
- Frame 0 is the first frame; last frame is `durationInFrames - 1`
- Props must be JSON-serializable

```tsx
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const MyComp = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" });
  const scale = spring({ frame, fps, config: { damping: 10, stiffness: 100 } });

  return <div style={{ opacity, transform: `scale(${scale})` }}>Hello World</div>;
};
```

## Layout Patterns

- `<AbsoluteFill>` — full-canvas absolutely positioned flex container
- `<Sequence from={30} durationInFrames={90}>` — time-shift children
- `<Series>` / `<Series.Sequence>` — sequential scenes
- `<Loop durationInFrames={50} times={3}>` — repeat content

## Media Handling

| Element | Import | Use Case |
|---------|--------|----------|
| `<OffthreadVideo>` | `remotion` | Default video (frame-perfect, Rust/FFmpeg) |
| `<Video>` | `@remotion/media` | Modern video (WebCodecs, fastest) |
| `<Audio>` | `@remotion/media` | Audio files |
| `<Img>` | `remotion` | Static images |
| `<Gif>` | `@remotion/gif` | Animated GIFs |

Use `staticFile()` to reference `public/` assets, or use remote URLs directly.

## Props & Zod Schemas

```tsx
import { z } from "zod";

const schema = z.object({ title: z.string(), bgColor: z.string() });

<Composition
  id="my-video"
  component={MyVideo}
  schema={schema}
  defaultProps={{ title: "Hello", bgColor: "#000000" }}
/>
```

## Rendering

```bash
npx remotion render <composition-id> [output.mp4]
npx remotion still <still-id> [output.png] --frame=0
npx remotion render <id> --sequence
npx remotion render <id> out.mp4 --props='{"title":"Hello"}'
```

## AI-Ready Documentation

Remotion docs are optimized for AI agents:
- **Copy as Markdown**: Click copy button on any doc page
- **Markdown URLs**: Add `.md` to any doc URL (e.g., `remotion.dev/docs/player.md`)
- **Content negotiation**: Docs respect `Accept: text/markdown` header

## Chatbot

The Remotion Chatbot answers questions about Remotion:
- Click "Ask AI" on any docs page
- Visit `https://remotion.ai`
- Press `⌘/Ctrl + I` in the Studio

## Bolt.new

Prompt Remotion videos at `https://bolt.new` using their online AI tool.

## Reference Docs

For detailed information, read the following files in the `remotion/` directory:

| File | Content |
|------|---------|
| [`00-index.md`](./remotion/00-index.md) | Overview, products, doc index, requirements, license |
| [`01-getting-started.md`](./remotion/01-getting-started.md) | Project setup, templates, structure |
| [`02-core-concepts.md`](./remotion/02-core-concepts.md) | Compositions, hooks, registerRoot |
| [`03-animation.md`](./remotion/03-animation.md) | interpolate, spring, Easing, transforms |
| [`04-layout-components.md`](./remotion/04-layout-components.md) | AbsoluteFill, Sequence, Loop, Series, Still |
| [`05-video-audio.md`](./remotion/05-video-audio.md) | OffthreadVideo, Audio, staticFile |
| [`06-player.md`](./remotion/06-player.md) | @remotion/player — embed videos in React |
| [`07-rendering.md`](./remotion/07-rendering.md) | CLI, SSR, Lambda, Cloud Run, stills |
| [`08-props-and-schemas.md`](./remotion/08-props-and-schemas.md) | Props, Zod schemas, visual editing |
| [`09-ai-and-license.md`](./remotion/09-ai-and-license.md) | AI features, agent skills, license terms |
| [`10-terminology.md`](./remotion/10-terminology.md) | Glossary of key terms |
| [`11-reference.md`](./remotion/11-reference.md) | Full API reference |

## Important Rules

1. Always use `useCurrentFrame()` for animations — never CSS transitions/animations
2. Use `type` (not `interface`) for props types in v4.0+
3. Frame 0 is the first frame; last frame is `durationInFrames - 1`
4. Props must be JSON-serializable
5. `staticFile()` references files in `public/` folder
6. System requirements: Node 16+ or Bun 1.0.3+, Linux libc 2.35+, macOS 15+
7. `Math.random()` is FORBIDDEN — use `random('seed')` from `remotion`

## When in Doubt

1. Read the relevant file in [`remotion/`](./remotion/) first
2. Check [`remotion/11-reference.md`](./remotion/11-reference.md) for the full API reference
3. Visit https://www.remotion.dev/docs for the latest official documentation
4. Use the Remotion Chatbot at https://remotion.ai or "Ask AI" on any docs page
