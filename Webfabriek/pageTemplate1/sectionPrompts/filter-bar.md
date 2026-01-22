# Filter Bar

## Background Lightness
`white` — Matches page background.

## Structure
- **Container**: Full-width, slim section.
- **Padding**: Moderate vertical padding.

## Internal Layout
- **Flex Row**: `flex`, `justify-center`, `flex-wrap`.
- **Gap**: Small horizontal gap (`gap-2` to `gap-4`).

## Filter Items (Buttons/Pills)
- **Shape**: Pill-shaped (`rounded-full`) or rounded rectangle.
- **Size**: Compact (`px-4 py-2`).
- **States**:
  - Inactive: Outline or ghost style, subtle color.
  - Active: Filled background, contrasting text color.
- **Content**: Text label only.

## Responsive Behavior
- **Desktop**: Single row, all filters visible.
- **Mobile**: May wrap to multiple rows or scroll horizontally.
