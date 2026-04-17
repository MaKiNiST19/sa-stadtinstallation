import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Heizungstechnik in Favoriten (1100): Was leisten wir?"
      answer={
        <p>
          Heizungstechnik im 10. Bezirk heißt drei Dinge gleichzeitig:
          Gas-Zentralheizung und Etagenthermen im Altbau (Favoritenstraße,
          Quellenstraße, Ada-Christen-Gasse), Fernwärme im Neubau
          (Sonnwendviertel, Monte Laa) und zunehmend Wärmepumpen in Siedlungshäusern
          (Oberlaa, Per-Albin-Hansson-Siedlung). Wir planen, montieren, warten
          und reparieren – von der Single-Therme bis zur 12-Wohnungen-Zentralanlage.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Heizungs-Aufträge in 1100</h2>
    <IconList
      items={[
        { text: "Gasbrennwerttherme erneuern (Vaillant, Viessmann, Buderus) im Altbau" },
        { text: "Luft-Wasser-Wärmepumpe in Einfamilienhäusern Oberlaa / Unterlaa" },
        { text: "Fernwärme-Kompaktstation tauschen/warten im Sonnwendviertel" },
        { text: "Heizkörper-Sanierung und hydraulischer Abgleich in Wiener-Wohnen-Objekten" },
        { text: "Pelletkessel-Anlagen (selten, aber machbar) in Einfamilienhäusern" },
        { text: "Heizlastberechnung nach ÖNORM H 7500 vor Kesseltausch" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Raus aus Gas: Förderung prüfen" icon="💶">
      Wien unterstützt den Umstieg von Gas auf Wärmepumpe oder Fernwärme mit
      dem Programm „Raus aus Gas" (Landesförderung) kombinierbar mit der
      Bundes-Sanierungsoffensive. In Einfamilienhäusern in 1100 kommt man so
      oft auf 9.500 € bis 14.000 € Zuschuss. Wir rechnen das bei Angebotserstellung
      durch und helfen bei der Antragstellung.
    </HighlightBox>

    <MiniStory
      title="Wärmepumpe in der Per-Albin-Hansson-Siedlung"
      context="1100 Wien, Reihenhaus Baujahr 1953, 110 m², bisher Gas-Etagentherme"
      outcome="Luft-Wasser-Wärmepumpe 7 kW, 300-l-Brauchwasserspeicher, Inbetriebnahme vor Heizperiode."
    >
      Das Reihenhaus hatte eine ältere Gas-Etagenheizung (23 Jahre). Heizlast
      6,2 kW bei –12 °C, gute Dämmung nach Sanierung 2012. Wir setzten ein
      7-kW-Monoblock-Außengerät (Schallwerte eingehalten, Nachbar-Abstand
      geklärt), tauschten drei Heizkörper auf größere Flächen und
      installierten einen 300-l-Brauchwasserspeicher. Gasanschluss zurückgebaut,
      Förderung 12.300 € (Bund + Wien).
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Wartung & Service</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Regelmäßige Wartung verlängert Lebensdauer und spart Gas- oder Stromkosten.
      Für Favoriten bieten wir Jahres-Wartungsverträge mit festen Preisen und
      einfacher Terminkoordination über unsere Disposition. Keine Anfahrtskosten
      für 1100.
    </p>
  </>
);
