# Lions V5.3 AI Change Log (V5)

## Scope
- Baseline: changesV4.md completion (cross-file problem reports created)
- Generated: 2026-03-30

## Summary
Added placeholder content and new features to demonstrate the full capability of the site to the Harcourt Lions Club prior to a client meeting. All new content uses placeholder or example data — real club details should replace it once provided. No existing content was removed or changed in meaning.

Themes this pass:
1. **Home page content** — Hero section, CTA buttons, and upcoming event cards added to the landing page.
2. **Map embed** — OpenStreetMap iframe embedded on the contact page showing the Harcourt, VIC area.
3. **Footer** — Site-wide footer (club description, quick-links, social media placeholders, newsletter widget) injected automatically via `site.js` on every page.
4. **Gallery page** — New `gallery.html` with a responsive photo grid using placeholder images.
5. **Projects page** — New `projects.html` with status-badged project cards.
6. **Back-to-top button** — Scroll-aware fixed button injected site-wide via `site.js`.
7. **404 page** — Styled error page with a return-home CTA button.
8. **Print styles** — `@media print` block added to `style.css` for clean printing of the meetings table.

---

## Files Changed

### site.js (UPDATED)

| # | Area / Description of Change | Why it is better |
|---:|---|---|
| 1 | **Added** `gallery.html` link to the mobile sidebar `<ul class="sidebar">` nav list. | The gallery page is now reachable from every page via the mobile menu. |
| 2 | **Added** `projects.html` link to the mobile sidebar `<ul class="sidebar">` nav list. | The projects page is now reachable from every page via the mobile menu. |
| 3 | **Added** `gallery.html` link (with class `hideonmobile`) to the desktop `<ul class="top-nav">` nav list. | The gallery page is now reachable from every page via the desktop menu. |
| 4 | **Added** `projects.html` link (with class `hideonmobile`) to the desktop `<ul class="top-nav">` nav list. | The projects page is now reachable from every page via the desktop menu. |
| 5 | **Added** Section 3 — `FOOTER_HTML` string array defining the full footer markup (club description column, quick-links column, social links, newsletter form with `aria-live` status message). Inserted via `mainEl.insertAdjacentHTML('afterend', ...)` after the `<main>` element. | One definition, applied to all pages automatically; consistent footer everywhere. |
| 6 | **Added** newsletter submit handler — prevents default form submission, validates input value exists, writes a confirmation message to the `aria-live` region, and clears the field. | Demonstrates newsletter functionality without a backend; accessible to screen readers via `aria-live="polite"`. |
| 7 | **Added** Section 4 — back-to-top button injection. Inserts `<button class="back-to-top">` at `beforeend` of `<body>`; wires `scroll` listener (passive) to toggle `hidden` attribute at ≥300 px; wires `click` to `window.scrollTo({ top: 0, behavior: 'smooth' })`. | Improves navigation on long pages; passive scroll listener avoids jank. |

---

### Home.html (UPDATED)

| # | Area / Description of Change | Why it is better |
|---:|---|---|
| 1 | **Replaced** `<h1>Harcourt Lions Australia</h1>` (bare heading) with a full `<section class="hero">` block containing an `<h1>`, a subtitle paragraph, and two CTA `<a>` buttons (`.btn.btn-primary` → membership.html; `.btn.btn-secondary` → meetings.html). | Gives visitors an immediate call to action; the semantic `<h1>` is preserved inside the hero so heading hierarchy is unchanged. |
| 2 | **Retained** the `<section class="billboard">` image below the hero. | Keeps the club's existing branding visual in place. |
| 3 | **Added** `<section class="events-section">` containing three `<article class="event-card">` elements (Fundraiser BBQ, Annual General Meeting, Community Clean-Up Day). Each card has a `.event-badge`, an `<h3>`, a `.event-meta` date/location line, and a description paragraph. All dates are listed as "TBA". | Demonstrates an events listing pattern; club can replace placeholder text with real event details at any time. |

---

### contact-us.html (UPDATED)

| # | Area / Description of Change | Why it is better |
|---:|---|---|
| 1 | **Added** `<section class="map-section">` with an OpenStreetMap `<iframe>` centred on Harcourt, VIC 3453. Attributes: `loading="lazy"`, `referrerpolicy="no-referrer"`, `title` for accessibility. | No API key or third-party account required; shows visitors exactly where the club meets. `lazy` defers loading until the section is visible. |
| 2 | **Added** "View larger map" link below the iframe pointing to OpenStreetMap (opens in new tab with `rel="noopener noreferrer"`). | Provides a fallback for users whose browsers block iframes. |

---

### style.css (UPDATED)

