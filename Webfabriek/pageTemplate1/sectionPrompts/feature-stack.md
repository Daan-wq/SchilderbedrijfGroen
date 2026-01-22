# Feature Stack

## Background Lightness
`light` — Light gray or off-white background; cards within are `dark`.

## Structure
- **Container**: Full-width section with generous padding.
- **Layout**: Asymmetric 2-column grid (`grid-cols-1 md:grid-cols-[2fr_3fr]` or 40/60 split).

## Left Column (Anchor)
- Contains:
  - Section Title (H2).
  - Short intro paragraph.
  - CTA button (optional).
- Behavior: May be `sticky` at top within section scroll on desktop.
- Alignment: Left.

## Right Column (Stack)
- Contains: Vertical flex stack of cards (`flex flex-col gap-4`).
- **Card Styling**:
  - Background: Dark color (contrasting with page).
  - Text: Light/white.
  - Shape: Rounded corners (`rounded-xl`).
  - Padding: Generous internal padding.
  - Content: Title (bold) + Description text. Optional icon.

## Responsive Behavior
- **Desktop (md+)**: 2-column layout, left column sticky.
- **Mobile (<md)**: Stack vertically (intro above cards), sticky disabled.
