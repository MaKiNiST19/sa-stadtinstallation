import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FIRMA } from "@/lib/company";
import { LEISTUNGEN, getLeistung, LEISTUNG_SLUGS } from "@/lib/leistungen";
import { BEZIRKE } from "@/lib/bezirke";
import { pickFaqs, FAQS_BY_TOPIC } from "@/lib/faqs";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  combineSchemas,
} from "@/lib/schema";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/content/FaqSection";
import CtaBand from "@/components/content/CtaBand";
import HighlightBox from "@/components/content/HighlightBox";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";
import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import IconList from "@/components/content/IconList";

// Dedizierte Inhalt-Module pro Leistung (handgeschrieben, NICHT generiert)
import { LEISTUNG_CONTENT } from "@/content/leistungen";

export const dynamicParams = false;

export function generateStaticParams() {
  return LEISTUNG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLeistung(slug);
  if (!l) return {};
  return {
    title: l.title,
    description: l.description,
    alternates: { canonical: `/leistungen/${l.slug}` },
    openGraph: {
      title: l.title,
      description: l.description,
      url: `${FIRMA.url}/leistungen/${l.slug}`,
      type: "website",
    },
  };
}

export default async function LeistungPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLeistung(slug);
  if (!l) return notFound();

  const content = LEISTUNG_CONTENT[l.slug];

  // FAQ-Topic aus Slug ableiten (heizungstechnik → heizung, sanitaertechnik → sanitaer, ...)
  const topicMap: Record<string, keyof typeof FAQS_BY_TOPIC> = {
    "notfall-installateur-wien": "notfall",
    "gas-installateur-wien": "gas",
    "wasserinstallateur-wien": "wasser",
    "heizungstechnik-wien": "heizung",
    "sanitaertechnik-wien": "sanitaer",
    "thermenwartung-wien": "therme",
    "verstopfung-wien": "verstopfung",
  };
  const faqs = pickFaqs(topicMap[l.slug] ?? "home", 6);

  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "Leistungen", url: "/leistungen" },
    { name: l.shortTitle, url: `/leistungen/${l.slug}` },
  ];

  const schema = combineSchemas(
    generateServiceSchema(l),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema(breadcrumbs)
  );

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <section className="leistung-hero">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <p className="section-eyebrow" style={{ color: "white", opacity: 0.7 }}>
            Leistung · Wien
          </p>
          <h1
            style={{
              color: "white",
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 800,
              maxWidth: "900px",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            {l.title}
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
            {l.tagline}
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
            <a href="/kontakt" className="btn-outline">Termin anfragen</a>
          </div>
        </div>
      </section>

      {/* Quick Entity Grid */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            <EntityCard label="Was" title={l.shortTitle} icon={l.icon}>
              {l.description}
            </EntityCard>
            <EntityCard label="Wann" title={l.emergency ? "24h / 7 Tage" : "Mo–Fr 07–18, Notdienst 24h"} icon="⏱">
              Planbare Termine innerhalb 2–5 Werktagen. Notfälle innerhalb von 30–60 Min. vor Ort.
            </EntityCard>
            <EntityCard label="Wo" title="Alle 23 Wiener Bezirke" icon="📍">
              Von 1010 Innere Stadt bis 1230 Liesing. Firmensitz {FIRMA.address.street},{" "}
              {FIRMA.address.postalCode} {FIRMA.address.city}.
            </EntityCard>
            <EntityCard label="Wie viel" title={l.priceHint ?? "Festpreis nach Vor-Ort"} icon="€">
              Transparenter Festpreis vor Arbeitsbeginn. Kostenloses Angebot nach Besichtigung.
            </EntityCard>
          </div>
        </div>
      </section>

      {/* Main content - handwritten, not auto-generated */}
      {content ? (
        <section style={{ padding: "80px 0", background: "white" }}>
          <div className="container" style={{ maxWidth: "820px" }}>
            {content}
          </div>
        </section>
      ) : (
        <section style={{ padding: "80px 0", background: "white" }}>
          <div className="container" style={{ maxWidth: "820px" }}>
            <FeaturedSnippet
              question={`Was ist ${l.shortTitle} und wen betrifft es?`}
              answer={
                <p>
                  {l.shortTitle} umfasst alle Arbeiten rund um {l.menuLabel.toLowerCase()} in Wohn- und
                  Gewerbeobjekten in Wien. SA Stadtinstallation bietet diese Leistung als
                  konzessionierter Meisterbetrieb mit WKÖ-Eintragung und vollständiger
                  Dokumentation nach ÖNORM bzw. ÖVGW-Richtlinien.
                </p>
              }
            />

            <h2 style={{ marginTop: "48px" }}>Typische Fälle, bei denen wir helfen</h2>
            <IconList
              items={l.commonProblems.map((p) => ({ text: p }))}
              columns={1}
            />

            <h2 style={{ marginTop: "48px" }}>Worauf wir als Meisterbetrieb achten</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
              Jeder Auftrag beginnt mit einer kostenlosen Vor-Ort-Einschätzung (außer Notfall)
              und einem schriftlichen Festpreis. Wir verwenden ausschließlich geprüfte
              Materialien, dokumentieren Gasarbeiten revisionssicher und liefern am
              Ende eine Abnahme-Dokumentation, die jede Hausverwaltung oder
              Versicherung akzeptiert.
            </p>

            <div style={{ marginTop: "40px" }}>
              <MiniStory
                title={`Ein typischer Fall – ${l.shortTitle}`}
                context="Wien, letzter Monat"
                outcome="Kunde bekam schriftlichen Festpreis, Ausführung innerhalb der Frist, kein Nachtrag."
              >
                Dieser Platzhalter wird für jede Leistung durch einen konkreten, echten Kundenfall
                ersetzt. Vollständiger Inhalt wird in <code>content/leistungen/{l.slug}.tsx</code> hinterlegt.
              </MiniStory>
            </div>

            <HighlightBox title="Hinweis für Eigentümer & Hausverwaltungen" icon="ℹ">
              Wir arbeiten regelmäßig mit Wiener Hausverwaltungen zusammen. Auf Wunsch
              rechnen wir direkt über die Hausverwaltung ab, liefern Leistungsnachweise
              und koordinieren die Terminierung mit den Mietern.
            </HighlightBox>
          </div>
        </section>
      )}

      {/* Related services */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container">
          <p className="section-eyebrow">Verwandte Leistungen</p>
          <h2 className="section-title">Das passt dazu</h2>
          <div
            className="services-grid"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: "32px" }}
          >
            {l.relatedServices
              .map((s) => LEISTUNGEN.find((x) => x.slug === s))
              .filter(Boolean)
              .slice(0, 3)
              .map((r) => (
                <a
                  key={r!.slug}
                  href={`/leistungen/${r!.slug}`}
                  className="service-magic-card"
                >
                  <div className="service-magic-card__icon" aria-hidden="true">
                    <span style={{ fontSize: "32px" }}>{r!.icon}</span>
                  </div>
                  <h3 className="service-magic-card__title">{r!.shortTitle}</h3>
                  <p className="service-magic-card__text">{r!.description}</p>
                  <span className="service-magic-card__link">Ansehen →</span>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* Bezirke als Cluster-Einstieg */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container">
          <p className="section-eyebrow">{l.shortTitle} in Ihrem Bezirk</p>
          <h2 className="section-title">Lokale {l.shortTitle}-Seiten für alle 23 Bezirke</h2>
          <p className="section-subtitle" style={{ marginBottom: "32px" }}>
            Wählen Sie Ihren Bezirk – dort finden Sie lokale Besonderheiten
            (Bauepoche, typische Probleme, Grätzl-Bezug) und die exakten Leistungen für Ihre Adresse.
          </p>
          <div className="bezirke-grid">
            {BEZIRKE.map((b) => (
              <a
                key={b.slug}
                href={`/bezirke/${b.slug}/${l.slug}`}
                className="bezirk-card"
              >
                <div className="bezirk-card__plz">{b.plz}</div>
                <div className="bezirk-card__name">{b.shortName}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title={`Häufige Fragen zu ${l.shortTitle}`}
        items={faqs}
      />

      <CtaBand
        variant={l.emergency ? "red" : "blue"}
        title={
          l.emergency
            ? `${l.shortTitle} – jetzt akut? Wir sind 24h erreichbar.`
            : `Jetzt Angebot für ${l.shortTitle} anfordern`
        }
        subtitle={
          l.emergency
            ? "Anfahrtszeit 30–60 Min. in ganz Wien. Festpreis vor Arbeitsbeginn."
            : "Wir melden uns innerhalb eines Werktags mit einem unverbindlichen Angebot."
        }
      />
    </>
  );
}