| # | Area / Description of Change | Why it is better |
|---:|---|---|
| 1 | **Added** `.btn`, `.btn-primary`, `.btn-secondary` rules with hover and `focus-visible` states. Shared button class used on hero CTAs, 404 page, and newsletter form. | Consistent button appearance across all new and future interactive elements from one definition. |
| 2 | **Added** `.hero`, `.hero h1`, `.hero-sub`, `.hero-cta` rules. Hero uses `linear-gradient` background, `clamp()` font size, and `flex-wrap` CTA row. | `clamp()` scales the heading smoothly between viewport widths; flexbox CTA stacks vertically on small screens. |
| 3 | **Added** `.events-section`, `.event-cards` (CSS Grid, `auto-fill`, `minmax(280px,1fr)`), `.event-card`, `.event-meta`, `.event-badge` rules. | CSS Grid automatically reflows cards into 1, 2, or 3 columns depending on viewport width — no media queries needed. |
| 4 | **Added** `.map-section`, `.map-embed` (rounded corners, border, overflow hidden), and caption link styles. | Polishes the map without altering the iframe's own styling. |
| 5 | **Added** `.gallery-section`, `.gallery-grid` (CSS Grid, `auto-fill`, `minmax(260px,1fr)`), `.gallery-item`, `.gallery-item img` (fixed height, `object-fit: cover`, hover scale transform), `.gallery-item figcaption` rules. | `object-fit: cover` keeps the grid uniform regardless of source image dimensions; hover effect is achieved with `transform` rather than layout changes for smooth animation. |
| 6 | **Added** `.projects-section`, `.project-cards` (CSS Grid), `.project-card`, `.project-header`, `.status-badge`, `.status-active`, `.status-complete`, `.status-upcoming` rules. | Colour-coded status badges give visitors an at-a-glance summary without reading full descriptions. |
| 7 | **Added** `.page-header` rules for consistent heading/intro padding on gallery and projects pages. | Provides a reusable layout component for any future full-width content pages. |
| 8 | **Added** `.site-footer`, `.footer-inner` (CSS Grid, `auto-fit`, `minmax(200px,1fr)`), `.footer-col`, `.social-links`, `.social-link`, `.newsletter-heading`, `.newsletter-row`, `.newsletter-msg`, `.footer-bottom` rules. | Footer layout adapts from 3 columns on desktop to a single stacked column on mobile with no extra breakpoint rules needed. |
| 9 | **Added** `.back-to-top` button (fixed position, right/bottom, `hidden` attribute rule, hover, and `focus-visible` states). | Fixed overlay button does not affect page flow; `[hidden] { display: none }` ensures the button disappears when the JS removes it. |
| 10 | **Added** `.not-found` (centered layout for 404 page) rules. | Keeps the error page on-brand and uses the same button component class. |
| 11 | **Added** `.sr-only` utility class (1×1 px clip pattern). Used on the newsletter email label so it is announced by screen readers but invisible visually. | Industry-standard accessible label hiding pattern. |
| 12 | **Added** `@media print` block hiding `nav`, `.sidebar`, `.backdrop`, `.back-to-top`, `.site-footer`, `.hero-cta`, `.events-section`, `.map-embed`, and `.newsletter-form`; resets `body` padding and `a` color; enforces solid `table` borders. | Ensures the meetings schedule prints cleanly without navigation chrome or decorative elements. |

---

### gallery.html (NEW)

| # | Area / Description of Change | Why it is better |
|---:|---|---|
| 1 | **Created** new page with `<section class="gallery-section">` and `<div class="gallery-grid">` containing 9 `<figure class="gallery-item">` elements. Each figure has a placeholder image from `picsum.photos` with a descriptive `alt` attribute, `loading="lazy"`, and a `<figcaption>`. | Demonstrates photo gallery layout to the club; placeholder images can be swapped for real club photos by replacing the `src` values. |
| 2 | **Added** `<div class="page-header">` intro block with `<h1>` and subtitle paragraph. | Keeps the page layout consistent with the projects page. |
| 3 | **Added** `<script src="site.js" defer>` to inherit the injected nav and footer. | All pages share the same nav and footer without any code duplication. |

---

### projects.html (NEW)

| # | Area / Description of Change | Why it is better |
|---:|---|---|
| 1 | **Created** new page with `<section class="projects-section">` containing 6 `<article class="project-card">` elements covering: Food Bank Support (Active), Lions Youth Camp (Upcoming), Harcourt Beautification (Active), School Bursary Program (Active), Emergency Relief Fund (Active), Lions Eyeglass Recycling (Completed). | Gives the club a visual list of community activities to present to prospective members and the public. |
| 2 | **Added** `.project-header` div with `<h2>` and a colour-coded `.status-badge` per card. | Status badges communicate project state at a glance. |
| 3 | **Added** `<div class="page-header">` intro block with `<h1>` and subtitle. | Consistent with gallery page layout. |

---

### 404.html (NEW)

| # | Area / Description of Change | Why it is better |
|---:|---|---|
| 1 | **Created** minimal error page with `<main class="not-found">` containing `<h1>`, a friendly message paragraph, and a `.btn.btn-primary` link back to `Home.html`. | Replaces whatever server default error page the host would otherwise show; keeps branding and nav consistent. |
| 2 | **Added** `aria-labelledby` on `<main>` pointing to the `<h1 id="error-heading">`. | Screen readers announce the page purpose immediately when focus lands on `<main>`. |
