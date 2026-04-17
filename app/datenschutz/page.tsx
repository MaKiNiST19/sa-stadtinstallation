import type { Metadata } from "next";
import { FIRMA } from "@/lib/company";
import { generateBreadcrumbSchema, combineSchemas } from "@/lib/schema";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: `Datenschutz – ${FIRMA.name}`,
  description: `Datenschutzerklärung von ${FIRMA.legalName} nach DSGVO.`,
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "Datenschutz", url: "/datenschutz" },
  ];
  const schema = combineSchemas(generateBreadcrumbSchema(breadcrumbs));

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <section className="leistung-hero">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 3.6vw, 2.8rem)", fontWeight: 800, margin: 0 }}>
            Datenschutzerklärung
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "16px" }}>
            Nach Art. 13 DSGVO und § 96 TKG
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container" style={{ maxWidth: "760px", fontSize: "16px", lineHeight: 1.8, color: "var(--mid)" }}>
          <h2>1. Verantwortlicher</h2>
          <p>
            <strong>{FIRMA.legalName}</strong><br />
            {FIRMA.address.street}, {FIRMA.address.postalCode} {FIRMA.address.city}<br />
            E-Mail: <a href={`mailto:${FIRMA.email}`}>{FIRMA.email}</a><br />
            Telefon: <a href={`tel:${FIRMA.telephone}`}>{FIRMA.telephoneDisplay}</a>
          </p>

          <h2>2. Verarbeitung personenbezogener Daten</h2>
          <p>
            Wir verarbeiten Ihre personenbezogenen Daten ausschließlich zur Erfüllung
            unserer Leistungen (Auftragsabwicklung, Terminvereinbarung, Rechnungs-
            legung, gesetzliche Aufbewahrungspflichten) sowie zur Beantwortung Ihrer
            Anfragen.
          </p>

          <h3>2.1. Anfragen per E-Mail oder Telefon</h3>
          <p>
            Wenn Sie uns kontaktieren, werden Ihre Angaben (Name, Kontaktdaten,
            Anliegen) zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen
            bei uns gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
            (vorvertragliche Maßnahmen bzw. Vertragserfüllung).
          </p>

          <h3>2.2. Auftragsabwicklung</h3>
          <p>
            Für die Durchführung Ihres Auftrags verarbeiten wir Stammdaten, Rechnungs-
            und Leistungsnachweisdaten. Aufbewahrungspflicht nach § 132 BAO: 7 Jahre.
          </p>

          <h3>2.3. Server-Logs</h3>
          <p>
            Beim Besuch unserer Website werden automatisch Informationen in Server-
            Logs gespeichert (IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp,
            Betriebssystem, Referrer-URL). Diese Daten dienen ausschließlich der
            technischen Sicherheit und werden nach 7 Tagen gelöscht. Rechtsgrundlage:
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>

          <h2>3. Weitergabe von Daten</h2>
          <p>
            Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, soweit dies zur
            Vertragserfüllung erforderlich ist (z.B. an Hausverwaltung, Rauchfangkehrer,
            Versicherung, Förderstelle) oder eine gesetzliche Pflicht besteht.
          </p>

          <h2>4. Cookies</h2>
          <p>
            Diese Website verwendet in der Grundkonfiguration keine Marketing- oder
            Analyse-Cookies. Technisch notwendige Cookies (z.B. Session-Cookies) werden
            zur Gewährleistung der Funktion gesetzt und beim Schließen des Browsers
            gelöscht.
          </p>

          <h2>5. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
            Löschung (Art. 17), Einschränkung (Art. 18) sowie auf Datenübertragbarkeit
            (Art. 20) und Widerspruch (Art. 21) gemäß DSGVO. Beschwerden können Sie
            bei der österreichischen Datenschutzbehörde einbringen:
            <br />
            <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
              https://www.dsb.gv.at
            </a>
          </p>

          <h2>6. Änderungen</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an
            geänderte Rechtslagen oder Änderungen unserer Leistungen anzupassen. Die
            jeweils aktuelle Version ist unter <a href={`${FIRMA.url}/datenschutz`}>{`${FIRMA.url}/datenschutz`}</a> abrufbar.
          </p>
        </div>
      </section>
    </>
  );
}
