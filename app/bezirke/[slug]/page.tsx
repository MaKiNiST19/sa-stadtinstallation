import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FIRMA } from "@/lib/company";
import { BEZIRKE, getBezirk, BEZIRK_SLUGS } from "@/lib/bezirke";
import { LEISTUNGEN } from "@/lib/leistungen";
import { pickFaqs } from "@/lib/faqs";
import {
  generateBezirkSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  combineSchemas,
} from "@/lib/schema";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import PhoneIcon from "@/components/PhoneIcon";
import HeroBadgeRow from "@/components/HeroBadgeRow";
import FaqSection from "@/components/content/FaqSection";
import CtaBand from "@/components/content/CtaBand";
import HighlightBox from "@/components/content/HighlightBox";
import EntityCard from "@/components/content/EntityCard";
import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

import { BEZIRK_CONTENT } from "@/content/bezirke";
import HeroBackground from "@/components/HeroBackground";

export const dynamicParams = false;

export function generateStaticParams() {
  return BEZIRK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = getBezirk(slug);
  if (!b) return {};
  return {
    title: `Installateur ${b.plz} ${b.shortName} – 24h Notdienst | ${FIRMA.name}`,
    description: b.description,
    alternates: { canonical: `/bezirke/${b.slug}` },
    openGraph: {
      title: `Installateur ${b.plz} ${b.shortName} – 24h Notdienst`,
      description: b.description,
      url: `${FIRMA.url}/bezirke/${b.slug}`,
      type: "website",
    },
  };
}

