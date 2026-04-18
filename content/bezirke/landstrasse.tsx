import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was zeichnet die Landstraße (1030) installationstechnisch aus?"
      answer={
        <p>
          Die <strong>Landstraße</strong> ist ein Bezirk mit zwei Gesichtern: klassisches
          Wien rund um Belvedere, Rochusmarkt und das Weißgerberviertel mit Jugendstil-
          und Gründerzeithäusern, und das moderne Hauptbahnhof-Viertel mit dem
          Sonnwendviertel und dem Quartier Belvedere. Diese Mischung verlangt vom
          Installateur beides: Erfahrung mit historischer Bausubstanz und Praxis in
          moderner Haustechnik (Fernwärme, Verbundrohr, Smart Home). SA Stadtinstallation
          arbeitet im 3. Bezirk beides – und bei Bedarf beides im gleichen Haus.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge rund um Belvedere und Hauptbahnhof</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet in 1030 reicht vom Rennweg über Rochusmarkt bis nach Erdberg
      und Sankt Marx. Im Weißgerberviertel sind viele Jugendstilhäuser mit
      historischem Kamin und oft nicht mehr zeitgemäßer Abgasführung. Rund um den
      Hauptbahnhof gibt es dagegen praktisch nur Neubau – dort geht es um Fernwärme-
      Kompaktstationen, Erstinstallations-Nacharbeiten und Bad-Zusatzmontagen.
    </p>

    <IconList
      items={[
        { text: "Thermentausch mit Abgasführungs-Erneuerung in Jugendstilhäusern (Weißgerberviertel)" },
        { text: "Rohrbruch-Notdienst in Gründerzeithäusern rund um den Rennweg" },
        { text: "Fernwärme-Kompaktstation tauschen/warten in Sonnwendviertel-Neubauten" },
        { text: "Gewerbe-Sanitär im Quartier Belvedere (Bürotürme, Hotels)" },
        { text: "Badsanierung im klassischen Altbau am Rochusmarkt" },
        { text: "Gastherme + LAS-Schacht für Dachgeschoßausbau Landstraßer Hauptstraße" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Hauptbahnhof-Viertel: Neubau mit eigenen Regeln" icon="🏗">
      Rund um den Wiener Hauptbahnhof gilt: praktisch keine Gasthermen, stattdessen
      Fernwärme von Wien Energie, Einzelwohnungszähler, Mehrschicht-Verbundrohr.
      Wir betreuen dort sowohl Erstbezüge (Mängelarbeiten für Bauträger) als auch
      bereits angelaufene Wohnungen mit Wartungs- und Umbaubedarf.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Weißgerberviertel" icon="🎨">
        Jugendstil, Gründerzeit. Enge Stiegen, Stuck, historische Kamine. Vorsichtige
        Arbeitsweise, oft Denkmalaspekte.
      </EntityCard>
      <EntityCard label="Grätzl" title="Rochusmarkt & Landstraßer Hauptstraße" icon="🛒">
        Dichter Altbau mit Geschäftslokalen im Erdgeschoß. Gewerbe-Sanitär häufig,
        Lieferlogistik beachten.
      </EntityCard>
      <EntityCard label="Grätzl" title="Sonnwendviertel & Hauptbahnhof" icon="🏙">
        Neubau seit 2013. Fernwärme, Smart Home, Fußbodenheizung. Bauträger-Rahmenverträge.
      </EntityCard>
      <EntityCard label="Grätzl" title="Erdberg & Sankt Marx" icon="🏢">
        Gemischte Nutzung, Gewerbe- und Logistikanteile. Große Badezimmer-Sanierungen,
        Heizungsmodernisierung.
      </EntityCard>
    </div>

    <MiniStory
      title="Thermentausch im Weißgerberviertel"
      context="1030 Wien, Jugendstilhaus Baujahr 1908"
      outcome="Neue Brennwerttherme + innenliegender LAS-Schacht, 4 Arbeitstage, Rauchfangkehrer-Abnahme termingerecht."
    >
      Eine Familie im 2. Stock eines Jugendstilhauses hatte eine 23 Jahre alte
      Atmospherentherme, deren Wärmetauscher undicht wurde. Kamin war historisch
      gemauert und feuchteempfindlich. Wir planten mit der Hausverwaltung und dem
      Rauchfangkehrer einen innenliegenden LAS-Edelstahlschacht und tauschten die
      Therme auf ein Vaillant-Brennwertgerät. Keine Eingriffe in die Stuckfassade.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt ins Landstraße</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von unserem Sitz in der Puchsbaumgasse (1100 Favoriten) sind wir in 15–25 Minuten
      im 3. Bezirk – je nach Tageszeit. Die Anbindung über den Landstraßer Gürtel und
      die A23 macht 1030 zu einem der am schnellsten erreichbaren Bezirke für uns.
    </p>
  </>
);
