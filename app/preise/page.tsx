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
import IconList from "@/components/content/IconList";
import CtaBand from "@/components/content/CtaBand";
import HeroBackground from "@/components/HeroBackground";

export const metadata: Metadata = {
  title: `Preise Installateur Wien – transparent & festgepreist | ${FIRMA.name}`,
  description:
    "Was kostet ein Installateur in Wien? Thermenwartung ab 129 €, Rohrreinigung ab 149 €, Notdienst mit Festpreis. Kein Anfahrts-Taschenspielertrick.",
  alternates: { canonical: "/preise" },
};

export default function PreisePage() {
  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "Preise", url: "/preise" },
  ];
  const schema = combineSchemas(generateBreadcrumbSchema(breadcrumbs));

  return (
    <>
      <SchemaJsonLd schema={schema} />

      <section className="leistung-hero">
        <HeroBackground />
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <p className="section-eyebrow" style={{ color: "white", opacity: 0.7 }}>
            Preis-Transparenz · Festpreis vor Arbeitsbeginn
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
            Was kostet ein Installateur in Wien?
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
            Ehrliche Antworten statt Lockpreisen. Hier finden Sie unsere typischen
            Richtpreise – für den konkreten Fall nennen wir Ihnen den Festpreis nach
            einer Vor-Ort-Einschätzung.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <FeaturedSnippet
            question="Wie funktioniert unser Festpreis-System?"
            answer={
              <p>
                Für jeden planbaren Auftrag vereinbaren wir einen kostenlosen Vor-Ort-
                Termin (oder eine kurze Telefonklärung, wenn der Fall klar ist) und
                erstellen danach ein <strong>schriftliches Festpreis-Angebot</strong>.
                Dieses Angebot enthält Material, Arbeitszeit, Anfahrt, Entsorgung und
                ggf. Fördergrundlage. Nachträge gibt es nur, wenn sich während der
                Arbeit unvorhersehbare Umstände zeigen (z.B. versteckte Altrohre) – dann
                informieren wir VOR der Ausführung und holen Ihre Zustimmung ein.
              </p>
            }
          />

          <h2 style={{ marginTop: "48px" }}>Richtpreise – unsere häufigsten Leistungen</h2>
          <p style={{ fontSize: "14px", color: "var(--mid)", fontStyle: "italic" }}>
            Alle Preise brutto, inkl. 20 % USt, inkl. Anfahrt in Wien. Stand: April 2026.
          </p>

          <div
            style={{
              marginTop: "32px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
              gap: "32px 40px",
              alignItems: "start",
            }}
          >
            <div>
              <h3>Notdienst & Schnellreparaturen</h3>
              <IconList
                items={[
                  { text: "Notfall-Absperrung (bis 30 Min., inkl. Anfahrt): 89 € Festpreis" },
                  { text: "Standard-Reparatur werktags (bis 60 Min.): ab 149 € Festpreis" },
                  { text: "Stundensatz Notdienst tagsüber: 95 €/h" },
                  { text: "Stundensatz Nacht/Wochenende/Feiertag: 135 €/h" },
                  { text: "Anfahrt in Wien: in Grundpreis enthalten – keine Extra-Pauschale" },
                ]}
                columns={1}
              />
            </div>

            <div>
              <h3>Thermenwartung</h3>
              <IconList
                items={[
                  { text: "Standardtherme (Vaillant, Junkers, Viessmann, Bosch, Wolf): ab 129 € brutto" },
                  { text: "Kombitherme mit Brauchwasserseite: ab 159 € brutto" },
                  { text: "Brennwerttherme > 25 kW: ab 179 € brutto" },
                  { text: "Mit Wartungsvertrag: 10 % Rabatt + Vorrang bei Störungen" },
                  { text: "Ersatzteile werden nach Listenpreis separat ausgewiesen" },
                ]}
                columns={1}
              />
            </div>

            <div>
              <h3>Rohrreinigung & Verstopfung</h3>
              <IconList
                items={[
                  { text: "Einzelverstopfung WC / Waschbecken (bis 60 Min.): 149 € Festpreis" },
                  { text: "Küchenspüle inkl. Siphon-Reinigung: 169 € Festpreis" },
                  { text: "Fallstrang mehrere Wohnungen: 290–480 € je nach Länge" },
                  { text: "Hochdruckspülung Grundleitung bis 20 m: 320–520 €" },
                  { text: "Kanalkamera-Inspektion + Dokumentation: 180–320 €" },
                  { text: "Nacht-/Wochenendzuschlag: 60 € (Ausnahme bei echtem Notfall mit Wasseraustritt)" },
                ]}
                columns={1}
              />
            </div>

            <div>
              <h3>Badsanierung & Sanitärumbau</h3>
              <IconList
                items={[
                  { text: "Armaturentausch (Mischbatterie, Brausearmatur): ab 129 €" },
                  { text: "WC-Tausch auf Wandeinbau (Geberit): 850–1.200 € je nach Voraussetzung" },
                  { text: "Wannenumbau zur bodengleichen Dusche: 4.200–6.800 € je nach Umfang" },
                  { text: "Komplettes Badezimmer 5 m² neu: 12.000–22.000 €" },
                  { text: "Barrierefreier Umbau mit Förderung: individuell, KV nach Fördervorgaben" },
                ]}
                columns={1}
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <h3>Heizungsbau & Kesseltausch</h3>
              <IconList
                items={[
                  { text: "Gasthermen-Tausch 1:1 (ohne Abgasumbau): 3.900–5.400 €" },
                  { text: "Gasthermen-Tausch mit LAS-Abgasführung: 5.800–8.500 €" },
                  { text: "Luft-Wasser-Wärmepumpe Einfamilienhaus 10 kW: 22.000–32.000 €" },
                  { text: "Fernwärme-Anschluss + Kompaktstation: 4.500–7.200 €" },
                  { text: "Hydraulischer Abgleich: 480–890 € je nach Heizkreisanzahl" },
                  { text: "Alle Preise ohne Förderung – mit Bundes- und Landesförderung oft 40–75 % weniger netto" },
                ]}
                columns={2}
              />
            </div>
          </div>

          <HighlightBox variant="blue" title="Warum wir keine Lockpreise machen" icon="💡">
            Sie kennen das Spiel: „Ab 39 € Rohrreinigung!" – und dann stehen vor Ort
            650 € auf der Rechnung. Wir nennen lieber realistische Preise, die die
            tatsächliche Arbeit, das Material, die Anfahrt und unsere Versicherung
            abdecken. Wer billiger erscheint, rechnet anderswo – meist auf der
            tatsächlichen Rechnung.
          </HighlightBox>

          <h2 style={{ marginTop: "48px" }}>Kostenvoranschlag – immer schriftlich</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
            Vor jedem planbaren Auftrag liefern wir einen schriftlichen
            Kostenvoranschlag per E-Mail oder im Gespräch übergeben. Der Vor-Ort-
            Termin zur Einschätzung ist in Wien grundsätzlich kostenlos – sofern er
            in einen Festpreis-Auftrag mündet. Wenn Sie den Kostenvoranschlag nicht
            annehmen, berechnen wir nur die reine Besichtigungsgebühr (59 € brutto),
            damit sich die Kalkulation für uns rechnet.
          </p>

          <HighlightBox title="Förderungen – rechnen wir mit ein" icon="€">
            Bei Heizungstausch, Wärmepumpe und bestimmten Sanitärumbauten (barrierefrei)
            gibt es laufend Förderungen. Wir rechnen die aktuelle Fördersumme in unser
            Angebot ein und übernehmen auf Wunsch die Antragsabwicklung. Bei
            vorleistungskritischen Fällen helfen wir mit Vorfinanzierungsmodellen.
          </HighlightBox>
        </div>
      </section>

      <CtaBand
        title="Konkretes Angebot für Ihren Fall?"
        subtitle={`Rufen Sie uns an oder mailen Sie uns – meist haben Sie das schriftliche Angebot innerhalb eines Werktags. ${FIRMA.telephoneDisplay}`}
      />
    </>
  );
}
