import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was prägt Mariahilf (1060) aus Installateurssicht?"
      answer={
        <p>
          <strong>Mariahilf</strong> lebt von der Mariahilfer Straße – Wiens meistfrequentierte
          Einkaufsstraße – und den dicht bebauten Gründerzeit-Grätzln drumherum.
          Typisch ist die Mischung aus klassischem Wohnungs-Altbau und sehr vielen
          Gewerbe-Flächen im Erdgeschoß: Shops, Gastronomie, Dienstleister. Für
          uns heißt das: Gasthermen in Wohnungen, aber auch Gewerbe-Warmwasser,
          Fettabscheider, behindertengerechte WC-Anlagen in Handelsflächen und
          schnelle Verstopfungs-Einsätze in Gastro-Betrieben.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 6. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht von der Mariahilfer Straße über die Gumpendorfer
      Straße und Linke Wienzeile bis zum Haus des Meeres und Esterházypark. Die
      Gumpendorfer ist ein eigenes Café- und Barviertel – dort sind wir viel für
      Gastronomen unterwegs. Im klassischen Wohn-Altbau rund um den Raimundhof
      arbeiten wir für Hausverwaltungen und Privat-Eigentümer.
    </p>

    <IconList
      items={[
        { text: "Thermenservice in Gründerzeit-Zinshäusern Gumpendorfer Straße" },
        { text: "Fettabscheider-Wartung und Notdienst in Gastronomie Mariahilfer Straße" },
        { text: "Rohrbruch im Altbau Amerlingstraße / Laimgrubengasse" },
        { text: "Einbau behindertengerechter WC-Anlagen in Handelsflächen" },
        { text: "Warmwasser-Zirkulation in Hotels und Apartmenthäusern" },
        { text: "Gewerbespüle + Gewerbe-Geschirrspüler Anschluss Café / Bar" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Gastronomie-Sanitär: Hygiene-Check mitdenken" icon="🍽">
      In Gastro-Betrieben sind Fettabscheider, getrennte Handwaschbecken und
      warme Reinigungszonen Pflicht. Wir planen bei Neueröffnungen mit Pächter
      und MA 15 (Lebensmittelaufsicht) so, dass die erste Abnahme gleich klappt –
      nichts ist teurer als ein stornierter Eröffnungstermin wegen Rohrdurchmesser.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Mariahilfer Straße" icon="🛍">
        Einkaufsstraße, große Retail-Flächen. WC-Anlagen, Küchen, Umbauten
        bei Mieterwechsel.
      </EntityCard>
      <EntityCard label="Grätzl" title="Gumpendorf & Raimundhof" icon="🍷">
        Cafés, Bars, kreatives Gewerbe. Gastro-Sanitär, Fettabscheider,
        Warmwasser-Optimierung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Linke Wienzeile / Naschmarkt-Kante" icon="🏙">
        Jugendstil-Ikonen (Majolikahaus!). Vorsichtige Sanierung,
        Denkmalschutz-Themen.
      </EntityCard>
      <EntityCard label="Grätzl" title="Haus des Meeres / Esterházypark" icon="🏢">
        Hotels, Apartmenthäuser, Büros. Zirkulationsheizung,
        Gewerbe-Warmwasser, Notdienst.
      </EntityCard>
    </div>

    <MiniStory
      title="Fettabscheider-Tausch in der Gumpendorfer Straße"
      context="1060 Wien, Restaurant mit 60 Sitzplätzen, Bestand aus 2003"
      outcome="Neuer Fettabscheider nach ÖNORM, Abnahme MA 15 beim ersten Termin."
    >
      Das Restaurant hatte einen 200-l-Abscheider, der den gewachsenen
      Küchenbetrieb (von 30 auf 60 Sitzplätze) nicht mehr bewältigte. Wir
      dimensionierten neu auf 400 l, wählten einen Abscheider mit
      Probenahmeschacht (für zukünftige Kontrollen), stellten den Betrieb nur
      1 Ruhetag still und nahmen die Anlage gemeinsam mit der MA 15 ab. Seither
      keine Geruchs- oder Rücklaufprobleme.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Mariahilf</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von der Puchsbaumgasse 1100 sind wir über Matzleinsdorfer Platz – Gürtel
      in 15–20 Minuten in 1060. In Gastro-Notfällen außerhalb der Öffnungszeiten
      nutzen wir die Nachtruhe, um Liefer- und Parkplatzprobleme zu umgehen.
    </p>
  </>
);
