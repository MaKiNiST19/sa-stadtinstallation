import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Welches Heizungssystem passt in der Donaustadt?"
      answer={
        <p>
          Die <strong>Donaustadt</strong> ist geteilt in drei sehr unterschiedliche
          Heizungs-Welten: In Kaisermühlen und Stadlau dominieren Gasthermen und
          Fernwärme; in Hirschstetten, Eßling und Breitenlee gibt es viele
          Einfamilienhäuser mit Gas-, Öl- oder zunehmend Wärmepumpen-Heizungen; in der
          Seestadt Aspern ist Fernwärme Standard. Für den Umstieg auf erneuerbare
          Wärme ist die Donaustadt dank vieler freistehender Häuser
          wärmepumpen-freundlich – und kombiniert mit Photovoltaik besonders wirtschaftlich.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Wärmepumpe in der Donaustadt – warum hier besonders passend</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Ein Großteil der Donaustadt besteht aus Einfamilien- und Reihenhäusern mit
      eigenem Grundstück. Das ist für Luft-Wasser-Wärmepumpen die ideale Konstellation:
      Platz für das Außengerät, meist ausreichend Puffer- und Warmwasserspeicher-Raum
      im Keller oder Technikraum, und oft bereits eine Fußbodenheizung in neueren
      Häusern – was die Vorlauftemperatur niedrig hält und die Jahresarbeitszahl
      maximiert. Wer zusätzlich PV auf dem Dach hat, erreicht Autarkiegrade im
      Wärmebereich, die im Altbau praktisch unmöglich sind.
    </p>

    <IconList
      items={[
        { text: "Luft-Wasser-Wärmepumpe für Einfamilienhäuser (Hirschstetten, Stadlau, Breitenlee)" },
        { text: "Sole-Wärmepumpe mit Tiefenbohrung (falls Grundstücksgröße und Genehmigung passen)" },
        { text: "Fernwärme-Anschluss + Kompaktstation in der Seestadt Aspern und am Nordbahnhof" },
        { text: "Hybridlösung Gas + Wärmepumpe für Übergangszeit" },
        { text: "PV-Kopplung über Wechselrichter und Pufferspeicher" },
        { text: "Heizungsmodernisierung mit hydraulischem Abgleich und Smart Home" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Förderung 2026 in der Donaustadt" icon="€">
      Beim Umstieg von Gas oder Öl auf Wärmepumpe oder Fernwärme kombinieren sich
      Bundesförderung („Raus aus Öl und Gas") und Wiener Landesförderung zu bis zu
      <strong> 75 % der förderfähigen Kosten</strong>. Für typische Einfamilienhäuser in
      Hirschstetten liegt die förderfähige Summe meist bei 15.000–22.000 € – davon
      zurück: 11.000–16.000 €. Wir reichen die Förderung über unser Büro ein und
      treten bei Bedarf in Vorleistung.
    </HighlightBox>

    <MiniStory
      title="Gas-zu-Wärmepumpe-Umstieg in Eßling"
      context="September 2025, Einfamilienhaus Baujahr 1982, 140 m²"
      outcome="12-kW-Luft-Wasser-WP + PV-Kopplung, Gasverbrauch = 0, Jahresarbeitszahl 3,9, Förderung 14.200 €."
    >
      Der Kunde hatte eine 19 Jahre alte Gastherme und 8 kWp Photovoltaik auf dem Dach.
      Die Frage: lohnt sich der Umstieg? Wir rechneten Heizlast (reduzierbar durch
      hydraulischen Abgleich), Vorlauftemperatur (Heizkörper reichten mit 45 °C aus)
      und PV-Überschussnutzung durch. Ergebnis: Luft-Wasser-WP 12 kW, neue
      Pufferspeicher 500 l, Warmwasserspeicher 300 l, Wechselrichter neu konfiguriert
      für Überschussladung in den Warmwasserspeicher. Gasleitung vollständig zurückgebaut.
      Nach einer Heizsaison: JAZ 3,9, tatsächliche Stromkosten fürs Heizen ca. 350 €
      im Jahr.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Fernwärme Seestadt Aspern – was zu wissen ist</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      In der Seestadt ist Fernwärme die Standardlösung. Jede Wohnung bekommt eine
      eigene Kompaktstation – meist in einem Hauswirtschaftsraum oder hinter einer
      Revisionsklappe. Unsere Aufträge hier: Tausch defekter Kompaktstationen, Umbau
      auf Zirkulation für große Wohnungen, Nachrüstung von Mengenbegrenzern bei
      Wohnungsteilungen, sowie Wartung und Reparatur. Fernwärme ist wartungsarm, aber
      nicht wartungsfrei – die Wärmetauscher sollten alle 5–7 Jahre auf Druckverlust
      und Hygiene geprüft werden.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Seestadt Aspern" icon="🏙">
        Fernwärme Standard. Mehrschicht-Verbundrohr, Kompaktstationen,
        Einzelwohnungszähler, Smart-Home-Regler.
      </EntityCard>
      <EntityCard label="Grätzl" title="Hirschstetten, Stadlau, Eßling" icon="🏡">
        Einfamilienhäuser. Wärmepumpe oft ideal, oft kombiniert mit PV. Gas noch
        verbreitet, aber im Rückgang.
      </EntityCard>
      <EntityCard label="Grätzl" title="Kaisermühlen" icon="🏢">
        Hochhäuser. Zentrale Kesselanlage oder Fernwärme, Einzelwohnungen per
        Verteiler. Wartungsvertrag über Hausverwaltung.
      </EntityCard>
      <EntityCard label="Zukunft" title="Klimaziel 2040" icon="🌱">
        Wien will bis 2040 klimaneutral sein. In der Donaustadt bedeutet das für
        Einfamilienhäuser: Wärmepumpe oder Fernwärme. Wir beraten neutral.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>Unser Ablauf bei einem Heizungsprojekt in der Donaustadt</h2>
    <IconList
      items={[
        { text: "1. Erstgespräch (kostenlos) – Ihr Haus, Ihr Verbrauch, Ihre Erwartung." },
        { text: "2. Vor-Ort-Termin – Heizlastberechnung, Heizkörper-Check, Stromanschluss, PV-Situation." },
        { text: "3. Angebot mit Fördergrundlage – detailliert, transparent, inkl. Lebenszyklus-Rechnung." },
        { text: "4. Förderantrag – wir reichen ein, Sie unterschreiben nur." },
        { text: "5. Ausführung in 1–2 Wochen je nach Projektgröße." },
        { text: "6. Inbetriebnahme, Einweisung, Monitoring der ersten Heizsaison." },
      ]}
      columns={1}
    />

    <HighlightBox title="Wir bleiben nach dem Einbau dran" icon="🛠">
      Heizungsanlagen entfalten ihre volle Effizienz erst nach 1–2 Heizperioden. Wir
      prüfen nach der ersten Saison die tatsächliche Arbeitszahl, den Stromverbrauch
      und die Laufzeiten – und optimieren, wenn nötig. Das ist in unseren Projektpreis
      inklusive, nicht extra.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Anfahrt und Service-Fenster</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die Donaustadt erreichen wir vom Firmensitz in 1100 Favoriten über die
      Südosttangente in 25–45 Minuten. Für größere Heizungsprojekte richten wir uns
      zwei- bis fünftägig auf einer Baustelle ein – wir parken fix, das reduziert
      Anfahrten. Notdienst-Einsätze in der Donaustadt sind je nach Tageszeit in
      30–55 Minuten vor Ort.
    </p>
  </>
);
