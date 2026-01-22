# Split Content

## Background Lightness
`white` — White or very light background.

## Structure
- **Container**: Full-width section with generous padding.
- **Layout**: 2-column symmetric grid (`grid-cols-1 md:grid-cols-2`, 50/50 split).
- **Variant**: Column order is reversible (Image-Text or Text-Image).

## Image Column
- **Media**: Single image, fills column.
- **Shape**: Rounded corners (`rounded-2xl`).
- **Fit**: `object-cover`, maintains aspect ratio.
- **Aspect**: Square or slightly portrait.

## Text Column
- **Alignment**: Vertically centered relative to image.
- **Contains**:
  - Section Title (H2).
  - Body paragraph or list.
  - List may use checkmark icons or bullets.
  - Optional CTA button.

## Responsive Behavior
- **Desktop (md+)**: Side-by-side columns.
- **Mobile (<md)**: Stack vertically (Image always above Text, or configurable).
