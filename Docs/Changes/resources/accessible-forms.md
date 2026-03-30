# Accessible Forms

Last updated: 2026-03-30 20:44:23 +11:00

**Used in:** changesV1 §6 · changesV2 contact-us.html

---

## What it is

A well-structured form pairs every input with a visible label, groups related inputs, and uses the correct input type for each situation. This makes forms usable by screen readers, keyboard-only users, and auto-fill tools.

---

## When to use it

Every `<input>`, `<select>`, and `<textarea>` on any form.

---

## How to implement it

### Every input needs a `<label>`

```html
<!-- Correct: label linked by matching for/id -->
<label for="user-email">Email address</label>
<input type="email" id="user-email" name="email" />
```

The `for` attribute on `<label>` must match the `id` attribute on the input. Clicking the label then focuses the input — larger click area and screen reader support.

### Use `<fieldset>` and `<legend>` for grouped inputs

When inputs are part of a single question (especially radio buttons and checkboxes), wrap them in `<fieldset>` with a `<legend>` describing the group:

```html
<fieldset>
    <legend>Did you enjoy the event?</legend>

    <label>
        <input type="radio" name="enjoyed" value="yes" /> Yes
    </label>
    <label>
        <input type="radio" name="enjoyed" value="no" /> No
    </label>
</fieldset>
```

A screen reader announces the legend text before each radio option, so the user hears: *"Did you enjoy the event? Yes (radio button)"*.

### Radio buttons vs checkboxes

| Control | Use when |
|---|---|
| `<input type="radio">` | Only one answer is valid (Yes/No, one choice from a list) |
| `<input type="checkbox">` | Multiple answers can be selected simultaneously |

The old Lions V4 contact form used two checkboxes for a Yes/No question — this was incorrect because both could be checked at the same time. Radios enforce the single-choice constraint.

### `<select>` dropdowns

```html
<label for="event-type">Which event?</label>
<select id="event-type" name="event-type">
    <option value="">-- Select an event --</option>
    <option value="fundraiser">Fundraiser</option>
    <option value="meeting">Meeting</option>
</select>
```

Always include a blank/prompt option so the user must actively make a choice.

### Avoid `action="mailto:..."` on forms

The `mailto:` form action relies on the user's local email client, which is often not configured. Use a form service instead (e.g. Formspree, Netlify Forms) for reliable submission.

---

## Common mistakes

- Inputs without labels — screenreaders can't announce what the field is for.
- Using `placeholder` as a substitute for `<label>` — placeholder disappears when the user starts typing.
- Checkboxes for a single-answer question instead of radio buttons.
- Nested `<form>` elements — invalid HTML and breaks submission behaviour.
- `action="mailto:..."` — unreliable in modern environments.

---

## Learn more

| Resource | URL |
|---|---|
| MDN — `<form>` | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form |
| MDN — `<fieldset>` | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset |
| W3C WAI — Forms tutorial | https://www.w3.org/WAI/tutorials/forms/ |
| WebAIM — Creating accessible forms | https://webaim.org/techniques/forms/ |
| YouTube — Search "accessible HTML forms" (coding2go, Kevin Powell, Web Dev Simplified) | https://www.youtube.com/results?search_query=accessible+html+forms+tutorial |

---

## Quick practice exercise

1. Build a feedback form with: a text input (name), an email input, a select dropdown, and a Yes/No radio group.
2. Make sure every input has a `<label>` with a matching `for`/`id` pair.
3. Wrap the radio group in `<fieldset>` + `<legend>`.
4. Navigate the entire form using only Tab and arrow keys — confirm it is fully usable without a mouse.
