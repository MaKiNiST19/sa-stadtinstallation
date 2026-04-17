import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Notfall-Installateur in Simmering (1110): Wie schnell?"
      answer={
        <p>
          Simmering ist direkter Nachbar unseres Betriebssitzes in Favoriten.
          Unser Notdienst erreicht den 11. Bezirk typisch in 10–20 Minuten –
          über Gudrunstraße oder Simmeringer Hauptstraße. Das macht uns zur
          schnellsten lokalen Adresse für Rohrbruch, Heizungsausfall und
          Verstopfungs-Einsätze in Kaiserebersdorf, am Enkplatz und rund um
          die Simmeringer Hauptstraße.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Notfälle in 1110</h2>
    <IconList
      items={[
        { text: "Rohrbruch in Gemeindebauten Simmeringer Hauptstraße" },
        { text: "Heizkessel-Ausfall in Einfamilienhäusern Kaiserebersdorf" },
        { text: "Verstopfung mit Rückstau in Mietwohnungen Enkplatz" },
        { text: "Thermenausfall bei Kälteeinbruch in Gründerzeithäusern" },
        { text: "Hallen-Sanitär-Probleme in Gewerbebetrieben Albern" },
        { text: "Kellerflutung nach Starkregen in Siedlungshäusern" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Gewerbe-Notdienst schnell" icon="🏭">
      Logistik- und Produktionsbetriebe im 11. Bezirk können sich Ausfälle in
      Sanitär- oder Heizungssystemen kaum leisten. Wir haben Rahmenverträge
      mit mehreren Unternehmen in Albern und Haidequerstraße und sind im
      Störfall priorisiert. Auch ohne Vertrag: wenn wir freie Kapazität haben,
      fahren wir direkt hin.
    </HighlightBox>

    <MiniStory
      title="Heizkessel-Ausfall am frühen Montag"
      context="1110 Wien, Reihenhaus-Siedlung, Februar, –5 °C"
      outcome="Notheizkörper geliefert, Ursache Kessel-Elektronik identifiziert, Ersatzteil am nächsten Tag, komplette Reparatur binnen 28 Stunden."
    >
      Eine Familie meldete kalt aufgewachte Kinder und keinen Warmwasserfluss.
      Wir waren in 12 Minuten da, konnten den Kessel aktuell nicht retten
      (Steuerungsplatine defekt), stellten einen mobilen Elektro-Heizkörper
      ins Wohnzimmer, bestellten Ersatzteil übernacht, und kamen am
      Folgetag-Vormittag mit dem Teil zurück. Nach 28 Stunden lief das Haus
      wieder komplett.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anrufen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Notdienst Simmering: Tel. +43 676 634 90 34. Keine Warteschleife,
      dokumentierter Einsatzbericht. Bei Bedarf stellen wir mobile Notheizung.
    </p>
  </>
);
