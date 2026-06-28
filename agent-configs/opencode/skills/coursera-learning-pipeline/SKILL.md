---
name: coursera-learning-pipeline
description: Complete workflow to learn any Coursera course: enroll, gather all content, add to NotebookLM, and create Thai language artifacts (podcast, slide deck, infographic, quiz). Uses BrowserOS MCP for Coursera navigation and NotebookLM MCP for notebook management and artifact generation.
---

# Coursera Learning Pipeline

Learn any Coursera course end-to-end: gather all course content, add to NotebookLM, and create Thai language artifacts.

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       COURSERA LEARNING PIPELINE                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  1. ENROLL                                                          │
│     BrowserOS → Coursera → Navigate to course → Enroll                       │
│                                                                         │
│  2. GATHER CONTENT                                                  │
│     BrowserOS → Extract all modules/episodes → Save transcripts             │
│                                                                         │
│  3. CREATE NOTEBOOK                                                 │
│     NotebookLM → Create new notebook                                    │
│                                                                         │
│  4. ADD SOURCES                                                     │
│     NotebookLM → Add course content as sources                           │
│                                                                         │
│  5. CREATE ARTIFACTS                                                │
│     NotebookLM → Create podcast/slide deck/infographic/quiz             │
│                                                                         │
│  6. DOWNLOAD                                                       │
│     NotebookLM → Export and download artifacts                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Required MCPs

- **BrowserOS MCP**: Navigate Coursera, extract content
- **NotebookLM MCP**: Create notebooks, add sources, generate artifacts

## Step 1: Navigate to Course

### Open Coursera course page

```javascript
browseros_new_page({url: "https://www.coursera.org/learn/[COURSE-SLUG]"})
```

Get the course slug from the Coursera URL. For example:
- `https://www.coursera.org/learn/innovation-strategy` → slug: `innovation-strategy`

### List current pages

```javascript
browseros_list_pages()
```

## Step 2: Enroll in Course

### Find and click enroll button

1. Take snapshot of the course page
2. Look for enrollment button (may be labeled "Enroll for Free", "Start Free Trial", etc.)
3. Click to enroll

```javascript
browseros_take_snapshot({page: [PAGE_ID]})
browseros_click({element: [BUTTON_ID], page: [PAGE_ID]})
```

### Select free option (no certificate)

On the enrollment popup:
- Select "Full Course, No Certificate" or similar free option
- Confirm enrollment

```javascript
browseros_click({element: [OPTION_ID], page: [PAGE_ID]})
```

## Step 3: Gather Course Content

### Navigate to course content

After enrollment, look for "Go to Course" or navigate to course content.

```javascript
browseros_click({element: [GO_TO_COURSE_ID], page: [PAGE_ID]})
```

### Extract all lesson/module URLs

Run this in browser console to get all lesson URLs:

```javascript
// Get all lesson/item links
const items = document.querySelectorAll('.rc-ItemLink, [data-e2e="item-link"], a[href*="/learn/"]');
const urls = Array.from(items).map(item => {
  const link = item.href || item.querySelector('a')?.href;
  return link;
}).filter(Boolean);

// Deduplicate
const unique = [...new Set(urls)];
console.log(unique.join('\n'));
```

Or for newer Coursera layout:

```javascript
// More comprehensive extraction
const links = document.querySelectorAll('a[href*="/learn/"][href*="/lecture/"], a[href*="/learn/"][href*="/quiz/"]');
const urls = Array.from(links).map(l => l.href).filter(Boolean);
[...new Set(urls)].forEach(u => console.log(u));
```

### Open lessons in parallel tabs

```javascript
// Batch open URLs in new tabs (10-15 at a time to avoid slowdown)
const lessonUrls = [...]; // from above
lessonUrls.slice(0, 15).forEach(url => {
  browseros_new_page({url, background: true});
});
```

### Extract content from each lesson

For each lesson page:

