# Blog Grid

## Background Lightness
`light` — Very light (off-white or light gray) background.

## Structure
- **Container**: Full-width section with generous padding.
- **Layout**: 3-column symmetric grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Gap**: Consistent gutter (`gap-6` to `gap-8`).

## Grid Item (Card)
- **Shape**: Vertical rectangle (portrait orientation), white background.
- **Elevation**: Subtle shadow or border to separate from page bg.
- **Corners**: Rounded (`rounded-xl`).

## Card Content (Top to Bottom)
1. **Image**: Fills top portion, landscape aspect, rounded top corners.
   - **Overlay Tag**: Category label positioned inside image (bottom-left), semi-transparent dark pill.
2. **Meta**: Date or reading time, small subtle text.
3. **Title**: H3, bold, 2-3 lines max.
4. **Author**: Flex row with circular avatar image + name.

## Responsive Behavior
- **Desktop (lg+)**: 3-column grid.
- **Tablet (md-lg)**: 2-column grid.
- **Mobile (<md)**: 1-column stack.
