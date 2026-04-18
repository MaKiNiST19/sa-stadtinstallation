import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was macht die Wieden (1040) für Installateure besonders?"
      answer={
        <p>
          Die <strong>Wieden</strong> ist klein, dicht und intellektuell geprägt: TU Wien,
          Karlsplatz, Naschmarkt und das Freihausviertel bilden ein Grätzl mit einer
          Mischung aus Jugendstil-Zinshäusern, kleinen Studentenwohnungen und
          aufwendig sanierten Eigentumswohnungen. Für uns heißt das: viele
          Thermentausche in 40–60-m²-Wohnungen, Bad-auf-Bad-Sanierungen ohne
          Ausweichmöglichkeit und enge Stiegenhäuser, in denen jedes Werkzeug einzeln
          getragen wird.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 4. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht vom Karlsplatz über die Wiedner Hauptstraße bis zum
      Theresianum und Südtiroler Platz. In den Straßen rund um die TU Wien dominieren
      kleine Mietwohnungen mit Gasetagenheizung – häufig mit Thermen, die 20+ Jahre
      alt sind. Rund um den Naschmarkt kommen Gastronomie-Aufträge dazu: Fettabscheider,
      Gewerbespülen, Warmwasser für Küchenbetrieb.
    </p>

    <IconList
      items={[
        { text: "Thermentausch in Studenten-/Singlewohnungen Wiedner Hauptstraße" },
        { text: "Rohrbruch im Altbau Favoritenstraße (schnelle Erreichbarkeit ab 1100)" },
        { text: "Bad-Komplettsanierung in Jugendstilhäusern Paulanergasse/Mühlgasse" },
        { text: "Gastronomie-Sanitär rund um den Naschmarkt" },
        { text: "Heizungsmodernisierung in sanierten Eigentumswohnungen Freihausviertel" },
        { text: "Warmwasser-Notfälle im Umfeld Theresianum / Argentinierstraße" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Freihausviertel: Saniert, aber mit Überraschungen" icon="🏚">
      Viele Wohnungen wurden in den letzten 15 Jahren auf Eigentum umgestellt und
      sind innen modern, aber die Steigleitungen und Hauswasseranschlüsse stammen
      oft noch aus den 1960er-Jahren. Bei Thermentausch oder Bad-Sanierung prüfen
      wir immer den Zustand des Hauptstrangs – das ist im 4. Bezirk fast Standard.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Karlsplatz & TU-Viertel" icon="🎓">
        Universitätsumfeld, kleine Wohnungen, viele Kurzzeitbewohner. Thermentausch
        und schnelle Notdienste dominieren.
      </EntityCard>
      <EntityCard label="Grätzl" title="Freihausviertel" icon="🏛">
        Jugendstil, Gründerzeit, viel saniertes Eigentum. Designbäder,
        Heizungsmodernisierung, oft mit Architektenbegleitung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Naschmarkt & Rechte Wienzeile" icon="🥖">
        Gastronomie und Kleinhandel. Fettabscheider, Gewerbespülen,
        Warmwasser-Rundumbetrieb.
      </EntityCard>
      <EntityCard label="Grätzl" title="Favoritenstraße & Theresianum" icon="🏫">
        Schulen, Büros, klassischer Altbau-Mix. Bad-Renovierungen und
        Heizungswartung in Zinshäusern.
      </EntityCard>
    </div>

    <MiniStory
      title="Bad-Komplettsanierung in der Mühlgasse"
      context="1040 Wien, Jugendstilhaus Baujahr 1902, 2. Stock, 52 m²"
      outcome="Neues Bad mit bodenebener Dusche, Therme erneuert, Steigleitung erneuert, 7 Arbeitstage."
    >
      Die Wohnung war bereits innen saniert, aber das Bad stammte noch aus den
      1980ern. Bei Öffnung zeigte sich: die Kaltwasser-Steigleitung war verkalkt,
      Fallstrang teilweise gerissen. Wir tauschten im Zuge der Badsanierung auch
      den Strang bis zum Keller und erneuerten die Therme auf Brennwert. Mit
      Hausverwaltung und Nachbarn im Strang abgestimmt.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt in die Wieden</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von der Puchsbaumgasse in 1100 sind wir über Wiedner Gürtel bzw. Favoritenstraße
      in 10–15 Minuten in 1040. Parkmöglichkeiten sind knapp – wir nutzen die
      Kurzparkzone mit vorgelöstem Parkschein und planen Material-Lieferungen
      vorab, damit das Stiegenhaus nicht blockiert wird.
    </p>
  </>
);
