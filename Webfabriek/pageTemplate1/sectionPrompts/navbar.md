# Navbar

## Background Lightness
`light` — Transparent or matches page background, typically white/light.

## Structure
- **Container**: Full-width flex row, `justify-between`, `items-center`.
- **Height**: Fixed, slim (e.g., `h-16` to `h-20`).
- **Padding**: Horizontal padding matching page container.

## Slots (3)
1. **Left**: Brand identity (logo image or text).
2. **Center**: Horizontal flex row of text links (`gap-6` to `gap-8`).
3. **Right**: Primary CTA button (solid background, contrasting color).

## Responsive Behavior
- **Desktop (md+)**: All 3 slots visible.
- **Mobile (<md)**: Center slot collapses into hamburger menu icon in Right slot. CTA button hidden or moved into mobile menu.

## Internal Component Rules
- Links: Text only, no underlines, hover state changes color.
- CTA Button: `px-4 py-2`, `rounded-md` to `rounded-full`, solid fill.
- Logo: Max-height constraint to fit within navbar height.
