import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was macht Neubau (1070) installationstechnisch besonders?"
      answer={
        <p>
          <strong>Neubau</strong> ist kreativer Kleinbezirk mit Spittelberg-Biedermeier,
          MuseumsQuartier-Umfeld und den 7-Gründern-Straßen (Siebensterngasse,
          Kirchengasse, Burggasse). Typisch sind sehr schmale Altbauhäuser mit
          engen Stiegenhäusern, viele Ein- und Zwei-Zimmer-Wohnungen, einige
          noch mit Gaskonvektoren, und ein hoher Anteil kreativer Kleinbetriebe
          (Agenturen, Studios, kleine Gastronomie). Arbeiten im 7. Bezirk
          bedeutet: Werkzeug minimieren, mit engen Zeitfenstern umgehen, oft
          mit Mietern statt Eigentümern abstimmen.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 7. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht vom Ring über Burggasse/Neubaugasse bis zur
      Kaiserstraße und zum Urban-Loritz-Platz. Im Spittelberg (Biedermeier!) sind
      Eingriffe oft denkmalrelevant, im Umfeld Kirchengasse/Siebensterngasse
      haben viele Wohnungen noch die ursprünglichen Kamine und
      Gaskonvektor-Anschlüsse aus den 1970er-Jahren.
    </p>

    <IconList
      items={[
        { text: "Gaskonvektor-Tausch auf Zentralheizung in Altbau 7 Ziegen-Grätzl" },
        { text: "Thermentausch in Eigentumswohnungen Westbahnstraße / Kaiserstraße" },
        { text: "Bad-Neubau in Biedermeier-Altbau Spittelberg (Denkmal-Abstimmung)" },
        { text: "Rohrbruch Notdienst in Gründerzeit-Häusern Burggasse" },
        { text: "Gewerbe-Sanitär für kleine Gastro/Agenturen Siebensterngasse" },
        { text: "Warmwasser-Umbau (Elektro → Kombitherme) in 1-Zimmer-Altbauwohnungen" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Spittelberg: Denkmalschutz ernst nehmen" icon="🏛">
      Die Häuser im Spittelberg sind teils unter Ensembleschutz. Fassaden-Eingriffe
      (z.B. Abgasführung nach außen) sind fast immer abstimmungspflichtig mit dem
      Bundesdenkmalamt und MA 19. Wir planen in solchen Häusern grundsätzlich
      innenliegende LAS-Schächte und klären früh mit Hausverwaltung und
      Denkmalamt, bevor Ware bestellt wird.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Spittelberg" icon="🎭">
        Biedermeier-Ensemble, Denkmalschutz. Sehr vorsichtige Arbeitsweise,
        oft kleine Betriebe und Kleinstgastronomie.
      </EntityCard>
      <EntityCard label="Grätzl" title="MuseumsQuartier-Umfeld" icon="🖼">
        Gemischt aus Büros, Galerien, Wohnen. Gewerbe-Sanitär und
        Heizungswartung in Bürohäusern.
      </EntityCard>
      <EntityCard label="Grätzl" title="7 Ziegen-Grätzl (Kirchengasse)" icon="🏘">
        Gründerzeit, kleine Wohnungen, kreative Mieter. Thermentausch,
        Bad-Modernisierung, Kamin-Sanierung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Kaiserstraße / Westbahnhof-Kante" icon="🚉">
        Gemischter Altbau, einige Eigentumssanierungen. Heizungsmodernisierung
        und Bad-Neubau.
      </EntityCard>
    </div>

    <MiniStory
      title="Gaskonvektor-Ablösung in der Kirchengasse"
      context="1070 Wien, Gründerzeithaus, 2-Zimmer-Altbauwohnung 58 m²"
      outcome="Neue Gasbrennwerttherme + 5 Heizkörper + LAS-Schacht, 6 Arbeitstage, Bewohnerin wohnte während Umbau weiter."
    >
      Eine Pensionistin hatte noch Gaskonvektoren aus 1978 in jedem Zimmer.
      Wärmeleistung unzureichend, Abgasführung nicht mehr zeitgemäß. Wir bauten
      eine zentrale Brennwerttherme im Vorraum ein, legten neue Heizleitungen in
      Sockelleisten (kein Estrichaufbruch), setzten 5 kleine Heizkörper und
      führten das Abgas innenliegend über einen neuen LAS-Schacht. Keine
      Übersiedlung nötig, Baustaub durch tägliche Reinigung beherrschbar.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Neubau</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von der Humboldtgasse 1100 über Gürtel zum Westbahnhof – im Schnitt
      15–20 Minuten bis Neubaugasse. Parken ist in 1070 chronisch schwierig:
      wir planen Anlieferung und Werkzeugtransport immer im Vorfeld und
      arbeiten bei Bedarf mit Halteverbots-Anträgen der Hausverwaltung.
    </p>
  </>
);
