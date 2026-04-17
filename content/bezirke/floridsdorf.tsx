import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was prägt Floridsdorf (1210) aus Installateurssicht?"
      answer={
        <p>
          <strong>Floridsdorf</strong> ist der flächenmäßig zweitgrößte Bezirk
          Wiens: Transdanubien nördlich der Donau mit Strebersdorf, Jedlesee,
          Leopoldau, Großjedlersdorf und dem Neubaugebiet Leopoldauer
          Felder/Neu-Leopoldau. Der Mix reicht von Einfamilienhäusern der
          Nachkriegszeit über Gemeindebauten und Siedlungen bis zu jungen
          Mehrfamilienhäusern mit Fernwärme. Typisch: Wärmepumpen-Umrüstungen
          in Vororten, klassische Thermenarbeiten in Wohnungen, Fernwärme im
          Neubau.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 21. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht vom Floridsdorfer Markt über Schloßhofer Straße
      und Brünner Straße bis Strebersdorf, Jedlesee, Leopoldau und den
      Neubau-Feldern. Gemeindebauten wie der Paul-Speiser-Hof haben
      Zentralheizung und oft Fernwärme-Anschluss. In Strebersdorf und
      Jedlesee dominieren Einfamilienhäuser – dort arbeiten wir viel an
      Wärmepumpen und modernem Warmwasser.
    </p>

    <IconList
      items={[
        { text: "Wärmepumpen-Umstieg in Einfamilienhäusern Strebersdorf / Jedlesee" },
        { text: "Thermenwartung in Wiener-Wohnen-Wohnungen Schloßhofer Straße" },
        { text: "Fernwärme-Kompaktstation tauschen im Neubau Leopoldauer Felder" },
        { text: "Heizkörper und Ventile in Großgemeindebauten (Paul-Speiser-Hof)" },
        { text: "Rohrbruch-Notdienst in Siedlungshäusern Großjedlersdorf" },
        { text: "Bad-Neubau und Legionellenkonzept in Mehrfamilienhäusern" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Förderungen Raus aus Gas" icon="💶">
      In 1210 haben wir besonders viele Einfamilienhaus-Umstiege von Gas oder
      Öl auf Wärmepumpe. Wir unterstützen bei Antragsstellung der Bundes-
      („Raus aus Öl und Gas") und Wiener Landesförderung. Die Kombination
      bringt je nach Vorjahr zwischen 9.500 € und 16.000 € Zuschuss.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Floridsdorfer Markt / Schloßhofer Straße" icon="🛒">
        Einkaufsader, Wohn-Altbau. Thermen, Gastro-Sanitär,
        Verstopfungs-Notdienste.
      </EntityCard>
      <EntityCard label="Grätzl" title="Strebersdorf & Jedlesee" icon="🏡">
        Einfamilienhäuser, Vorort-Charakter. Wärmepumpen, Heizungssanierung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Leopoldau / Neu-Leopoldau" icon="🏗">
        Neubaugebiet, Fernwärme, Bauträger-Projekte.
      </EntityCard>
      <EntityCard label="Grätzl" title="Großjedlersdorf / Stammersdorf" icon="🍇">
        Weinbau-Vororte, Einfamilienhäuser, gemischte Nutzung.
      </EntityCard>
    </div>

    <MiniStory
      title="Öl-Aus in Strebersdorf"
      context="1210 Wien, Einfamilienhaus Baujahr 1978, 190 m², Ölkessel 20 Jahre"
      outcome="Luft-Wasser-Wärmepumpe 11 kW, neuer Pufferspeicher, Heizkörper-Umbau in 4 Räumen, 3,5 Wochen Bauzeit, Förderung 14.200 €."
    >
      Der Eigentümer wollte aus Öl raus – Tank in der Garage, rostig, Kessel
      ineffizient. Wir legten eine 11-kW-Luft-Wasser-Wärmepumpe aus (Heizlast
      10,4 kW), tauschten in 4 Räumen Heizkörper auf größere Flächen
      (Vorlauftemperatur unter 45 °C), setzten einen 500-l-Puffer und
      installierten einen Brauchwasser-Wärmepumpen-Speicher im Keller. Alt-Tank
      wurde ausgebaut und fachgerecht entsorgt, Garage wieder frei. Förderung
      „Raus aus Öl" Bund + Wien Landesförderung: rund 14.200 €.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Floridsdorf</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten über A23 – Nordbrücke rechnen wir mit 25–35 Minuten
      bis Floridsdorfer Bahnhof, für Strebersdorf eher 35–45 Minuten. Für
      Einfamilienhaus-Projekte in Transdanubien vereinbaren wir feste
      Arbeitsfenster; Notdienst geht über A22/A23 in der Regel in unter
      35 Minuten.
    </p>
  </>
);
