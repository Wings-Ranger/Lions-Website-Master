
# Harcourt Lions Australia – Client Guide (No‑Code) 

**Purpose:** Explain how this website works and what you (a non‑technical editor) can safely change. Keep this README with the website files for easy reference.

---

## 1) What’s in the website folder?

- **Home.html** – The homepage (hero banner, CTA buttons, upcoming event cards, and the large billboard image).
- **about-us.html** – About the club.
- **membership.html** – Membership info page.
- **meetings.html** – Meetings info page.
- **contact-us.html** – Contact details and a map showing the Harcourt area.
- **gallery.html** – Photo gallery (placeholder images — replace with real club photos).
- **projects.html** – Community projects and activities listing with status badges.
- **404.html** – Shown automatically when a visitor follows a broken link.
- **sitemap.html** – Human-readable site map page and navigational aid.
- **resources.html** – Downloadable resources for members, volunteers, and event teams (placeholder files — replace with real club materials).
- **site.js** – Injects shared navigation and footer into every page, and controls mobile menu behavior.
- **style.css** – Controls the site's look and behavior (colors, spacing, mobile sidebar, animations, print styles, etc.).
- **images/** – Folder for pictures (e.g., `lions-logo.jpg`, `lions-billboard.jpg`).

> Any page you open in a browser automatically uses `style.css` to look right.

---

## 2) How to view the site locally

1. Keep all files in the same folder structure shown above.
2. Double‑click **Home.html** to open it in Chrome, Edge, or Safari.
3. Click links in the top menu to move between pages.
4. On a phone (or by making the browser window narrow), tap the **☰** button to open the slide‑in menu.

---

## 3) How the navigation works (plain English)

- On **computers**, you see the full menu across the top.
- On **phones**, the menu becomes a **☰ (hamburger)** button. Tapping it opens a **sidebar** from the right.
- Tap **✕** or the shaded **backdrop** to close the sidebar.
- While the sidebar is open, the page behind it won’t scroll, keeping attention on the menu.

**You don’t need to touch the code** for this. It works by adding/removing a small label (`sidebar-open`) behind the scenes.

---

## 4) What you can safely change (and how)

Below are common edits you can do yourself. Always **save a backup** before larger changes.

### A) Change words and headings (page content)
- Open the page file (e.g., `about-us.html`) in a text editor (Notepad / TextEdit / VS Code).
- Find the text you want to change between tags like `<h1> … </h1>` (headings) or `<p> … </p>` (paragraphs). Edit the words and **Save**.
- Refresh the browser to see the update.

### B) Change or add links in the top menu
- The navigation menu is defined in one place: **site.js**. Open `site.js` and look for the two lists labelled `sidebar` (mobile) and `top-nav` (desktop). Some menu items have dropdown submenus (e.g., "Membership" contains "Resources" as a child link). Each menu item looks like: `'    <li><a href="meetings.html">Meetings</a></li>',`
- To rename a label, change the text between `>` and `</a>`.
- To add a **new page** (e.g., `events.html`), copy an existing line in **both** menu lists and update the `href` and label text.
- Add the new page to the **footer** quick-links section in `site.js` the same way.

### C) Swap images (logo/banner/photos)
- Put your new file in the **images/** folder.
- Update the `src` in the HTML image tag, e.g.: `<img src="images/your-new-file.jpg" …>`.
- Keep filenames simple (letters, numbers, dashes) and avoid spaces.
- Aim for images under ~300–500 KB for faster loading.

### D) Change colors, fonts, or spacing (site‑wide look)
- Open **style.css**.
- Menu colors live around the `nav` and `nav a` sections.
- Spacing (margins/padding) is also set in `style.css`.
- Footer position is controlled by the `body`, `main`, and `.site-footer` rules (sticky on short pages, natural flow on long pages).
- If you’re unsure, change **one thing at a time**, save, and refresh to review.

### E) Control when the hamburger shows
- The hamburger is hidden on wide screens and shown on small screens.
- The cutoff is set in `style.css` under `@media (max-width: 800px)`. You can adjust `800px` if needed.

### F) Adjust the slide‑in menu behavior (optional)
- The sidebar **slides in** using a smooth animation defined in `style.css` under the `.sidebar` rules.
- You can make the slide faster/slower by changing `transition: transform 0.3s ease-in-out;` (e.g., `0.2s` for faster, `0.5s` for slower).
- If you prefer the menu to **overlay** the page without moving content, remove the `padding-right` from `body.sidebar-open` in `style.css`.

### G) Turn motion down for sensitive users (optional)
- If you want to minimize motion for visitors who prefer reduced animation, ask us to add a small block using the `prefers-reduced-motion` media query. This keeps your site considerate without changing your design.

### H) Accessibility quick wins
- When you replace images, keep helpful **alt text**, e.g., `alt="Harcourt Lions logo"`.
- Use clear link text (e.g., `Contact Us`) rather than vague text (e.g., `Click here`).

---

## 5) What **not** to change (or do so with care)

- Don’t remove the `<link rel="stylesheet" href="style.css">` line at the top of each page—without it, pages lose their styles.
- Don’t remove `<script src="site.js" defer></script>` at the bottom of pages—navigation and footer are injected from this script.
- Avoid moving files out of the folder structure shown. If paths change, images and styles may stop working.

---

## 6) Adding a new page (step‑by‑step)

1. Copy an existing `.html` file (e.g., `about-us.html`) and rename it (e.g., `projects.html`).
2. Open the new file and change:
   - The `<title>…</title>` text at the top (browser tab title).
   - The visible heading and page content.
3. Add the page to navigation in **site.js** (not each HTML page):
   - Add one link in the desktop `top-nav` list and one in the mobile `sidebar` list.
   - Add the page to the footer quick-links list in `site.js`.
4. Save and refresh.

---

## 7) Troubleshooting (quick checks)

- **Menu button missing?** Make the browser window narrower; it only shows on small screens. Check `@media (max-width: 800px)` in `style.css`.
- **Sidebar not sliding?** Ensure `site.js` is still loaded on the page and the `.sidebar` styles in `style.css` are intact.
- **Footer not at the bottom on short pages?** Check that `body` is a flex column, `main` uses `flex: 1 0 auto`, and `.site-footer` uses `margin-top: auto` in `style.css`.
- **An image doesn’t show?** Confirm the image is in the `images/` folder and the `src` path is exact (including file extension like `.jpg` or `.png`).
- **Weird layout after edits?** Undo your last change or compare with a backup; small typos in HTML/CSS can break layout.

---

## 8) Suggested workflow for safe edits

1. **Back up** the folder (copy it) before making changes.
2. Make **one small change** at a time.
3. **Save** and **refresh** the browser to check.
4. If it looks wrong, press **Undo** in your editor or revert to your backup.

---

## 9) Quick reference – where to edit what

- **Words, headings, and links:** the relevant `.html` file(s)
- **Top navigation and footer links:** `site.js`
- **Colors/spacing/fonts/animations:** `style.css`
- **Images:** put files in `images/` and update `<img src="…">` in the `.html`
- **Mobile menu timing/feel:** the `.sidebar` transition in `style.css`
- **Show/hide hamburger width:** `@media (max-width: 800px)` in `style.css`

---

## 10) Need help?

- Add new sections or pages,
- Refresh colors/typography site‑wide,
- Improve accessibility (screen‑reader labels, reduced motion), or
- Optimize performance (image sizes, loading behavior),


---

**You’ve got this!** With this guide, you can update copy, images, links, and basic look‑and‑feel—no coding required. Keep changes small, test as you go, and reach out anytime for help.
