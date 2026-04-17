import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Heizungstechnik in Simmering (1110): Was ist heute State of the Art?"
      answer={
        <p>
          In Simmering hat sich die Heizungstechnik in den letzten Jahren stark
          verändert. Viele Einfamilienhäuser in Kaiserebersdorf und Geiselberg
          steigen auf Wärmepumpe oder Fernwärme um. In Gemeindebauten ist die
          Zentralheizung meist Standard, oft mit Modernisierungsbedarf bei
          Heizkörpern und Reglung. Wir planen Heizlast nach ÖNORM H 7500 und
          setzen die Anlage dimensionsgerecht.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Heizungs-Projekte in 1110</h2>
    <IconList
      items={[
        { text: "Ölkessel-Ersatz durch Luft-Wasser-Wärmepumpe in Einfamilienhäusern" },
        { text: "Gas-Brennwertkessel als Übergang (bei fehlender Wärmepumpen-Eignung)" },
        { text: "Hydraulischer Abgleich und Heizkörper-Tausch in Gemeindebauten" },
        { text: "Fernwärme-Anschluss in Neubauten Simmeringer Hauptstraße" },
        { text: "Solarthermie-Reaktivierung an älteren Dachanlagen" },
        { text: "Heizlastberechnung nach ÖNORM H 7500 vor Umbau" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Förderungen nützen" icon="💶">
      In 1110 gibt es durch das hohe Einfamilienhaus-Aufkommen viele
      Förderberechtigungen. Bund-Sanierungsoffensive (Raus aus Öl/Gas) kombiniert
      mit Wiener Landesförderung bringt oft 10.000–14.000 € Zuschuss. Wir
      rechnen das bei Angebot durch und unterstützen bei der Antragstellung.
    </HighlightBox>

    <MiniStory
      title="Öl-Aus in Kaiserebersdorf"
      context="1110 Wien, Einfamilienhaus Baujahr 1972, 180 m², Ölkessel 28 Jahre alt"
      outcome="Luft-Wasser-Wärmepumpe 10 kW, Pufferspeicher 500 l, Tank abgebaut, 4 Arbeitstage Umstieg."
    >
      Der Bauherr wollte raus aus dem Öl. Heizlast 9,5 kW, alte Stahlheizkörper
      mit guter Fläche. Wir setzten 10-kW-Luft-Wasser-Wärmepumpe, 500-l-Puffer,
      tauschten zwei kleinere Heizkörper und bauten den Tank aus. Förderung
      Bund + Land rund 13.000 €. Neuer Keller-Status: trocken, aufgeräumt,
      nutzbarer Hauswirtschaftsraum.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Unser Ansatz</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Erst Heizlast rechnen, dann Gerät dimensionieren, dann Angebot. So
      vermeiden wir überdimensionierte Anlagen, die sich im Betrieb nicht
      auszahlen. Für 1110 sind wir über Gudrunstraße in 15 Minuten vor Ort.
    </p>
  </>
);
