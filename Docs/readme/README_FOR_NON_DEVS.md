
# Harcourt Lions Australia – Website Guide (Plain‑English)

This short guide explains **how your website works** in simple, non‑technical language. If you're not a coder, this is for you. You’ll learn what each file does, how the navigation works on phones vs. computers, and how to make small edits safely.

---

## 1) What’s in this website?

Your site is made of a few **HTML pages** (the content) and **CSS styles** (the look & layout):

- **Home.html** – the homepage. It also contains the mobile menu button (the “hamburger”) and a big banner image.  
- **membership.html** – the Membership page.  
- **meetings.html** – the Meetings page.  
- **about-us.html** – the About Us page.  
- **style.css** – the main style sheet that controls colors, spacing, the top menu bar, and how the mobile sidebar slides in.  
- **images/** – a folder with pictures, e.g. the Lions logo and billboard image. *(Folder not listed here, but referenced by the pages.)*

> If you open any page in a browser (like Chrome), it will automatically load `style.css` to style the page.

---

## 2) How to open the site on your computer

1. Put all the files in one folder.  
2. Double‑click **Home.html**. It will open in your web browser.  
3. Use the menu at the top to move between pages.

> Tip: When you make a change, **save the file** and press **Refresh** in the browser.

---

## 3) The top navigation (menu)

The top bar is shared across pages so the site feels consistent.

- On **computers and tablets** (wide screens), you see links: *Home, Membership, Meetings, About Us*.  
- On **phones** (narrow screens), those links **hide** and a **☰ hamburger button** appears on the right. Tapping it opens the **sidebar menu**.

### The sidebar menu (on phones)
- Slides in from the **right side** when opened.  
- Shows the same links as the top bar.  
- Has a **✕ Close** button at the top; tapping outside on the dim background also closes it.  
- While open, the page behind it **doesn’t scroll**, so the focus stays on the menu.

> All of this behavior is controlled by CSS in **style.css**. The JavaScript simply **adds** or **removes** a tag on the page called `sidebar-open` to trigger the styles.

---

## 4) The big banner image

On **Home.html** there is a full‑width image:

```html
<img class="lionsbill" src="images/lions-billboard.jpg" alt="Lionsclub.org" title="Lions Club"/>
```

- It automatically resizes to the width of the screen.  
- If you replace the picture, keep the same filename or update the `src="..."` path to your new image.

---

## 5) What each file contains

### Home.html (homepage)
- The **top bar** (navigation), the **hamburger** button, and the **sliding sidebar** markup.  
- A **backdrop** (the dim background) that appears behind the sidebar and closes it when clicked.  
- A small script with two functions: `showSidebar()` and `hideSidebar()`. These toggle the sidebar by adding/removing `sidebar-open` on the `<body>`.

### membership.html / meetings.html / about-us.html
- Each page repeats the same **navigation** so the menu is always available.  
- Page‑specific text and images can be added where you see the `<body>` content area.  
- They link to the same **style.css** so they look the same as Home.

### style.css (the site’s look & layout)
- **General resets** (remove default margins/padding).  
- **Top bar styles** (colors, spacing, link appearance).  
- **Responsive rules** so the layout changes on small screens.  
- **Sidebar animation**: the sidebar starts just off‑screen and **slides in** with a smooth animation when `sidebar-open` is present on `<body>`.  
- **Backdrop**: a semi‑transparent layer that fades in behind the sidebar.  
- **Scroll lock**: while the sidebar is open, the page behind it stops scrolling.

---

## 6) How the mobile menu works (in plain English)

1. You tap the **☰** button.  
2. The page adds a label `sidebar-open` to the `<body>` element.  
3. CSS sees `sidebar-open` and:
   - Slides the sidebar into view.  
   - Fades in the dim **backdrop**.  
   - Hides the **hamburger** button while the menu is open.  
   - (Optionally) adds some right padding to the page so nothing hides under the menu on medium screens.
4. You tap **✕** or the backdrop: the label is removed; the sidebar slides away and the page returns to normal.

You don’t need to edit the animation code—just know it’s there to make the menu feel smooth and professional.

---

## 7) Editing text, links, and images (safely)

- **Change text:** open a page (e.g., `about-us.html`) in a text editor (Notepad, TextEdit, or VS Code). Find the text between tags like `<p> ... </p>` or the link text between `<a> ... </a>`, then edit and save.  
- **Change a link:** find `<a href="...">Link name</a>`. Update the text inside the tag to change what visitors see, or change the `href` to point to a different page.  
- **Swap a picture:** copy your new image into the `images` folder, then change the `src` path in the `<img ...>` tag to your new filename. Keep images reasonably sized for faster loading.

> Tip: If something looks broken, undo your last change and refresh. Small, careful edits are safest.

---

## 8) File & folder structure (recommended)

```
project-folder/
├── Home.html
├── membership.html
├── meetings.html
├── about-us.html
├── style.css
└── images/
    ├── lions-logo.jpg
    └── lions-billboard.jpg
```

Keep everything together exactly like this so links to images and styles continue to work.

---

## 9) Common questions

**Q: Can I add a new page?**  
Yes. Duplicate one of the existing pages, rename it (e.g., `projects.html`), change the `<title>` text in the `<head>`, update the visible heading/text, then add a new menu link pointing to it.

**Q: Can I change colors or fonts?**  
Yes, in `style.css`. Look for the `nav` and `nav a` sections for menu colors. If you’re not sure, make a backup before experimenting.

**Q: The menu button doesn’t show. Why?**  
It only appears on screens **narrower than 800px**. On wider screens the full set of links is shown instead.

**Q: The sidebar isn’t sliding. Why?**  
Make sure you **didn’t change** the small script in `Home.html`. The functions must add/remove `sidebar-open` on `<body>`, and the `.sidebar` styles in `style.css` must be present.

---

## 10) Quick glossary

- **HTML**: the content and structure (headings, paragraphs, links, images).  
- **CSS**: the presentation (colors, sizes, spacing, animations).  
- **Responsive**: layouts that adjust for phones, tablets, and desktops.  
- **Hamburger**: the ☰ button that opens the mobile menu.  
- **Sidebar / Off‑canvas**: a panel that slides in from the side.  

---

## 11) Where to make which change

- **Change words or headings** → edit the relevant *.html* file.  
- **Change look/feel or menu behavior** → edit *style.css*.  
- **Change the big banner image** → replace the file in *images/* and update the `<img>` tag in *Home.html*.

---

### Appendix: exact files you shared (snapshots)

- **Home.html** – 45 lines  
- **membership.html** – 42 lines  
- **meetings.html** – 42 lines  
- **about-us.html** – 43 lines  
- **style.css** – 149 lines  

> This guide is written to be **non‑technical** on purpose. If you want me to tailor it with your club’s actual copy (mission, meeting times, officers), send me the text and I’ll place it in the right spots.

