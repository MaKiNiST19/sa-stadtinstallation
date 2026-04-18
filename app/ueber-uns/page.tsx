import type { Metadata } from "next";
import { FIRMA } from "@/lib/company";
import {
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  combineSchemas,
} from "@/lib/schema";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import HighlightBox from "@/components/content/HighlightBox";
import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";
import IconList from "@/components/content/IconList";
import CtaBand from "@/components/content/CtaBand";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: `Über uns – ${FIRMA.name} | Meisterbetrieb in Wien`,
  description:
    "Seit 2015 Ihr konzessionierter Installateur in Wien. WKÖ-Mitglied, Google Käuferschutz verifiziert, Landesinnung Wien. Lernen Sie unser Team kennen.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "Über uns", url: "/ueber-uns" },
  ];
  const schema = combineSchemas(
    generateOrganizationSchema(),
    generateBreadcrumbSchema(breadcrumbs)
  );

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <section className="leistung-hero">
        <HeroBackground />
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <p className="section-eyebrow" style={{ color: "white", opacity: 0.7 }}>
            Seit 2015 · Meisterbetrieb · Landesinnung Wien
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
            {FIRMA.name} – Ihr konzessionierter Installateur in Wien
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
            Ein kleiner Wiener Familienbetrieb mit großem handwerklichem Anspruch. Wir
            arbeiten lieber langsamer und richtig als schneller und oberflächlich.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <FeaturedSnippet
            question="Wer ist SA Stadtinstallation?"
            answer={
              <p>
                SA Stadtinstallation ist ein konzessionierter Wiener Installationsbetrieb
                für Gas-, Wasser-, Heizungs- und Sanitärtechnik. Seit 2015 betreuen wir
                Privatkunden, Eigentümergemeinschaften, Hausverwaltungen und Gewerbebetriebe
                in allen 23 Wiener Bezirken. Unser Firmensitz liegt in der Humboldtgasse 33
                in 1100 Wien (Favoriten). Wir sind Mitglied der Landesinnung Wien, WKÖ-
                Mitglied und durch Google Käuferschutz verifiziert.
              </p>
            }
          />

          <h2 style={{ marginTop: "48px" }}>Unsere Geschichte</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
            Wir haben SA Stadtinstallation 2015 in Wien gegründet. Der Auslöser war ein
            ganz konkreter: zu viele Kunden erzählten uns von schlechten Erfahrungen mit
            anonymen Notdiensten, versteckten Anfahrtspauschalen und 20-Minuten-
            Reparaturen, die 500 € kosteten. Unser Versprechen war von Anfang an einfach:
            lokal, transparent, konzessioniert. Festpreise vor Arbeitsbeginn, kein
            Anfahrts-Taschenspielertrick, jede Gasarbeit mit Prüfprotokoll nach ÖVGW.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
            Heute arbeiten wir für Wiener Haushalte, Hausverwaltungen und Gewerbekunden
            in allen 23 Bezirken. Der Großteil unserer Aufträge kommt über persönliche
            Empfehlung – das ist der Maßstab, an dem wir uns jeden Tag messen.
          </p>

          <h2 style={{ marginTop: "48px" }}>Zahlen, die etwas aussagen</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginTop: "24px",
            }}
          >
            <EntityCard label="Seit" title={FIRMA.foundingDate} icon="📅">
              {FIRMA.stats.yearsExperience} Jahre in Wien.
            </EntityCard>
            <EntityCard label="Abgeschlossen" title={FIRMA.stats.jobsCompleted} icon="✅">
              Aufträge in Wien, dokumentiert und nachvollziehbar.
            </EntityCard>
            <EntityCard label="Bewertung" title={`${FIRMA.trust.rating} ★`} icon="⭐">
              Aus {FIRMA.trust.reviewCount} Google-Bewertungen. Echte Kunden.
            </EntityCard>
            <EntityCard label="Einsatzgebiet" title={`${FIRMA.stats.districtsServed} Bezirke`} icon="📍">
              Von 1010 Innere Stadt bis 1230 Liesing.
            </EntityCard>
          </div>

          <h2 style={{ marginTop: "48px" }}>Was uns leitet</h2>
          <IconList
            items={[
              { text: "Transparenz: Jeder Preis steht vor der Arbeit schriftlich fest." },
              { text: "Handwerk: Wir verwenden geprüftes Material, keine Billig-Importware." },
              { text: "Dokumentation: Jede Gas- und Wasserarbeit mit Prüfprotokoll und Fotos." },
              { text: "Erreichbarkeit: 24 Stunden Notdienst, immer ein echter Monteur am Telefon." },
              { text: "Weiterbildung: Regelmäßige ÖVGW-, Hersteller- und Innungsschulungen." },
              { text: "Langlebigkeit: Wir bauen Anlagen, die 20+ Jahre halten, nicht 5." },
            ]}
            columns={1}
          />

          <MiniStory
            title="Warum wir viele Stammkunden haben"
            context="Kundenrückmeldung aus 1100 Favoriten"
            outcome="„Ihr seid nicht die billigsten. Aber ihr seid die einzigen, die beim zweiten Mal denselben Preis nennen wie beim ersten."
          >
            Wir sind nicht gut darin, Kunden zu überraschen – jedenfalls nicht bei der
            Rechnung. Wir sind ehrgeizig darin, dass die Rechnung so ausfällt, wie der
            Kostenvoranschlag es versprochen hat. Das ist für manche Kunden ungewohnt;
            für viele genau der Grund, uns weiterzuempfehlen.
          </MiniStory>

          <h2 style={{ marginTop: "48px" }}>Unsere Zertifikate und Mitgliedschaften</h2>
          <IconList
            items={[
              { text: "WKÖ-Gewerbeberechtigung: Gas-, Wasser- und Heizungsinstallateur" },
              { text: "Landesinnung Wien der Sanitär-, Heizungs- und Lüftungstechniker" },
              { text: "ÖVGW-konforme Arbeit nach Richtlinie G1/G2 für Gasanlagen" },
              { text: "ÖNORM B 2531 und B 8131 für Trinkwasser- und Gasleitungen" },
              { text: "Google Käuferschutz verifiziert (Unternehmensprofil)" },
              { text: "Hersteller-Zertifizierungen: Viessmann, Vaillant, Junkers, Buderus, Wolf" },
            ]}
            columns={1}
          />

          <HighlightBox variant="blue" title="Haftpflicht & Versicherung" icon="🛡">
            Wir führen eine Betriebshaftpflichtversicherung mit ausreichender Deckung
            für Folgeschäden (Leitungswasser, Gaslecks). Im Schadensfall unterstützen
            wir unsere Kunden mit vollständiger Dokumentation für ihre eigene
            Gebäude- oder Haushaltsversicherung.
          </HighlightBox>
        </div>
      </section>

      <CtaBand
        title="Lernen Sie uns kennen – bei Ihrem nächsten Auftrag"
        subtitle={`Rufen Sie an, mailen Sie uns – oder schauen Sie bei uns in der Humboldtgasse vorbei. ${FIRMA.telephoneDisplay}`}
      />
    </>
  );
}
