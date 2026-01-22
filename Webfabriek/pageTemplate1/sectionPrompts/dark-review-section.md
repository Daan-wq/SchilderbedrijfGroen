# Dark Review Section

## Background Lightness
`dark` — Dark solid color (near-black, dark blue, or dark green).

## Structure
- **Container**: Full-width section.
- **Background**: Dark solid color (near-black, dark blue, or dark green).
- **Padding**: Very generous (`py-16` to `py-24`).

## Internal Layout
- **Grid**: 2-column asymmetric (`grid-cols-1 md:grid-cols-2`).

## Left Column (Visual)
- Contains: Cluster of review cards.
- **Card Styling**:
  - Background: White.
  - Shape: Rounded corners, subtle shadow.
  - Content: Quote text + Reviewer name/avatar.
- **Arrangement**: Cards overlap or fan out (absolute positioning or negative margins) to create depth.

## Right Column (Text)
- Contains:
  - Section Title (H2, light text color).
  - Body paragraph (light text color).
  - CTA button (light or accent color).
- Alignment: Left or center.

## Responsive Behavior
- **Desktop (md+)**: 2-column layout, cards clustered.
- **Mobile (<md)**: Stack vertically, cards may reduce to single visible card or simple stack.
