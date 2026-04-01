# Problems Report: resources.html

## File-specific issues

### Issue: All download links point to `#`

**Noted because:** Every resource card's download button uses `href="#"` as a placeholder.

**Why this matters:**
- Visitors clicking "Download" are taken nowhere.
- Creates a confusing user experience if published before real files are attached.

**Better way:**
Replace `#` with actual file paths once club-approved materials are available:
```html
<a href="downloads/membership-info-pack.pdf" class="btn btn-primary">Download PDF</a>
```

---

### Issue: No structured metadata for resources

**Noted because:** Resource cards use free-text paragraphs for version and format info.

**Why this matters:**
- Harder to maintain and filter as the number of resources grows.
- No machine-readable data for search or indexing.

**Better way:**
Consider adding `data-` attributes or a small JSON data source for resource metadata if the page grows beyond a handful of items.

---

### Cross-file issues

This page also inherits the cross-file issues documented in:
- `html.md` — missing meta description, XHTML namespace.
- `css.md` — shared CSS issues.

## Quick maintenance checklist
- [ ] Replace placeholder download links with real file paths.
- [ ] Add `<meta name="description">` to `<head>`.
- [ ] Remove XHTML namespace from `<html>` tag.
