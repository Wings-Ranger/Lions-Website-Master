# Problems Report: membership.html

## Why this file was reviewed
This report lists maintainability and code-quality issues found in membership.html, why they matter, and better implementation patterns.

## Issues noted

### 1. Very long list items reduce maintainability
- Noted because: Requirement lines are verbose and hard to scan.
- Why this matters: Future edits are more error-prone and consistency is harder to enforce.
- Better way: Split policy text into shorter bullet points and use linked detail pages for long explanations.
- Refresher path: Study content chunking for technical and public-facing docs.

### 2. No structured data model for membership steps
- Noted because: Steps are hardcoded directly in HTML.
- Why this matters: Reordering or reusing steps across other pages requires manual edits.
- Better way: Store steps in JSON or shared include and render once.
- Refresher path: Learn basic content-as-data pattern for static sites.

### 3. Global list styling scope leak (see [css.md](css.md))
- Refer to [css.md](css.md) for details on scoping list styles to page containers.

### 4. Missing metadata (see [html.md](html.md))
- Refer to [html.md](html.md) for the shared metadata baseline pattern.

## Quick maintenance checklist
- Scope list styles to page-level container.
- Keep bullet copy concise and modular.
- Move repeatable list data to shared source.
- Add full metadata baseline.
