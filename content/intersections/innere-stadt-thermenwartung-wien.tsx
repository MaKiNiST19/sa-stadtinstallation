import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Thermenwartung in der Inneren Stadt (1010): Was ist die Besonderheit?"
      answer={
        <p>
          Thermenwartung im 1. Bezirk bedeutet: Arbeiten in aufwendig sanierten
          Palais-Wohnungen, in Anwaltskanzleien und Ordinationen mit engen
          Betriebszeiten, und häufig mit Denkmalauflagen am Bestand. Eine
          jährliche Wartung sichert den sicheren Betrieb, verringert das
          Ausfallrisiko und verlängert die Lebensdauer. Wir arbeiten mit fixer
          Terminstruktur und dokumentieren jede Prüfung inklusive
          Abgaswegkontrolle.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Was gehört zur Thermenwartung?</h2>
    <IconList
      items={[
        { text: "Brennerraum reinigen, Ionisationselektrode prüfen" },
        { text: "Wärmetauscher auf Ablagerungen und Kalk kontrollieren" },
        { text: "Gasdruck und Gas-Luft-Gemisch nach Herstellervorgabe einstellen" },
        { text: "Abgasverhalten kontrollieren, Abgaswegüberprüfung mit Rauchfangkehrer" },
        { text: "Sicherheitsventile, Ausdehnungsgefäß, Druckmanometer prüfen" },
        { text: "Wartungsprotokoll mit Messwerten übergeben" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Warum gerade in 1010?" icon="🏛">
      In der Inneren Stadt stehen Thermen oft in denkmalgeschützten
      Gebäuden mit historischen Kaminen. Jährliche Wartung + Abgaswegprüfung
      durch Rauchfangkehrer ist doppelt wichtig, um im Ernstfall nicht vor
      kostspieligen Reparaturen an der Substanz zu stehen. Wir koordinieren
      beide Termine.
    </HighlightBox>

    <MiniStory
      title="Jahreswartung in einer Kanzlei am Ring"
      context="1010 Wien, Kanzlei 180 m², Vaillant-Kombitherme Baujahr 2016"
      outcome="Wartung + Abgasweg-Abnahme in 90 Minuten, keine Betriebsunterbrechung."
    >
      Die Kanzlei wünschte Wartung außerhalb der Öffnungszeiten. Wir kamen
      um 7:00, starteten mit Brenner-Reinigung, prüften alle Sicherheitsorgane
      und nahmen den Rauchfangkehrer um 8:00 mit hinzu – um 8:30 war die
      Therme in Betrieb, Kanzlei-Personal kam zum ersten Mandanten pünktlich
      um 9:00.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Wartungsvertrag</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Für die Innere Stadt bieten wir feste Jahrestermine mit Erinnerung und
      koordinierter Rauchfangkehrer-Bestellung. So entfällt die jährliche
      Sucharbeit – einmal angemeldet, läuft die Wartung von selbst im
      Kalender.
    </p>
  </>
);
