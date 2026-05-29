# Generate Remotion Code Using LLMs

Generate Remotion component code from natural language using the Vercel AI SDK.

## Installation

```bash
npm i ai @ai-sdk/openai zod
```

## Basic Example

```ts
import {generateText} from 'ai';
import {openai} from '@ai-sdk/openai';

const systemPrompt = `
You are a Remotion component generator.
Generate a single React component that uses Remotion.

Rules:
- Export the component as a named export called "MyComposition"
- Use useCurrentFrame() and useVideoConfig() from "remotion"
- Animate values with interpolate() or spring() as appropriate
- Only output the code, no markdown or explanations
`.trim();

const {text: code, usage} = await generateText({
  model: openai('gpt-5.2'),
  system: systemPrompt,
  prompt: 'Create a countdown from 5 to 1 with smooth motion',
});
```

## Structured Output with Zod

```ts
import {generateText, Output} from 'ai';
import {openai} from '@ai-sdk/openai';
import {z} from 'zod';

const systemPrompt = `
You are a Remotion component generator.
Generate a React component that uses Remotion.
For the code property, ALWAYS directly output the code as string without any markdown tags.

Rules:
- Named export called "MyComposition"
- Use useCurrentFrame() and useVideoConfig() from "remotion"
- Animate with interpolate() or spring()
- Keep it self-contained
`.trim();

const {output} = await generateText({
  model: openai('gpt-5.2'),
  system: systemPrompt,
  prompt: 'Create a text animation that types out "Hello World" letter by letter',
  maxRetries: 3,
  output: Output.object({
    schema: z.object({
      code: z.string().describe('The complete React component code'),
      title: z.string().describe('A short title for this composition'),
      durationInFrames: z.number().describe('Recommended duration in frames'),
      fps: z.number().min(1).max(120).describe('Recommended frames per second'),
    }),
  }),
});
```

## Skills

Instead of one large system prompt, use modular skills for specialized domains (charts, typography, transitions, 3D):

```ts
const SKILL_NAMES = ['charts', 'typography', 'transitions', 'spring-physics', '3d'] as const;

const {output: detectedSkills} = await generateText({
  model: openai('gpt-5-mini'),
  prompt: 'Create a bouncy bar chart showing quarterly sales data',
  output: Output.object({
    schema: z.object({
      skills: z.array(z.enum(SKILL_NAMES)).describe('Matching skill categories'),
    }),
  }),
});

const skillContent = detectedSkills.skills
  .map((skill) => loadSkillMarkdown(skill))
  .join('\n\n');

const {output} = await generateText({
  model: openai('gpt-5.2'),
  system: baseSystemPrompt + '\n\n' + skillContent,
  prompt: 'Create a bouncy bar chart showing quarterly sales data',
  output: Output.object({
    schema: z.object({
      code: z.string().describe('The complete React component code'),
    }),
  }),
});
```

## Next Steps

After generating code, use [dynamic compilation](17-ai-dynamic-compilation.md) to compile and preview it in the browser.
