---
name: vercel-production-release
description: Prepare, deploy, inspect, and verify production releases on Vercel for Next.js and web apps. Use when setting production environment variables, running predeploy checks, deploying with Vercel CLI, aliasing custom domains, debugging serverless/runtime issues, or documenting release evidence.
---

# Vercel Production Release

## Release Workflow

1. Inspect the app before deployment.
   - Check git status and avoid staging unrelated work.
   - Run the targeted test for the changed area.
   - Run full tests, lint, and build when the change affects shared production behavior.

2. Verify production environment requirements.
   - Required public env vars use `NEXT_PUBLIC_` only when safe for the browser.
   - Secret keys stay server-only.
   - Payment, auth, database, and AI provider vars are set for the `Production` environment.
   - Do not print secret values into chat or logs.

3. Deploy with evidence.
   - Use `npx vercel --prod --yes` when the project is already linked.
   - Capture the deployment URL, deployment ID, and alias result.
   - Confirm the custom domain points at the new deployment.

4. Smoke test the live app.
   - Open public routes and metadata endpoints.
   - Test the changed authenticated flow when credentials/session are available.
   - Check API routes that changed by exercising the UI where possible.
   - For mobile fixes, verify a mobile viewport, not only desktop.

5. Update operational docs when the release changes production behavior.
   - Record test/build status.
   - Record live URL and deployment evidence.
   - Note any manual provider-side actions that remain.

## Common Vercel Issues

- Env var added but app still failing: redeploy after setting production env vars.
- Local env pull is empty: confirm the variable is set for the same Vercel project and environment.
- Serverless file/parser failure: remove assumptions about local paths, native browser globals, or writable filesystem.
- Domain not updated: check Vercel domain alias and DNS/canonical host.
- Route works locally but not in production: inspect server logs and confirm runtime-compatible imports.

## Predeploy Checklist

- `npm test`
- `npm run lint` when available
- `npm run build`
- production env vars confirmed
- database migrations applied when needed
- custom domain and canonical URL configured
- rollback path known from the previous deployment

## Final Response Checklist

Mention:

- what changed
- verification commands and outcomes
- production URL or deployment ID if deployed
- provider-side manual steps still required
- any unrelated dirty worktree changes left untouched
