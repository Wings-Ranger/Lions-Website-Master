# Lions V5.1 AI Change Log (V4)

## Scope
- Baseline: changesV3.md completion (cross-file problem reports created)
- Generated: 2026-03-25

## Summary
Refactored problem reports to eliminate cross-file issue duplication by creating shared architecture documents and updating individual files to reference them. This reduces maintenance burden and centralizes architectural guidance.

---

## Files Changed

### Problems/html.md (NEW)
- **Key edits:** Created shared HTML architecture report
- **Content:** Cross-cutting issues affecting all 6 HTML pages:
  - Missing meta description on all pages
  - Navigation is JavaScript-dependent only (no no-script fallback)
  - XHTML namespace is unnecessary for HTML5 projects
- **Why it changed:** Eliminate repetition of identical issues across Home.html.md, about-us.html.md, contact-us.html.md, meetings.html.md, membership.html.md, sitemap.html.md

### Problems/css.md (NEW)
- **Key edits:** Created shared CSS architecture report
- **Content:** Cross-cutting issues affecting stylesheet quality and organization:
  - Global list selectors (`ol`, `.bulletlist`) can leak between page contexts
  - Mixed formatting and indentation style throughout
  - Sub-pixel border thickness (0.1px) is unreliable across displays
  - Transitioning non-animatable property (overflow)
  - Fixed pixel sizing dominates nav layout, reduces accessibility
- **Why it changed:** Centralize CSS patterns and best practices; provide single source of truth for stylesheet architecture

### Problems/js.md (NEW)
- **Key edits:** Created shared JavaScript architecture report
- **Content:** Cross-cutting issues affecting JS resilience and maintainability:
  - Navigation markup embedded as long string literal (hard to read/maintain)
  - Duplicate nav links in two blocks (sidebar + top-nav)
  - Current-page matching is brittle (case-sensitive, query-string sensitive)
  - No guard against duplicate nav injection
  - Runtime critical dependency removes nav on script failure
- **Why it changed:** Document JavaScript architectural patterns and single point-of-failure concerns

### Problems/Home.html.md (UPDATED)
- **Key edits:** Removed 3 repeating issues, added reference to [html.md](html.md)
- **Before:** Listed missing meta description, JS-only nav, XHTML namespace
- **After:** References shared html.md for those 3 issues; keeps only file-specific issues (double space title, editable class unused, images.css overhead)
- **Why it changed:** Reduce duplication; individual file now focuses on unique concerns

### Problems/about-us.html.md (UPDATED)
- **Key edits:** Replaced all 4 general HTML issues with reference to [html.md](html.md)
- **Before:** Had separate sections for meta description, XHTML, nav JS, maintenance markers
- **After:** Single line referring to [html.md](html.md); file is now minimal (all issues are cross-file)
- **Why it changed:** This page has no file-specific issues; all problems are architectural and shared

### Problems/contact-us.html.md (UNCHANGED)
- **Note:** No changes made; file contains 5 unique, file-specific form and contact data issues that don't overlap with other HTML files

### Problems/meetings.html.md (UPDATED)
- **Key edits:** Converted issue #4 (metadata) to reference [html.md](html.md)
- **Before:** Listed missing metadata parity as standalone issue
- **After:** Inline reference to shared metadata baseline in [html.md](html.md)
- **Why it changed:** Metadata is a cross-file concern; link to authoritative source reduces duplication

### Problems/membership.html.md (UPDATED)
- **Key edits:** Reorganized issues to reference [css.md](css.md) and [html.md](html.md)
- **Before:** Issue #1 was "global ol styling"; Issue #4 was "missing meta description"
- **After:** Moved CSS scoping to reference [css.md](css.md); metadata references [html.md](html.md)
- **Why it changed:** Reduce repetition of architectural concerns; keep only data-model and content-chunking issues file-specific

### Problems/sitemap.html.md (UPDATED)
- **Key edits:** Replaced issues #2-3 (metadata, nav JS) with reference to [html.md](html.md)
- **Before:** Included standalone missing metadata and nav JS dependency sections
- **After:** Issue #1 image-only sitemap and Issue #2 data reusability remain; added link to [html.md](html.md) for other two issues
- **Why it changed:** Image-only sitemap is sitemap-specific; nav/metadata are architectural and shared

### Problems/style.css.md (UPDATED)
- **Key edits:** Added header reference to [css.md](css.md)
- **Before:** Filed all 6 CSS issues under "Why this file was reviewed"
- **After:** Added: `**Global CSS issues:** See [css.md](css.md) for detailed analysis...`
- **Why it changed:** Direct readers to shared CSS architecture patterns; individual file retains specific selector/formatting issues

### Problems/images.css.md (UPDATED)
- **Key edits:** Added header reference to [css.md](css.md); added inline links to shared patterns in issues #3-4
- **Before:** Standalone issues about file responsibility and utility naming
- **After:** Issues reference [css.md](css.md) for context on stylesheet modularization and CSS scoping best practices
- **Why it changed:** Link utility naming guidance to broader CSS architecture patterns

### Problems/site.js.md (UPDATED)
- **Key edits:** Added header reference to [js.md](js.md)
- **Before:** Filed all JS issues as standalone concerns
- **After:** Added: `**Global JavaScript issues:** See [js.md](js.md) for detailed analysis...`
- **Why it changed:** Direct readers to centralized JS architecture guidance; keep file focused on nav string markup specifics

---

## Behavioral Impact

- **Navigation:** No changes to runtime behavior; all 6 HTML pages continue to function identically
- **Problem documentation:** Users can now:
  - Read [html.md](html.md) once to understand all 6 page constraints
  - Read [css.md](css.md) to understand stylesheet architecture across both CSS files
  - Read [js.md](js.md) to understand nav injection resilience and maintenance patterns
  - Reference individual file reports for unique, actionable issues without re-reading architectural context
- **Maintenance:** Future updates to cross-file issues need only update 3 shared files, not 9+ individual files
- **Navigation:** Problem reports now form a graph structure (individual files → shared architecture docs) instead of isolated documents

---

## Risks / Follow-ups

- [ ] Verify all cross-file issue references are accurate (spot-check individual files that were updated)
- [ ] Consider creating a Problems/README.md index explaining the shared + individual file structure
- [ ] Monitor: future problem audits should add issues to shared files first, then individual files second
- [ ] Potential follow-up: Implement fixes from [html.md](html.md), [css.md](css.md), [js.md](js.md) starting with high-priority issues (form submission, nav fallback)

