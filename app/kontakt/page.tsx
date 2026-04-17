import type { Metadata } from "next";
import { FIRMA } from "@/lib/company";
import {
  generateBreadcrumbSchema,
  combineSchemas,
} from "@/lib/schema";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import HighlightBox from "@/components/content/HighlightBox";
import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import EntityCard from "@/components/content/EntityCard";

export const metadata: Metadata = {
  title: `Kontakt – Installateur Wien anrufen | ${FIRMA.name}`,
  description:
    "Kontakt zu SA Stadtinstallation: Telefon +43 676 634 90 34 (24h), E-Mail, Firmensitz in 1100 Wien. Anruf wird direkt von einem Monteur entgegengenommen.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "Kontakt", url: "/kontakt" },
  ];
  const schema = combineSchemas(generateBreadcrumbSchema(breadcrumbs));

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <section className="leistung-hero">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <p className="section-eyebrow" style={{ color: "white", opacity: 0.7 }}>
            Kontakt · 24h erreichbar · Sitz in Wien
          </p>
          <h1
            style={{
              color: "white",
              fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
              fontWeight: 800,
              maxWidth: "820px",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Sprechen Sie direkt mit einem Monteur
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
            Unsere Hotline wird nicht von einem Call-Center beantwortet. Wenn Sie anrufen,
            erreichen Sie einen unserer Installateure – auch nachts und am Wochenende.
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
            <a href={`mailto:${FIRMA.email}`} className="btn-outline">✉ {FIRMA.email}</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <EntityCard label="Telefon" title={FIRMA.telephoneDisplay} icon="📞">
              24 Stunden, 365 Tage erreichbar. Notfälle werden sofort priorisiert und
              disponiert.
            </EntityCard>
            <EntityCard label="E-Mail" title={FIRMA.email} icon="✉">
              Antwort meist innerhalb eines Werktags. Für Notfälle bitte anrufen – Mails
              werden nicht 24/7 gelesen.
            </EntityCard>
            <EntityCard label="Firmensitz" title={`${FIRMA.address.street}, ${FIRMA.address.postalCode} ${FIRMA.address.city}`} icon="📍">
              Humboldtgasse 33/1/29, 1100 Wien – Favoriten. Parteienverkehr nach
              Vereinbarung.
            </EntityCard>
            <EntityCard label="Öffnungszeiten Büro" title="Mo–Fr 07–18" icon="🕑">
              Außerhalb: 24h-Notdienst per Telefon. Samstag & Sonntag ausschließlich
              Notdienst.
            </EntityCard>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <FeaturedSnippet
            question="Wie erreiche ich SA Stadtinstallation am schnellsten?"
            answer={
              <p>
                Der schnellste Weg ist der direkte Anruf unter{" "}
                <strong>{FIRMA.telephoneDisplay}</strong>. Für Notfälle ist Telefon die
                einzig sinnvolle Option – bitte keine E-Mails im Ernstfall. Für
                planbare Anfragen (Badsanierung, Heizungstausch, Wartungsvertrag) können
                Sie uns auch per E-Mail an <strong>{FIRMA.email}</strong> erreichen; wir
                melden uns innerhalb eines Werktags mit einem Terminvorschlag.
              </p>
            }
          />

          <h2 style={{ marginTop: "48px" }}>Was Sie bitte ans Telefon haben</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
            Damit wir Ihre Anfrage schnell einschätzen können, haben Sie idealerweise
            bereits beim ersten Anruf griffbereit:
          </p>
          <ul style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--mid)", paddingLeft: "22px" }}>
            <li><strong>Adresse</strong> inkl. Bezirk und Stock/Wohnungsnummer</li>
            <li><strong>Art des Problems</strong> kurz geschildert (z.B. „Wasser tropft aus Heizkörper" statt „irgendwas ist kaputt")</li>
            <li><strong>Wann es passiert ist</strong> und wie dringend es ist</li>
            <li>Wenn es eine Mietwohnung ist: <strong>Name der Hausverwaltung</strong></li>
            <li>Bei Heizung/Gas: <strong>Marke & Modell</strong> der Therme (auf dem Typenschild)</li>
          </ul>

          <HighlightBox variant="blue" title="Schriftliches Angebot statt Telefonpreis" icon="📋">
            Am Telefon geben wir keine Endpreise für komplexere Arbeiten – das wäre
            unseriös. Bei planbaren Aufträgen vereinbaren wir einen kostenlosen Vor-Ort-
            Termin und übergeben Ihnen danach ein schriftliches Festpreis-Angebot. Nur
            bei Standard-Notdienst (z.B. Rohrbruch absperren) nennen wir telefonisch den
            Festpreis, weil der Umfang definiert ist.
          </HighlightBox>

          <h2 style={{ marginTop: "48px" }}>Anfahrt zum Firmensitz</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
            Unsere Werkstatt liegt in der Humboldtgasse 33/1/29, 1100 Wien – 200 Meter
            vom Reumannplatz entfernt. Öffentlich erreichbar über U1 Reumannplatz
            (2 Minuten zu Fuß) oder Bus 7A. Parken: Kurzparkzone, meist Platz in der
            Humboldtgasse selbst oder in der Laxenburger Straße. Besuche nach
            Vereinbarung – rufen Sie vorher an, wir sind oft auf Montage.
          </p>

          <HighlightBox title="Hausverwaltungen & Eigentümer" icon="🏢">
            Wenn Sie eine Hausverwaltung, Eigentümergemeinschaft oder Genossenschaft
            vertreten und einen verlässlichen Rahmenvertrags-Partner suchen: rufen Sie
            direkt Herrn Alagöz an. Wir führen ein kurzes Erstgespräch, prüfen
            Projektvolumen und räumliche Passung und liefern binnen einer Woche ein
            Rahmenangebot mit Stundensätzen und Service-Level-Vereinbarung.
          </HighlightBox>
        </div>
      </section>
    </>
  );
}
