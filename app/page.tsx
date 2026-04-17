import type { Metadata } from "next";
import Image from "next/image";
import { FIRMA } from "@/lib/company";

const CARD_IMAGES: Record<string, string> = {
  "wasserinstallateur-wien":   "/images/leistungen/wasserinstallateur-wien.jpg",
  "verstopfung-wien":          "/images/leistungen/verstopfung-wien.jpg",
  "notfall-installateur-wien": "/images/leistungen/notfall-installateur-wien.jpg",
  "thermenwartung-wien":       "/images/leistungen/thermenwartung-wien.jpg",
  "sanitaertechnik-wien":      "/images/leistungen/sanitaertechnik-wien.jpg",
  "heizungstechnik-wien":      "/images/leistungen/heizungstechnik-wien.jpg",
  "gas-installateur-wien":     "/images/leistungen/gas-installateur-wien.jpg",
};
import { LEISTUNGEN } from "@/lib/leistungen";
import { BEZIRKE } from "@/lib/bezirke";
import { FAQ_HOME } from "@/lib/faqs";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  combineSchemas,
} from "@/lib/schema";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import OrbitBrands from "@/components/OrbitBrands";
import BrandCarousel from "@/components/foundations/BrandCarousel";
import FaqSection from "@/components/content/FaqSection";
import CtaBand from "@/components/content/CtaBand";
import HighlightBox from "@/components/content/HighlightBox";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";
import { RatingBadge } from "@/components/foundations/rating-badge";

