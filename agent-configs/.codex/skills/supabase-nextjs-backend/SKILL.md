---
name: supabase-nextjs-backend
description: Build, debug, and production-harden Supabase-backed Next.js apps. Use when working with Supabase Auth, Google/OAuth redirects, Postgres schemas, RLS policies, service-role API routes, storage uploads/downloads, signed URLs, migrations, vector search, or production database verification.
---

# Supabase Next.js Backend

## Core Workflow

1. Identify each data access surface.
   - Browser client: anon key only, RLS enforced.
   - Server user client: authenticated user operations, RLS enforced.
   - Admin/service client: trusted server routes only, service role never exposed.

2. Design the schema with ownership first.
   - Include owner foreign keys such as `teacher_id`, `user_id`, or `organization_id`.
   - Add indexes for ownership and frequent filters.
   - Enable RLS on all user-owned tables.
   - Write policies for the actual app roles, not broad convenience access.

3. Use admin writes only after authorization.
   - Verify the signed-in user owns the parent resource.
   - Then use the service role for storage, cross-table writes, vector inserts, or privileged reads.
   - Keep server routes idempotent when users may retry uploads or mutations.

4. Treat storage as private by default.
   - Use private buckets for user files.
   - Upload through authenticated API routes or signed upload URLs.
   - Serve downloads through short-lived signed URLs after access checks.
   - Avoid exposing raw document IDs when the file route lacks ownership checks.

5. Verify production Supabase separately from local code.
   - Confirm Auth Site URL and redirect URLs.
   - Confirm schema migrations are applied.
   - Confirm RLS policies exist in the production project.
   - Confirm storage buckets are private.

## Auth Checks

- For OAuth branding, Supabase's hosted auth domain may appear unless a custom auth domain is configured.
- Set production Site URL to the canonical host, for example `https://www.example.com`.
- Add redirect URLs for callback routes exactly, including protocol and hostname.
- After login/logout changes, check cached account/workspace state so stale UI does not survive sign-out.

## Storage And Upload Checks

- Validate file type and size before upload processing.
- Store file rows, chunks, and class size usage in a transactional flow when possible.
- On failures, delete uploaded storage objects and partial database records.
- For serverless runtimes, avoid local filesystem assumptions in parsers and workers.

## RLS Checklist

- `ALTER TABLE ... ENABLE ROW LEVEL SECURITY`
- owner-scoped `SELECT`, `INSERT`, `UPDATE`, and `DELETE` policies
- no service role key in client bundles
- anon key cannot query private documents/chunks directly
- service-role routes verify ownership before admin operations

## Verification

Run targeted tests for routes that use Supabase, then build. In production, verify:

- login and OAuth callback
- one authenticated create/read/update/delete flow
- storage upload and download
- denied access for another user's resource
- RLS policies and indexes exist in the live project
