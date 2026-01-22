# Process Container

## Background Lightness
`light` — Light gray page background with `white` elevated card.

## Structure
- **Outer Container**: Centered on page with side margins.
- **Background**: White (elevated from page's light gray background).
- **Shape**: Rounded corners (`rounded-2xl` or higher).
- **Shadow**: Subtle elevation shadow (`shadow-lg`).
- **Padding**: Very generous internal padding.

## Internal Layout
- **Grid**: 2-column asymmetric (`grid-cols-1 md:grid-cols-[1fr_2fr]`).

## Left Column
- Contains:
  - Section Title (H2).
  - Optional short intro.
  - Optional CTA button.
- Alignment: Left.

## Right Column
- Contains: Ordered/numbered list of steps.
- **List Styling**:
  - Numbers: Large, bold, may be styled as accent.
  - Text: Step title (bold) + description (regular).
  - Spacing: Generous vertical gap between items.

## Responsive Behavior
- **Desktop (md+)**: 2-column layout within box.
- **Mobile (<md)**: Stack vertically, box maintains padding.
