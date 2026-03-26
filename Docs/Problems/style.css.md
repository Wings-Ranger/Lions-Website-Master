# Problems Report: style.css

**Global CSS issues:** See [css.md](css.md) for detailed analysis of CSS architecture patterns.

## File-specific issues noted

### 1. Obsolete selector remains after nav refactor
- Noted because: .sidebar .close-btn a styles an anchor, but close control is now a button.
- Why this matters: Dead code increases confusion and maintenance effort.
- Better way: Remove stale anchor rule and style .close-sidebar button directly.
- Refresher path: Do periodic dead-selector audits after markup refactors.

### 2. Global ordered-list styling can leak to unrelated pages
- Noted because: ol selector is global.
- Why this matters: Any future ordered list inherits membership-specific spacing/font choices.
- Better way: Scope list rules to a page/container class.
- Refresher path: Review component-scoped CSS architecture.

### 3. Very low border thickness value
- Noted because: border-bottom uses 0.1px.
- Why this matters: Sub-pixel border rendering is inconsistent across displays/browsers.
- Better way: Use 1px with softer color/opacity if subtle look is desired.
- Refresher path: Learn cross-device rendering behavior for fractional pixel borders.

### 4. Inconsistent indentation and formatting style
- Noted because: Mixed spacing and brace formatting appears throughout.
- Why this matters: Harder diffs and increased friction for team edits.
- Better way: Apply formatter/prettier style and rely on editorconfig for consistency.
- Refresher path: Review CSS formatting standards and automated formatting workflow.

### 5. Transitioning non-animatable property
- Noted because: body has transition on overflow.
- Why this matters: Overflow changes do not animate in a meaningful way; adds noise.
- Better way: Remove overflow transition and animate opacity/transform on overlay elements instead.
- Refresher path: Study which CSS properties animate efficiently.

### 6. Fixed pixel sizing dominates nav layout
- Noted because: Many nav values use fixed px sizes.
- Why this matters: Less adaptable typography and spacing across zoom and accessibility settings.
- Better way: Use rem for typography and spacing scale tokens.
- Refresher path: Learn fluid and scalable CSS sizing systems.

## Quick maintenance checklist
- Remove dead selectors after markup changes.
- Scope page-specific styles.
- Avoid fractional hairline borders unless intentionally tested.
- Standardize formatting.
- Prefer animatable properties and scalable units.
