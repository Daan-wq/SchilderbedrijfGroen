# Hero Typographic

## Background Lightness
`white` — White background to emphasize typography.

## Structure
- **Container**: Full-width section with very generous top padding.
- **Layout**: 2-column asymmetric split (`grid-cols-1 md:grid-cols-[2fr_1fr]` or similar).

## Columns
1. **Left Column (Dominant)**:
   - Contains: Heading (H1, extremely large, heavy weight).
   - Alignment: Left.
   - Occupies ~60-70% of width.
2. **Right Column (Supporting)**:
   - Contains: Body text paragraphs (compact, narrow line-length).
   - Vertical alignment: Center or top relative to heading.
   - Optional: Small CTA link or button.

## Typography
- H1: Display size, may span multiple lines.
- Body: Standard size, high contrast with whitespace around it.

## Responsive Behavior
- **Desktop (md+)**: 2-column split.
- **Mobile (<md)**: Stack vertically (Heading above Body text).
