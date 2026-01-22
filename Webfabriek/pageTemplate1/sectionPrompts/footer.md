# Footer

## Background Lightness
`dark` — Dark solid color container (near-black, dark blue, or brand dark).

## Structure
- **Container**: Full-width, dark background color container.
- **Outer Shape**: May have large `border-radius` (rounded top corners or all corners) if styled as a "floating" element with side margins.
- **Padding**: Generous internal padding (`py-12` to `py-20`, `px-6` to `px-12`).

## Internal Layout
- **Grid**: Multi-column layout (`grid-cols-2 md:grid-cols-4`).
- **Column 1 (Personal)**: Avatar image (circular) + Name/Title + Short text or CTA.
- **Columns 2-4 (Links)**: Vertical stacks of navigation links grouped by category, each with a small heading.

## Typography
- **Headings**: Small, uppercase or bold, low contrast against dark bg.
- **Links**: Light text color, subtle hover effect.

## Responsive Behavior
- **Desktop (md+)**: 4-column grid.
- **Mobile (<md)**: Stack columns vertically or use 2x2 grid.
