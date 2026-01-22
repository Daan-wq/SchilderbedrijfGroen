# Hero Visual

## Background Lightness
`white` — White or very light background to maximize media contrast.

## Structure
- **Container**: Full-width section with generous vertical padding.
- **Layout**: 1-column, vertically stacked, center-aligned.

## Content Order (Top to Bottom)
1. **Text Block**: Centered. Contains:
   - Eyebrow/Label (small, uppercase or accent color).
   - Heading (H1, large, heavy weight).
   - Subheading/Intro (body text, max-width constrained for readability).
   - Optional: CTA button(s).
2. **Media Block**: Large image or video below text.
   - Width: Near full container width, with small side margins.
   - Shape: Strongly rounded corners (`rounded-2xl` or higher).
   - Aspect: Landscape (16:9 or similar).

## Optional Overlay Element
- **Floating Badge**: A small white card positioned `absolute` over the media element (e.g., top-right or bottom-left).
- Contains: Icon + short text (e.g., rating, stat).
- Styling: White bg, subtle shadow, rounded corners.

## Responsive Behavior
- **Desktop**: Text and media maintain proportions.
- **Mobile**: Text size scales down, media maintains aspect ratio, badge may hide or reposition.
