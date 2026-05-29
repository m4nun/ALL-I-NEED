# Just-in-Time Compilation of Remotion Code

After generating a Remotion component as a string (using LLMs), compile it in the browser for live preview.

## Basic Transpilation

```tsx
import * as Babel from '@babel/standalone';

const code = `const MyComponent = () => { return <div style={{fontSize: 100}}>Hello</div>; };`;

const transpiled = Babel.transform(code, {
  presets: ['react', 'typescript'],
});
```

## Creating a Component from String

```tsx
const createComponent = new Function('React', `${transpiled.code}\nreturn MyComponent;`);
const Component = createComponent(React);
```

## Adding Remotion APIs

Inject Remotion APIs explicitly:

```tsx
import {AbsoluteFill, useCurrentFrame, spring} from 'remotion';

const createComponent = new Function(
  'React', 'AbsoluteFill', 'useCurrentFrame', 'spring',
  `${transpiled.code}\nreturn MyComponent;`
);

const Component = createComponent(React, AbsoluteFill, useCurrentFrame, spring);
```

## Handling Import Statements

Strip imports from AI-generated code before compilation:

```tsx
// Remove imports
const codeWithoutImports = code.replace(/^import\s+.*$/gm, '').trim();

// Extract component body
const match = codeWithoutImports.match(
  /export\s+const\s+\w+\s*=\s*\(\s*\)\s*=>\s*\{([\s\S]*)\};?\s*$/
);
const componentBody = match ? match[1].trim() : codeWithoutImports;
const wrappedSource = `const DynamicComponent = () => {\n${componentBody}\n};`;
```

## Complete Example

```tsx title="use-compilation.ts"
import * as Babel from '@babel/standalone';
import React, {useMemo} from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence} from 'remotion';

export function useCompilation(code: string) {
  return useMemo(() => {
    if (!code?.trim()) return {Component: null, error: null};

    try {
      const codeWithoutImports = code.replace(/^import\s+.*$/gm, '').trim();
      const match = codeWithoutImports.match(
        /export\s+const\s+\w+\s*=\s*\(\s*\)\s*=>\s*\{([\s\S]*)\};?\s*$/
      );
      const componentBody = match ? match[1].trim() : codeWithoutImports;
      const wrappedSource = `const DynamicComponent = () => {\n${componentBody}\n};`;

      const transpiled = Babel.transform(wrappedSource, {
        presets: ['react', 'typescript'],
        filename: 'dynamic.tsx',
      });

      if (!transpiled.code) return {Component: null, error: 'Transpilation failed'};

      const createComponent = new Function(
        'React', 'AbsoluteFill', 'useCurrentFrame', 'useVideoConfig',
        'spring', 'interpolate', 'Sequence',
        `${transpiled.code}\nreturn DynamicComponent;`
      );

      const Component = createComponent(
        React, AbsoluteFill, useCurrentFrame, useVideoConfig,
        spring, interpolate, Sequence
      );

      return {Component, error: null};
    } catch (error) {
      return {Component: null, error: error instanceof Error ? error.message : 'Unknown error'};
    }
  }, [code]);
}
```

```tsx title="Preview.tsx"
import {Player} from '@remotion/player';
import {useCompilation} from './use-compilation';

export const Preview: React.FC<{code: string}> = ({code}) => {
  const {Component, error} = useCompilation(code);
  if (error) return <div style={{color: 'red'}}>Error: {error}</div>;
  if (!Component) return null;

  return (
    <Player
      component={Component}
      durationInFrames={150}
      fps={30}
      compositionWidth={1920}
      compositionHeight={1080}
      controls
    />
  );
};
```

## Security

Code runs in the browser's global scope. For production, consider sandboxed `<iframe>` usage.
