# Embedded Maps and Safe External Links

Last updated: 2026-03-30 20:53:11 +11:00

**Used in:** changesV5 contact-us.html (`iframe` map + external map link)

---

## What it is

Embedding maps with `<iframe>` can improve discoverability, but links that open new tabs should include security attributes.

This project uses an OpenStreetMap embed with `loading="lazy"`, `referrerpolicy`, and a fallback link using `target="_blank"` + `rel="noopener noreferrer"`.

---

## When to use it

- Contact/location pages.
- Cases where users need directions quickly.

---

## How to implement it

### Embedded map iframe

```html
<iframe
  title="Map showing Harcourt, Victoria"
  src="https://www.openstreetmap.org/export/embed.html?..."
  width="50%"
  height="50%"
  style="border:0;"
  loading="lazy"
  referrerpolicy="no-referrer"
></iframe>
```

### Safe external link fallback

```html
<a href="https://www.openstreetmap.org/..." target="_blank" rel="noopener noreferrer">
  View larger map
</a>
```

---

## Common mistakes

- Missing `title` on iframes (accessibility issue).
- Opening new tabs without `rel="noopener noreferrer"`.
- Omitting `loading="lazy"` and hurting initial page performance.

---

## Learn more

| Resource | URL |
|---|---|
| MDN - `<iframe>` | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe |
| MDN - `rel="noopener"` | https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noopener |
| MDN - Lazy loading | https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading |
| YouTube - Search "iframe accessibility title noopener" | https://www.youtube.com/results?search_query=iframe+accessibility+title+noopener |
