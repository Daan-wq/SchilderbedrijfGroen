# FAQ Accordion

## Background Lightness
`white` — White or very light background.

## Structure
- **Container**: Centered on page, constrained max-width (`max-w-2xl` to `max-w-3xl`).
- **Padding**: Generous vertical padding.

## Header (Optional)
- Section Title (H2) centered above accordion list.
- Short intro text (optional).

## Accordion List
- **Layout**: Vertical stack (`flex flex-col`).
- **Gap**: Small gap or dividers between items (`divide-y`).

## Accordion Item
- **Collapsed State**:
  - Question text (bold or medium weight).
  - Chevron/plus icon on the right.
  - Full-width clickable area.
- **Expanded State**:
  - Question text visible.
  - Answer text revealed below (body text, may contain lists or links).
  - Icon rotates or changes to minus/chevron-up.

## Responsive Behavior
- Layout remains 1-column at all breakpoints.
- Max-width constraint centers content on wide screens.
