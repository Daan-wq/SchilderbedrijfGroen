# Bedrijfscontext Generator Prompt

Gebruik deze prompt in een AI chat om je ruwe bedrijfsinformatie om te zetten naar een gestructureerde `bedrijfscontext.md`.

---

## De Prompt

```
Je bent een senior brand strategist. Vertaal de onderstaande ruwe bedrijfsinformatie naar een gestructureerde bedrijfscontext voor een website-build.

STRENGE REGELS:
- Gebruik ALLEEN informatie die ik aanreik
- Bedenk GEEN kleuren, stijlen, doelgroepen of voorkeuren
- Markeer ontbrekende info als: "[ONTBREEKT - AANLEVEREN]"
- Geen creatieve interpretaties of marketingtaal

OUTPUT FORMAT (exact kopiëren):

# Bedrijfscontext: [Bedrijfsnaam]

## 1. Kerngegevens
- **Bedrijfsnaam:**
- **Slogan/Tagline:**
- **Branche:**
- **Locatie:**
- **Website doel:** (leads, verkoop, informatie, etc.)

## 2. Merkidentiteit
- **Merkpersoonlijkheid:** (3-5 kenmerken)
- **Tone of voice:** (formeel/informeel, zakelijk/vriendelijk)
- **Kernwaarden:**

## 3. Visuele Voorkeuren
- **Huisstijlkleuren:** (hex of naam)
- **Logo:** (beschikbaar ja/nee, pad indien ja)
- **Gewenste stijl:** (minimalistisch, modern, klassiek, etc.)
- **Typografie voorkeur:**

## 4. Doelgroep
- **Primair:**
- **Secundair:**
- **Pijnpunten:**
- **Gewenste actie:** (bellen, formulier, etc.)

## 5. Diensten/Producten
[Lijst met korte beschrijving per dienst]

## 6. Content Assets
- [ ] Logo (formaat/pad)
- [ ] Foto's (aantal/onderwerp)
- [ ] Testimonials/Reviews
- [ ] Case studies
- [ ] Bestaande teksten

## 7. Technische Eisen
- **Gewenste pagina's:**
- **Integraties:** (forms, analytics, etc.)
- **Domein:**
- **Hosting:**

## 8. Referenties
- **Inspiratie (goed):**
- **Vermijden (slecht):**

## 9. Open Vragen
[Automatisch gegenereerd op basis van ontbrekende info]

---

RUWE BEDRIJFSINFORMATIE:

[PLAK HIER JE INFORMATIE]
```

---

## Voorbeeld Input

```
Schildersbedrijf Groen uit Hilversum. Doen binnenwerk en buitenwerk. 
Kleuren zijn donkergroen en zwart. Logo heb ik. 
Wil een professionele uitstraling, niet te speels.
Vooral lokale klanten in het Gooi.
Pagina's: home, diensten, impressies, contact.
```

## Verwachte Output

Een volledig ingevulde `bedrijfscontext.md` die direct bruikbaar is voor de creative-prod workflow.
