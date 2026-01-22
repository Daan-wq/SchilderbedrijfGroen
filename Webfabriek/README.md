# Creative-Prod Workflow – Gebruikshandleiding

## Snelstart

```
/creative-prod @bedrijfscontext.md
```

---

## Vereiste Input

| Item | Verplicht | Beschrijving |
|------|-----------|--------------|
| `bedrijfscontext.md` | ✅ Ja | Gestructureerde merkinfo (gebruik de generator) |
| Logo bestand | ✅ Ja | SVG of PNG, hoge resolutie |
| Foto's | Aanbevolen | Portfolio/sfeerbeelden |

---

## Bestandslocaties

```
project/
├── bedrijfscontext.md          ← Jouw input
├── assets/
│   ├── logo.svg
│   └── images/
│       ├── hero.jpg
│       └── portfolio/
└── pageTemplate1/              ← Al aanwezig (niet aanpassen)
    ├── pagePrompts/
    └── sectionPrompts/
```

---

## Stap-voor-Stap

### 1. Bedrijfscontext Maken
Open `templates/bedrijfscontext_generator.md` en volg de instructies om je ruwe info om te zetten.

### 2. Assets Verzamelen
- Logo (SVG preferred)
- Foto's voor hero/portfolio
- Eventuele testimonials/reviews

### 3. Workflow Starten
```
/creative-prod @bedrijfscontext.md
```

### 4. Interactie Momenten
De workflow pauzeert op deze punten:

| Fase | Actie Vereist |
|------|---------------|
| **Step 0.1** | Ontbrekende assets aanleveren (indien nodig) |
| **Step 2.5** | GO/NO-GO op design concept |
| **Step 5.3** | Preview review feedback |

---

## Wat Je NIET Hoeft Te Doen

- ❌ Pagina layouts bedenken → Komt uit `pagePrompts/`
- ❌ Sectie gedrag specificeren → Komt uit `sectionPrompts/`
- ❌ Kleuren/spacing definiëren → Wordt automatisch gegenereerd in `STYLE_LOCK.json`

---

## Troubleshooting

| Probleem | Oplossing |
|----------|-----------|
| "Missing critical assets" | Voeg ontbrekende items toe aan bedrijfscontext |
| Generieke/saaie output | Voeg meer specifieke visuele voorkeuren toe |
| Verkeerde pagina's | Check `pagePrompts/` mapping in workflow |

---

## Output Bestanden

Na voltooiing vind je:

```
project/
├── ROUTE_MAP.md           ← Pagina → sectie mapping
├── STYLE_LOCK.json        ← Design tokens (niet handmatig wijzigen)
├── copy_map.md            ← Alle teksten
├── implementation_plan.md ← Technische specificaties
└── app/                   ← Next.js code
```
