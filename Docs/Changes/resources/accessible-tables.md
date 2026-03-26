# Accessible Tables

**Used in:** changesV1 §7 · changesV2 meetings.html

---

## What it is

HTML tables present data in rows and columns. Without proper structure, a screen reader reads a table as a stream of values with no context about which column or row each cell belongs to. Adding `<caption>`, `<thead>`, `<tbody>`, and `scope` attributes gives screen readers and search engines the context they need to interpret the data correctly.

---

## When to use it

Use a `<table>` whenever you are showing **tabular data** — information that has a natural row-and-column structure (schedules, pricing, comparisons, scores).

Do **not** use a `<table>` for page layout. Use CSS Grid or Flexbox for that.

---

## How to implement it

### Full accessible table structure

```html
<table>
    <!-- Describes what the table is about -->
    <caption>Weekly meeting schedule</caption>

    <!-- Header row(s) -->
    <thead>
        <tr>
            <th scope="col">Day</th>
            <th scope="col">Time</th>
            <th scope="col">Location</th>
        </tr>
    </thead>

    <!-- Data rows -->
    <tbody>
        <tr>
            <td>Monday</td>
            <td>7:00 PM – 9:00 PM</td>
            <td>Harcourt Community Hall</td>
        </tr>
        <tr>
            <td>Wednesday</td>
            <td>7:00 PM – 9:00 PM</td>
            <td>Harcourt Community Hall</td>
        </tr>
    </tbody>
</table>
```

### What each part does

| Element / Attribute | Purpose |
|---|---|
| `<caption>` | Announced by screen readers before the table content; like a heading for the table. |
| `<thead>` | Groups header rows; browsers and screen readers treat it as column labels. |
| `<tbody>` | Groups data rows; required for correct table structure. |
| `<th scope="col">` | Marks a cell as a column header; `scope="col"` tells screen readers which direction the header applies. |
| `<th scope="row">` | Use this instead if a cell is a **row** header (e.g. a name in the first column). |

---

## Common mistakes

- Skipping `<caption>` — the table has no announced title.
- Skipping `<thead>` and `<tbody>` — loses structural grouping.
- Using `<td>` for header cells instead of `<th>` — headers lose their label role.
- Forgetting `scope` — screen readers can't tell whether a header describes a column or a row.

---

## Learn more

| Resource | URL |
|---|---|
| MDN — `<table>` | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table |
| MDN — `<caption>` | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption |
| W3C WAI — Tables tutorial | https://www.w3.org/WAI/tutorials/tables/ |
| WebAIM — Creating accessible tables | https://webaim.org/techniques/tables/ |
| YouTube — Search "accessible HTML tables" (coding2go, Kevin Powell, Web Dev Simplified) | https://www.youtube.com/results?search_query=accessible+html+tables+tutorial |

---

## Quick practice exercise

1. Build a table showing a class timetable (Day, Subject, Room).
2. Add `<caption>`, `<thead>`, `<tbody>`, and `scope="col"` on every header.
3. Open the page with a screen reader (Windows Narrator: Win+Ctrl+Enter) and navigate to the table. Verify it announces column headers when reading cells.
