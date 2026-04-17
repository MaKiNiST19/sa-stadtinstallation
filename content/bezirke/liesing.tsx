import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was macht Liesing (1230) installationstechnisch besonders?"
      answer={
        <p>
          <strong>Liesing</strong> ist Wiens südlichster Bezirk: Atzgersdorf,
          Erlaa, Inzersdorf, Siebenhirten, Rodaun, Kalksburg und das Industriegebiet
          Liesing. Sehr hoher Einfamilienhaus-Anteil, große Neubau-Gebiete
          (Atzgersdorf Sonnberg, Erlaa-Feld) und ein starker Gewerbe-Anteil
          entlang der Breitenfurter Straße und Triester Straße. Für uns heißt
          das: viele Wärmepumpen-Projekte, Haustechnik-Sanierungen in
          Bestandshäusern, und Gewerbe-Sanitär in Logistik- und
          Produktionsbetrieben.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 23. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht von Alt-Erlaa und Atzgersdorf über Siebenhirten
      und Inzersdorf bis nach Rodaun und Kalksburg am Stadtrand. Das
      Wohnhaushotel Alt-Erlaa (3.172 Wohnungen) ist eine Welt für sich –
      Zentralheizung, Warmwasser-Zirkulation, eigene Hausverwaltung. In
      Siebenhirten und Industriegebiet Liesing arbeiten wir an Gewerbe-Sanitär,
      Hallen-Heizung und Trinkwasseranlagen für Produktion.
    </p>

    <IconList
      items={[
        { text: "Wärmepumpen-Umstieg in Einfamilienhäusern Rodaun / Kalksburg" },
        { text: "Brauchwasser-Wärmepumpe in älteren Reihenhäusern Inzersdorf" },
        { text: "Heizkörper- und Ventiltausch in Alt-Erlaa (HV-koordiniert)" },
        { text: "Gewerbe-Sanitär in Industriegebiet Liesing / Shopping City Süd-Nähe" },
        { text: "Fernwärme-Kompaktstation tauschen in Neubau Atzgersdorf-Sonnberg" },
        { text: "Rohrbruch-Notdienst in Siedlungshäusern Siebenhirten" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Alt-Erlaa: Großprojekte mit HV" icon="🏙">
      Alt-Erlaa ist eine Welt für sich: gigantische Wohnhausanlage, zentrale
      Heizungs- und Warmwassersysteme, eigene Gebäudetechnik. Einzelarbeiten
      in Wohnungen laufen immer über die Hausverwaltung und das zuständige
      Technik-Team. Wir haben Erfahrung mit diesen Abläufen und wissen, welche
      Genehmigungswege nötig sind.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Atzgersdorf & Alt-Erlaa" icon="🏙">
        Großwohnhausanlage, zentrale Versorgung. HV-Projekte, Heizkörper,
        Warmwasser.
      </EntityCard>
      <EntityCard label="Grätzl" title="Siebenhirten / Inzersdorf" icon="🏭">
        Gemischte Nutzung, Gewerbe. Hallen-Sanitär, Trinkwasser, Heizung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Rodaun & Kalksburg" icon="🌳">
        Einfamilienhäuser, teils Villen. Wärmepumpen, Heizungssanierung,
        Premium-Bäder.
      </EntityCard>
      <EntityCard label="Grätzl" title="Industriegebiet Liesing" icon="🏢">
        Produktionsbetriebe, Logistik. Gewerbe-Sanitär, Wartungsverträge,
        Warmwasser.
      </EntityCard>
    </div>

    <MiniStory
      title="Wärmepumpe für ein 70er-Haus in Rodaun"
      context="1230 Wien, Einfamilienhaus Baujahr 1973, 215 m², bisher Gasetagenheizung je Stock"
      outcome="Zentrale Luft-Wasser-Wärmepumpe 13 kW, Pufferspeicher + Brauchwasserspeicher, Gasanschluss zurückgebaut, 4 Wochen."
    >
      Die Eigentümerfamilie wollte zentralisiert heizen und gleichzeitig Gas
      aufgeben. Bestand: je ein Gas-Etagenheizungs-Gerät pro Stock, warmes
      Wasser dezentral. Heizlast 12,1 kW. Wir planten eine
      13-kW-Luft-Wasser-Wärmepumpe (Außengerät im Garten, Nachbarabstände
      eingehalten), zentralen Puffer- und Brauchwasserspeicher im Keller und
      eine komplett neue Heizkreisverteilung. Heizkörper wurden in drei Räumen
      getauscht, Vorlauftemperatur auf max. 42 °C eingestellt. Gasanschluss
      fachgerecht zurückgebaut, laufende Kosten deutlich unter Vorjahr.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Liesing</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten über Triester Straße oder A21/A23 rechnen wir mit
      20–30 Minuten bis Atzgersdorf, 25–35 Minuten bis Rodaun. Der Süden
      Wiens ist für uns günstig gelegen – Notdienste nach Liesing sind
      regelmäßig unter 30 Minuten Anfahrtszeit.
    </p>
  </>
);
