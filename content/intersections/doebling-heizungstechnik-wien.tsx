import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Heizungstechnik in Döbling (1190): Was ist typisch?"
      answer={
        <p>
          Döbling vereint Weinbau-Einfamilienhäuser in Grinzing/Sievering/Nußdorf,
          Villen im Cottage in Oberdöbling und die riesigen Gemeindebauten
          rund um den Karl-Marx-Hof. Heizungstechnisch heißt das drei sehr
          unterschiedliche Baustellen: Wärmepumpen in Villen, Fernwärme in
          Großgemeindebauten, Gas-Brennwert im Übergangsbereich. Wir planen
          für alle drei.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Heizungsprojekte in 1190</h2>
    <IconList
      items={[
        { text: "Erdwärme-Wärmepumpen in Villen Grinzing / Sievering" },
        { text: "Luft-Wasser-Wärmepumpen in Einfamilienhäusern am Hang" },
        { text: "Fernwärme-Kompaktstation tauschen in Karl-Marx-Hof-Strängen (HV)" },
        { text: "Gas-Brennwert-Erneuerung in sanierten Gründerzeit-Eigentumswohnungen" },
        { text: "Solarthermie-Nachrüstung und -reaktivierung" },
        { text: "Hydraulischer Abgleich in Großwohnanlagen" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Karl-Marx-Hof: Ensemble-Schutz" icon="🏛">
      Der Karl-Marx-Hof steht unter Ensembleschutz. Fassaden-Eingriffe für
      Wärmepumpen-Außengeräte sind nicht zulässig. Hier arbeiten wir
      ausschließlich im Zusammenspiel mit Wiener Wohnen und halten uns strikt
      an die denkmalrechtlichen Vorgaben.
    </HighlightBox>

    <MiniStory
      title="Erdwärme für eine Heurigen-Villa in Grinzing"
      context="1190 Wien, Einfamilienhaus Baujahr 1928, 280 m², bisher Gas-Zentralheizung"
      outcome="Sole-Wasser-Wärmepumpe mit 3 Bohrungen à 100 m, Pufferspeicher 800 l, 4 Wochen Bauzeit, Förderung 12.000 €."
    >
      Die Eigentümer wollten komplette Energieunabhängigkeit – verstärkt durch
      den in der Nähe liegenden Weingarten. Wir koordinierten drei 100-m-
      Tiefenbohrungen, eine 12-kW-Sole-Wasser-Wärmepumpe mit Kühlfunktion,
      einen 800-l-Puffer und eine neue Heizkreisverteilung. Alte Gussheizkörper
      erhalten, Vorlauftemperatur auf 40 °C optimiert. Förderung Bund + Land
      rund 12.000 €.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Unser Ansatz</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Heizlast rechnen vor Gerät auswählen – das erspart viel. Wir arbeiten
      mit spezialisierten Bohrpartnern, zertifizierten Wärmepumpen-Herstellern
      und halten die Dokumentation für Förderung und Versicherung lückenlos.
    </p>
  </>
);
