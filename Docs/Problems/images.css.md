# Problems Report: images.css

**Global CSS issues:** See [css.md](css.md) for architecture and scoping principles that apply here.

## File-specific issues noted

### 1. File purpose is currently mixed
- Noted because: Header says entire file commented out, but active baseline rules still run.
- Why this matters: Messaging conflict can confuse maintainers about what is live.
- Better way: Update top comment to clearly state: baseline active, utility block disabled.
- Refresher path: Practice clear file-level documentation conventions.

### 2. Large commented block acts as inactive library
- Noted because: Many utility classes remain in comments.
- Why this matters: Adds cognitive load and increases file length without runtime value.
- Better way: Move disabled utilities into a separate archive file or remove and recover via version control when needed.
- Refresher path: Learn CSS codebase pruning and archival strategies.

### 3. Potential responsibility overlap with style.css
- Noted because: Base image behavior could live in main stylesheet while this file mostly stores disabled utilities.
- Why this matters: Split responsibility becomes unclear for future edits.
- Better way: Decide one of two patterns: (a) keep active image base in style.css only, or (b) keep a dedicated image module with only active rules. Also see [css.md](css.md) for stylesheet architecture principles.
- Refresher path: Review CSS file modularization patterns.

### 4. Utility class naming is broad and future-collision prone
- Noted because: Generic names like img-small, img-large, img-center are easy to conflict with future utility systems.
- Why this matters: Migration to utility frameworks or component libraries becomes harder.
- Better way: Namespace utility classes (for example, u-img-small) if retained. Also see [css.md](css.md) for CSS scoping best practices.
- Refresher path: Learn utility naming conventions and namespace strategy.

## Quick maintenance checklist
- Clarify active vs inactive blocks in comments.
- Archive or remove dead utility code.
- Keep clear ownership boundaries between CSS files.
- Namespace reusable utilities.
