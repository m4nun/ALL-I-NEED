# Prompting Videos with Coding Agents

You can create videos just from prompting using coding agents like Claude Code, Codex, and OpenCode.

## Prerequisites

- A coding agent (Claude Code, Codex, or OpenCode)
- Node.js installed
- Most coding agents require a paid subscription

## Start a New Project

```bash
npx create-video@latest
```

Recommended settings:
- Select the **Blank** template
- Say yes to **TailwindCSS**
- Say yes to install **Skills**

## Start the Preview

```bash
cd my-video
npm install
npm run dev
```

## Start Your Coding Agent

Open a separate terminal:

```bash
cd my-video
claude   # or: codex / opencode
```

You can now prompt a video directly from natural language.
