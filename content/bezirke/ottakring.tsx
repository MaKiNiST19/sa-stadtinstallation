import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Welche Eigenheiten hat Ottakring (1160) für Installateure?"
      answer={
        <p>
          <strong>Ottakring</strong> ist Arbeiter-Wien mit zwei Gesichtern: dichter
          Gründerzeit-Altbau rund um Yppenplatz, Thaliastraße und Ottakringer
          Straße – und die grüneren Cottage-Grätzl hinauf zum Wilhelminenberg.
          Die Brunnenmarkt-Achse ist multikulturelles Handelsviertel mit sehr
          viel Gastronomie. Im Wohnsegment dominieren Thermen, Gemeindebauten
          der Zwischenkriegszeit und Bestandshäuser mit hohem Sanierungsstau.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 16. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht von der Thaliastraße und dem Yppenplatz bis zum
      Sandleitenhof (Europas größter Gemeindebau der 1920er), Hernalser Hauptstraße
      und hinauf zum Wilhelminenberg. Unser Mix: viele Thermen, viele
      Rohrbrüche, Gastronomie-Sanitär rund um den Brunnenmarkt, und
      Einfamilienhäuser oben am Hang (Wärmepumpe, Solarthermie).
    </p>

    <IconList
      items={[
        { text: "Thermentausch in Altbau-Wohnungen Thaliastraße / Ottakringer Straße" },
        { text: "Fettabscheider und Gewerbe-Sanitär rund um den Brunnenmarkt" },
        { text: "Gemeindebau-Heizkörper und Ventiltausch (Sandleitenhof)" },
        { text: "Wärmepumpen in Einfamilienhäusern Wilhelminenberg / Sandleiten" },
        { text: "Rohrbruch-Notdienst in Gründerzeithäusern rund um Yppenplatz" },
        { text: "Warmwasser-Zirkulation in zentral versorgten Wohnhausanlagen" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Brunnenmarkt: Gewerbe zuerst denken" icon="🌶">
      Der Brunnenmarkt und die umliegenden Gastro-Betriebe leben von der
      täglichen Betriebsfähigkeit. Wir planen größere Eingriffe (Fettabscheider,
      Warmwasser) außerhalb der Öffnungszeiten, meist früh morgens oder
      Sonntag. Für Notfälle sind wir über den Gürtel in kurzer Zeit da.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Yppenplatz / Brunnenmarkt" icon="🥖">
        Markt, Handel, Gastronomie. Fettabscheider, Gewerbe-Warmwasser.
      </EntityCard>
      <EntityCard label="Grätzl" title="Thaliastraße" icon="🛒">
        Einkaufsader, dichter Altbau. Thermen, Rohrbrüche, Bad-Umbau.
      </EntityCard>
      <EntityCard label="Grätzl" title="Sandleitenhof" icon="🏘">
        Großgemeindebau 1920er-Jahre. Heizkörper, Ventile,
        Steigleitungs-Sanierungen (HV-koordiniert).
      </EntityCard>
      <EntityCard label="Grätzl" title="Wilhelminenberg / Sandleiten" icon="🌲">
        Villen und Einfamilienhäuser am Hang. Wärmepumpen, Heizungssanierung,
        Trinkwasser-Aufbereitung.
      </EntityCard>
    </div>

    <MiniStory
      title="Thermenservice-Vertrag für 12 Wohnungen"
      context="1160 Wien, Zinshaus Thaliastraße, Baujahr 1905"
      outcome="Rahmenvertrag über jährliche Thermenwartung + Abgaswegüberprüfung, Vorteil für Mieter: feste Preise."
    >
      Die Hausverwaltung bat uns um ein Gesamtkonzept: 12 Mietwohnungen mit
      Gasthermen unterschiedlichen Alters, uneinheitliche Wartung, häufige
      Einzelausfälle. Wir boten einen Rahmenvertrag mit festem Preis pro
      Wartung, koordinieren den Rauchfangkehrer in einer einzigen
      Abnahmerunde und halten die Historie zentral. Effekt nach einem Jahr:
      weniger Notdienste, geringere Kosten je Mieter, längere Lebensdauer der
      Geräte.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Ottakring</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten über den Gürtel sind wir in 20–25 Minuten in 1160.
      Für Notdienste am Yppenplatz oder in der Thaliastraße nutzen wir die
      U6-Achse als Orientierung – Parken klappt im Vormittag oft, am
      Nachmittag ist Kurzparkzone mit Parkschein Pflicht.
    </p>
  </>
);
