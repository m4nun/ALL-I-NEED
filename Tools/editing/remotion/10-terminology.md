# 10 - Terminology

Key terms in the Remotion ecosystem.

## Composition

The combination of a React component and video metadata (width, height, fps, duration). Registered via `<Composition>` in `src/Root.tsx`. Appears in the Remotion Studio sidebar.

## Composition ID

A unique string identifier for a composition (letters, numbers, and `-`). Used to reference the composition when rendering.

## Sequence

A component (`<Sequence>`) that time-shifts its children, allowing you to control when content appears and for how long. Children calling `useCurrentFrame()` get a shifted frame number relative to when the sequence starts.

## Remotion Studio

The development GUI for previewing and rendering Remotion videos. Started with `npm run dev`. Includes a timeline, sidebar with compositions, props editor, and render controls.

## Remotion Preview

The preview mode within Remotion Studio that shows how your composition looks at any given frame.

## Remotion Player

The embeddable React component (`@remotion/player`) that allows displaying Remotion videos in any React app with customizable content at runtime.

## Bundle

The compiled output of a Remotion project, ready for deployment or rendering. Created when you render or deploy to Lambda/Cloud Run.

## Serve URL

A URL where a bundled Remotion project is served (typically an S3 bucket for Lambda or a Cloud Run URL). Lambda/Cloud Run uses this URL to access the project for rendering.

## Public Dir

The `public/` folder in a Remotion project. Files placed here are served as static assets and can be referenced using `staticFile()`.

## Remotion Root

The root React component that renders `<Composition>` components. Registered with `registerRoot()`.

## Entry Point

The file that calls `registerRoot()`. Typically `src/index.ts`.

## Concurrency

The number of parallel operations in cloud rendering. More concurrency = faster rendering but higher cost and more resource usage.

## Input Props

Data passed to a composition at render time to customize output. Merged with default props. Input props have higher priority.

## Cloud Run URL

The URL where a Remotion project is deployed for Cloud Run rendering. Similar to Serve URL but for GCP Cloud Run.

## Service Name

The identifier for a Cloud Run service in GCP.

## FPS

Frames per second. Controls the frame rate of the composition.

## Render

The process of converting a Remotion composition into a video file (MP4, WebM, etc.) or still image.

## Codec

The encoding format used for rendering (H.264, H.265, VP8, VP9, AV1, ProRes, etc.).
