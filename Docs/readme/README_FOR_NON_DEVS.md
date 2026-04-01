# Harcourt Lions Australia - Website Guide (Plain English)

This guide explains how to update the website safely without technical experience.

## 1) What files do what?

- `Home.html` - Homepage with hero section and upcoming events.
- `about-us.html` - About page.
- `membership.html` - Membership information.
- `meetings.html` - Meeting times table.
- `contact-us.html` - Contact details and map.
- `gallery.html` - Photo gallery page.
- `projects.html` - Projects and community activities page.
- `resources.html` - Downloadable resources for members and volunteers.
- `404.html` - Page shown when a link is broken.
- `site.js` - Adds shared navigation and footer to every page.
- `style.css` - Controls layout, colours, spacing, responsive behavior, and footer positioning.
- `images/` - Folder for image files.

## 2) How to view the site

1. Keep all files in the same folder structure.
2. Open `Home.html` in a browser.
3. Use the menu links to move between pages.

## 3) How the menu works

- Desktop: full top menu is shown.
- Mobile: menu links collapse into a hamburger button.
- The menu and footer are injected by `site.js`.

If `site.js` is missing from a page, the menu and footer will not appear.

## 4) How to edit content safely

- Text changes: edit the relevant HTML page.
- Image changes: put images in `images/` and update `<img src="...">`.
- Styling changes: edit `style.css`.
- Navigation/footer links: edit link lists in `site.js`.

Make one small edit at a time, save, and refresh the page.

## 5) Footer behavior (important)

The site uses a sticky-footer layout:

- On short pages, the footer sits at the bottom of the screen.
- On long pages, the footer appears after the content.

This is controlled by three CSS rules in `style.css`:

- `body` uses a vertical flex layout.
- `main` uses `flex: 1 0 auto`.
- `.site-footer` uses `margin-top: auto`.

## 6) Troubleshooting quick checks

- Menu missing: confirm `<script src="site.js" defer></script>` is present.
- Footer not at bottom on short pages: verify the 3 footer-layout rules above.
- Mobile menu not opening: check `site.js` is loaded and `.sidebar` CSS is unchanged.
- Images not showing: verify filename/path in `src` exactly matches the file in `images/`.

## 7) Safe workflow

1. Back up the folder.
2. Make one change.
3. Save and refresh.
4. If layout breaks, undo the last change.

This approach avoids most issues and makes mistakes easy to fix.
