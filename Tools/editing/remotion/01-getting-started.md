# 01 - Getting Started

## Creating a New Project

### Quick Start (Command Line)

```bash
npx create-video@latest --yes --blank my-video
cd my-video
npm i
npx remotion skills add
npm run dev
```

This creates a project in `my-video/` with TailwindCSS, blank template, and Agent Skills.

### Using the Wizard

```bash
npx create-video@latest
```

Choose a template. For beginners, the **Hello World** template is recommended.

Available package managers:
- npm: `npx create-video@latest`
- bun: `bun create video`
- pnpm: `pnpm create video`
- yarn: `yarn create video`

After scaffolding, open the project and run:
```bash
npm run dev
```

For Next.js / React Router 7 templates:
```bash
npm run dev      # Start the app
npm run remotion # Start Remotion Studio
```

### Coding Agent Prompt

```
Ensure Node.js is installed.
Install Remotion Skills: `npx -y skills@latest add remotion-dev/skills -g -y`
Then use them to create a video.
```

## System Requirements

- Node.js 16+ or Bun 1.0.3+
- macOS 15 (Sequoia) or later (older versions unsupported)
- Linux: Libc 2.35+, additional packages required
- Alpine Linux and nixOS are unsupported

## Installation in Existing Projects

For adding Remotion to an existing project, see the **brownfield installation** guide.

## Templates

Available templates include:
- **Hello World** — Basic starter
- **Next.js (App dir)** — With Player + Lambda rendering
- **Next.js (Pages dir)** — Pages Router variant
- **Vercel Sandbox** — Next.js with Vercel Sandbox rendering
- **React Router 7 (Remix)** — Remix-based
- **Blank** — Minimal setup with TailwindCSS
- **Still** — For rendering static images
- Various others at https://www.remotion.dev/templates

## Project Structure

A typical Remotion project:
```
my-video/
├── src/
│   ├── Root.tsx          # Entry point, registers compositions
│   ├── Composition.tsx   # Your video component
│   └── index.ts          # registerRoot() call
├── public/               # Static assets
├── package.json
└── remotion.config.ts    # Optional configuration
```