```javascript
// Get page content
browseros_get_page_content({page: [PAGE_ID]})

// Or extract specific elements
const transcript = document.querySelector('.rc-Transcript, .content-inner, [role="main"]');
const reading = document.querySelector('.rc-Reading, .reading-content');

const content = {
  title: document.querySelector('h1')?.innerText,
  transcript: transcript?.innerText,
  reading: reading?.innerText
};
console.log(JSON.stringify(content, null, 2));
```

### Gather key concepts

```javascript
// Extract learning objectives
const objectives = document.querySelectorAll('.rc-LearningObjective, .outcome-item');
const outcomes = Array.from(objectives).map(o => o.innerText).join('\n');

// Extract quiz questions (if any)
const questions = document.querySelectorAll('.quiz-question');
```

## Step 4: Save Content as Markdown

Create markdown file with course content:

```markdown
---
title: [Course Name]
course_url: https://www.coursera.org/learn/[SLUG]
date: [YYYY-MM-DD]
instructor: [Instructor Name]
---

# [Course Name]

## About This Course
[Brief description of course]

## Instructor
[Instructor name and bio]

---

## Module 1: [Title]

### Lesson 1.1: [Lesson Title]

**Key Concepts:**
- [Concept 1]
- [Concept 2]

**Transcript:**
[Full transcript text in Thai with English terms where appropriate]

---

### Lesson 1.2: [Title]
...

[Continue for all lessons]
```

### File naming convention

```
[COURSE_SLUG].md
e.g., innovation-strategy.md
e.g., machine-learning.md
```

## Step 5: Create NotebookLM Notebook

### Create new notebook

```javascript
notebooklm_notebook_create({title: "[Course Name] - Thai"})
```

Returns: `notebook_id` (UUID)

### Get notebook details

```javascript
notebooklm_notudio_get({notebook_id: "[UUID]"})
```

## Step 6: Add Sources to Notebook

### Add markdown file as source

```javascript
notebooklm_source_add({
  file_path: "/path/to/[COURSE_SLUG].md",
  notebook_id: "[UUID]",
  source_type: "file",
  wait: true,
  wait_timeout: 120
})
```

### Add multiple URLs as sources

```javascript
notebooklm_source_add({
  notebook_id: "[UUID]",
  source_type: "url",
  urls: ["https://example.com/article1", "https://example.com/article2"]
})
```

## Step 7: Create Artifacts

Create all four artifact types per course:

### Create Podcast (Audio Overview)

```javascript
notebooklm_studio_create({
  artifact_type: "audio",
  audio_format: "deep_dive",  // or "conversational"
  audio_length: "default",
  confirm: true,
  detail_level: "standard",
  difficulty: "medium",
  language: "Thai",
  notebook_id: "[UUID]"
})
```

### Create Slide Deck

```javascript
notebooklm_studio_create({
  artifact_type: "slide_deck",
  confirm: true,
  difficulty: "medium",
  language: "Thai",
  notebook_id: "[UUID]",
  orientation: "landscape",
  slide_format: "detailed_deck",
  slide_length: "default"
})
```

### Create Infographic

```javascript
notebooklm_studio_create({
  artifact_type: "infographic",
  confirm: true,
  difficulty: "medium",
  infographic_style: "auto_select",
  language: "Thai",
  notebook_id: "[UUID]",
  orientation: "landscape"
})
```

### Create Quiz

```javascript
notebooklm_studio_create({
  artifact_type: "quiz",
  confirm: true,
  difficulty: "medium",
  language: "Thai",
  notebook_id: "[UUID]",
  question_count: 5
})
```

## Step 8: Check Artifact Status

### Poll for completion

```javascript
notebooklm_studio_status({notebook_id: "[UUID]"})
// Returns artifacts with their status
```

Statuses: `generating`, `completed`, `error`

### Wait and retry if needed

- Check every 30 seconds
- May take 2-5 minutes for full generation

## Step 9: Download Artifacts

### Download Podcast

