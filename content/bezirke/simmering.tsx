import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was kennzeichnet Simmering (1110) für einen Installateur?"
      answer={
        <p>
          <strong>Simmering</strong> ist Wiens Industrie- und Energiebezirk – hier
          stehen das Kraftwerk Simmering, die Müllverbrennung, große
          Logistik-Zentren und gleichzeitig eine solide Wohnstruktur aus
          Gemeindebau, Siedlungshäusern der Nachkriegszeit und jüngerem Neubau
          entlang der Simmeringer Hauptstraße. Für uns als direkter Nachbar
          aus 1100 ist Simmering in wenigen Minuten erreichbar – ideal für
          Notdienste und Wartungsverträge mit Gewerbeobjekten.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 11. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht von der Simmeringer Hauptstraße über Enkplatz und
      Kaiserebersdorf bis zur Donauuferautobahn und den Hafen Albern. In
      Gewerbegebieten arbeiten wir an Hallen-Sanitär, Heizungsanlagen in
      KFZ-Werkstätten, Trinkwasser-Armaturen in Produktionsbetrieben. Im Wohnteil
      dominieren Gemeindebau-Aufträge und Einfamilienhäuser am Stadtrand mit
      älteren Gasanlagen oder Ölkesseln, die auf Wärmepumpe umgerüstet werden.
    </p>

    <IconList
      items={[
        { text: "Gas-Ölkessel-Umstieg auf Wärmepumpe in Siedlungshäusern Kaiserebersdorf" },
        { text: "Thermenwartung in Gemeindebauten Simmeringer Hauptstraße" },
        { text: "Hallen-Sanitär und Trinkwasser-Armaturen in Gewerbegebieten" },
        { text: "Rohrbruch-Notdienst am Enkplatz und in Geiselberg" },
        { text: "Fernwärme-Kompaktstation warten in Neubau Simmeringer Hauptstraße" },
        { text: "Warmwasser-Zirkulation in Logistik-Sozialräumen Albern/Haidequerstraße" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Schnelle Anfahrt von 1100" icon="🚐">
      Simmering grenzt direkt an Favoriten. Über die Gudrunstraße oder
      Simmeringer Hauptstraße sind wir in 10–15 Minuten vor Ort – oft schneller
      als aus weiter entfernten Innenbezirken. Für Gewerbe-Kunden in 1110
      bedeutet das kurze Reaktionszeiten bei Anlagenausfall.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Simmeringer Hauptstraße" icon="🏘">
        Hauptader mit Gemeindebau und Geschäftslokalen. Thermentausch,
        Gewerbesanitär, Verstopfungs-Notdienste.
      </EntityCard>
      <EntityCard label="Grätzl" title="Kaiserebersdorf" icon="🌳">
        Einfamilienhäuser, Siedlungen. Wärmepumpen-Umrüstungen,
        Ölkessel-Ersatz, Trinkwasseranlagen.
      </EntityCard>
      <EntityCard label="Grätzl" title="Enkplatz & Geiselberg" icon="🧱">
        Gründerzeit-Einsprengsel, Wohnhausanlagen 1950–1970. Rohrsanierung,
        Badumbau.
      </EntityCard>
      <EntityCard label="Grätzl" title="Hafen Albern / Haidequerstraße" icon="🏭">
        Logistik, Industrie, Hafenbetrieb. Hallen-Sanitär, Gewerbe-Warmwasser,
        Wartungsverträge.
      </EntityCard>
    </div>

    <MiniStory
      title="Öl-Aus in Kaiserebersdorf"
      context="1110 Wien, Einfamilienhaus Baujahr 1972, Ölkessel 28 Jahre alt"
      outcome="Luft-Wasser-Wärmepumpe + Pufferspeicher, Förderung ausgenützt, 4 Arbeitstage Umstieg, Öltank abgebaut."
    >
      Der Bauherr wollte raus aus dem Öl – Kessel alt, Tank rostig, Ölpreis
      unsicher. Wir prüften die Heizlast (9,5 kW bei –12 °C), legten eine
      Luft-Wasser-Wärmepumpe mit 10 kW aus, montierten einen 500-l-Pufferspeicher
      und tauschten die Heizkörper in zwei Räumen auf größere Flächen. Förderung
      „Raus aus Öl" plus Wiener Landesförderung brachten rund 13.000 €. Tank
      wurde fachgerecht ausgebaut und entsorgt, Keller wird jetzt als
      Hauswirtschaftsraum genutzt.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Simmering</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von der Humboldtgasse 1100 fahren wir über Gudrunstraße oder
      Simmeringer Hauptstraße – 10–15 Minuten normal, in Ferien manchmal
      unter 10 Minuten. Für Einfamilienhaus-Kunden am Stadtrand ist das
      einer der schnellsten Anfahrtswege, die wir in Wien haben.
    </p>
  </>
);
