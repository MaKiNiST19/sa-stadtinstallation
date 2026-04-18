import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was macht uns zum lokalen Installateur in 1100 Favoriten?"
      answer={
        <p>
          <strong>Favoriten ist unser Heimatbezirk</strong>. Unsere Werkstatt liegt in der
          Puchsbaumgasse 39a – 200 Meter vom Reumannplatz entfernt. Anfahrt in den
          1. bis 12. Bezirk schaffen wir meist in 10–25 Minuten, in Favoriten selbst
          oft unter 10 Minuten. Wir sind <strong>WKÖ-Meisterbetrieb</strong>,
          Google Käuferschutz-verifiziert und seit 2015 in Wien tätig. Lokale Kunden
          erhalten bei uns keine „Anfahrtspauschale" für Einsätze im 10. Bezirk.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Favoriten: von Reumannplatz bis Oberlaa</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Favoriten ist der größte Bezirk Wiens nach Einwohnerzahl – rund 210.000 Menschen
      leben hier auf 32 km². Das Gebiet zieht sich vom dichten Gründerzeitkern rund um
      den Reumannplatz und den Viktor-Adler-Markt bis nach Oberlaa mit Therme und
      Einfamilienhäusern. Das Sonnwendviertel am Hauptbahnhof ist eines der jüngsten
      Stadtentwicklungsgebiete. Entsprechend breit sind unsere Aufträge: von der
      Thermenwartung im 5-stöckigen Zinshaus am Keplerplatz über Rohrbrüche im
      Gemeindebau am Humboldtplatz bis zum Neubau-Badumbau in der Sonnwendgasse.
    </p>

    <h2 style={{ marginTop: "48px" }}>Häufige Aufträge in unserem Heimatbezirk</h2>
    <IconList
      items={[
        { text: "Thermentausch im Gründerzeithaus am Viktor-Adler-Markt (meist LAS-Umbau erforderlich)" },
        { text: "Rohrbruch und Steigstrang-Sanierung in den Gemeindebauten am Keplerplatz" },
        { text: "Fernwärme-Anschluss im Sonnwendviertel – Installation der Kompaktstation" },
        { text: "Wärmepumpe für Einfamilienhäuser in Oberlaa und Unterlaa" },
        { text: "Badsanierung im klassischen Reumannplatz-Altbau (oft Wannenumbau zur bodengleichen Dusche)" },
        { text: "Rohrreinigung im Stuwerviertel (hier häufig Fallstrang-Probleme wegen alter Grundleitungen)" },
      ]}
      columns={1}
    />

    <MiniStory
      title="Rohrbruch am Reumannplatz – Familie B."
      context="Dezember 2025, Altbau aus 1905"
      outcome="In 12 Minuten vor Ort, Leck in 30 Min. gestoppt, Trocknung & Verrohrung am Folgetag."
    >
      Kurz vor Weihnachten platzte ein Steigstrang im 3. Stock. Wasser lief zwei Etagen
      tief. Der Kunde rief uns 23:15 Uhr an – wir waren um 23:27 Uhr vor Ort, da unser
      Team aus der Puchsbaumgasse anrücken konnte. Hauptabsperrhahn, Schadensbegrenzung,
      Leckortung und Provisorium bis zur Rohrsanierung am 27. Dezember. Die Hausverwaltung
      erhielt noch in derselben Nacht Fotos, Zustandsbericht und Kostenschätzung.
    </MiniStory>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Reumannplatz & Viktor-Adler-Markt" icon="🏘">
        Dicht bebauter Gründerzeitkern. Altbauten mit Stahlsteigsträngen und Kupfer-
        Wohnungsabgängen. Typisch: Haarisse im Steigstrang, Bleilot an Verbindungen.
      </EntityCard>
      <EntityCard label="Grätzl" title="Sonnwendviertel & Hauptbahnhof" icon="🏗">
        Neubau seit 2013. Fernwärme über Wien Energie, moderne Verbundrohr-Installation,
        Smart-Home-Steuerungen. Keine Gasthermen – andere Herausforderungen.
      </EntityCard>
      <EntityCard label="Grätzl" title="Oberlaa & Unterlaa" icon="🌳">
        Einfamilienhäuser, Reihenhäuser, einige Villen rund um die Therme Wien.
        Wärmepumpen-Projekte, Gartenbewässerung, große Bäder.
      </EntityCard>
      <EntityCard label="Grätzl" title="Keplerplatz & Humboldtplatz" icon="🏛">
        Gemeindebau-Altbestand. Typisch: Fallstrang-Verstopfungen, Spülkasten-Tausch,
        Kollektivwartungen über Hausverwaltung.
      </EntityCard>
    </div>

    <HighlightBox variant="blue" title="Kein Anfahrtsaufschlag für 1100" icon="€">
      Weil wir in der Puchsbaumgasse sitzen, berechnen wir in Favoriten keine pauschale
      Anfahrtspauschale. Der Preis, den wir Ihnen nennen, ist der Preis, den Sie zahlen –
      inklusive An- und Abfahrt zum Firmensitz.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Hausverwaltungen in Favoriten</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wir arbeiten im 10. Bezirk mit einer Reihe von Hausverwaltungen und der
      Wohnbaugenossenschaft Wien-Süd regelmäßig zusammen. Typische Aufgabenfelder:
      jährliche Thermenwartung für mehrere Wohnungen im Block, Steigstrangsanierung
      etagenweise, Koordination von Sanitärrenovierungen bei Mieterwechsel. Sie sind
      Hausverwalter und suchen einen Partner für 1100? Rufen Sie direkt Herrn Alagöz an –
      wir sind lokal, erreichbar und zuverlässig.
    </p>

    <h2 style={{ marginTop: "48px" }}>Warum Favoriten-Kunden uns weiterempfehlen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wir werden im 10. Bezirk meistens aus zwei Gründen gerufen: erstens, weil ein
      Nachbar uns empfohlen hat (unser wichtigster Kanal); zweitens, weil wir bei
      Google im Bezirk „Installateur 1100 Wien" sichtbar und gut bewertet sind. Beides
      ergibt sich aus derselben Quelle: jede Rechnung, jeder Termin, jeder Festpreis
      muss so sauber sein, dass der Kunde beim nächsten Bekannten von uns erzählt.
      Das ist unser einziges echtes Marketing.
    </p>
  </>
);
