import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Thermenwartung in Leopoldstadt (1020): Was ist zu beachten?"
      answer={
        <p>
          In Leopoldstadt sind Gasthermen in zehntausenden Wohnungen im Einsatz –
          von der klassischen Raumluftabhängigen Therme im Altbau-WC bis zur
          modernen Brennwert-Kombitherme im sanierten Dachgeschoß. Eine
          jährliche Wartung plus Abgasweg-Überprüfung durch den Rauchfangkehrer
          ist gesetzlich geregelt und wirtschaftlich sinnvoll. Wir arbeiten mit
          festen Jahresterminen und koordinieren den Rauchfangkehrer mit.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Was leisten wir?</h2>
    <IconList
      items={[
        { text: "Brennerreinigung, Ionisationselektrode prüfen" },
        { text: "Wärmetauscher inspizieren, Kalkablagerungen entfernen" },
        { text: "Gaseinstellung nach Herstellervorgabe (CO, CO₂, Wirkungsgrad)" },
        { text: "Abgasweg gemeinsam mit Rauchfangkehrer abnehmen" },
        { text: "Ausdehnungsgefäß, Sicherheitsventil, Systemdruck prüfen" },
        { text: "Wartungsprotokoll mit Messwerten übergeben" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Warum jährlich?" icon="📅">
      Bei raumluftabhängigen Thermen im Altbau ist die Jahreswartung + Abgasweg-
      Überprüfung Pflicht. Auch bei raumluftunabhängigen Geräten empfiehlt der
      Hersteller die jährliche Wartung – sonst erlischt im Ernstfall die
      Gewährleistung. Wartung verlängert Lebensdauer und reduziert den
      Gasverbrauch.
    </HighlightBox>

    <MiniStory
      title="Wartungsvertrag für ein Zinshaus"
      context="1020 Wien, Karmelitergrätzl, 11 Wohnungen mit Gasthermen"
      outcome="Jahreswartung + Rauchfangkehrer an einem Tag – alle 11 Geräte abgenommen, keine Einzelrechnung für Mieter."
    >
      Die Hausverwaltung beauftragte uns mit einem Rahmenvertrag für alle
      11 Thermen. Wir planten einen Wartungstag mit Rauchfangkehrer, arbeiteten
      uns wohnungsweise durch (je ca. 45 Minuten pro Gerät), erstellten
      Wartungsprotokolle und übergaben ein Gesamtdossier an die HV. Mieter
      zahlen keine Einzelrechnung, die HV hat einen vollständigen Nachweis
      für die Hausversicherung.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Preise</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Thermenwartung in 1020: Festpreis, ohne Überraschungen. Die
      Rauchfangkehrer-Rechnung kommt direkt vom Kehrer an den Eigentümer. Bei
      Rahmenverträgen für Hausverwaltungen individuelle Konditionen.
    </p>
  </>
);
