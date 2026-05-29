# 09 - AI & License

## Building with AI

Remotion is designed for AI-assisted video creation.

### AI-Ready Documentation

- **Copy as Markdown**: Click the copy button on any doc page to get raw markdown
- **Markdown URLs**: Add `.md` to any doc URL (e.g., `remotion.dev/docs/player.md`)
- **Content negotiation**: Docs respect the `Accept` header — request `text/markdown` to get raw markdown

### Agent Skills

Install Remotion Skills for coding agents:
```bash
npx -y skills@latest add remotion-dev/skills -g -y
```

### Coding Agent Prompt

```
Ensure Node.js is installed.
Install Remotion Skills: `npx -y skills@latest add remotion-dev/skills -g -y`
Then use them to create a video.
```

## License & Pricing

Remotion is **free to use** if you are:

- An individual
- A for-profit organisation with **up to 3 employees**
- A non-profit or not-for-profit organisation
- Evaluating whether Remotion is a good fit (not yet commercial use)

If you don't qualify, you need a **company license**. Visit [remotion.pro](https://remotion.pro) for pricing.

### Cloud Rendering Units

Companies using cloud rendering (Lambda, etc.) need to set up Cloud Rendering Units with their license.

### Legal

- License file: https://github.com/remotion-dev/remotion/blob/main/LICENSE.md
- Company License FAQ: https://www.remotion.pro/faq
- Contact: hi@remotion.dev
- Terms: https://remotion.pro/terms
- Privacy: https://remotion.pro/privacy

## Community & Support

- GitHub: https://github.com/remotion-dev/remotion
- Discord: https://remotion.dev/discord
- X (Twitter): https://x.com/remotion
- YouTube: https://youtube.com/@remotion_dev
- LinkedIn: https://www.linkedin.com/company/remotion-dev/
- Instagram: https://instagram.com/remotion
- TikTok: https://www.tiktok.com/@remotion

## Additional Products

- **Remotion Player**: Embed videos in React apps
- **Remotion Lambda**: Serverless rendering on AWS
- **Editor Starter**: Full-featured video editor built with Remotion
- **Remotion Timeline**: Timeline component for editors
- **Remotion Recorder**: Screen recording integration
- **Mediabunny**: Media parsing and analysis library
- **WebCodecs support**: Browser-native video processing
- **Media Parser**: Parse media container formats
