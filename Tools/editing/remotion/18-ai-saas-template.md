# Prompt to Motion Graphics SaaS Starter Kit

A Next.js starter template for building AI-powered motion graphics products. Users describe animations in natural language and the app generates/previews them in real-time.

## Getting Started

```bash
npx create-video@latest --template prompt-to-motion-graphics
```

Create a `.env` file:

```bash
OPENAI_API_KEY=sk-...
```

Start development:

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Difference to Agent Skills

| This Template | Agent Skills |
|---------------|--------------|
| Build a SaaS | Prompt videos for yourself |
| No OS/filesystem access | Full OS/filesystem access |

## What's Included

- Chat interface with conversation history
- Live preview via Remotion Player
- Smart editing (targeted edits or full replacement)
- Input validation
- Output sanitation (cleans LLM nondeterminism)
- Self-correction (auto-retry on compilation errors)

Uses [code generation](16-ai-code-generation.md) + [dynamic compilation](17-ai-dynamic-compilation.md).

## Images

- **Attaching images**: AI replicates in code (e.g., abstract spiral)
- **Providing image URLs**: AI embeds the image in the animation

Example: _"Create a DVD screensaver animation of this image https://example.com/logo.png"_

## Lambda Rendering

To enable video exporting:

1. Set up [Remotion Lambda](https://www.remotion.dev/docs/lambda)
2. Add AWS credentials to `.env`
3. Deploy with `npm run deploy`