export const metadata: Metadata = {
  title: `${FIRMA.name} | Installateur Wien – 24h Notdienst für Gas, Wasser, Heizung`,
  description:
    "Installateur Wien mit 24h Notdienst. Gas, Wasser, Heizung, Sanitär, Therme, Rohrreinigung. WKÖ-Meisterbetrieb, Google Käuferschutz verifiziert, alle 23 Bezirke.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema(FAQ_HOME);
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Startseite", url: "/" }]);
  const schema = combineSchemas(faqSchema, breadcrumbSchema);

  return (
    <>
      <SchemaJsonLd schema={schema} />

      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content container">
          <p className="hero__eyebrow">
            <span className="hero__pulse" aria-hidden="true" />
            24h Notdienst · In 30 Min. bei Ihnen
          </p>
          <h1 className="hero__title">
            Ihr <em>Installateur</em> in Wien – schnell, sauber, fair.
          </h1>
          <p className="hero__subtitle">
            Gas, Wasser, Heizung, Sanitär und Therme. Seit über 10 Jahren in allen 23
            Wiener Bezirken. WKÖ-Meisterbetrieb, Google Käuferschutz verifiziert.
          </p>

          <div className="hero__actions">
            <a href={`tel:${FIRMA.telephone}`} className="btn-outline btn-outline--white">
              Jetzt anrufen
            </a>
            <a href="/leistungen" className="btn-outline">
              Unsere Leistungen
            </a>
          </div>
        </div>

        {/* Floating badge bar */}
        <div className="badge-bar">
          <div className="badge-bar__item">
            <RatingBadge
              statValue={FIRMA.stats.yearsExperience}
              title="Jahre Erfahrung"
              subtitle=""
            />
          </div>
          <div className="badge-bar__item">
            <RatingBadge
              statValue={FIRMA.stats.responseTime}
              title="Ø Anfahrtszeit"
              subtitle=""
            />
          </div>
          <div className="badge-bar__item">
            <RatingBadge
              statValue={FIRMA.stats.jobsCompleted}
              title="Aufträge erledigt"
              subtitle=""
            />
          </div>
          <div className="badge-bar__item">
            <RatingBadge
              title="Google Käuferschutz"
              subtitle={`${FIRMA.trust.rating} ★ · ${FIRMA.trust.reviewCount} Bewertungen`}
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* ===================== OrbitBrands ===================== */}
      <OrbitBrands />

      {/* ===================== Services Grid ===================== */}
      <section style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-eyebrow">Unsere 7 Kernleistungen</p>
            <h2 className="section-title">Alles aus einer Hand – vom Tropfhahn bis zur Heizungsanlage</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Wir sind ein voll konzessionierter Meisterbetrieb. Ob klassische Reparatur,
              geplante Sanierung oder 24h Notfall – wir liefern eine saubere, dokumentierte
              Ausführung mit Festpreisangebot.
            </p>
          </div>

          <div className="services-grid">
            {LEISTUNGEN.map((l) => (
              <a
                key={l.slug}
                href={`/leistungen/${l.slug}`}
                className="service-magic-card"
                aria-label={`${l.shortTitle} – mehr erfahren`}
              >
                <div className="service-magic-card__img">
                  <Image
                    src={CARD_IMAGES[l.slug] ?? l.image}
                    alt={l.shortTitle}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="service-magic-card__title">{l.shortTitle}</h3>
                <p className="service-magic-card__text">{l.tagline}</p>
                {l.emergency && (
                  <span className="notfall-banner">24/7 Notdienst</span>
                )}
                <span className="service-magic-card__link">Mehr erfahren →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Entity-SEO: WER, WANN, WIE ===================== */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p className="section-eyebrow">Wer wir sind</p>
            <h2 className="section-title">
              Der Installateur aus {FIRMA.address.postalCode} {FIRMA.address.city} –
              seit über 10 Jahren im Einsatz
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            <EntityCard label="Wer" title="Konzessionierter Meisterbetrieb" icon="🛠">
              Eingetragen bei der Wirtschaftskammer Wien und der Landesinnung der Sanitär-,
              Heizungs- und Lüftungstechniker. Alle Gasarbeiten nach ÖVGW G1/G2, alle
              Wasserarbeiten nach ÖNORM B 2531.
            </EntityCard>
            <EntityCard label="Wann" title="24 Stunden, 365 Tage" icon="⏱">
              Notdienst 24/7 – auch Samstag, Sonntag, Feiertag. Büro Mo–Fr 07:00–18:00.
              Ziel-Anfahrtszeit: 30 Min. (1010–1100), 60 Min. (Außenbezirke).
            </EntityCard>
            <EntityCard label="Wo" title="Alle 23 Wiener Bezirke" icon="📍">
              Firmensitz {FIRMA.address.street}, {FIRMA.address.postalCode}{" "}
              {FIRMA.address.city}. Keine versteckten Anfahrtszonen – von der Inneren
              Stadt bis Stammersdorf.
            </EntityCard>
            <EntityCard label="Warum wir" title="Festpreis statt Überraschungen" icon="✓">
              Jeder Auftrag mit schriftlichem Festpreis vor Arbeitsbeginn. Google
              Käuferschutz verifiziert, ⭐ {FIRMA.trust.rating} bei {FIRMA.trust.reviewCount}{" "}
              Bewertungen.
            </EntityCard>
          </div>
        </div>
      </section>

      {/* ===================== Mini-Story / E-E-A-T ===================== */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div
          className="container"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}
        >
          <MiniStory
            title="Frau M., 1020 Leopoldstadt"
            context="Altbau, Jänner 2026"
            outcome="Rohrbruch in 45 Min. behoben, kein Wasserschaden am Parkett."
          >
            „Um 23:30 drückte Wasser aus der Wand. Ich war panisch, habe angerufen –
            um 0:15 war der Herr da, Haupthahn gesichert, Leck gesucht, provisorisch
            geflickt. Am nächsten Tag kam die saubere Lösung. Preis wie am Telefon
            genannt."
          </MiniStory>
          <MiniStory
            title="Herr K., 1130 Hietzing"
            context="Einfamilienhaus, März 2026"
            outcome="Umstieg von 22 Jahre alter Gastherme auf Wärmepumpe. 12.000 € Förderung genehmigt."
          >
            „Ich wollte ehrliche Beratung, keine Verkaufsshow. SA Stadtinstallation hat
            mir alle drei Varianten durchgerechnet, die Fördermittel beantragt und die
            Anlage in vier Tagen installiert. Der Verbrauch ist seither um 40 % gesunken."
          </MiniStory>
        </div>
      </section>

      {/* ===================== CTA Band ===================== */}
      <CtaBand
        variant="red"
        title="Jetzt ein Notfall? Wir sind 24 Stunden erreichbar."
        subtitle="Rohrbruch, Gasgeruch, Heizungsausfall – rufen Sie an, wir sind in Minuten bei Ihnen."
      />

      {/* ===================== Bezirke Grid ===================== */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p className="section-eyebrow">In ganz Wien für Sie da</p>
            <h2 className="section-title">Installateur in allen 23 Wiener Bezirken</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Wählen Sie Ihren Bezirk – wir zeigen Ihnen lokal, was für Ihr Haus relevant
              ist: typische Bauepoche, häufige Probleme, lokale Ansprechpartner.
            </p>
          </div>

          <div className="bezirke-grid">
            {BEZIRKE.map((b) => (
              <a key={b.slug} href={`/bezirke/${b.slug}`} className="bezirk-card">
                <div className="bezirk-card__plz">{b.plz}</div>
                <div className="bezirk-card__name">{b.shortName}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HighlightBox: Was viele nicht wissen ===================== */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <HighlightBox
            title="Warum Sie bei der Thermenwartung nicht sparen sollten"
            icon="💡"
          >
            Laut ÖNORM B 8131 ist die jährliche Wartung von Gasthermen verpflichtend.
            Ohne aktuellen Wartungsnachweis kann im Schadensfall die Gebäude- oder
            Haftpflichtversicherung die Leistung kürzen oder verweigern. Eine Wartung
            kostet einen Bruchteil dessen, was ein ungewarteter Defekt oder ein
            Versicherungsstreit ausmacht.
          </HighlightBox>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <FaqSection
        title="Häufig gestellte Fragen"
        subtitle="Die wichtigsten Antworten auf einen Blick – für den Notfall, die Planung und den Alltag."
        items={FAQ_HOME}
      />

      {/* ===================== Brand Carousel ===================== */}
      <BrandCarousel />
    </>
  );
}
