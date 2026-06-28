---
name: document-rag-chat
description: Build, debug, and production-check document-grounded AI chat systems in web apps. Use when implementing material uploads, PDF/DOCX/TXT/MD parsing, chunking, embeddings, vector search, retrieval-augmented generation, source citations, chat loading states, or serverless-safe document processing.
---

# Document RAG Chat

## Core Workflow

1. Define the trust boundary.
   - Decide whose documents the assistant may use.
   - Verify ownership before processing or retrieving private materials.
   - Keep student/public chat access scoped to one shared resource or class.

2. Build ingestion as a recoverable pipeline.
   - Validate file type and size.
   - Upload to private storage.
   - Extract text with serverless-safe parsers.
   - Split text into chunks with stable document and class IDs.
   - Generate document embeddings.
   - Insert document rows and chunk rows.
   - Roll back storage and partial database records on failure.

3. Keep embedding spaces consistent.
   - Use one embedding model and dimension for both documents and queries.
   - Use document input type for material chunks when the provider supports it.
   - Use query input type for user questions.
   - Reindex old chunks after changing embedding providers or dimensions.

4. Retrieve before generation.
   - Embed the question.
   - Query vector matches filtered by owner/resource/class.
   - Pass only relevant chunks into the chat model.
   - Instruct the model to answer from provided materials and admit when the material is missing.

5. Design the chat UX for latency.
   - Show a pending assistant message immediately.
   - Add a compact thinking/loading animation while retrieval and generation run.
   - Keep reset/cancel able to abort active requests.
   - Keep mobile composers fixed to the visible viewport.

## Production Pitfalls

- PDF parser works locally but fails on Vercel: remove filesystem worker assumptions and lazy-load parser code server-side.
- Upload succeeds but material does not appear: processing route may fail after storage upload; check chunk insertion and admin writes.
- Chat answers ignore new files: embeddings may be missing, mixed across models, or not reindexed.
- Retrieval leaks data: vector match query is not filtered by class/resource ownership.
- Mobile chat input disappears: account for `visualViewport.height` and `visualViewport.offsetTop`.

## Database Shape

Prefer separate records for:

- parent resource, such as class/project/workspace
- documents/files
- document chunks with embedding vectors
- usage/rate limit records when chat is metered

For Postgres vector search, add relational indexes for owner/resource filters in addition to vector indexes.

## Verification

Test:

- supported file validation
- multi-file upload behavior
- parser behavior for PDF and DOCX
- chunk insertion rollback on failure
- query embeddings during chat
- retrieval filtered by resource
- mobile chat composer visibility

Smoke test production with one small text file and one PDF, then ask a question that should be answered only from those files.
