# Problems Report: sitemap.html

## Why this file was reviewed
This report lists maintainability and code-quality issues found in sitemap.html, why they matter, and better implementation patterns.

## Issues noted

### 1. Sitemap is image-only
- Noted because: The sitemap is rendered as a single image rather than text links.
- Why this matters: Hard to maintain, not searchable, and harder for accessibility tools.
- Better way: Provide a semantic list of page links; keep the image only as optional visual aid.
- Refresher path: Review accessible sitemap patterns.

### 2. Linkable sitemap data not reusable
- Noted because: No machine-readable list of pages exists in this file.
- Why this matters: Cannot reuse sitemap data for footer links, crawl checks, or automated validation.
- Better way: Maintain one canonical page-list source and generate sitemap views from it.
- Refresher path: Learn static-site data-source patterns.

### 3. Missing metadata and nav JS dependency (see [html.md](html.md))
- Refer to [html.md](html.md) for shared issues affecting all HTML pages.

## Quick maintenance checklist
- Replace image-only sitemap with semantic links.
- Centralize page-list data source (JSON or config).
- Check [html.md](html.md) for metadata and nav fallback requirements.
