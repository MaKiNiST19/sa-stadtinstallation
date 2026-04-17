import type { Metadata } from "next";
import { FIRMA } from "@/lib/company";
import { BEZIRKE } from "@/lib/bezirke";
import { LEISTUNGEN } from "@/lib/leistungen";
import {
  generateBreadcrumbSchema,
  combineSchemas,
} from "@/lib/schema";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/content/CtaBand";
import HighlightBox from "@/components/content/HighlightBox";
import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import IconList from "@/components/content/IconList";

export const metadata: Metadata = {
  title: `Installateur in allen 23 Wiener Bezirken | ${FIRMA.name}`,
  description:
    "23 Wiener Bezirke, ein Meisterbetrieb: SA Stadtinstallation ist von 1010 Innere Stadt bis 1230 Liesing für Sie da. 24h Notdienst, Festpreis, WKÖ-zertifiziert.",
  alternates: { canonical: "/bezirke" },
};

export default function BezirkePage() {
  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "Bezirke", url: "/bezirke" },
  ];
  const schema = combineSchemas(generateBreadcrumbSchema(breadcrumbs));

  // Gruppierung: Innenbezirke (1-9), Arbeiterbezirke (10-12, 15, 16, 20), Außen-West (13, 14, 17, 18, 19), Transdanubien (21, 22), Süd (23)
  const innen = BEZIRKE.filter((b) => b.number <= 9);
  const arbeiter = BEZIRKE.filter((b) => [10, 11, 12, 15, 16, 20].includes(b.number));
  // outer west combines westliche Wohnbezirke: 13 Hietzing, 14 Penzing, 17 Hernals, 18 Währing, 19 Döbling
  const aussenWest = BEZIRKE.filter((b) => [13, 14, 17, 18, 19].includes(b.number));
  const transdanubien = BEZIRKE.filter((b) => [21, 22].includes(b.number));
  const sued = BEZIRKE.filter((b) => b.number === 23);

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <section className="leistung-hero">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <p className="section-eyebrow" style={{ color: "white", opacity: 0.7 }}>
            23 Bezirke · 1 Meisterbetrieb · Seit 2015
          </p>
          <h1
            style={{
              color: "white",
              fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
              fontWeight: 800,
              maxWidth: "840px",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Ihr Installateur in ganz Wien – lokal, schnell, konzessioniert
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "18px",
              maxWidth: "680px",
              lineHeight: 1.7,
              marginTop: "20px",
            }}
          >
            Wir kennen Wien Stiege für Stiege. Von der Inneren Stadt bis Liesing – jeder Bezirk
            hat seine installationstechnischen Eigenheiten. Auf dieser Seite finden Sie Ihren
            Bezirk mit lokaler Einsatzseite, typischen Problemen und direktem Kontakt.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
            <a href={`tel:${FIRMA.telephone}`} className="btn-sparkle">
              <span
                className="text_button"
                style={{ padding: "14px 28px", fontSize: "15px", fontWeight: 800 }}
              >
                📞 {FIRMA.telephoneDisplay}
              </span>
            </a>
            <a href="/leistungen" className="btn-outline">7 Leistungen ansehen</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <FeaturedSnippet
            question="In welchen Wiener Bezirken ist SA Stadtinstallation im Einsatz?"
            answer={
              <p>
                In allen 23 Wiener Gemeindebezirken – von 1010 Innere Stadt bis 1230 Liesing.
                Unser Firmensitz liegt in der Humboldtgasse 33/1/29, 1100 Wien (Favoriten).
                Von dort erreichen wir die Innenbezirke in 15–30 Minuten, Außenbezirke in
                30–60 Minuten. Notfälle priorisieren wir unabhängig vom Bezirk – 24 Stunden,
                365 Tage im Jahr.
              </p>
            }
          />

          <h2 style={{ marginTop: "48px" }}>Warum Bezirks-Expertise einen Unterschied macht</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
            Wien ist nicht gleich Wien. Ein Rohrbruch im Gründerzeithaus am Stephansplatz
            unterscheidet sich massiv von einem Heizungsausfall im Einfamilienhaus in Liesing.
            Die Bauepoche, die Hausverwaltung, die Zugänglichkeit, die typischen Materialien –
            all das entscheidet über den Ablauf einer Reparatur. Wir haben in jedem Bezirk
            gearbeitet und kennen die wiederkehrenden Themen.
          </p>

          <IconList
            items={[
              { text: "1010–1090: Gründerzeit, Palais, denkmalgeschützte Fassaden, alte Bleilot-Leitungen" },
              { text: "1100–1120, 1150–1160, 1200: Gemeindebau-Altbestand, dichte Mietparteien, Strangproblematik" },
              { text: "1130, 1140, 1170–1190: Villen, Cottage, Einfamilienhäuser, komplexe Haustechnik" },
              { text: "1210–1220: Neubau, Seestadt, Fernwärme, Wärmepumpen, Smart Home" },
              { text: "1230: Einfamilienhaus, Wärmepumpentausch, große Bäder, Gartenbewässerung" },
            ]}
            columns={1}
          />
        </div>
      </section>

      {/* Cluster: Innere Bezirke */}
      <section style={{ padding: "64px 0", background: "white" }}>
        <div className="container">
          <p className="section-eyebrow">Innenstadt & Gürtel</p>
          <h2 className="section-title">Innere Bezirke (1010–1090)</h2>
          <p className="section-subtitle" style={{ marginBottom: "32px", maxWidth: "720px" }}>
            Gründerzeit pur. Enge Stiegen, alte Steigleitungen, sensible Fassaden. Wir
            arbeiten hier mit besonders behutsamen Verfahren und eng abgestimmt mit den
            Hausverwaltungen.
          </p>
          <div className="bezirke-grid">
            {innen.map((b) => (
              <a key={b.slug} href={`/bezirke/${b.slug}`} className="bezirk-card">
                <div className="bezirk-card__plz">{b.plz}</div>
                <div className="bezirk-card__name">{b.shortName}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cluster: Arbeiter- und dichte Stadtrand-Bezirke */}
      <section style={{ padding: "64px 0", background: "var(--bg)" }}>
        <div className="container">
          <p className="section-eyebrow">Favoriten, Simmering, Meidling & mehr</p>
          <h2 className="section-title">Dichte Stadtrand-Bezirke</h2>
          <p className="section-subtitle" style={{ marginBottom: "32px", maxWidth: "720px" }}>
            Unser Heimatgebiet. Gemeindebauten, Gründerzeit und neue Stadtentwicklungen
            wie das Sonnwendviertel treffen hier aufeinander.
          </p>
          <div className="bezirke-grid">
            {arbeiter.map((b) => (
              <a key={b.slug} href={`/bezirke/${b.slug}`} className="bezirk-card">
                <div className="bezirk-card__plz">{b.plz}</div>
                <div className="bezirk-card__name">{b.shortName}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cluster: Villen & Cottages West */}
      <section style={{ padding: "64px 0", background: "white" }}>
        <div className="container">
          <p className="section-eyebrow">Hietzing, Währing, Döbling, Penzing, Hernals</p>
          <h2 className="section-title">Villen- und Cottageviertel</h2>
          <p className="section-subtitle" style={{ marginBottom: "32px", maxWidth: "720px" }}>
            Anspruchsvolle Haustechnik, große Bäder, Wärmepumpen, oft Bestandsgebäude mit
            Charakter. Hier zählt Diskretion und handwerkliche Sorgfalt.
          </p>
          <div className="bezirke-grid">
            {aussenWest.map((b) => (
              <a key={b.slug} href={`/bezirke/${b.slug}`} className="bezirk-card">
                <div className="bezirk-card__plz">{b.plz}</div>
                <div className="bezirk-card__name">{b.shortName}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cluster: Transdanubien */}
      <section style={{ padding: "64px 0", background: "var(--bg)" }}>
        <div className="container">
          <p className="section-eyebrow">Floridsdorf & Donaustadt</p>
          <h2 className="section-title">Transdanubien (nördlich der Donau)</h2>
          <p className="section-subtitle" style={{ marginBottom: "32px", maxWidth: "720px" }}>
            Einfamilienhäuser, Reihenhaussiedlungen und das größte Stadtentwicklungsprojekt
            Europas – die Seestadt Aspern. Fernwärme, Photovoltaik, Wärmepumpe sind hier Alltag.
          </p>
          <div className="bezirke-grid">
            {transdanubien.map((b) => (
              <a key={b.slug} href={`/bezirke/${b.slug}`} className="bezirk-card">
                <div className="bezirk-card__plz">{b.plz}</div>
                <div className="bezirk-card__name">{b.shortName}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cluster: Süd */}
      <section style={{ padding: "64px 0", background: "white" }}>
        <div className="container">
          <p className="section-eyebrow">Liesing</p>
          <h2 className="section-title">Südwest-Wien</h2>
          <p className="section-subtitle" style={{ marginBottom: "32px", maxWidth: "720px" }}>
            Rodaun, Kalksburg, Mauer – ruhig, grün, viele Einfamilienhäuser. Typische
            Aufträge: Heizungsmodernisierung, Badsanierung, Wärmepumpentausch.
          </p>
          <div className="bezirke-grid">
            {sued.map((b) => (
              <a key={b.slug} href={`/bezirke/${b.slug}`} className="bezirk-card">
                <div className="bezirk-card__plz">{b.plz}</div>
                <div className="bezirk-card__name">{b.shortName}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <HighlightBox variant="blue" title="Was ist eine Bezirksseite?" icon="📍">
            Jede Bezirksseite kombiniert unsere <strong>7 Leistungen</strong> mit den
            lokalen Besonderheiten Ihres Bezirks: Bauepoche, typische Probleme,
            Grätzl-Bezug, Anfahrtszeit. Sie finden dort auch direkte Links zu den
            jeweiligen Leistungsseiten für Ihren Bezirk – insgesamt <strong>{BEZIRKE.length * LEISTUNGEN.length} Kombinationen</strong>.
          </HighlightBox>
        </div>
      </section>

      <CtaBand
        title="Nicht sicher, wo Sie hingehören?"
        subtitle={`Rufen Sie uns an – wir sagen Ihnen sofort, wer als Nächstes bei Ihnen im Bezirk frei ist. ${FIRMA.telephoneDisplay}`}
      />
    </>
  );
}
