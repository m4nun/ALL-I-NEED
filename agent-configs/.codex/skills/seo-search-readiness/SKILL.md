---
name: seo-search-readiness
description: Prepare web apps for search indexing, Google Search Console, site-name display, favicon/search branding, metadata, structured data, robots.txt, and sitemap readiness. Use when improving SEO foundations before launch or debugging why Google still shows an old site name, icon, snippet, or sitemap status.
---

# SEO Search Readiness

## Core Workflow

1. Establish canonical production identity.
   - Choose one canonical host, usually `https://www.example.com` or the apex domain.
   - Use that host consistently in metadata, canonical URLs, sitemap, robots, auth redirects, and provider settings.
   - Redirect alternate hosts to the canonical host.

2. Add reliable metadata.
   - Set title, description, canonical URL, Open Graph, and Twitter metadata.
   - Use concise product positioning in descriptions.
   - Avoid private app routes in public metadata and sitemap.

3. Add structured data.
   - Use `WebSite` with preferred `name` and `alternateName`.
   - Use `Organization` for brand identity and logo.
   - Use `SoftwareApplication` or another relevant schema for product capabilities.
   - Keep JSON-LD honest and aligned with visible product behavior.

4. Prepare favicon and app icon signals.
   - Serve a stable square favicon at a crawlable URL.
   - Provide PNG and, when useful, ICO fallback.
   - Reference the icon in framework metadata and manifest.
   - Expect Google favicon updates to lag after deploy.

5. Verify robots and sitemap.
   - Serve `/robots.txt`.
   - Serve `/sitemap.xml` with only public canonical URLs.
   - Keep legal, pricing, and marketing pages indexable.
   - Exclude dashboards, accounts, private chats, and API routes.

6. Guide Search Console setup.
   - Prefer a domain property when possible.
   - Otherwise submit the sitemap under the exact canonical host property.
   - Use URL Inspection and Request Indexing for the homepage and sitemap.

## Google Reality Checks

- Google chooses the final result appearance; metadata improves signals but does not force display.
- Site name and favicon can take days or weeks to update.
- Sitelinks and feature-list style results are not guaranteed.
- `Couldn't fetch` in Search Console can mean property/host mismatch even when the sitemap returns `200`.

## Debug Checklist

- `curl -I https://canonical-host/sitemap.xml`
- `curl -I https://canonical-host/robots.txt`
- inspect homepage `<head>` for canonical, icon, manifest, and JSON-LD
- verify sitemap URLs match the Search Console property host
- confirm non-canonical host redirects consistently
- confirm public legal pages and pricing page are included if desired

## Final Response Checklist

Explain:

- which signals were added or fixed
- what Google still controls
- exact Search Console URLs/actions to use
- expected delay before search results update
