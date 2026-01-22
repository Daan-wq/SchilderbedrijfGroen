# Pricing Grid

## Background Lightness
`light` — Light gray background; cards are `white`.

## Structure
- **Container**: Full-width section with generous padding.
- **Layout**: 3-column symmetric grid (`grid-cols-1 md:grid-cols-3`).
- **Gap**: Consistent gutter (`gap-6` to `gap-8`).
- **Alignment**: Cards vertically aligned at top.

## Grid Item (Pricing Card)
- **Shape**: Vertical rectangle, rounded corners (`rounded-2xl`).
- **Background**: White or light, elevated from page.
- **Padding**: Generous internal padding.

## Card Content (Top to Bottom)
1. **Plan Name**: Small heading or eyebrow.
2. **Price**: Large display typography (the dominant element).
3. **Billing Cycle**: Small text (e.g., "per month").
4. **Features List**: Vertical list with checkmark icons.
5. **CTA Button**: Full-width or centered, primary or secondary style.

## Emphasis Variant
- One card (typically middle) may be visually emphasized:
  - Larger scale or elevated further.
  - Different border or accent color.
  - "Most Popular" badge.

## Responsive Behavior
- **Desktop (md+)**: 3-column grid.
- **Mobile (<md)**: 1-column stack.
