import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Heizungstechnik in Hietzing (1130): Was leisten wir?"
      answer={
        <p>
          Hietzing ist der Villen- und Einfamilienhaus-Bezirk schlechthin. Bei
          Heizungstechnik heißt das: aufwendige Umbauten, Wärmepumpen,
          Erdwärme-Projekte, Solarthermie und hochwertige Gas-Brennwerttechnik
          als Übergangslösung. Wir planen Heizlast, dimensionieren Gerät,
          montieren und begleiten die Förderung – alles aus einer Hand.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Projekte in 1130</h2>
    <IconList
      items={[
        { text: "Luft-Wasser-Wärmepumpe in Einfamilienhäusern Speising / Lainz" },
        { text: "Sole-Wasser-Wärmepumpe mit Tiefenbohrung in Villen Ober-St.-Veit" },
        { text: "Fußbodenheizung-Neubau bei Generalsanierung" },
        { text: "Solarthermie-Reaktivierung an älteren Dachanlagen" },
        { text: "Gasbrennwerttechnik als Übergangslösung bei ungeeigneter Wärmepumpe" },
        { text: "Hydraulischer Abgleich und Heizkurven-Optimierung" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Planung vor Bauzeit" icon="📐">
      Bei Villen-Umbauten starten wir mit Bestandsaufnahme, Heizlast nach
      ÖNORM H 7500, Materialplanung – und erst dann kommt das Festpreis-
      Angebot. Das vermeidet Nachträge und verkürzt die tatsächliche Bauzeit.
    </HighlightBox>

    <MiniStory
      title="Erdwärme für eine Villa in Ober-St.-Veit"
      context="1130 Wien, Villa Baujahr 1925, 310 m², bisher Gasetagenheizung"
      outcome="Sole-Wasser-Wärmepumpe mit 4 Bohrungen à 95 m, 1.000-l-Puffer, Solarthermie integriert, 6 Wochen Bauzeit."
    >
      Heizlast 16 kW, hohe Anforderungen an Ästhetik (keine Außengeräte an
      der Fassade), Wunsch nach Passivkühlung im Sommer. Wir planten mit
      einem Bohrpartner vier 95 m tiefe Bohrungen, setzten eine 14-kW-Sole-
      Wasser-Wärmepumpe, 1.000-l-Puffer und integrierten die Solarthermie im
      System. Im Sommer liefert die Erdwärme natürliche Kühlung über die
      Fußbodenheizung. Jährliche Energiekosten: ein Drittel des früheren
      Gaspreises.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Warum wir?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Erfahrung mit Denkmalschutz, Koordination mit Architekten, strukturierte
      Angebote, offene Kommunikation. Für Hietzing bedeutet das auch:
      Verständnis für die Logistik in Villen-Grätzln (enge Einfahrten, schmale
      Zugangswege, Nachbar-Abstände für Außengeräte).
    </p>
  </>
);
