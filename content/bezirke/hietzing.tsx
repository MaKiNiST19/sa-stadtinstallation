import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was charakterisiert Hietzing (1130) aus Installateurs-Sicht?"
      answer={
        <p>
          <strong>Hietzing</strong> bedeutet Schloss Schönbrunn, ORF-Zentrum,
          Lainzer Tiergarten – und eine der höchsten Einfamilienhaus-Dichten
          Wiens. Typisch sind gediegene Villen in Ober-St.-Veit und Speising,
          aufwendige Gründerzeit-Wohnungen rund um die Hietzinger Hauptstraße
          und Wohnhausanlagen der 1930er und 1960er. Für uns: große Bauprojekte
          (Heizungssanierungen, Bad-Umbauten auf Premiumniveau),
          Wärmepumpen-Installationen in Einfamilienhäusern und klassisches
          Wohnungsgeschäft.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 13. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht von Schönbrunn über die Hietzinger Hauptstraße
      bis Ober-St.-Veit, Speising, Lainz und Hacking. In den Cottage-Vierteln
      stehen viele Villen aus den 1900er-Jahren mit aufwendiger Haustechnik –
      dort lohnt sich die sanfte Sanierung, statt auf Abriss zu gehen. Im
      Neubau-Anteil (z.B. Küniglberg-Umfeld) begleiten wir Bauherren bei der
      Erstausstattung.
    </p>

    <IconList
      items={[
        { text: "Heizungsmodernisierung in Villen Ober-St.-Veit / Lainz" },
        { text: "Luft-Wasser-Wärmepumpe in Einfamilienhäusern Speising" },
        { text: "Bad-Komplettumbau in Gründerzeitwohnungen Hietzinger Hauptstraße" },
        { text: "Thermentausch in Wohnhausanlagen 1960er Auhofstraße" },
        { text: "Rohrsanierung in großen Villen mit Guss-Bestand" },
        { text: "Warmwasser-Zirkulation und Solarthermie in Bestandshäusern" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Villen-Sanierung: Planung vor Bauzeit" icon="🏡">
      Bei Heizungs- und Bad-Umbauten in Villen reicht der klassische
      „Montag-anfangen"-Ansatz nicht. Wir starten mit Bestandsaufnahme,
      thermischer Berechnung (Heizlast nach ÖNORM H 7500), Materialplanung – und
      liefern erst dann einen Festpreis. Das vermeidet Nachträge und ermöglicht
      klare Kommunikation mit Architekt und Bauherrin.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Hietzinger Hauptstraße & Schönbrunn" icon="🏰">
        Gründerzeit, Wiener Moderne. Aufwendige Bäder, Heizungsmodernisierung
        in Bestandswohnungen.
      </EntityCard>
      <EntityCard label="Grätzl" title="Ober-St.-Veit" icon="🌲">
        Villen, Cottage-Bebauung. Heizungs-Generalüberholung,
        Wärmepumpen-Erstinstallation.
      </EntityCard>
      <EntityCard label="Grätzl" title="Speising & Lainz" icon="🏥">
        Einfamilienhäuser, Krankenhaus Hietzing. Premium-Sanitär,
        Badumbau-Projekte.
      </EntityCard>
      <EntityCard label="Grätzl" title="Hacking / ORF-Zentrum" icon="📺">
        Gemischte Wohn- und Büronutzung. Zentralheizungen, Gewerbe-Warmwasser.
      </EntityCard>
    </div>

    <MiniStory
      title="Wärmepumpe statt Gas in Ober-St.-Veit"
      context="1130 Wien, Villa Baujahr 1908, 260 m², bisher Gas-Zentralheizung 25 Jahre alt"
      outcome="Luft-Wasser-Wärmepumpe 14 kW, neuer 800-l-Pufferspeicher, Hybrid mit bestehender Solarthermie, 3 Wochen Bauzeit."
    >
      Die Eigentümer wollten aus Gas aussteigen, ohne die bestehende
      Dach-Solarthermie zu opfern. Heizlast 13,8 kW, bestehende
      Gussheizkörper mit reichlich Fläche – ideal für Wärmepumpe. Wir setzten
      ein 14-kW-Monoblock-Gerät im Garten (Schallschutz geprüft,
      Nachbar-Abstände eingehalten), integrierten die bestehenden
      Solarthermie-Kollektoren in einen neuen 800-l-Pufferspeicher und
      behielten den alten Gas-Heizkessel als Notreserve-Backup. Jahresbilanz
      schwarze Null vs. vorher 2.200 € Gas.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Hietzing</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten über Gürtel – Schönbrunner Schloßstraße rechnen wir
      mit 20–30 Minuten. Für Wärmepumpen-Projekte in Einfamilienhäusern
      vereinbaren wir Termine mit klarer Anliefer- und Arbeitsplanung, damit
      kein Material umgeschichtet werden muss. Notdienste sind im 13. Bezirk
      durch die Gürtel-Anbindung gut machbar.
    </p>
  </>
);
