# 08 - Props, Schemas & Parameterized Videos

Remotion supports ingesting, validating, and visually editing data to parametrize videos.

## Resolution Process

Data flows through these steps to determine final component props:

1. **Default props** — Defined statically in `<Composition>`. Shape the data, enable Studio design without external data. Can be edited in the Remotion Studio.

2. **Input props** — Specified at render time, merged with defaults. Input props take priority.

3. **`calculateMetadata()`** — Post-processing: async data fetching, dynamic metadata calculation (duration, dimensions, etc.).

4. **Final props** — Passed to the React component for rendering.

## Default Props

```tsx
<Composition
  id="my-video"
  component={MyVideo}
  width={1920}
  height={1080}
  fps={30}
  durationInFrames={150}
  defaultProps={{
    title: 'Hello World',
    bgColor: '#0000ff',
  }}
/>
```

Props must be JSON-serializable (with support for `Date`, `Map`, `Set`, and `staticFile()`).

Use `type` (not `interface`) for props types in v4.0+.

## Input Props

Pass at render time to override defaults:

```bash
# CLI
npx remotion render MyComp --props='{"title": "Custom Title"}'

# From file
npx remotion render MyComp --props="./input-props.json"
```

### In GitHub Actions

```yaml
- run: echo $WORKFLOW_INPUT > input-props.json
  env:
    WORKFLOW_INPUT: ${{ toJson(github.event.inputs) }}
- run: npx remotion render MyComp --props="./input-props.json"
```

## Schemas (Zod)

Define a Zod schema for type-safe props and visual editing:

```tsx
import { z } from 'zod';

const mySchema = z.object({
  title: z.string(),
  bgColor: z.string(),
  fontSize: z.number().min(10).max(200),
});

<Composition
  id="my-video"
  component={MyVideo}
  schema={mySchema}
  defaultProps={{ title: 'Hello', bgColor: '#000', fontSize: 48 }}
  // ...
/>
```

Schemas enable the **visual editing** UI in Remotion Studio.

## Visual Editing

When a schema is defined, the Studio provides a form-based editor to modify props without writing code. Changes are visible in real-time in the preview.

## `calculateMetadata()`

Dynamic metadata calculation and data fetching:

```tsx
<Composition
  calculateMetadata={async ({ props, defaultProps }) => {
    // Fetch data based on props
    const data = await fetch(`https://api.example.com/${props.id}`);
    const json = await data.json();

    return {
      props: { ...defaultProps, ...json },
      durationInFrames: json.duration * 30, // dynamic duration
      // width, height, fps can also be returned
    };
  }}
/>
```

## Data Fetching

Use `calculateMetadata()` or the `delayRender()` / `continueRender()` pattern for async data:

```tsx
import { delayRender, continueRender, cancelRender } from 'remotion';

const MyComp = () => {
  const [data, setData] = useState(null);
  const [handle] = useState(() => delayRender());

  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(d => {
        setData(d);
        continueRender(handle);
      })
      .catch(err => cancelRender(err));
  }, []);

  if (!data) return null;
  return <div>{data.content}</div>;
};
```

## Props in `useVideoConfig()`

```tsx
const { defaultProps, props } = useVideoConfig();
```
- `defaultProps`: As defined in `<Composition>`
- `props`: Resolved props after all transformations (v4.0+)
