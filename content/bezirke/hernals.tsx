import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was zeichnet Hernals (1170) aus Installateurssicht aus?"
      answer={
        <p>
          <strong>Hernals</strong> ist ein langgezogener Bezirk vom Gürtel bis
          zum Hameau: Arbeiter-Altbau rund um die Hernalser Hauptstraße und
          Kalvarienberggasse, Wohnhausanlagen der 1950er bis 1970er, und obere
          Lagen wie Dornbach, Neuwaldegg und Heuberg mit Einfamilienhäusern,
          Cottage-Siedlungen und beginnendem Wienerwald. Wir arbeiten in allen
          Schichten: Thermentausch in Zinshäusern, Wärmepumpen in Villen am
          Hang, Rohrbrüche im Mietbestand.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 17. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht von der Hernalser Hauptstraße und Elterleinplatz
      bis Dornbach, Neuwaldegg und dem Schwarzenbergpark. In den oberen Lagen
      finden sich zahlreiche Einfamilienhäuser mit Baujahr 1955–1985, die jetzt
      auf Wärmepumpe oder moderne Gasbrennwerttechnik umgerüstet werden.
      Im unteren Teil (rund um den Gürtel) dominiert klassischer Altbau.
    </p>

    <IconList
      items={[
        { text: "Thermentausch in Zinshäusern Hernalser Hauptstraße / Jörgerstraße" },
        { text: "Wärmepumpen-Umbau in Einfamilienhäusern Dornbach / Neuwaldegg" },
        { text: "Rohrbruch-Notdienst Elterleinplatz / Hernalser Gürtel" },
        { text: "Bad-Komplettumbau in Wohnungen der 1960er (Kalvarienberggasse)" },
        { text: "Heizkörpersanierung in Gemeindebauten / Wohnhausanlagen" },
        { text: "Solarthermie- und Brauchwasser-Wärmepumpen in älteren Häusern Heuberg" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Hanglagen = Planung" icon="⛰">
      In Dornbach und Neuwaldegg sind Grundstücke oft schräg, Keller versetzt,
      Zugänge eng. Wärmepumpen-Außeneinheiten brauchen genug Abstand zu
      Nachbarn (Schallschutz!). Wir prüfen vor Angebotserstellung auch die
      Anliefermöglichkeit – weil ein LKW mit Pufferspeicher nicht jede
      Einfahrt nimmt.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Hernalser Hauptstraße" icon="🛍">
        Einkaufsader, dichter Altbau. Thermen, Gastro-Sanitär, Rohrbrüche.
      </EntityCard>
      <EntityCard label="Grätzl" title="Elterleinplatz / Kalvarienberg" icon="⛪">
        Altbaubestand, Wohnhausanlagen. Bad-Umbau, Heizkörperwechsel.
      </EntityCard>
      <EntityCard label="Grätzl" title="Dornbach & Neuwaldegg" icon="🏡">
        Einfamilienhäuser, Cottage-Charakter. Wärmepumpen, Heizungssanierung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Heuberg / Schwarzenbergpark" icon="🌲">
        Obere Lagen, Villen, Wienerwaldrand. Premium-Sanierungen, Solarthermie.
      </EntityCard>
    </div>

    <MiniStory
      title="Öl-Aus in Neuwaldegg"
      context="1170 Wien, Einfamilienhaus Baujahr 1962, 165 m², Ölkessel 22 Jahre alt"
      outcome="Luft-Wasser-Wärmepumpe 10 kW, Puffer 500 l, Brauchwasser-Wärmepumpe für Keller, 3 Wochen."
    >
      Der Eigentümer wollte Öl-frei werden, aber kein teures Dachprojekt
      (Solar). Wir legten eine Luft-Wasser-Wärmepumpe mit 10 kW aus (Heizlast
      8,8 kW bei –12 °C), installierten einen 500-l-Pufferspeicher und eine
      separate Brauchwasser-Wärmepumpe (240 l) im Keller, die die Abluft des
      Technikraums nutzt. Förderung „Raus aus Öl" plus Wien-Förderung brachte
      rund 13.500 €. Ölkessel und Tank fachgerecht entsorgt.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Hernals</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten über Gürtel – Hernalser Gürtel rechnen wir mit
      20–25 Minuten bis Elterleinplatz, für obere Lagen (Neuwaldegg,
      Schwarzenberg) bis 35 Minuten. Wärmepumpen-Projekte sind reine
      Terminvereinbarungen, Notdienst aus 1100 bis zum Elterleinplatz meist
      in unter 30 Minuten.
    </p>
  </>
);
