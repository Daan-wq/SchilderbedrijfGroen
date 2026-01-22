# Contact Form Split

## Background Lightness
`white` — White or very light background.

## Structure
- **Container**: Full-width section with generous padding.
- **Layout**: 2-column symmetric grid (`grid-cols-1 md:grid-cols-2`, 50/50 split).

## Left Column (Form)
- **Background**: White or light, may have subtle elevation.
- **Shape**: Rounded corners on left side (if combined visually with image).
- **Padding**: Generous internal padding.
- **Contains**:
  - Form Title (H2 or H3).
  - Input fields (Name, Email, Phone, Message textarea).
  - Submit button (primary style, full-width or inline).
  - Reassurance text (small, below form).
  
## Form Requirements
- **Anti-Spam**: Hidden honeypot field.
- **States**: Idle, Submitting (disabled button), Success (green message), Error (red message).
- **Directive**: Must be a Client Component (`"use client"`).

## Right Column (Image)
- **Media**: Atmosphere/team image.
- **Shape**: Rounded corners on right side, fills column height.
- **Fit**: `object-cover`.

## Responsive Behavior
- **Desktop (md+)**: Side-by-side, visually joined.
- **Mobile (<md)**: Stack vertically, Form above Image.
