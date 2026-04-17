import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Gasinstallateur in der Donaustadt (1220): Worauf zu achten?"
      answer={
        <p>
          In der Donaustadt ist Gas im Wandel: Einfamilienhäuser werden im
          Rahmen von „Raus aus Gas" auf Wärmepumpe umgerüstet, in neueren
          Gebieten (Seestadt) gibt es gar keinen Gasanschluss. Trotzdem arbeiten
          wir weiter an Gas-Installationen: Anschlussänderungen, Zähler-Umbauten,
          Sicherungs- und Außerbetriebnahme-Arbeiten, und im Bestand klassische
          Thermenaustausche. ÖVGW G1/G2 zertifiziert.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Gas-Aufträge in 1220</h2>
    <IconList
      items={[
        { text: "Gasabschaltung und Leitungs-Rückbau bei Umstieg auf Wärmepumpe" },
        { text: "Therme-Neuinstallation inkl. Gasleitung in Einfamilienhäusern" },
        { text: "Gasdichtheitsprüfung nach ÖVGW G1 in Bestandsgebäuden" },
        { text: "Zählerplatz-Änderung bei Sanierung" },
        { text: "Gasgeruch-Notdienst und Leckortung" },
        { text: "Umstellung Gas-Etagen → Gas-Zentralheizung im Einfamilienhaus" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Raus aus Gas: Koordinierter Ausstieg" icon="🔥">
      Beim Umstieg von Gas auf Wärmepumpe übernehmen wir die komplette
      Koordination: Wärmepumpe planen und montieren, Gasleitung außer Betrieb
      nehmen, Wiener Netze informieren, Zähler ausbauen lassen. Das erspart
      dem Kunden die Behördenwege und macht den Gasanschluss sauber
      verabschiedet.
    </HighlightBox>

    <MiniStory
      title="Komplett-Umstieg in Breitenlee"
      context="1220 Wien, Einfamilienhaus Baujahr 1981, Gas-Zentralheizung 24 Jahre"
      outcome="Luft-Wasser-Wärmepumpe 10 kW, Gasanschluss abgemeldet, Zähler ausgebaut, Einsparung ~1.900 € p.a."
    >
      Der Eigentümer wollte weg von Gas. Wir dimensionierten die Wärmepumpe,
      koordinierten die Gasabschaltung mit Wiener Netze (die den Zähler
      ausbauten), führten die Gasleitung geordnet außer Betrieb und
      dokumentierten die Arbeiten für Förderung und Versicherung. Neue
      Anlage läuft seit 18 Monaten, Stromkosten der Wärmepumpe liegen deutlich
      unter dem früheren Gasverbrauch.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Wann brauchen Sie uns?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Sobald gasrechtliche Arbeiten anfallen – Dichtheitsprüfung, Zählerwechsel,
      Abschaltung, Reparatur. Wir sind ÖVGW-zertifiziert und bei jeder Arbeit
      dokumentations-konform. Termine in 1220 nach Vereinbarung, Notdienst
      24/7.
    </p>
  </>
);
