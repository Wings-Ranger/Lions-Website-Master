# Problems Report: Home.html

**Cross-file issues:** See [html.md](html.md) for shared issues (meta description, nav JS dependency, XHTML namespace)

## File-specific issues noted

### 1. Title has a double space
- Noted because: The page title is currently "Harcourt  Lions Australia" (double space).
- Why this matters: Small quality issue that can leak into browser tabs, bookmarks, and SEO snippets.
- Better way: Normalize to a single-space title value and keep title format consistent across all pages.
- Refresher path: Review page metadata best practices on MDN (title + description consistency).

### 2. Editable class is present but not used as a stable styling contract
- Noted because: main has class editable but stylesheet does not define a clear reusable content container style for it.
- Why this matters: Future pages may become inconsistent because the class implies a shared layout contract that does not exist.
- Better way: Define a content container rule for this class (max-width, spacing, readable line length), or remove the class.
- Refresher path: Review content container patterns in CSS architecture.

### 3. images.css stylesheet is loaded though most utilities are disabled
- Noted because: images.css is still linked, but most utilities in that file are commented out.
- Why this matters: Extra request/mental overhead with limited value.
- Better way: Keep only active image defaults in style.css, or keep images.css but document it as active-only baseline.
- Refresher path: Learn CSS file responsibility split (base vs utilities vs components).

## Quick maintenance checklist
- Keep metadata complete (title + description).
- Keep critical nav resilient (works even if JS fails).
- Keep class names meaningful and backed by active CSS contracts.
