import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was sollte man über Penzing (1140) als Installateur wissen?"
      answer={
        <p>
          <strong>Penzing</strong> ist gemischter Westbezirk mit Auhof,
          Steinhof-Gründen (Otto-Wagner-Areal), Hütteldorf und dem Wienerwaldrand.
          Hoher Einfamilienhaus-Anteil in Baumgarten, Hadersdorf und
          Hütteldorf-Vororten, Gründerzeit-Altbau rund um die
          Linzer Straße und Nachkriegswohnbau entlang der Hütteldorfer Straße.
          Unsere Themen hier sind Wärmepumpen-Umbauten, Heizungsmodernisierung
          in Villen und klassische Thermenarbeiten in Wohnungen.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 14. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht von Baumgarten und dem Penzinger Marktumfeld bis
      Hütteldorf, Auhof und Hadersdorf-Weidlingau. Auf der Linzer Straße
      dominieren Thermen- und Rohrbruch-Aufträge in Zinshäusern; in den
      Villen-Grätzln vom Wienerwaldrand arbeiten wir an Heizlastberechnungen,
      Wärmepumpen, Zentralheizungen und Bad-Neubauten.
    </p>

    <IconList
      items={[
        { text: "Wärmepumpen-Umstieg in Einfamilienhäusern Hadersdorf / Hütteldorf" },
        { text: "Thermentausch in Zinshäusern Linzer Straße / Reinlgasse" },
        { text: "Bad-Komplettumbau in Jugendstilwohnungen rund um Steinhof-Gründe" },
        { text: "Rohrbruch-Notdienst Hütteldorfer Straße / Baumgartner Höhe" },
        { text: "Brauchwasser-Wärmepumpe in älteren Siedlungshäusern Auhof" },
        { text: "Warmwasser-Zirkulation Heizungssanierung in Mehrfamilienhäusern" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Otto-Wagner-Ensemble Steinhof: behutsam" icon="🏛">
      Die Otto-Wagner-Häuser am Steinhof und das Kirchenensemble stehen unter
      Denkmalschutz. Bei Umbauten in nahen Liegenschaften ist der
      Jugendstil-Charakter häufig prägend – wir dokumentieren Bestand vor
      Eingriffen und halten Rauchfangkehrer, Hausverwaltung und Bundesdenkmalamt
      früh im Loop.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Baumgarten & Linzer Straße" icon="🛍">
        Klassischer Altbau, Geschäftslokale. Thermen, Gastronomie-Sanitär,
        Rohrbruch-Einsätze.
      </EntityCard>
      <EntityCard label="Grätzl" title="Steinhof-Gründe / Otto-Wagner-Areal" icon="🏛">
        Ensemble-geschützter Jugendstil. Sanierung unter Denkmalauflagen.
      </EntityCard>
      <EntityCard label="Grätzl" title="Hütteldorf" icon="⛪">
        Mix aus Alt- und Neubau, Einfamilienhäuser am Rand. Thermen,
        Heizungssanierung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Auhof & Hadersdorf-Weidlingau" icon="🌲">
        Vorort-Charakter, Villen am Wienerwald. Wärmepumpen, Öl-Aus,
        Trinkwasseranlagen.
      </EntityCard>
    </div>

    <MiniStory
      title="Heizkessel-Ende am Wienerwald"
      context="1140 Wien, Einfamilienhaus Baujahr 1965, 180 m², bisher Gaskessel"
      outcome="Luft-Wasser-Wärmepumpe + Pufferspeicher + Solarthermie reaktiviert, Gasleitung zurückgebaut, 3 Wochen."
    >
      Der Eigentümer hatte Gas und eine ältere, teilweise nicht mehr
      funktionierende Solarthermie. Wir installierten eine 12-kW-Wärmepumpe,
      brachten den Solar-Kreis mit neuem Regler zurück in Betrieb und
      koppelten beide an einen 600-l-Puffer. Heizkörper wurden teilweise
      vergrößert (3 Räume), damit die Vorlauftemperatur im Winter unter 45 °C
      bleibt. Gasleitung und Kessel fachgerecht zurückgebaut, Anschluss
      gekündigt.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Penzing</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten über Gürtel – Hadikgasse rechnen wir mit 25–35 Minuten,
      je nach Tageszeit. Für Villen-Sanierungen in Hadersdorf wählen wir den
      Weg über A1/Wien-Hütteldorf. Notdienst-Anfragen aus 1140 decken wir
      innerhalb des Vormittags zuverlässig ab.
    </p>
  </>
);