```javascript
notebooklm_download_artifact({
  artifact_id: "[ARTIFACT_ID]",
  artifact_type: "audio",
  notebook_id: "[UUID]",
  output_path: "/path/to/[course]-podcast.mp4"
})
```

### Download Slide Deck

```javascript
notebooklm_download_artifact({
  artifact_type: "slide_deck",
  notebook_id: "[UUID]",
  output_path: "/path/to/[course]-slides.pdf",
  slide_deck_format: "pdf"  // or "pptx"
})
```

### Download Infographic

```javascript
notebooklm_download_artifact({
  artifact_type: "infographic",
  notebook_id: "[UUID]",
  output_path: "/path/to/[course]-infographic.png"
})
```

### Download Quiz

```javascript
notebooklm_download_artifact({
  artifact_id: "[ARTIFACT_ID]",
  artifact_type: "quiz",
  notebook_id: "[UUID]",
  output_format: "json",
  output_path: "/path/to/[course]-quiz.json"
})
```

## Important Notes

### Rate Limiting

- **Space out requests**: Wait 10-15 seconds between artifact creations
- Creating too many quickly = "Could not create" errors
- If error: wait 30 seconds and retry

### Parallel Processing

- Extract all lesson URLs first, then batch open in parallel (10-15 tabs)
- Close tabs after extracting to manage memory
- Process in batches if many lessons

### Language Setting

- Set `language: "Thai"` for all artifacts
- Content in English but output in Thai

### Course Naming

- Use course slug for file naming: `[slug].md`
- Location: `/home/burapat/ALL-I-NEED/Learning/Bussiness/[COURSE_SLUG]/`

## Expected Output per Course

| Artifact | Format | Language |
|----------|--------|----------|
| Podcast | MP4/MP3 | Thai |
| Slide Deck | PDF | Thai |
| Infographic | PNG | Thai |
| Quiz | JSON | Thai |
| Notes | MD | Thai |

## Batch Processing Multiple Courses

For multiple courses:

```javascript
// 1. Process course 1 completely
// 2. Wait 1 minute
// 3. Process course 2

// Keep at least 1 minute between courses
// Keep at least 15 seconds between artifacts
```

## Troubleshooting

### BrowserOS

- **Page not loading**: Refresh and wait
- **Content hidden**: Check expand/collapse toggles
- **Video blocked**: Verify enrollment

### NotebookLM

- **"Could not create"**: Rate limit - wait and retry
- **Slow processing**: Increase wait_timeout
- **Artifact stuck**: Poll again, may need 5+ minutes

### Coursera

- **Can't enroll**: Check login status
- **Content locked**: Select "Full Course, No Certificate"
- **Session expired**: Re-authenticate

## Quick Reference

| Action | Tool Call |
|--------|-----------|
| Open course | `browseros_new_page` |
| Enroll | `browseros_click` |
| Get content | `browseros_get_page_content` |
| Create notebook | `notebooklm_notebook_create` |
| Add source | `notebooklm_source_add` |
| Create audio | `notebooklm_studio_create` (type: audio) |
| Create slides | `notebooklm_studio_create` (type: slide_deck) |
| Create infographic | `notebooklm_studio_create` (type: infographic) |
| Create quiz | `notebooklm_studio_create` (type: quiz) |
| Check status | `notebooklm_studio_status` |
| Download | `notebooklm_download_artifact` |

## Workflow Summary

```
1. browseros_new_page → Course URL
2. browseros_click → Enroll button
3. JS console → Extract all lesson URLs
4. browseros_new_page (parallel) → Open lessons
5. browseros_get_page_content → Get transcript/reading
6. Write → Save as [slug].md
7. notebooklm_notebook_create → New notebook
8. notebooklm_source_add → Add file (wait: true)
9. notebooklm_studio_create → Create 4 artifacts (wait 15s between)
10. notebooklm_studio_status → Poll for completion
11. notebooklm_download_artifact → Download each artifact
```

End of skill.