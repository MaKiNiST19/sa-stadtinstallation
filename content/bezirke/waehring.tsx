import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was charakterisiert Währing (1180) installationstechnisch?"
      answer={
        <p>
          <strong>Währing</strong> ist Cottage-Wien: Gersthof, Pötzleinsdorf,
          Weinhaus – ein grüner, eher wohlhabender Bezirk mit hohem
          Einfamilienhaus-Anteil und gepflegtem Gründerzeit-Altbau rund um die
          Währinger Straße. Viele Bestandshäuser wurden in den 90ern auf
          Gaszentralheizung umgebaut und stehen jetzt vor dem nächsten
          Generationenwechsel: Wärmepumpe, Brennwerttechnik, Solarthermie.
          Arbeiten in Währing sind typischerweise hochwertig und planungsintensiv.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 18. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht von der Währinger Straße und dem Kutschkermarkt
      bis Gersthof, Pötzleinsdorf und dem Pötzleinsdorfer Schlosspark. Viele
      Einfamilienhäuser der 1900er-Jahre mit aufwendiger Haustechnik – dort
      gehen wir sanft vor, mit Respekt vor Stuck, Böden und Gartenfassaden.
      In der sanierten Altbau-Wohnlandschaft rund um die Währinger Straße
      arbeiten wir an Thermen, Bädern und Zentralheizungen.
    </p>

    <IconList
      items={[
        { text: "Wärmepumpen-Umstieg in Villen Gersthof / Pötzleinsdorf" },
        { text: "Thermentausch in sanierten Altbau-Eigentumswohnungen Währinger Straße" },
        { text: "Bad-Komplettumbau (Premium) in Jugendstilhäusern Semperstraße" },
        { text: "Heizungssanierung in Mehrfamilienhäusern mit Zentralheizung" },
        { text: "Brauchwasser-Wärmepumpe in älteren Reihenhäusern Schumanngasse" },
        { text: "Rohrsanierung + Legionellen-Konzept in Mehrparteienhäusern" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Altbau-Villen: Bestandsaufnahme vor Angebot" icon="🏡">
      In vielen Währinger Villen sind Heizungs- und Sanitärtechnik über
      Jahrzehnte mehrfach angestückt worden – wir sehen Mischungen aus
      Gussheizkörpern, alten Kupferleitungen und neu verlegtem Verbundrohr.
      Vor Angebot nehmen wir den Bestand auf (Heizlast, Leitungswege,
      Schachtzugang). Das erspart Nachtragsrechnungen im Projektverlauf.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Währinger Straße / Kutschkermarkt" icon="🛍">
        Markt, Gastronomie, sanierter Altbau. Thermen, Bad-Umbauten,
        Gastro-Sanitär.
      </EntityCard>
      <EntityCard label="Grätzl" title="Weinhaus" icon="🍷">
        Dichter Gründerzeit-Altbau, viele Eigentums-Wohnungen.
        Heizungssanierung, Premium-Bäder.
      </EntityCard>
      <EntityCard label="Grätzl" title="Gersthof" icon="🌳">
        Cottage-Grätzl, Einfamilienhäuser. Wärmepumpen, Solarthermie,
        Heizungsmodernisierung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Pötzleinsdorf" icon="🌲">
        Villen am Schlossparkrand. Hochwertige Haustechnik,
        Generalüberholungen.
      </EntityCard>
    </div>

    <MiniStory
      title="Generalsanierung Gersthof"
      context="1180 Wien, Villa Baujahr 1912, 320 m², bisher Gasetage pro Stock"
      outcome="Neue Gasbrennwertzentrale für zwei Stöcke + Fußbodenheizung im Erdgeschoß, 5 Wochen Bauzeit."
    >
      Die Eigentümerfamilie sanierte die Villa generalmäßig. Wir planten mit
      dem Architekten eine zentrale Brennwertanlage mit 30 kW, Fußbodenheizung
      im Erdgeschoß (neuer Estrich-Aufbau), erhielten die aufwendigen
      Gussheizkörper in Obergeschoß und Dachausbau, legten Warmwasser-Zirkulation
      zentral und integrierten die bestehende Solarthermie-Anlage neu.
      Rauchfangkehrer-Abnahme mit erstem Termin ohne Auflagen.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Währing</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten über Gürtel rechnen wir mit 20–25 Minuten bis
      Währinger Straße, für Pötzleinsdorf eher 30 Minuten. Villen-Sanierungen
      werden vorab detailliert geplant, Anlieferungen koordiniert – in
      Cottage-Gassen sind enge Einfahrten und kurze Halteplätze der Regelfall.
    </p>
  </>
);
