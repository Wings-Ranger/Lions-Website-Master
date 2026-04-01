# Problems Report: gallery.html

## File-specific issues

### Issue: All gallery images are placeholders

**Noted because:** The 9 gallery `<figure>` items use placeholder images and captions.

**Why this matters:**
- Publishing with placeholder media looks incomplete.
- Placeholder `<figcaption>` text will appear in search results and screen readers.

**Better way:**
Replace placeholder images and captions with real club photos before going live. Keep descriptive `alt` text on each `<img>`.

---

### Cross-file issues

This page also inherits the cross-file issues documented in:
- `html.md` — missing meta description, XHTML namespace.
- `css.md` — shared CSS issues.

## Quick maintenance checklist
- [ ] Replace placeholder gallery images with real club photos.
- [ ] Update `<figcaption>` text and `alt` attributes to match real content.
- [ ] Add `<meta name="description">` to `<head>`.
- [ ] Remove XHTML namespace from `<html>` tag.
