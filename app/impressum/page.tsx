import type { Metadata } from "next";
import { FIRMA } from "@/lib/company";
import { generateBreadcrumbSchema, combineSchemas } from "@/lib/schema";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: `Impressum – ${FIRMA.name}`,
  description: `Impressum von ${FIRMA.legalName}, ${FIRMA.address.street}, ${FIRMA.address.postalCode} ${FIRMA.address.city}.`,
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "Impressum", url: "/impressum" },
  ];
  const schema = combineSchemas(generateBreadcrumbSchema(breadcrumbs));

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <section className="leistung-hero">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 3.6vw, 2.8rem)", fontWeight: 800, margin: 0 }}>
            Impressum
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "16px" }}>
            Offenlegung nach § 25 MedienG und § 5 ECG
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container" style={{ maxWidth: "760px", fontSize: "16px", lineHeight: 1.8, color: "var(--mid)" }}>
          <h2>Medieninhaber, Herausgeber und Diensteanbieter</h2>
          <p>
            <strong>{FIRMA.legalName}</strong><br />
            {FIRMA.address.street}<br />
            {FIRMA.address.postalCode} {FIRMA.address.city}, Österreich
          </p>

          <p>
            Telefon: <a href={`tel:${FIRMA.telephone}`}>{FIRMA.telephoneDisplay}</a><br />
            E-Mail: <a href={`mailto:${FIRMA.email}`}>{FIRMA.email}</a><br />
            Web: <a href={FIRMA.url}>{FIRMA.url}</a>
          </p>

          <h2>Unternehmensgegenstand</h2>
          <p>Gas-, Wasser- und Heizungsinstallation; Sanitärtechnik.</p>

          <h2>Gewerberechtliche Angaben</h2>
          <ul>
            <li>Gewerbe: Gas-, Sanitär- und Heizungstechniker (reglementiertes Gewerbe)</li>
            <li>Gewerbebehörde: Magistratisches Bezirksamt für den 10. Bezirk, 1100 Wien</li>
            <li>Mitgliedschaften: Wirtschaftskammer Wien, Landesinnung Wien der Sanitär-, Heizungs- und Lüftungstechniker</li>
            <li>Anwendbare Rechtsvorschriften: Gewerbeordnung (GewO), abrufbar unter <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer">www.ris.bka.gv.at</a></li>
          </ul>

          <h2>Online-Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
            . Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle nicht verpflichtet und nicht bereit.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Sämtliche Inhalte dieser Website (Texte, Bilder, Grafiken) sind, soweit
            nicht anders gekennzeichnet, urheberrechtlich geschützt. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
            des Urheberrechts bedürfen der schriftlichen Zustimmung des Urhebers.
          </p>

          <h2>Haftung für Inhalte & Links</h2>
          <p>
            Inhalte dieser Website werden mit größter Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir keine
            Gewähr übernehmen. Unsere Seite enthält Links zu externen Websites Dritter,
            auf deren Inhalte wir keinen Einfluss haben und für die wir keine Gewähr
            übernehmen.
          </p>
        </div>
      </section>
    </>
  );
}
