import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was prägt Alsergrund (1090) aus Installateurssicht?"
      answer={
        <p>
          <strong>Alsergrund</strong> ist AKH, Altes AKH, WU-altes Gelände und
          Universitätscampus – ein Bezirk mit starker medizinischer und
          akademischer DNA. Wohnbau: viel Gründerzeit rund um Servitenviertel,
          Strudlhofstiege und Nußdorfer Straße. Hoher Mieteranteil, viele
          Untermieter, viele kleinere Ordinationen und Laborflächen. Für uns
          heißt das: flexible Terminierung, Gewerbe-Sanitär für Labor- und
          Medizinbedarf, klassische Altbau-Thermenarbeiten im Wohnteil.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 9. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht von der Alser Straße über Nußdorfer Straße und
      Liechtensteinstraße bis zum Donaukanal (Rossauer Lände). Viele Aufträge
      betreffen Bestandshäuser der Gründerzeit, in denen die Infrastruktur
      teilweise aus den 1950er- und 1960er-Jahren stammt. Im Servitenviertel
      kommen aufwendig sanierte Eigentumswohnungen dazu.
    </p>

    <IconList
      items={[
        { text: "Thermentausch im Gründerzeit-Altbau Servitenviertel / Strudlhofgasse" },
        { text: "Steigleitungs-Sanierung in Bestandshäusern Nußdorfer Straße" },
        { text: "Gewerbe-Sanitär und Laborarmaturen für Ordinationen rund um AKH" },
        { text: "Rohrbruch-Notdienst in älteren Zinshäusern Liechtensteinstraße" },
        { text: "Bad-Renovierung (Wanne-zu-Dusche) in seniorenbewohnten Wohnungen" },
        { text: "Warmwasser-Zirkulationspumpe tauschen in großen Altbau-Zentralanlagen" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Medizinische Infrastruktur: eigene Regeln" icon="🧪">
      In Laborflächen und Ordinationen gelten besondere Anforderungen – EN 1717
      für Trinkwasserschutz, Rückflussverhinderer bei Dentalstühlen,
      thermische Spülungen gegen Legionellen. Wir arbeiten mit diesen Normen im
      Alltag und dokumentieren die Absicherung gleich mit, damit die
      Betriebsaufnahme oder die nächste Abnahme sauber bleibt.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Servitenviertel" icon="🧭">
        Sanierter Gründerzeit-Altbau, kreative Gastronomie. Designbäder,
        Thermentausch.
      </EntityCard>
      <EntityCard label="Grätzl" title="AKH / Altes AKH" icon="🏥">
        Medizin- und Campusflächen, Veranstaltungsräume. Gewerbe-Sanitär und
        Warmwasser-Versorgung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Nußdorfer Straße" icon="🏘">
        Dichter Altbau, viel Mietwohnungsbestand. Rohrbrüche, Thermen,
        Bad-Modernisierung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Rossauer Lände / Donaukanal" icon="🌊">
        Bürotürme, Hotels, Donau-Nähe. Zentrale Warmwassersysteme,
        Notdienste mit 24/7-Anforderung.
      </EntityCard>
    </div>

    <MiniStory
      title="Warmwasser-Umrüstung in einer Ordination"
      context="1090 Wien, Hausarzt-Ordination, 120 m², Bestand Elektroboiler"
      outcome="Zentrale Warmwasserbereitung über Kombitherme + Legionellenschaltung, Inbetriebnahme an einem Freitagnachmittag."
    >
      Die Ordination hatte an drei Waschplätzen separate Elektroboiler – unruhig,
      teuer, thermisch nicht ausreichend gegen Legionellen. Wir setzten eine
      Kombitherme mit Zirkulation, legten die Warmwasserleitungen neu, richteten
      die thermische Spülung ein (60 °C, wöchentlich automatisch) und
      übernahmen die Dokumentation für den nächsten Hygiene-Check. Patientenbetrieb
      blieb am Montag voll funktionstüchtig.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt in den Alsergrund</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten sind wir via Gürtel – Alser Straße in 20–25 Minuten
      am Alsergrund. Für Ordinations-Termine planen wir grundsätzlich außerhalb
      der Sprechzeiten oder in Ruhephasen am Vormittag. Notdienste rund um
      das AKH fährt häufig unser nächster Monteur ab Puchsbaumgasse direkt an.
    </p>
  </>
);
