import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FIRMA } from "@/lib/company";
import { BEZIRKE, getBezirk, BEZIRK_SLUGS } from "@/lib/bezirke";
import { LEISTUNGEN, getLeistung, LEISTUNG_SLUGS } from "@/lib/leistungen";
import { pickFaqs, FAQS_BY_TOPIC } from "@/lib/faqs";
import {
  generateBezirkLeistungSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  combineSchemas,
} from "@/lib/schema";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import PhoneIcon from "@/components/PhoneIcon";
import FaqSection from "@/components/content/FaqSection";
import CtaBand from "@/components/content/CtaBand";
import HighlightBox from "@/components/content/HighlightBox";
import EntityCard from "@/components/content/EntityCard";
import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

import { INTERSECTION_CONTENT } from "@/content/intersections";

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { slug: string; leistung: string }[] = [];
  for (const b of BEZIRK_SLUGS) {
    for (const l of LEISTUNG_SLUGS) {
      params.push({ slug: b, leistung: l });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; leistung: string }>;
}): Promise<Metadata> {
  const { slug, leistung } = await params;
  const b = getBezirk(slug);
  const l = getLeistung(leistung);
  if (!b || !l) return {};
  const title = `${l.shortTitle} ${b.plz} ${b.shortName} Wien | ${FIRMA.name}`;
  const description = `${l.shortTitle} in ${b.plz} ${b.shortName}: konzessioniert, Festpreis, ${
    l.emergency ? "24h Notdienst" : "Termin binnen Werktag"
  }. Lokal in Wien seit 2015.`;
  return {
    title,
    description,
    alternates: { canonical: `/bezirke/${b.slug}/${l.slug}` },
    openGraph: {
      title,
      description,
      url: `${FIRMA.url}/bezirke/${b.slug}/${l.slug}`,
      type: "website",
    },
  };
}

