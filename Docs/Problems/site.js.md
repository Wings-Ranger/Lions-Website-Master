# Problems Report: site.js

**Global JavaScript issues:** See [js.md](js.md) for detailed analysis of JS architecture patterns and best practices.

## File-specific issues noted

### 1. Navigation markup embedded as long JavaScript string
- Noted because: NAV_HTML is a large array of HTML fragments.
- Why this matters: Harder to read, harder to validate, and easy to introduce quoting mistakes.
- Better way: Use a template literal for readability, or move shared nav into an HTML partial generated at build time.
- Refresher path: Review templating options for static sites (partials/includes/build tools).

### 2. Mobile and desktop nav link lists are duplicated inside one string
- Noted because: Same links appear twice in NAV_HTML (sidebar and top-nav).
- Why this matters: Link additions require editing two blocks and can drift.
- Better way: Define one links data array and render both structures from that array.
- Refresher path: Learn data-driven DOM rendering patterns.

### 3. Current-page matching is path-fragile
- Noted because: It compares raw href to last path segment only.
- Why this matters: Can fail with alternate start pages, case differences, query strings, or trailing slash variants.
- Better way: Normalize both values before comparison and allow known aliases.
- Refresher path: Study URL parsing and normalization with URL API.

### 4. No guard against duplicate nav injection
- Noted because: Script always injects nav at startup.
- Why this matters: If script executes twice, duplicate nav/backdrop elements appear.
- Better way: Check for existing nav marker element before injecting.
- Refresher path: Learn idempotent DOM initialization patterns.

### 5. Runtime critical dependency on JavaScript for core navigation
- Noted because: All pages rely on JS-generated nav.
- Why this matters: Navigation can disappear if script loading fails.
- Better way: Use server-side include/static build partials, or no-script fallback links.
- Refresher path: Review progressive enhancement and graceful degradation.

## Quick maintenance checklist
- Keep DOM initialization idempotent.
- Render links from data, not duplicated literals.
- Normalize URL matching for active link detection.
- Prefer partial templates where possible for shared markup.
