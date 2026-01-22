# Scheduler Block

## Background Lightness
`dark` — Dark solid color container.

## Structure
- **Container**: Centered on page with side margins.
- **Background**: Dark solid color.
- **Shape**: Rounded corners (`rounded-2xl` or higher).
- **Padding**: Generous internal padding.

## Internal Layout
- **Grid**: 2-column symmetric (`grid-cols-1 md:grid-cols-2`, 50/50 split).

## Left Column (Persuasion)
- Contains:
  - Section Title (H2, light text).
  - Checklist with icons (checkmarks, light text).
  - Testimonial mini-card:
    - Quote text.
    - Avatar image (circular) + Reviewer name.

## Right Column (Interaction)
- Contains: Embedded widget or visual representation.
- **Widget Styling**:
  - Background: White or light.
  - Shape: Rounded corners.
  - Content: Calendar UI, time slots, or scheduling interface.
  - May be an iframe or custom component.

## Responsive Behavior
- **Desktop (md+)**: 2-column layout within dark container.
- **Mobile (<md)**: Stack vertically (Persuasion above Widget).
