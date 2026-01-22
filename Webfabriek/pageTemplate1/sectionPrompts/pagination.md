# Pagination

## Background Lightness
`white` — Matches page background.

## Structure
- **Container**: Slim section, centered or left-aligned.
- **Padding**: Moderate vertical padding.

## Internal Layout
- **Flex Row**: `flex`, `items-center`, `gap-2` to `gap-4`.

## Elements
- **Page Numbers**: Text links or buttons, minimal styling.
  - Current page: Different style (bold, filled bg, or underline).
  - Other pages: Ghost or outline style.
- **Nav Arrows**: Previous/Next buttons (icon or text), subtle style.
- **Ellipsis**: Indicates skipped pages if many exist.

## Styling
- Minimal visual weight.
- No heavy borders or backgrounds.
- Functional, utilitarian design.

## Responsive Behavior
- Remains visible at all breakpoints.
- On mobile, may simplify to just Prev/Next with current page indicator.
