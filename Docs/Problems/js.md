# Problems Report: JavaScript Files

## Why this report exists
This file covers issues specific to JavaScript architecture and maintainability. There is one main script (`site.js`), but the issues here are foundational to how the whole site functions.

## Affected files
- site.js

---

## JavaScript-level issues

### Issue: Navigation markup embedded as long string literal

**Noted because:** `site.js` defines `NAV_HTML` as a large array of HTML string fragments that are joined together.

**Why this matters:**
- Very hard to read and maintain HTML inside JavaScript strings.
- Syntax highlighting for HTML is lost (it is just text).
- Easy to introduce quoting/escaping mistakes.
- No visual validation of HTML structure.
- When markup changes, the JavaScript file must be edited.

**Better way:**

**Option 1 — Use template literals (quick improvement):**
```js
const NAV_HTML = `
<nav aria-label="Primary">
  <ul class="sidebar" id="mobile-sidebar" aria-label="Mobile menu">
    <li class="close-btn">
      <button type="button" class="icon-button close-sidebar" aria-label="Close menu">✕</button>
    </li>
    <!-- ... rest of nav ... -->
  </ul>
</nav>
`;
```

Better readability, but still not ideal.

**Option 2 — Move to static partial (better):**

Create `shared-nav.html` with the nav markup, then:
- Use a build tool (11ty, Hugo, Jekyll) to inject it into each page at build time, OR
- Use a server-side include to render it at runtime

This separates markup from logic and allows normal HTML editing.

**Refresher path:** Learn static site generators and template partials.

---

### Issue: Duplicate nav links (mobile and desktop)

**Noted because:** The same links (`Home`, `Membership`, `Meetings`, etc.) appear twice in `NAV_HTML` — once for sidebar, once for top-nav.

**Why this matters:**
- When adding/removing a link, two places must be updated.
- Easy to accidentally drift (e.g., sidebar link text differs from desktop).
- Harder to add new nav items consistently.

**Better way:**

Define links as data and render both structures from that data:

```js
const NAV_LINKS = [
    { text: 'Home', url: 'Home.html' },
    { text: 'Membership', url: 'membership.html' },
    { text: 'Meetings', url: 'meetings.html' },
    { text: 'About Us', url: 'about-us.html' },
    { text: 'Contact Us', url: 'contact-us.html' },
    { text: 'Site Map', url: 'sitemap.html' }
];

function renderNav() {
    const sidebarLinks = NAV_LINKS
        .map(link => `<li><a href="${link.url}">${link.text}</a></li>`)
        .join('\n');
    
    const topnavLinks = NAV_LINKS
        .map(link => `<li class="hideonmobile"><a href="${link.url}">${link.text}</a></li>`)
        .join('\n');
    
    return `
        <nav>
            <ul class="sidebar">${sidebarLinks}</ul>
            <ul class="top-nav">${topnavLinks}</ul>
        </nav>
    `;
}
```

Now adding a link is a single change to `NAV_LINKS`.

**Refresher path:** Learn data-driven rendering and DRY (Do Not Repeat Yourself) principle.

---

### Issue: Current-page matching is brittle

**Noted because:** The script compares `window.location.pathname.split('/').pop()` against href values to detect the active page.

**Why this matters:**
- Fails if pages have query strings (e.g. `Home.html?v=5` won't match href `Home.html`).
- Case-sensitive comparison (Linux servers: `home.html` ≠ `Home.html`).
- Trailing slash variations break matching.
- Doesn't work with directory-based URLs (e.g. `/pages/home/` index).

**Better way:**

Normalize both values before comparing:

```js
function normalizeUrl(url) {
    return url.toLowerCase().split('?')[0].split('#')[0];
}

var currentPath = window.location.pathname.toLowerCase().split('/').pop() || 'home.html';
var navLinks = document.querySelectorAll('nav a[href]');

navLinks.forEach(function (link) {
    var linkPath = normalizeUrl(link.getAttribute('href'));
    if (linkPath === currentPath) {
        link.setAttribute('aria-current', 'page');
    }
});
```

**Refresher path:** Learn URL parsing with the `URL` API and robust matching patterns.

---

### Issue: No guard against duplicate nav injection

**Noted because:** The script always calls `insertAdjacentHTML` without checking if nav already exists.

**Why this matters:**
- If JavaScript runs twice, duplicate nav and backdrop elements are created.
- Multiple nav elements confuse accessibility tools.
- Extra DOM nodes consume memory.

**Better way:**

Check for existing nav before injecting:

```js
// Check if nav is already in the page
if (document.querySelector('nav') === null) {
    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
}
```

Or use a marker element:

```js
if (!document.getElementById('site-nav-injected')) {
    const container = document.createElement('div');
    container.id = 'site-nav-injected';
    container.innerHTML = NAV_HTML;
    document.body.insertBefore(container.firstChild, document.body.firstChild);
}
```

**Refresher path:** Learn idempotent initialization patterns.

---

### ~~Issue: Runtime critical dependency removes nav on JS failure~~ RESOLVED (V7)

**Status:** Resolved. All 10 HTML pages now include `<noscript>` fallback navigation blocks. See `changesV7.md` and `Problems/html.md` for details.

**Original issue:** All HTML pages depended entirely on `site.js` to provide navigation with no fallback.

---

## Quick maintenance checklist for JavaScript
- [ ] Move nav markup to template partial or template literal.
- [ ] Extract links to data array and render both nav structures from it.
- [ ] Normalize URL matching (lowercase, strip query strings).
- [ ] Guard against duplicate injection.
- [x] ~~Add no-script fallback nav in HTML pages.~~ (Resolved V7)
