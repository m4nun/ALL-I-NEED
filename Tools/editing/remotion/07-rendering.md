# 07 - Rendering

Multiple ways to render Remotion videos.

## Remotion Studio

Click the "Render" button in the Studio UI. Choose settings, confirm with "Render video".

**Studio Deployment**: Deploy the Studio to a long-running cloud server for non-technical team members.

## CLI

```bash
# Render with composition ID
npx remotion render HelloWorld

# Interactive picker (no composition specified)
npx remotion render

# With output path, props, and options
npx remotion render HelloWorld out/video.mp4 --props='{"key": "value"}'
```

Key CLI flags:
- `--props`: Input props as JSON string or file path
- `--sequence`: Output image sequence instead of video
- `--frames`: Frame range (e.g., `0-99`)
- `--codec`: Set codec (h264, h265, vp8, vp9, etc.)

## Server-Side Rendering (SSR)

Remotion's rendering engine is built with Node.js, making it easy to render in the cloud.

### Node.js / Bun APIs

See `@remotion/renderer` for programmatic rendering:

```tsx
import { renderMedia } from '@remotion/renderer';

await renderMedia({
  composition: myComp,
  outputLocation: 'out/video.mp4',
  // ...
});
```

### GitHub Actions

```yaml
name: Render video
on:
  workflow_dispatch:
    inputs:
      titleText:
        description: 'Title text'
        required: true
        default: 'Welcome'
jobs:
  render:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main
      - uses: actions/setup-node@main
      - run: npm i
      - run: echo $WORKFLOW_INPUT > input-props.json
        env:
          WORKFLOW_INPUT: ${{ toJson(github.event.inputs) }}
      - run: npx remotion render MyComp out/video.mp4 --props="./input-props.json"
      - uses: actions/upload-artifact@v4
        with:
          name: out.mp4
          path: out/video.mp4
```

### Docker

Dockerize a Remotion project for containerized rendering.

## AWS Lambda (`@remotion/lambda`)

Fastest and most scalable cloud rendering. Pay only while rendering.

### How it works
1. Lambda function + S3 bucket created on AWS
2. Remotion project deployed to S3 as a website
3. Lambda invoked, opens project
4. Many parallel Lambda functions each render a small part
5. Initial Lambda downloads and stitches parts together
6. Final video uploaded to S3

### Limitations
- Max ~80 min at Full HD (15 min timeout)
- AWS concurrency limit (1000 concurrent per region, can be increased)
- 10GB Lambda storage limit (~5GB output, ~2 hrs Full HD)
- AV1 encoding not available on Lambda

### Supported Regions
Multiple AWS regions available. See docs for region-specific considerations.

### Setup
```bash
npm install @remotion/lambda
npx remotion lambda setup
```

### CLI
```bash
npx remotion lambda render <composition-id>
```

### Node.js API
```tsx
import { renderMediaOnLambda } from '@remotion/lambda';
```

### Uninstalling
Remotion provides tools to cleanly remove all AWS resources without leaving traces.

## Cloud Run (Alpha)

Experimental Google Cloud Run support. Plan is to port Lambda runtime to Cloud Run. Available via `@remotion/cloudrun`.

## Stills

Render static images from Remotion.

### Defining a Still
```tsx
import { Still } from 'remotion';

<Still id="my-still" width={1920} height={1080} component={MyThumbnail} />
```

### Rendering
- CLI: `npx remotion still my-comp out.png --props='{}'`
- Formats: `png` (default), `jpeg`, `webp`, `pdf`
- Frame selection: `--frame` flag
- Node.js: `renderStill()` API
- Lambda: `renderStillOnLambda()` API
- Browser: `renderStillOnWeb()` (experimental)

## Variants

### Audio-only
Export just the audio from a video composition.

### Image Sequence
Use `--sequence` flag to output a series of images instead of an encoded video.

### GIF
Render as GIF. See: [Render as GIF](/docs/render-as-gif)

### Transparent Videos
Create overlays with alpha channels. See: [Creating overlays](/docs/overlay)

## Comparison of SSR Options

| Option | Best For | Tradeoff |
|--------|----------|----------|
| Lambda | Fast, scalable, <80 min | AWS dependency, concurrency limits |
| Vercel Sandbox | Vercel customers | Requires Vercel |
| Node.js SSR | Full control, long videos | Manage own infrastructure |
| GitHub Actions | Simple CI/CD renders | Limited to GitHub |
| Docker | Containerized environments | Setup overhead |
| Cloud Run | GCP users | Alpha, limited development |