export default async function BezirkLeistungPage({
  params,
}: {
  params: Promise<{ slug: string; leistung: string }>;
}) {
  const { slug, leistung } = await params;
  const b = getBezirk(slug);
  const l = getLeistung(leistung);
  if (!b || !l) return notFound();

  // Optional: handgeschriebener Inhalt
  const customContent =
    INTERSECTION_CONTENT[`${b.slug}/${l.slug}`] ?? INTERSECTION_CONTENT[`${b.slug}-${l.slug}`];

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
    { name: "Bezirke", url: "/bezirke" },
    { name: b.shortName, url: `/bezirke/${b.slug}` },
    { name: l.shortTitle, url: `/bezirke/${b.slug}/${l.slug}` },
  ];

  const schema = combineSchemas(
    generateBezirkLeistungSchema(b, l),
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
            {l.shortTitle} · {b.plz} {b.shortName} · Wien
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
            {l.shortTitle} in {b.plz} {b.shortName}
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
            {l.tagline} Im {b.number}. Bezirk sind wir besonders aufmerksam für die
            typische Baustruktur: {b.buildingStyle.slice(0, 2).join(" und ")}.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap" }}>
            <a href={`tel:${FIRMA.telephone}`} className="btn-outline btn-outline--white btn-with-icon">
              <PhoneIcon />
              Jetzt anrufen
            </a>
            <a href="/kontakt" className="btn-outline">Termin anfragen</a>
          </div>
        </div>
      </section>

      {/* Entity Grid - kombiniert Leistung & Bezirk */}
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
            <EntityCard label="Wo" title={`${b.plz} ${b.shortName}`} icon="📍">
              {b.neighborhoods.slice(0, 3).join(", ")}
              {b.neighborhoods.length > 3 && " u. a."} – Bauepoche{" "}
              {b.buildingStyle.slice(0, 2).join(" / ")}.
            </EntityCard>
            <EntityCard
              label="Wann"
              title={l.emergency ? "24h / 7 Tage" : "Mo–Fr 07–18"}
              icon="⏱"
            >
              {l.emergency
                ? `Notfälle in ${b.shortName}: Anfahrt meist innerhalb 30–60 Min.`
                : "Planbare Termine innerhalb 2–5 Werktagen."}
            </EntityCard>
            <EntityCard label="Wie viel" title={l.priceHint ?? "Festpreis"} icon="€">
              Transparenter Festpreis vor Arbeitsbeginn – kein Anfahrts-Taschenspielertrick.
            </EntityCard>
          </div>
        </div>
      </section>

      {/* Hauptinhalt - handgeschrieben oder Default-Template */}
      {customContent ? (
        <section style={{ padding: "80px 0", background: "white" }}>
          <div className="container" style={{ maxWidth: "820px" }}>
            {customContent}
          </div>
        </section>
      ) : (
        <section style={{ padding: "80px 0", background: "white" }}>
          <div className="container" style={{ maxWidth: "820px" }}>
            <FeaturedSnippet
              question={`Was ist ${l.shortTitle} in ${b.plz} ${b.shortName} besonders?`}
              answer={
                <p>
                  {l.shortTitle} in {b.shortName} ist eng mit der lokalen Bausubstanz
                  verknüpft. Im {b.number}. Bezirk überwiegen{" "}
                  {b.buildingStyle.slice(0, 2).join(" und ")}. Das bedeutet für die Ausführung
                  konkret: andere Materialien, andere Leitungsquerschnitte, andere
                  Zugänglichkeit als in Bezirken mit anderer Bauepoche. SA Stadtinstallation
                  ist in {b.shortName} seit Jahren tätig und kennt die wiederkehrenden
                  Herausforderungen.
                </p>
              }
            />

            <h2 style={{ marginTop: "48px" }}>
              Typische {l.shortTitle}-Fälle in {b.shortName}
            </h2>
            <IconList
              items={l.commonProblems.slice(0, 6).map((p) => ({ text: p }))}
              columns={1}
            />

            <h2 style={{ marginTop: "48px" }}>
              Warum Bezirkswissen bei {l.shortTitle} zählt
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
              {buildEpochText(b.buildingStyle, l.slug)}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "16px",
                marginTop: "40px",
              }}
            >
              <EntityCard label="Grätzl" title={`Einsatzgebiete in ${b.shortName}`} icon="🏘">
                {b.neighborhoods.join(" · ")}
              </EntityCard>
              <EntityCard label="Landmarks" title="Orientierung" icon="📌">
                Rund um {b.landmarks.slice(0, 4).join(", ")} sind wir regelmäßig im
                Einsatz.
              </EntityCard>
              <EntityCard label="Bauepoche" title="Technisches Profil" icon="🏛">
                {b.buildingStyle.join(" · ")}. Das bestimmt Material und Vorgehen.
              </EntityCard>
              <EntityCard label="Anfahrt" title="Von 1100 Humboldtgasse" icon="🚗">
                Je nach Verkehr {bezirkDistanceHint(b.number)} Minuten. Notfall: priorisiert.
              </EntityCard>
            </div>

            <HighlightBox
              variant={l.emergency ? "red" : "blue"}
              title={
                l.emergency
                  ? `Akute ${l.shortTitle} in ${b.plz}? Jetzt anrufen.`
                  : `${l.shortTitle} planen – so läuft es bei uns`
              }
              icon={l.emergency ? "🚨" : "📋"}
            >
              {l.emergency ? (
                <>
                  <strong>Bei akutem Schaden in {b.shortName}</strong>: Wasser/Gas
                  absperren, Fotos machen, sofort anrufen. Wir sind 24/7 erreichbar
                  und in der Regel innerhalb von {bezirkDistanceHint(b.number)} Minuten
                  vor Ort.
                </>
              ) : (
                <>
                  <strong>Termin mit Vorlauf</strong>: Vor-Ort-Besichtigung kostenlos,
                  schriftlicher Festpreis, Ausführung innerhalb 2–5 Werktagen. Kunden
                  in {b.shortName} werden bevorzugt gebündelt terminiert, um
                  Anfahrtskosten gering zu halten.
                </>
              )}
            </HighlightBox>

            <div style={{ marginTop: "40px" }}>
              <MiniStory
                title={`${l.shortTitle} in ${b.plz} – typischer Ablauf`}
                context={`Aus unserem Alltag in ${b.shortName}`}
                outcome="Festpreis vorab, Abschluss im Zeitrahmen, Dokumentation an Hausverwaltung oder Eigentümer."
              >
                Sobald ein handgeschriebener Einzelfall für diese Bezirk/Leistung-
                Kombination eingepflegt ist, erscheint hier ein konkreter Fall aus
                unserer Praxis. Datei: <code>content/intersections/{b.slug}/{l.slug}.tsx</code>.
              </MiniStory>
            </div>

            <h2 style={{ marginTop: "48px" }}>Wie wir in {b.shortName} arbeiten</h2>
            <IconList
              items={[
                { text: `Vor-Ort-Termin – Aufmaß & Fotos in ${b.plz} ${b.shortName}` },
                { text: "Schriftlicher Festpreis mit Material-, Arbeits- und Anfahrtsangaben" },
                { text: "Koordination mit Hausverwaltung / Mieter / Rauchfangkehrer je nach Leistung" },
                { text: "Ausführung mit geprüftem Material nach ÖNORM / ÖVGW" },
                { text: "Endabnahme mit Protokoll und Übergabe Garantieunterlagen" },
              ]}
              columns={1}
            />
          </div>
        </section>
      )}

      {/* Andere Leistungen im gleichen Bezirk */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container">
          <p className="section-eyebrow">Mehr in {b.plz} {b.shortName}</p>
          <h2 className="section-title">Andere Leistungen in {b.shortName}</h2>
          <div className="services-grid" style={{ marginTop: "32px" }}>
            {LEISTUNGEN.filter((x) => x.slug !== l.slug)
              .slice(0, 6)
              .map((other) => (
                <a
                  key={other.slug}
                  href={`/bezirke/${b.slug}/${other.slug}`}
                  className="service-magic-card"
                >
                  <div className="service-magic-card__img">
                    <Image
                      src={other.image}
                      alt={other.shortTitle}
                      fill
                      sizes="(max-width: 960px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h3 className="service-magic-card__title">
                    {other.shortTitle} in {b.shortName}
                  </h3>
                  <p className="service-magic-card__text">{other.description}</p>
                  {other.emergency && <span className="notfall-banner">24/7 Notdienst</span>}
                  <span className="service-magic-card__link">Ansehen →</span>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* Gleiche Leistung in anderen Bezirken */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container">
          <p className="section-eyebrow">{l.shortTitle} in anderen Wiener Bezirken</p>
          <h2 className="section-title">{l.shortTitle} – alle 23 Bezirke</h2>
          <div className="bezirke-grid" style={{ marginTop: "32px" }}>
            {BEZIRKE.filter((x) => x.slug !== b.slug).map((other) => (
              <a
                key={other.slug}
                href={`/bezirke/${other.slug}/${l.slug}`}
                className="bezirk-card"
              >
                <div className="bezirk-card__plz">{other.plz}</div>
                <div className="bezirk-card__name">{other.shortName}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title={`Häufige Fragen zu ${l.shortTitle} in ${b.shortName}`}
        items={faqs}
      />

      <CtaBand
        variant={l.emergency ? "red" : "blue"}
        title={
          l.emergency
            ? `${l.shortTitle} in ${b.plz} – jetzt akut?`
            : `${l.shortTitle} in ${b.plz} ${b.shortName} anfragen`
        }
        subtitle={
          l.emergency
            ? `Unser 24h-Notdienst ist im ${b.number}. Bezirk in durchschnittlich ${bezirkDistanceHint(
                b.number
              )} Min. vor Ort. ${FIRMA.telephoneDisplay}`
            : `Wir melden uns innerhalb eines Werktags mit einem schriftlichen Angebot. ${FIRMA.telephoneDisplay}`
        }
      />
    </>
  );
}

function bezirkDistanceHint(n: number): string {
  if (n === 10) return "5–15";
  if ([4, 5, 6, 11, 12].includes(n)) return "15–25";
  if ([1, 2, 3, 7, 8, 9, 15, 16, 20].includes(n)) return "20–35";
  if ([13, 14, 17, 18, 19, 23].includes(n)) return "25–45";
  if ([21, 22].includes(n)) return "30–55";
  return "30–60";
}

function buildEpochText(buildingStyles: readonly string[], leistungSlug: string): string {
  const styles = buildingStyles.join(", ");
  const hasAltbau = buildingStyles.some((s) =>
    /Gründerzeit|Biedermeier|Jugendstil|Palais|Gotik|Barock/i.test(s)
  );
  const hasNeubau = buildingStyles.some((s) =>
    /Neubau|Seestadt|Hochhaus|moderne/i.test(s)
  );
  const hasEinfamilien = buildingStyles.some((s) =>
    /Einfamilien|Villa|Reihenhaus|Cottage/i.test(s)
  );
  const hasGemeindebau = buildingStyles.some((s) => /Gemeindebau/i.test(s));

  const base = `Die in diesem Bezirk vorherrschenden Bauepochen (${styles}) prägen unmittelbar, wie wir `;

  const byLeistung: Record<string, string> = {
    "gas-installateur-wien":
      `Gas-Installationen ausführen. ${
        hasAltbau
          ? "In Altbauten arbeiten wir oft mit Pressfitting-Kupfer, weil Schweißverbindungen in bewohntem Bestand schwer umsetzbar sind. "
          : ""
      }${
        hasNeubau
          ? "Im Neubau ist Gas selten – dort geht es eher um Fernwärme oder Wärmepumpen. "
          : ""
      }${
        hasEinfamilien
          ? "Bei Einfamilienhäusern koordinieren wir den Gasanschluss direkt mit Wiener Netze und dem Rauchfangkehrer. "
          : ""
      }`,
    "wasserinstallateur-wien":
      `Wasserleitungen planen und sanieren. ${
        hasAltbau
          ? "In Gründerzeithäusern tauschen wir oft korrodierte Stahlsteigleitungen gegen Pressfitting-Kupfer. "
          : ""
      }${
        hasNeubau
          ? "Neubauten arbeiten fast ausschließlich mit Mehrschicht-Verbundrohr. "
          : ""
      }${
        hasGemeindebau
          ? "In Gemeindebauten planen wir Sanierungen strang- und etagenweise, um den Nutzbetrieb aufrechtzuerhalten. "
          : ""
      }`,
    "heizungstechnik-wien":
      `Heizungssysteme auswählen. ${
        hasAltbau
          ? "Im Altbau entscheiden Heizkörperfläche und Vorlauftemperatur darüber, ob Wärmepumpe überhaupt sinnvoll ist. "
          : ""
      }${
        hasNeubau
          ? "In Neubauten ist Fernwärme oder Wärmepumpe Standard. "
          : ""
      }${
        hasEinfamilien
          ? "Einfamilienhäuser bieten meist Platz für Luft-Wasser-Wärmepumpen oder Pelletskessel. "
          : ""
      }`,
    "sanitaertechnik-wien":
      `Sanitärräume planen. ${
        hasAltbau
          ? "Altbau-Bäder sind oft klein und verlangen durchdachte Raumaufteilung mit Wandeinbau-Spülkästen und bodengleicher Dusche. "
          : ""
      }${
        hasEinfamilien
          ? "In Einfamilienhäusern realisieren wir auch großzügige Wellness-Bäder mit Doppelwaschtisch und Walk-In-Dusche. "
          : ""
      }${
        hasGemeindebau
          ? "Gemeindebau-Sanierungen laufen meist als Modul: Badumbau innerhalb einer definierten Woche. "
          : ""
      }`,
    "thermenwartung-wien":
      `Thermen warten. ${
        hasAltbau
          ? "Alte Thermen in Altbauten haben oft eingeschränkte Ersatzteilverfügbarkeit – wir prüfen bei der Wartung mit Blick auf den Tauschzeitpunkt. "
          : ""
      }${
        hasGemeindebau
          ? "In Gemeindebauten wartet unser Team ganze Stiegen an einem Tag – effizient und mit Sammelabrechnung an die Hausverwaltung. "
          : ""
      }`,
    "verstopfung-wien":
      `Verstopfungen beheben. ${
        hasAltbau
          ? "Altbau-Grundleitungen sind oft aus Steinzeug oder Guss – hier arbeiten wir besonders vorsichtig mit Spirale und reduziertem Druck. "
          : ""
      }${
        hasNeubau
          ? "Moderne Neubauten haben Kunststoffleitungen, die sich mit Hochdruckspülung gut reinigen lassen. "
          : ""
      }`,
    "notfall-installateur-wien":
      `bei Notfällen reagieren. ${
        hasAltbau
          ? "In Altbauten ist der Absperrhahn oft schwer zu finden – wir kennen die typischen Standorte in Gründerzeithäusern. "
          : ""
      }${
        hasEinfamilien
          ? "Bei Einfamilienhäusern hilft es, wenn der Eigentümer den Hausanschluss-Schacht kennt – wir erklären das im Vorfeld. "
          : ""
      }${
        hasNeubau
          ? "In Neubauten gibt es zentrale Strang-Absperrungen pro Wohnung, die die Schadensbegrenzung beschleunigen. "
          : ""
      }`,
  };

  return base + (byLeistung[leistungSlug] ?? "diese Leistung für den Bezirk optimal ausführen.");
}
