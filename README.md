# So sei es

Persönliche Ritual-PWA — **Hard working edition**. Beide Seiten der «9»: Soft bleibt Praxis, Hard steht hinter Ethik-Gate und Preis.

Ton: warm, hart, klar. «So sei es» ist die Enter-Taste.

## GitHub Pages

Repo: [fxrebermanagement-star/so-sei-es](https://github.com/fxrebermanagement-star/so-sei-es)

Erwartete Live-URL (nach Pages-Aktivierung):

**https://fxrebermanagement-star.github.io/so-sei-es/**

### Pages einschalten (einmalig)

1. Repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / folder: **/ (root)**
4. Speichern. Nach 1–2 Minuten ist die URL erreichbar.

Hinweis: Actions-Workflow konnte nicht per API angelegt werden (fehlende `workflow`-Berechtigung). Branch-Deploy reicht.

`manifest.webmanifest` nutzt `start_url` und `scope` unter `/so-sei-es/`.

## Philosophie — beide Seiten

- **Soft:** Dank, Schutz, Heilung (Arzt bleibt), Anziehung, Trennung selbst (nur Faden), Stopp, Segen, Energie zurück, Karma ohne Rache. Bleibt bei der 9.
- **Hard:** Bindung, Bindung zweier Personen, Trennung anderer, Fluch, Person übernehmen — nur nach **Ethik-Gate** (Preis, Gegenseite, Bestätigung). Danach **24h-Sperre** (Dank ausgenommen).
- **Feld:** Wesenheit optional (Standard: Ohne), Ahnen optional.

Gegenseite kennen heisst klarer schützen — nicht automatisch anwenden.

## Mechanik

1. **Diagnose** vor dem Wählen (Klarheit / Mangel / Rache / Show + Kurzfragen)
2. **Ethik-Gate** vor Hard
3. **Wesenheit** Mit/Ohne (default Ohne)
4. **Rückkehr** Pflicht-Confirm vor finalem «So sei es»
5. **«Es ist so»** = Status-Button (nicht Enter)
6. **24h Lock** nach Hard in `localStorage`
7. **Abbrechen** → Chronik-Eintrag `abgebrochen`
8. Ein **data-driven Runner** + Ritual-Definitionen (keine 80 Dateien)
9. **Chronik** + **Gabe** (localStorage)
10. After-Screen **SO SEI ES**

## Lokal

```bash
cd /workspace/so-sei-es
python3 -m http.server 8080
```

Öffnen: `http://localhost:8080/` — Module und Service Worker brauchen HTTP (nicht `file://`).

## Struktur

```
so-sei-es/
  index.html
  css/app.css
  js/app.js              # Loader (atob b0..b17)
  js/b0.js … js/b17.js   # Base64-Teile der App-Logik
  js/app.full.js         # Lesbare Quelle (lokal / Referenz)
  js/rituals.js          # Soft+Hard+Feld
  js/rituals-soft.js | rituals-hard.js | rituals-feld.js
  js/storage.js | util.js
  sw.js
  manifest.webmanifest
  assets/icon.svg
  README.md
```

## Rituale (17)

**Soft:** Dank, Schutz selbst, Schutz unterwegs, Heilung, Anziehung, Trennung selbst, Stopp/Schaden stoppen, Segen, Energie zurückholen, Karma  
**Hard:** Bindung, Liebe zwei Personen, Trennung anderer, Fluch, Person übernehmen  
**Feld:** Wesenheit, Ahnen

## Hinweis

Ersetzt keine medizinische, psychiatrische oder rechtliche Hilfe. Hard ist bewusst hinter dem Gate — Preis und Gegenseite gehören dazu.

**rr25** wird von diesem Repo nicht angefasst.
