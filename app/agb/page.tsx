import type { Metadata } from "next";
import { FIRMA } from "@/lib/company";
import { generateBreadcrumbSchema, combineSchemas } from "@/lib/schema";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: `AGB – ${FIRMA.name}`,
  description: `Allgemeine Geschäftsbedingungen von ${FIRMA.legalName}.`,
  alternates: { canonical: "/agb" },
};

export default function AGBPage() {
  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "AGB", url: "/agb" },
  ];
  const schema = combineSchemas(generateBreadcrumbSchema(breadcrumbs));

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <section className="leistung-hero">
        <HeroBackground />
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 3.6vw, 2.8rem)", fontWeight: 800, margin: 0 }}>
            Allgemeine Geschäftsbedingungen
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "16px" }}>
            {FIRMA.legalName}, Stand April 2026
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container" style={{ maxWidth: "760px", fontSize: "16px", lineHeight: 1.8, color: "var(--mid)" }}>
          <h2>1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen
            {" "}{FIRMA.legalName} (im Folgenden „Auftragnehmer") und dem Auftraggeber
            über Installationsleistungen im Bereich Gas-, Wasser-, Heizungs- und
            Sanitärtechnik. Abweichende Bedingungen des Auftraggebers werden nur
            wirksam, wenn sie schriftlich bestätigt sind.
          </p>

          <h2>2. Angebot, Auftrag und Festpreis</h2>
          <p>
            Alle Angebote sind freibleibend, sofern nicht ausdrücklich als Festpreis
            gekennzeichnet. Ein Festpreis-Angebot hat eine Bindungsfrist von 30 Tagen
            ab Ausstellungsdatum. Der Auftrag kommt durch schriftliche (auch per
            E-Mail) Annahme durch den Auftraggeber zustande.
          </p>

          <h2>3. Leistungsumfang</h2>
          <p>
            Der Leistungsumfang ergibt sich aus dem schriftlichen Angebot. Nicht
            explizit genannte Leistungen sind nicht Vertragsbestandteil. Bei
            unvorhersehbaren Umständen während der Ausführung (z.B. verdeckte
            Altrohre, nicht dokumentierte Installationen) wird der Auftraggeber vor
            der weiteren Ausführung informiert und stimmt dem Nachtrag schriftlich zu.
          </p>

          <h2>4. Preise und Zahlung</h2>
          <p>
            Alle Preise verstehen sich inklusive der gesetzlichen Umsatzsteuer (20 %).
            Zahlungen sind ohne Abzug binnen 14 Tagen nach Rechnungsdatum fällig.
            Bei Zahlungsverzug werden Verzugszinsen gemäß § 1333 ABGB und Mahn-
            spesen verrechnet. Für Notdienst-Einsätze ist eine Sofortzahlung nach
            Abschluss der Arbeit vereinbart (Barzahlung, Bankomat oder Sofortüberweisung).
          </p>

          <h2>5. Ausführungsfristen</h2>
          <p>
            Vereinbarte Termine werden nach besten Kräften eingehalten. Liefer- und
            Montagetermine verlängern sich angemessen bei höherer Gewalt, Lieferverzug
            durch Dritte oder unverschuldete Baustellenunterbrechungen.
          </p>

          <h2>6. Gewährleistung</h2>
          <p>
            Es gelten die gesetzlichen Gewährleistungsregelungen nach § 922 ABGB.
            Bei beweglichen Sachen beträgt die Gewährleistungsfrist 2 Jahre, bei
            unbeweglichen Sachen (fest verbunden mit dem Gebäude) 3 Jahre. Verschleißteile
            (z.B. Dichtungen, Elektroden, Ionisationsstifte) sind von der Gewährleistung
            ausgenommen.
          </p>

          <h2>7. Haftung</h2>
          <p>
            Der Auftragnehmer haftet für Schäden nur bei Vorsatz oder grober
            Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist, soweit
            gesetzlich zulässig, ausgeschlossen. Eine Haftpflichtversicherung mit
            branchenüblicher Deckung besteht. Folgeschäden sind nur insoweit gedeckt,
            als die Versicherung eintritt.
          </p>

          <h2>8. Eigentumsvorbehalt</h2>
          <p>
            Gelieferte und eingebaute Materialien bleiben bis zur vollständigen Zahlung
            Eigentum des Auftragnehmers, soweit dies rechtlich möglich ist.
          </p>

          <h2>9. Rücktritt und Storno</h2>
          <p>
            Bei Konsumentengeschäften im Sinne des KSchG besteht das gesetzliche
            Rücktrittsrecht. Bei Storno nach Auftragsbestätigung aber vor
            Arbeitsbeginn werden bereits entstandene Kosten (z.B. bestellte
            Materialien, Planungsaufwand) in Rechnung gestellt.
          </p>

          <h2>10. Gerichtsstand und anwendbares Recht</h2>
          <p>
            Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.
            Gerichtsstand ist Wien. Bei Verbrauchergeschäften gelten die
            zwingenden Bestimmungen des KSchG.
          </p>
        </div>
      </section>
    </>
  );
}
