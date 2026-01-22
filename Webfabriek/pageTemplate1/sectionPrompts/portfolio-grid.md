# Portfolio Grid

## Background Lightness
`white` — White or very light background.

## Structure
- **Container**: Full-width section with generous padding.
- **Layout**: 2-column symmetric grid (`grid-cols-1 md:grid-cols-2`).
- **Gap**: Consistent gutter between cards (`gap-4` to `gap-6`).

## Grid Item (Card)
- **Shape**: Landscape rectangle, rounded corners (`rounded-xl`).
- **Aspect**: 16:9 or 4:3.
- **Background**: Image fills entire card (`object-cover`).

## Overlay Content
- **Position**: Absolute, bottom-left corner of card.
- **Contains**:
  - Title (H3, white, bold).
  - Tags (pill-shaped labels, semi-transparent or outline style).
- **Gradient**: Dark-to-transparent gradient overlay at bottom for text legibility.

## Responsive Behavior
- **Desktop (md+)**: 2-column grid.
- **Mobile (<md)**: 1-column stack.
