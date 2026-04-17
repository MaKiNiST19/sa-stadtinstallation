# Deployment – SA Stadtinstallation

Next.js 14 SSR-Projekt, das die alte WordPress-Site auf `sa-stadtinstallation.at` ersetzt.

## Architektur-Überblick

- **Gesamt 197 statisch generierte Seiten** via `generateStaticParams()`:
  - 1 Startseite
  - 9 Statische Seiten: `/leistungen`, `/bezirke`, `/preise`, `/ueber-uns`, `/kontakt`, `/impressum`, `/datenschutz`, `/agb`, 404
  - 7 Leistungs-Pillarseiten: `/leistungen/[slug]`
  - 23 Bezirks-Pillarseiten: `/bezirke/[slug]`
  - 161 Intersection-Seiten: `/bezirke/[bezirk]/[leistung]`
- **Static Export Output** (Vercel / Netlify / statischer Host möglich)
- **Sitemap + Robots**: automatisch generiert unter `/sitemap.xml` und `/robots.txt`
- **JSON-LD Schema**: Organization, Plumber, HVACBusiness, LocalBusiness, Service, Place, FAQPage, BreadcrumbList – auf jeder Seite eingebettet

## Lokale Entwicklung

```bash
cd E:\sa-stadt
npm install
npm run dev         # http://localhost:3000
```

## Production Build & Test

```bash
npm run build       # statische Generierung aller 197 Seiten
npm run start       # Production-Server auf Port 3000
```

Build scheitert aktuell nur, wenn ein Asset fehlt oder ein TypeScript-Fehler vorliegt.
Hard dependency: `node_modules` muss installiert sein.

## Deployment-Optionen

### Option A: Vercel (empfohlen)
1. GitHub-Repo erstellen: `sa-stadtinstallation.at`
2. `git init && git add . && git commit -m "initial"` → Push
3. Vercel → Import Project → Framework: Next.js → Deploy
4. Custom Domain verbinden: `sa-stadtinstallation.at` (DNS A/CNAME laut Vercel-Anleitung)
5. Redirects funktionieren automatisch via `next.config.js`

### Option B: Eigener Server (NGINX + Node)
```bash
npm run build
pm2 start npm --name "sa-stadt" -- start
```
NGINX Reverse-Proxy auf Port 3000, Let's Encrypt via Certbot.

### Option C: Statischer Export
Für rein statisches Hosting `output: 'export'` in `next.config.js` setzen – erfordert dann aber `generateStaticParams()` für alle Routen (das ist bereits gegeben) und Deaktivierung von `redirects()` (muss auf Host-Ebene konfiguriert werden).

## DNS-Cutover von WordPress

1. **Vorbereitung (im Windschatten)**: Neue Next.js-Site auf Staging-Subdomain (z.B. `staging.sa-stadtinstallation.at`) deployen, alle Seiten durchklicken, Lighthouse-Check, Schema-Validator (search.google.com/test/rich-results).
2. **Screaming Frog Crawl** des WordPress: alle URLs exportieren, mit den Redirects in `next.config.js` abgleichen. Fehlende WP-URLs in den Redirect-Block ergänzen.
3. **DNS TTL verkürzen** (z.B. auf 300 s) 24 h vor Cutover.
4. **Cutover**: A-Record / CNAME von WP-Host auf neuen Host umstellen.
5. **Monitoring**: Google Search Console → alte Property beibehalten, neue Property validieren. Sitemap `sa-stadtinstallation.at/sitemap.xml` einreichen. Erste Wochen täglich auf 404s kontrollieren (Log-Files, GSC-Coverage-Report).
6. **WordPress archivieren**: alte DB + Uploads als Backup sichern; WP-Instanz 30 Tage parallel laufen lassen (auf alter Subdomain), dann abschalten.

## Redirect-Map

Aktuell gepflegt in `next.config.js::redirects()`. Bei Bedarf erweitern:
- Zusätzliche historische URL-Patterns nach Log-Analyse
- Kategorie-URLs falls WordPress Taxonomien nutzte
- Bilder-URLs (`/wp-content/uploads/...`) → separate Behandlung via NGINX oder Vercel-Regel

## SEO Nächste Schritte

1. **Content-Ausbau**: 
   - Leistungen-Slugs haben aktuell 7× handgeschriebenen Inhalt (Notfall ≈3200 Wörter, Rest ≈1200–1800). Ziel: alle 7 auf ≥3000 Wörter ausbauen.
   - 23 Bezirke: 4 Flagship-Inhalte fertig (Favoriten, Innere Stadt, Leopoldstadt, Donaustadt). 19 weitere Bezirke nutzen Default-Template – empfohlen, sukzessive handgeschriebenen Inhalt zu ergänzen (Registry: `content/bezirke/index.tsx`).
   - 161 Intersection-Seiten: 4 handgeschriebene Inhalte fertig (Favoriten/Notfall, Favoriten/Thermenwartung, Innere Stadt/Gas, Donaustadt/Heizung). Rest nutzt dynamisches Template mit bauepochen-spezifischem Text. Registry: `content/intersections/index.tsx` – Key-Format `{bezirk}/{leistung}`.
2. **Google Business Profil**: Adresse, Öffnungszeiten, Telefon, Link zur neuen Website aktualisieren. 23 Service-Areas hinzufügen.
3. **Schema-Validierung**: search.google.com/test/rich-results → jede Pillar-Seite prüfen.
4. **PageSpeed**: Lighthouse CI → Ziel CLS < 0.05, LCP < 2.5 s, CLS = 0. Bildkompression (WebP).
5. **Backlinks**: WKÖ-Verzeichnis, Google Maps, herold.at, firmenabc.at aktualisieren.

## Wichtige Dateien

| Pfad | Zweck |
|------|-------|
| `lib/company.ts` | Zentrale Firmendaten (Telefon, Adresse, Zertifikate) |
| `lib/leistungen.ts` | 7 Leistungs-Slugs + Metadaten |
| `lib/bezirke.ts` | 23 Wiener Bezirke + Metadaten |
| `lib/schema.ts` | JSON-LD-Generatoren |
| `lib/faqs.ts` | FAQ-Pools je Topic |
| `content/leistungen/` | Handgeschriebene Leistungs-Inhalte (7 Dateien) |
| `content/bezirke/` | Handgeschriebene Bezirks-Inhalte (4 Dateien, ausbaubar auf 23) |
| `content/intersections/` | Handgeschriebene Intersection-Inhalte (4 Dateien, ausbaubar auf 161) |
| `app/sitemap.ts` | Automatische Sitemap-Generierung |
| `app/robots.ts` | robots.txt |
| `next.config.js` | 301-Redirects WordPress → Next.js |

## Bekannte Baustellen

- **Styling-Lücken**: `globals.css` ist funktional, aber einige Detail-Bereiche (Hero-Gradients, OrbitBrands-Animation, Footer-Badge) wurden 1:1 vom Quellprojekt portiert – mögliche minimale Abweichungen beim Rendering.
- **Fehlende Bild-Assets**: Alle Visuals sind aktuell Emoji-Icons oder SVG – keine externen Bilder eingebunden. Für finale Live-Seite: Hero-Fotos, Vor-Ort-Fotos, Team-Foto ergänzen.
- **Kontaktformular**: Reine Telefon+Mail-Darstellung, kein Web-Formular. Falls gewünscht: serverless Route (`app/api/contact/route.ts`) + Resend/SendGrid.
- **Galerie- und Karriere-Seiten**: WP-Redirects zeigen auf `/` bzw. `/kontakt`. Bei Bedarf eigenständige Pages bauen.
