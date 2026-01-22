# Image Inventory Generator Prompt

Gebruik deze prompt om een complete lijst van benodigde visuele assets te genereren, ook wanneer er geen afbeeldingen zijn aangeleverd.

---

## De Prompt

```
Je bent een UX/UI architect gespecialiseerd in content fallback-strategieën.

GENEREER een complete asset-inventaris voor de onderstaande website-secties.

REGELS:
- Ga ervan uit dat er GEEN afbeeldingen zijn aangeleverd
- Definieer per sectie alle benodigde visuele assets
- Geen concrete beeldbeschrijvingen, alleen type en functie
- Volledigheid > beknoptheid

VRAAG PER SECTIE:
1. Welke afbeeldingen zijn functioneel noodzakelijk?
2. Welke visuals ondersteunen begrip, hiërarchie of esthetiek?

ASSET TYPES:
- image (foto, screenshot)
- icon (functioneel symbool)
- svg (vectorgrafiek)
- illustration (abstracte tekening)
- background (patroon, textuur)

OUTPUT FORMAT:
<image_inventory>
  <section name="SECTION_NAME">
    <asset>
      <type>image | icon | svg | illustration | background</type>
      <usage>korte functionele beschrijving</usage>
      <notes>optionele stijl- of contextopmerking</notes>
    </asset>
  </section>
</image_inventory>

WEBSITE CONTEXT:
[PLAK BEDRIJFSCONTEXT]

SECTIES:
[PLAK SECTIE LIJST]
```

---

## Per-Section Asset Reference

| Sectie | Typische Assets |
|--------|-----------------|
| navbar | logo (svg) |
| footer | logo (svg), avatar (image), social icons |
| hero-visual | hero image (image), optional badge icon |
| hero-typographic | geen afbeelding vereist |
| hero-text-only | geen afbeelding vereist |
| trust-strip | client logos (svg/image, 4-6 stuks) |
| feature-stack | icons per feature card (icon, 3-5 stuks) |
| process-container | optional step icons (icon) |
| split-content | supporting image (image) |
| icon-grid | icons per item (icon, 3 stuks) |
| dark-review-section | reviewer avatars (image, 2-3 stuks), optional star icon |
| portfolio-grid | project images (image, 4-6 stuks) |
| blog-grid | article thumbnails (image, 3-6 stuks), author avatars |
| faq-accordion | chevron/plus icon (icon) |
| pricing-grid | checkmark icons (icon), optional plan icons |
| team-grid | team member photos (image, 3 stuks) |
| personal-cta | portrait photo (image) |
| scheduler-block | reviewer avatar (image), calendar icon (icon) |
| contact-form-split | atmosphere image (image) |
| article-container | author avatar (image), featured image (image) |
| filter-bar | geen afbeelding vereist |
| pagination | arrow icons (icon) |
| location-info-split | location/exterior photo (image) |

---

## Minimum Asset Count Per Page Type

| Page | Minimum Images | Minimum Icons |
|------|----------------|---------------|
| Landing | 8-12 | 10-15 |
| About/Over Ons | 4-6 | 3-5 |
| Services | 2-4 | 6-10 |
| Portfolio/Cases | 4-8 | 2-3 |
| Contact | 1-2 | 5-8 |
| Blog Index | 3-6 | 3-5 |
| Pricing | 0-1 | 8-12 |

---

## Placeholder Strategy

Wanneer echte assets ontbreken:

1. **Logo**: Gebruik tekstuele bedrijfsnaam als fallback
2. **Hero Image**: Genereer met AI based on `bedrijfscontext.md`
3. **Portfolio**: Gebruik placeholder gradient cards
4. **Avatars**: Gebruik initialen-cirkels of silhouet
5. **Icons**: Gebruik Lucide/Heroicons library