export default async function BezirkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBezirk(slug);
  if (!b) return notFound();

  const content = BEZIRK_CONTENT[b.slug];
  const faqs = pickFaqs("home", 6);

  const breadcrumbs = [
    { name: "Startseite", url: "/" },
    { name: "Bezirke", url: "/bezirke" },
    { name: b.shortName, url: `/bezirke/${b.slug}` },
  ];

  const schema = combineSchemas(
    generateBezirkSchema(b),
    generateFAQSchema(faqs),
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
            Installateur · {b.plz} Wien
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
            Installateur {b.shortName} – 24h Notdienst in {b.plz} Wien
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
            {b.intro}
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
            <a href={`tel:${FIRMA.telephone}`} className="btn-outline btn-outline--white btn-with-icon">
              <PhoneIcon />
              Jetzt anrufen
            </a>
            <a href="/kontakt" className="btn-outline">Termin anfragen</a>
          </div>

          <HeroBadgeRow />
        </div>
      </section>

      {/* Featured Snippet – Wien-spezifische Direktantwort */}
      <section style={{ padding: "56px 0 0", background: "var(--bg)" }}>
        <div className="container">
          <FeaturedSnippet
            question={`Was ist beim Installateur im ${b.number}. Wiener Gemeindebezirk (${b.shortName}) zu beachten?`}
            answer={
              <p>
                Im {b.number}. Wiener Gemeindebezirk ({b.shortName}, {b.plz}) prägen{" "}
                {b.buildingStyle.slice(0, 2).join(" und ")} die
                Installationstechnik: Altbau Wien erfordert andere Materialien als Gemeindebau
                oder Neubau. Gas-Anmeldungen laufen über Wiener Netze, Energieabrechnung
                häufig über Wien Energie. SA Stadtinstallation ist konzessionierter
                Meisterbetrieb (WKO Wien / Landesinnung Wien) und hat in {b.shortName}{" "}
                langjährige Erfahrung.
              </p>
            }
          />
        </div>
      </section>

      {/* Quick Entity-Grid für jeden Bezirk */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            <EntityCard label="Bezirk" title={`${b.number}. Bezirk – ${b.shortName}`} icon="📍">
              {b.population.toLocaleString("de-AT")} Einwohner auf {b.area} km². Postleitzahl {b.plz}.
            </EntityCard>
            <EntityCard label="Grätzl" title="Ortslagen im Bezirk" icon="🏘">
              {b.neighborhoods.slice(0, 4).join(", ")}
              {b.neighborhoods.length > 4 && " …"}
            </EntityCard>
            <EntityCard label="Bauepoche" title="Typische Gebäudestruktur" icon="🏛">
              {b.buildingStyle.join(" · ")}
            </EntityCard>
            <EntityCard label="Anfahrt" title="Von Puchsbaumgasse 1100" icon="🚗">
              Je nach Verkehr {bezirkDistanceHint(b.number)} Minuten. Notfälle werden immer bevorzugt behandelt.
            </EntityCard>
          </div>
        </div>
      </section>

      {/* Handgeschriebener Inhalt - sonst Default */}
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
              question={`Warum einen Installateur im ${b.number}. Bezirk rufen, der den Bezirk kennt?`}
              answer={
                <p>
                  {b.shortName} hat eigene installationstechnische Besonderheiten: die vorherrschende
                  Bauepoche ist {b.buildingStyle.slice(0, 2).join(" und ")}. In diesen Häusern finden
                  wir regelmäßig alte Steigleitungen, bestimmte Gastyp-Anschlüsse und typische
                  Materialien. Ein Betrieb, der das kennt, spart Ihnen Suchzeit, Fehldiagnosen und
                  Kosten. SA Stadtinstallation ist seit 2015 in Wien tätig und hat in {b.shortName}
                  hunderte Aufträge abgewickelt.
                </p>
              }
            />

            <h2 style={{ marginTop: "48px" }}>Typische Aufträge, die wir in {b.shortName} erledigen</h2>
            <IconList
              items={[
                { text: "Rohrbruch und Wasserschaden – Notdienst innerhalb 30–60 Min." },
                { text: "Thermentausch und Heizungswartung (Vaillant, Viessmann, Junkers, Wolf)" },
                { text: "Verstopfte Abflüsse, Fallstränge, Grundleitungen" },
                { text: "Gasleitungs-Dichtheitsprüfung nach ÖVGW G1" },
                { text: "Badsanierung mit Koordination von Fliesenleger und Maler" },
                { text: "Kleinere Reparaturen: Armatur, Eckventil, WC-Spülkasten" },
              ]}
              columns={1}
            />

            <h2 style={{ marginTop: "48px" }}>Landmarks und Orientierung in {b.shortName}</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
              Zu unseren häufigen Einsatzorten in {b.shortName} zählen Objekte rund um{" "}
              {b.landmarks.slice(0, 3).join(", ")}. Wenn Sie unser Team bestellen, reicht oft
              der Straßenname und die Grätzl-Bezeichnung – wir finden Ihren Eingang.
            </p>

            <HighlightBox title="Anfahrtszeit & Bereitschaft" icon="⏱">
              Unser Einsatzfahrzeug ist zwischen 06:30 und 20:00 praktisch durchgehend in
              Wien unterwegs. Nachts und am Wochenende sind wir per Bereitschaftsdienst
              erreichbar. {b.shortName} erreichen wir werktags in der Regel in {bezirkDistanceHint(b.number)} Minuten.
            </HighlightBox>

            <div style={{ marginTop: "40px" }}>
              <MiniStory
                title={`Ein typischer Tag in ${b.shortName}`}
                context={`${b.plz} Wien`}
                outcome="Nach Abschluss: Festpreis-Rechnung, Dokumentation, zufriedener Kunde."
              >
                Dieser Abschnitt wird durch einen konkreten, lokalen Fall ersetzt, sobald
                ein handgeschriebener Text für {b.shortName} eingepflegt ist. Die Datei liegt
                unter <code>content/bezirke/{b.slug}.tsx</code>.
              </MiniStory>
            </div>
          </div>
        </section>
      )}

      {/* 7 Leistungen × dieser Bezirk – Cluster-Links */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container">
          <p className="section-eyebrow">Unsere 7 Leistungen in {b.shortName}</p>
          <h2 className="section-title">Welche Arbeit soll in {b.plz} erledigt werden?</h2>
          <div className="services-grid" style={{ marginTop: "32px" }}>
            {LEISTUNGEN.map((l) => (
              <a
                key={l.slug}
                href={`/bezirke/${b.slug}/${l.slug}`}
                className="service-magic-card"
              >
                <div className="service-magic-card__img">
                  <Image
                    src={l.image}
                    alt={l.imageAlt ?? `${l.shortTitle} in ${b.shortName} Wien`}
                    fill
                    sizes="(max-width: 960px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="service-magic-card__title">
                  {l.shortTitle} in {b.shortName}
                </h3>
                <p className="service-magic-card__text">{l.description}</p>
                {l.emergency && <span className="notfall-banner">24/7 Notdienst</span>}
                <span className="service-magic-card__link">
                  Ansehen für {b.plz} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Andere Bezirke */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container">
          <p className="section-eyebrow">Andere Bezirke</p>
          <h2 className="section-title">Installateur in allen 23 Wiener Bezirken</h2>
          <p className="section-subtitle" style={{ marginBottom: "32px" }}>
            Wir arbeiten ganz Wien. Wählen Sie einen anderen Bezirk oder gehen Sie zur
            Übersicht.
          </p>
          <div className="bezirke-grid">
            {BEZIRKE.filter((x) => x.slug !== b.slug).map((other) => (
              <a key={other.slug} href={`/bezirke/${other.slug}`} className="bezirk-card">
                <div className="bezirk-card__plz">{other.plz}</div>
                <div className="bezirk-card__name">{other.shortName}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title={`Häufige Fragen zum Installateur in ${b.shortName}`}
        items={faqs}
      />

      <CtaBand
        title={`Jetzt Installateur für ${b.plz} ${b.shortName} anfordern`}
        subtitle={`Anfahrtszeit je nach Verkehr ${bezirkDistanceHint(b.number)} Min. – bei Notfall sofort. ${FIRMA.telephoneDisplay}`}
      />
    </>
  );
}

// Grobe Anfahrtszeit-Angabe basierend auf Bezirksnummer.
// Keine genaue Berechnung – nur als UX-Hinweis.
function bezirkDistanceHint(n: number): string {
  // 1100 Favoriten ist unser Sitz
  if (n === 10) return "5–15";
  if ([4, 5, 6, 11, 12].includes(n)) return "15–25";
  if ([1, 2, 3, 7, 8, 9, 15, 16, 20].includes(n)) return "20–35";
  if ([13, 14, 17, 18, 19, 23].includes(n)) return "25–45";
  if ([21, 22].includes(n)) return "30–55";
  return "30–60";
}
