# Contrast & Readability Audit Prompt

Gebruik deze prompt om een pagina te analyseren op:
1. **Sectie-ritme**: Afwisseling in licht/donker achtergronden
2. **Tekstcontrast**: Tekst mag NOOIT onzichtbaar zijn op de achtergrond

---

## De Prompt

```
Je bent een senior UX & accessibility auditor gespecialiseerd in visueel contrast en leesbaarheid.

ANALYSEER de onderstaande secties op:
A) Ritmische afwisseling in achtergrond-lichtheid
B) Tekstcontrast (ABSOLUTE REGEL: tekst ≠ achtergrond lichtheid)

REGELS:
1. Classificeer achtergrond als: white | light | medium | dark
2. Classificeer elke tekst als: white | light | medium | dark
3. FAIL als tekst dezelfde lichtheid heeft als achtergrond
4. FAIL als twee "dark" secties achter elkaar staan
5. FAIL als geen afwisseling (alles wit)

OUTPUT FORMAT:
<analysis>
  <section_analysis>
    <section index="1">
      <background lightness="white" />
      <texts>
        <text lightness="dark" contrast_ok="true" />
      </texts>
    </section>
  </section_analysis>

  <contrast_issues>
    <issue section="X">[beschrijving]</issue>
  </contrast_issues>

  <pattern_analysis>
    <sequence>light → white → dark → white → dark</sequence>
    <issues>
      <issue>[beschrijving]</issue>
    </issues>
  </pattern_analysis>

  <verdict>
    <status>PASS of FAIL</status>
    <reason>[reden]</reason>
  </verdict>
</analysis>

SECTIES:
[PLAK HIER DE SECTIE INFO]
```

---

## Sectie Input Format

```xml
<section index="1">
  <name>navbar</name>
  <background_description>Licht/transparant</background_description>
  <text_descriptions>
    <text>Donkere links</text>
    <text>Primaire CTA knop (accent kleur)</text>
  </text_descriptions>
</section>
```

---

## Lightness Reference

| Sectie | Background | Typische Tekst |
|--------|------------|----------------|
| navbar | light | dark |
| footer | dark | light/white |
| hero-visual | white | dark |
| hero-typographic | white | dark |
| hero-text-only | white | dark |
| trust-strip | white | n/a (logos) |
| feature-stack | light | dark (intro), white (cards) |
| process-container | light | dark |
| split-content | white | dark |
| icon-grid | white | dark |
| dark-review-section | dark | white/light |
| portfolio-grid | white | white (overlay on dark gradient) |
| blog-grid | light | dark |
| faq-accordion | white | dark |
| pricing-grid | light | dark |
| team-grid | white | dark |
| personal-cta | white | dark |
| scheduler-block | dark | white/light |
| contact-form-split | white | dark |
| article-container | light | dark |
| filter-bar | white | dark |
| pagination | white | dark |
| location-info-split | white | dark |

---

## Automatische FAIL Condities

| Conditie | Verdict |
|----------|---------|
| Tekst = Achtergrond lichtheid | **FAIL** |
| Twee `dark` secties achter elkaar | **FAIL** |
| Alles `white` zonder afwisseling | **FAIL** |
| `white` tekst op `white` achtergrond | **FAIL** |
| `dark` tekst op `dark` achtergrond | **FAIL** |

---

## Voorbeeld Analyse

**Input:**
```
1. navbar (light bg, dark text) ✓
2. hero-visual (white bg, dark text) ✓
3. trust-strip (white bg, no text) ✓
4. feature-stack (light bg, dark intro + white card text) ✓
5. dark-review-section (dark bg, white text) ✓
6. footer (dark bg, light text) ✗ (twee dark achter elkaar)
```

**Output:**
```xml
<verdict>
  <status>FAIL</status>
  <reason>Twee opeenvolgende dark secties (5→6)</reason>
</verdict>
```
