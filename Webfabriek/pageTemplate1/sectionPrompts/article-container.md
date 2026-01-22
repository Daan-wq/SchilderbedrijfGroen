# Article Container

## Background Lightness
`light` — Light gray or off-white outer; `white` inner sheet.

## Structure
- **Outer Wrapper**: Full-width section, light gray or off-white background.
- **Inner Container**: White "sheet" centered on page.
  - **Max-Width**: Constrained (e.g., `max-w-5xl`).
  - **Shape**: Rounded corners (`rounded-2xl`).
  - **Shadow**: Subtle elevation.
  - **Padding**: Generous internal padding.

## Internal Layout
- **Grid**: 2-column asymmetric (`grid-cols-1 md:grid-cols-[1fr_3fr]` or 20/80 split).

## Left Column (Author Sidebar)
- **Width**: Narrow.
- **Position**: May be `sticky` at top within container.
- **Contains**:
  - Author avatar (circular).
  - Author name (bold).
  - Author role/bio (small text).
  - Optional social links.

## Right Column (Main Content)
- **Max-Width**: Further constrained for reading comfort.
- **Contains**:
  - Featured image (full content-column width, rounded corners).
  - Article body: Headings (H2, H3), paragraphs, lists, inline images.
  - Lists may use styled checkmarks.

## Responsive Behavior
- **Desktop (md+)**: 2-column layout, sidebar sticky.
- **Mobile (<md)**: 1-column, Author block appears above article content, sticky disabled.
