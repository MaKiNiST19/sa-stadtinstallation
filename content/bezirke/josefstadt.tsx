import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was ist an Josefstadt (1080) installationstechnisch bemerkenswert?"
      answer={
        <p>
          <strong>Josefstadt</strong> ist Wiens kleinster Innenbezirk, ein
          intellektuelles Gründerzeit-Viertel zwischen Rathaus, Landesgericht und
          Josefstädter Straße. Viele Häuser stehen unter Ensembleschutz, der
          Altbau-Anteil ist sehr hoch. Typisch sind elegant sanierte
          Eigentumswohnungen, Anwaltskanzleien und Arzt-Ordinationen in
          Bel-Etage-Lagen. Für uns heißt das: vorsichtige Arbeitsweise,
          Materialien im mittleren bis oberen Segment, viel Abstimmung mit
          Architekten und Hausverwaltungen.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 8. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht von der Alser Straße bis zur Josefstädter Straße,
      vom Landesgericht bis zum Hamerlingpark. Viele Aufträge kommen über
      Eigentümer-Gemeinschaften und die bewährten Hausverwaltungen des Bezirks.
      Bei Ordinationen (und davon gibt es viele) arbeiten wir mit Rücksicht auf
      Sprechzeiten – oft abends oder an Ordinations-freien Tagen.
    </p>

    <IconList
      items={[
        { text: "Thermentausch in sanierten Altbau-Eigentumswohnungen Josefstädter Straße" },
        { text: "Bad-Komplettumbau in Bel-Etagen rund um den Hamerlingpark" },
        { text: "Sanitär-Umbau in Arzt-Ordinationen Alser Straße / Florianigasse" },
        { text: "Rohrsanierung in Ensemble-geschützten Zinshäusern Piaristengasse" },
        { text: "Warmwasser-Zirkulation in Kanzlei-Etagen Landesgericht-Umfeld" },
        { text: "Notdienst bei Rohrbruch in denkmalgeschützten Häusern (vorsichtiger Zugriff)" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Ordinationen & Kanzleien: Betriebszeiten einplanen" icon="🩺">
      Wenn in einem Haus Ordinationen oder Kanzleien sitzen, sind Wasser- oder
      Heizungssperren zur Kernzeit kritisch. Wir stimmen Strangsperren daher
      grundsätzlich vorab mit der HV ab und arbeiten bei großen Eingriffen oft
      ab 16:00 oder am Wochenende – das schonT den Betrieb der gewerblichen
      Mieter.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Josefstädter Straße" icon="🎭">
        Theaterstraße mit Theater in der Josefstadt. Klassischer Altbau,
        aufwendige Bel-Etagen.
      </EntityCard>
      <EntityCard label="Grätzl" title="Alser Straße & AKH-Kante" icon="🏥">
        Medizinisches Umfeld, viele Ordinationen. Gewerbe-Sanitär und
        Warmwasser-Optimierung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Piaristengasse / Rathausviertel" icon="⛪">
        Ensemble-geschützte Häuser, barocke Einsprengsel. Sehr vorsichtige
        Sanierungen, Denkmal-Abstimmung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Hamerlingpark & Schmidgasse" icon="🌳">
        Ruhiges Wohnviertel, sanierte Eigentumswohnungen. Designbäder,
        Heizungsmodernisierung.
      </EntityCard>
    </div>

    <MiniStory
      title="Bad-Komplettumbau am Hamerlingpark"
      context="1080 Wien, Jugendstilhaus 1904, Bel-Etage, 180 m²"
      outcome="Masterbad + Gästebad erneuert, innenliegende Fallstrang-Sanierung, 14 Arbeitstage, Eigentümer wohnte im Zweitwohnsitz."
    >
      Die Eigentümerfamilie wollte Masterbad + Gästebad auf zeitgemäßen Standard
      bringen. Befund: Fallstrang aus Guss, teilweise perforiert. Wir
      koordinierten mit Hausverwaltung eine Fallstrangsanierung für alle
      Wohnungen im Strang, legten im Zuge der Badsanierung neue
      Kalt-/Warmwasser- und Abwasserleitungen, setzten zwei Eckbadewannen und
      eine bodenebene Dusche. Rauchfangkehrer-Abnahme bestand beim ersten Termin.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt in die Josefstadt</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten sind wir über Gürtel – Alser Straße in etwa 20 Minuten
      im 8. Bezirk. Parken ist knapp, wir arbeiten mit vorgelösten Parkscheinen
      und bei Großprojekten mit Halteverbots-Anträgen. Für Notdienste nutzen
      wir die U6-Achse bis Alser Straße/Josefstädter Straße.
    </p>
  </>
);
