# Problems Report: HTML Files (Cross-File Issues)

## Why this report exists
These issues appear in **all 10 HTML pages** in this project. Rather than repeating the same issue 10 times, we list them once here with the affected files.

## Affected files
- Home.html
- about-us.html
- contact-us.html
- meetings.html
- membership.html
- sitemap.html
- gallery.html
- projects.html
- 404.html
- resources.html

---

## Cross-file issues

### Issue: Missing meta description on all pages

**Noted because:** None of the HTML pages include a `<meta name="description">` tag.

**Why this matters:** 
- Search engines lose control over result snippets.
- Uneven metadata quality makes the project look incomplete.
- Harder to audit and enforce metadata standards.

**Better way:**

Add a shared metadata block to the head of all pages:

```html
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="[page-specific 150-160 character description]" />
    <title>[Page Title]</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="images.css" />
</head>
```

Create a template meta-set and apply to each page:
- **Home.html:** "Welcome to Harcourt Lions Club — serving our community through practical volunteer action..."
- **about-us.html:** "Learn about Harcourt Lions Club's mission, values, and community impact..."
- **meetings.html:** "Weekly meeting schedule for Harcourt Lions Club members..."
- **membership.html:** "Join Harcourt Lions Club. Learn membership requirements and steps to become a member..."
- **contact-us.html:** "Contact Harcourt Lions Club directly. Email, phone, address, and feedback form..."
- **sitemap.html:** "Sitemap of all pages on the Harcourt Lions Club website..."
- **gallery.html:** "Photo gallery of Harcourt Lions Club events and community activities..."
- **projects.html:** "Community projects and volunteer activities by Harcourt Lions Club..."
- **resources.html:** "Downloadable resources for Harcourt Lions Club members and volunteers..."
- **404.html:** "Page not found — return to Harcourt Lions Club homepage..."

**Refresher path:** Review SEO metadata best practices and static-site metadata templates.

---

### ~~Issue: Navigation is JavaScript-dependent only (all pages)~~ RESOLVED (V7)

**Status:** Resolved. All 10 HTML pages now include `<noscript>` fallback navigation blocks providing basic navigation when JavaScript is unavailable. See `changesV7.md` for details.

**Original issue:** All pages depended on `site.js` to inject the nav at runtime with no fallback.

---

### Issue: XHTML namespace declaration is unnecessary

**Noted because:** All pages include `xmlns="http://www.w3.org/1999/xhtml"` on the `<html>` tag despite being served as HTML5.

**Why this matters:**
- Adds legacy-looking noise that confuses new contributors.
- Not harmful, but not standard for modern HTML5.
- Makes pages slightly longer without benefit.

**Better way:**

Replace:
```html
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
```

With:
```html
<html lang="en">
```

**Refresher path:** Review HTML5 doctype and root element conventions. The `xmlns` attribute is only required if you are serving as true XHTML (application/xhtml+xml), which this project does not do.

---

## Quick maintenance checklist for all HTML files
- [ ] Add meta description to each page head.
- [x] ~~Add no-script fallback nav or migrate to static/server-side nav generation.~~ (Resolved V7)
- [ ] Remove XHTML namespace from html tag.
