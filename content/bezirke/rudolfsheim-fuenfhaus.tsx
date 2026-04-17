import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was macht Rudolfsheim-Fünfhaus (1150) aus Installateurssicht aus?"
      answer={
        <p>
          <strong>Rudolfsheim-Fünfhaus</strong> ist dichter Arbeiter-Altbau rund
          um den Westbahnhof, die Schmelz und die Stadthalle. Sehr hohe
          Mieterquote, viele kleine Gewerbeflächen, Gastronomie und Handel.
          Baualter im Schwerpunkt 1890–1910, entsprechend sind Gasthermen,
          einfachste Sanitäranlagen und bröckelige Steigleitungen Alltag.
          Unser Schwerpunkt: Notdienste, Rohrbruch, Thermentausch und
          solide Bad-Modernisierung.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 15. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht vom Westbahnhof über Mariahilfer Straße (West),
      Fünfhaus und Rudolfsheim bis zur Schmelz. Der 15. Bezirk hat eine der
      höchsten Dichten an Altbau-Therme-Mietwohnungen in ganz Wien – Warmwasser
      und Heizung hängen in vielen Häusern am Gerät im Bad oder Vorzimmer.
      Entsprechend viel Thermenwartung, Thermenservice und schneller Tausch bei
      Ausfall.
    </p>

    <IconList
      items={[
        { text: "Thermentausch in Mietwohnungen Fünfhaus / Reindorfgasse" },
        { text: "Rohrbruch-Notdienst in Gründerzeithäusern Sechshauser Straße" },
        { text: "Warmwasser-Elektroboiler durch Kombitherme ersetzen" },
        { text: "Bad-Modernisierung in kleinen Altbau-Wohnungen (30–55 m²)" },
        { text: "Verstopfungen in Geschäftslokalen Mariahilfer Straße (West)" },
        { text: "Heizkörper-Sanierung in Wiener-Wohnen-Wohnhäusern Schmelz" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Viele Vermieter, viele Regeln" icon="🔑">
      In 1150 arbeiten wir oft mit Mietern, die Reparaturen selbst finanzieren
      wollen. Wichtig: Vermieter-Zustimmung schriftlich einholen, sonst droht
      beim Auszug die Rückbaupflicht. Wir helfen bei der Formulierung an die
      Hausverwaltung und dokumentieren die Arbeiten lückenlos.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Westbahnhof-Umfeld" icon="🚉">
        Verkehrsknoten, Hotels, Handel. Gewerbesanitär, Notdienste rund um die
        Uhr.
      </EntityCard>
      <EntityCard label="Grätzl" title="Reindorfgasse / Schwendermarkt" icon="🥖">
        Kleinstgastronomie, Altbau-Wohnen. Thermen, Verstopfungen,
        Bad-Modernisierung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Rudolfsheim & Schmelz" icon="🏘">
        Dichter Gründerzeitbestand, Wiener-Wohnen-Blocks. Rohrbrüche,
        Heizkörper.
      </EntityCard>
      <EntityCard label="Grätzl" title="Stadthalle / Roland-Rainer-Platz" icon="🎤">
        Veranstaltungs-Umfeld, Hotels, Büros. Gewerbe-Sanitär,
        Warmwasser-Zirkulation.
      </EntityCard>
    </div>

    <MiniStory
      title="Kein Warmwasser in der Reindorfgasse"
      context="1150 Wien, Altbau-Wohnung 42 m², Gas-Durchlauferhitzer Baujahr 1998"
      outcome="Durchlauferhitzer getauscht, LAS-Schacht geprüft, gleicher Tag einsatzbereit."
    >
      Morgens 7:15 rief eine Mutter mit zwei Kleinkindern an – kein
      Warmwasser, keine Heizung. Gas-Durchlauferhitzer hatte
      Gebläse-Endschalter. Wir hatten ein vergleichbares Gerät am Lager,
      konnten noch am Vormittag anfahren (25 Min. von 1100), Altgerät
      ausbauen und Neugerät setzen. LAS-Schacht war intakt, Rauchfangkehrer
      konnte für Freitag einberufen werden. Familie war ab 13:00 wieder
      versorgt.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Rudolfsheim-Fünfhaus</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten über Gürtel sind wir in 15–20 Minuten in 1150. Der
      Westbahnhof-Knoten ist berufsverkehrsabhängig – wir planen
      Altbau-Einsätze am Vormittag, wenn Parken noch machbar ist.
    </p>
  </>
);
