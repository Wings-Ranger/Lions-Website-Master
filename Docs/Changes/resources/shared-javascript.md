# Shared JavaScript (DRY Principle)

Last updated: 2026-03-30 20:44:23 +11:00

**Used in:** changesV1 §2 · changesV2 all HTML files · changesV3 group 1

---

## What it is

DRY stands for **Do Not Repeat Yourself**. When the same logic appears in multiple files, moving it into one shared file means fixing a bug or making an update only ever requires one edit.

In this site, the sidebar open/close script was copy-pasted into all six HTML pages. Moving it into `site.js` and loading it with `<script src="site.js" defer></script>` made the behaviour consistent everywhere.

---

## When to use it

- Any time you find yourself copying the same block of code into more than one file.
- Navigation behaviour, form validation helpers, utility functions.
- Any JS that needs to work the same way on every page.

---

## How to implement it

1. Identify the repeated code block across your HTML files.
2. Create a new `.js` file (e.g. `site.js`) at the root of the project.
3. Paste the shared code into that file — wrap it in an IIFE to avoid polluting global scope:
    ```js
    (function () {
        // your shared code here
    })();
    ```
4. Load it from every HTML page in the `<body>` just before `</body>`:
    ```html
    <script src="site.js" defer></script>
    ```
5. Remove the now-duplicated inline scripts from each HTML file.

**`defer` explained:** The `defer` attribute tells the browser to download the script in the background but only execute it after the HTML is fully parsed. This means the script can safely query DOM elements without needing to wait for `DOMContentLoaded`.

---

## Common mistakes

- Forgetting `defer` — without it, the script runs before the DOM exists and `querySelector` returns `null`.
- Leaving old inline scripts behind — if both the inline and the external script run, you get duplicate event listeners.
- Using `var` in global scope across multiple `<script>` tags — they collide. An IIFE prevents this.

---

## Learn more

| Resource | URL |
|---|---|
| MDN — Scripts and loading | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script |
| MDN — IIFE pattern | https://developer.mozilla.org/en-US/docs/Glossary/IIFE |
| web.dev — Loading JavaScript | https://web.dev/articles/efficiently-load-third-party-javascript |
| YouTube — Search "JavaScript external script file DRY" (coding2go, Web Dev Simplified, Traversy Media) | https://www.youtube.com/results?search_query=javascript+external+script+file+DRY+tutorial |

---

## Quick practice exercise

1. Create two HTML pages, each with an identical inline `<script>` that shows an alert.
2. Move that script to `shared.js`.
3. Load it from both pages with `<script src="shared.js" defer></script>`.
4. Verify both pages still show the alert, then remove the inline scripts.
