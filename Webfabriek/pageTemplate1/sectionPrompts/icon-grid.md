# Icon Grid

## Background Lightness
`white` — White or very light background.

## Structure
- **Container**: Full-width section with generous padding.
- **Layout**: 3-column symmetric grid (`grid-cols-1 md:grid-cols-3`).
- **Gap**: Moderate horizontal and vertical gap (`gap-8`).

## Grid Item
- **Stack**: Vertical flex column (`flex flex-col items-center` or `items-start`).
- **Contains**:
  1. Icon: Fixed size, may have background shape (circle or rounded square).
  2. Title: H3 or bold text, short.
  3. Description: Body text, 2-3 lines max.
- **Alignment**: Centered or left-aligned (consistent across all items).

## Styling Options
- Icons may be colored or monochrome.
- Items may have a subtle card background or be transparent.

## Responsive Behavior
- **Desktop (md+)**: 3-column grid.
- **Tablet (sm-md)**: 2-column grid.
- **Mobile (<sm)**: 1-column stack.
