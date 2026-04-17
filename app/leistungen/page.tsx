import type { Metadata } from "next";
import { FIRMA } from "@/lib/company";
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

export const metadata: Metadata = {
  title: `Leistungen Installateur Wien | ${FIRMA.name}`,
  description:
    "Unsere 7 Kern-Leistungen als konzessionierter Installateur in Wien: Gas, Wasser, Heizung, Sanitär, Therme, Rohrreinigung, 24h Notdienst.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "Leistungen", url: "/leistungen" },
  ];
  const schema = combineSchemas(generateBreadcrumbSchema(breadcrumbs));

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <section className="leistung-hero">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <p className="section-eyebrow" style={{ color: "white", opacity: 0.7 }}>
            7 Leistungen · 23 Bezirke · 1 Meisterbetrieb
          </p>
          <h1 style={{ color: "white", fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)", fontWeight: 800, maxWidth: "820px", margin: 0 }}>
            Das leistet <em style={{ color: "var(--accent)", fontStyle: "normal" }}>SA Stadtinstallation</em> in Wien
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", maxWidth: "680px", lineHeight: 1.7, marginTop: "20px" }}>
            Vom tropfenden Wasserhahn bis zum Heizungstausch: Wir decken das gesamte Spektrum
            Gas, Wasser, Heizung, Sanitär ab – konzessioniert, dokumentiert und mit Festpreis.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container">
          <FeaturedSnippet
            question="Welche Leistungen bietet ein konzessionierter Installateur in Wien?"
            answer={
              <p>
                Ein konzessionierter Installateur in Wien deckt vier große Bereiche ab:
                Gas (Leitungen, Thermen, Dichtheitsprüfung), Wasser (Installation, Rohrbruch,
                Armaturen), Heizung (Planung, Tausch, hydraulischer Abgleich) und Sanitär
                (Badsanierung, WC, Dusche). Dazu kommen Thermenwartung, Rohrreinigung und
                24h-Notdienst. SA Stadtinstallation bietet alle sieben Leistungen aus einer Hand.
              </p>
            }
          />

          <div className="services-grid" style={{ marginTop: "48px" }}>
            {LEISTUNGEN.map((l) => (
              <a key={l.slug} href={`/leistungen/${l.slug}`} className="service-magic-card">
                <div className="service-magic-card__icon" aria-hidden="true">
                  <span style={{ fontSize: "40px" }}>{l.icon}</span>
                </div>
                <h2 className="service-magic-card__title">{l.shortTitle}</h2>
                <p className="service-magic-card__text">{l.description}</p>
                {l.emergency && <span className="notfall-banner">24/7 Notdienst</span>}
                <span className="service-magic-card__link">Details ansehen →</span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: "64px" }}>
            <HighlightBox
              variant="blue"
              title="Unsicher, welche Leistung Sie brauchen?"
              icon="💬"
            >
              Rufen Sie uns an – wir beraten am Telefon kostenlos und sagen Ihnen direkt,
              ob eine kurze Reparatur, ein Wartungstermin oder eine größere Sanierung
              zielführend ist. <strong>{FIRMA.telephoneDisplay}</strong>, 24h erreichbar.
            </HighlightBox>
          </div>
        </div>
      </section>

      <CtaBand
        title="Brauchen Sie einen Termin oder haben Sie einen Notfall?"
        subtitle="Werktag oder Wochenende – wir melden uns innerhalb von 15 Minuten zurück."
      />
    </>
  );
}
