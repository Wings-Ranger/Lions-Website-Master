# Problems Report: contact-us.html

## Why this file was reviewed
This report lists maintainability and code-quality issues found in contact-us.html, why they matter, and better implementation patterns.

## Issues noted

### 1. Form has no action/method contract
- Noted because: The form element has no action and no method.
- Why this matters: Submit behavior is undefined for production and easy to forget during deployment.
- Better way: Explicitly set method and endpoint, or wire to a known form service.
- Refresher path: Review form submission architecture for static websites.

### 2. Contact fields are placeholders
- Noted because: Email/phone/address appear as sample values.
- Why this matters: Data integrity and trust issue; creates false contact points.
- Better way: Move contact details to a single shared data source (JSON or config include) and render from one place.
- Refresher path: Learn single-source-of-truth pattern for repeated business data.

### 3. Form lacks core identity fields
- Noted because: There is no name or email input for respondent identity.
- Why this matters: Submitted feedback may be unusable or not actionable.
- Better way: Add required name/email fields with validation.
- Refresher path: Review minimum viable feedback form design.

### 4. Line-break based layout inside form
- Noted because: The form uses explicit br elements for spacing.
- Why this matters: Layout concerns are mixed into HTML structure, making redesign harder.
- Better way: Replace line breaks with semantic grouping and CSS spacing rules.
- Refresher path: Study form layout with field wrappers and utility spacing classes.

### 5. Missing explicit required/validation messaging
- Noted because: Inputs are optional by default and there is no user guidance.
- Why this matters: Data quality becomes inconsistent and user errors increase.
- Better way: Add required attributes where needed, helper text, and client-side validation messaging.
- Refresher path: Learn accessible form validation patterns.

## Quick maintenance checklist
- Define submit endpoint and method.
- Add required identity fields.
- Keep layout in CSS, not br tags.
- Validate and document required fields.
