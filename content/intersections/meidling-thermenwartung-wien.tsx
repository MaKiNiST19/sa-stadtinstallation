import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Thermenwartung in Meidling (1120): Wie läuft das ab?"
      answer={
        <p>
          In Meidling betreuen wir tausende Gasthermen – in Zinshäusern entlang
          der Meidlinger Hauptstraße, in Wiener-Wohnen-Wohnungen und in
          Einfamilienhäusern in Altmannsdorf. Eine jährliche Wartung ist bei
          raumluftabhängigen Geräten Pflicht und auch bei modernen Brennwert-
          Geräten dringend empfohlen (Gewährleistung, Effizienz). Wir
          koordinieren bei Bedarf den Rauchfangkehrer mit.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Wartungsumfang</h2>
    <IconList
      items={[
        { text: "Brennerraum reinigen und Ionisationselektrode prüfen" },
        { text: "Wärmetauscher reinigen, Kalkablagerungen entfernen" },
        { text: "Gas-Luft-Gemisch justieren nach Herstellerwerten" },
        { text: "Abgasweg mit Rauchfangkehrer abnehmen (raumluftabh. Geräte)" },
        { text: "Ausdehnungsgefäß, Sicherheitsventil, Systemdruck prüfen" },
        { text: "Wartungsprotokoll mit Messwerten" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Sammelwartung im Zinshaus" icon="🏢">
      Wir bieten Hausverwaltungen die Sammelwartung aller Thermen eines
      Zinshauses an einem Tag – inklusive Rauchfangkehrer-Terminkoordination.
      Das ist effizient, geht für Mieter mit wenig Aufwand, und die HV hat
      ein zentrales Dossier.
    </HighlightBox>

    <MiniStory
      title="Wartung in einem 10-Parteien-Zinshaus"
      context="1120 Wien, Zinshaus Meidlinger Hauptstraße, 10 Wohnungen mit Gasthermen"
      outcome="Alle 10 Geräte in einem Tag gewartet, Rauchfangkehrer koordiniert, zentrales Dossier an HV."
    >
      Die HV beauftragte uns für alle 10 Geräte gleichzeitig. Wir starteten
      um 7:30 mit dem ersten Stockwerk, arbeiteten uns etagenweise hoch, der
      Rauchfangkehrer kam um 11:00 und um 12:00 nach kurzer Kaffeepause. Um
      17:00 war die letzte Wohnung fertig, das Dossier ging am Folgetag an
      die HV.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Termin buchen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Für Meidling nehmen wir Anfragen tel. +43 676 634 90 34 oder per Kontaktformular
      entgegen. Terminvorschläge innerhalb von 48 Stunden, bei Rahmenverträgen
      fester Jahrestermin.
    </p>
  </>
);
