# Problems Report: meetings.html

## Why this file was reviewed
This report lists maintainability and code-quality issues found in meetings.html, why they matter, and better implementation patterns.

## Issues noted

### 1. Stylesheet include order is inconsistent
- Noted because: This file links images.css before style.css, while most pages load style.css first.
- Why this matters: Inconsistent cascade order can cause subtle styling drift and hard-to-trace overrides.
- Better way: Enforce one global CSS load order across all pages.
- Refresher path: Review CSS cascade and dependency ordering.

### 2. Meeting location values are opaque
- Noted because: Location field uses VMR only.
- Why this matters: Harder for future maintainers to know if value is abbreviation, placeholder, or real location code.
- Better way: Store location values with clear labels or use abbreviation plus full value.
- Refresher path: Learn content model conventions and editorial style guides.

### 3. No machine-readable event structure
- Noted because: Table is human-readable only and lacks structured event annotations.
- Why this matters: Limits future automation (calendar export, event cards, filtering).
- Better way: Move schedule data to JSON and render table from a small script.
- Refresher path: Practice data-driven rendering for repeatable tabular content.

### 4. Missing metadata (see [html.md](html.md))
- Refer to [html.md](html.md) for the shared metadata baseline pattern.

## Quick maintenance checklist
- Normalize CSS link order.
- Clarify location data semantics.
- Consider table from shared data source.
- Add complete metadata.
