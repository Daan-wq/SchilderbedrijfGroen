# Location Info Split

## Background Lightness
`white` — White or very light background.

## Structure
- **Container**: Full-width section with generous padding.
- **Layout**: 2-column symmetric grid (`grid-cols-1 md:grid-cols-2`, 50/50 split).

## Left Column (Image)
- **Media**: Exterior photo, team photo, or location image.
- **Shape**: Rounded corners (`rounded-xl` to `rounded-2xl`).
- **Fit**: `object-cover`, fills column.

## Right Column (Information)
- **Alignment**: Left, vertically centered.
- **Contains**:
  - Section Title (H2, e.g., "Bezoek ons" or "Locatie").
  - Address lines (street, city, postal code).
  - Optional: Phone, email.
  - Optional: Business registration details (KVK, BTW).
  - CTA button (e.g., "Plan route", outline or secondary style).

## Responsive Behavior
- **Desktop (md+)**: Side-by-side columns.
- **Mobile (<md)**: Stack vertically (Image above Info).
