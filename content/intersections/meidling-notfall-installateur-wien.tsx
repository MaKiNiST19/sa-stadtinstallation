import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Notfall-Installateur in Meidling (1120): Wie schnell?"
      answer={
        <p>
          Meidling grenzt direkt an Favoriten – wir fahren aus 1100 ab
          Puchsbaumgasse über Matzleinsdorfer Platz in 10–15 Minuten in den
          12. Bezirk. Das macht uns im Notdienst zur nächsten lokalen Adresse
          für Rohrbruch, Thermenausfall und Verstopfung in Meidlinger
          Hauptstraße, am Bahnhof Meidling und im Schöpfwerk.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Notfälle in 1120</h2>
    <IconList
      items={[
        { text: "Rohrbruch in Gründerzeithäusern Meidlinger Hauptstraße" },
        { text: "Thermenausfall in Altbau-Wohnungen Längenfeldgasse" },
        { text: "Heizungsausfall in Wiener-Wohnen-Objekten (Schöpfwerk, Fuchsenfeldhof)" },
        { text: "Verstopfung mit Rückstau in Geschäftslokalen am Meidlinger Markt" },
        { text: "Kellerflutung bei Starkregen im Bereich Meidlinger Bach" },
        { text: "Gasgeruch in Mietwohnungen mit älteren Geräten" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Wiener-Wohnen-Großanlagen" icon="🏘">
      Im Schöpfwerk und Fuchsenfeldhof arbeiten wir mit Freigabe der
      Hausverwaltung. Bei akuten Notfällen sperren wir ab und stimmen die
      Reparatur anschließend über die HV ab. Das erspart Diskussionen um
      Zuständigkeit und Kosten.
    </HighlightBox>

    <MiniStory
      title="Rohrbruch in einem Geschäftslokal"
      context="1120 Wien, Meidlinger Hauptstraße, Samstag 10:00"
      outcome="Abgesperrt in 25 Minuten, Geschäft blieb geöffnet, Reparatur am Sonntag."
    >
      Der Fleischer meldete Wasser im Kühlraum am Samstagvormittag. Wir fuhren
      ab Puchsbaumgasse in 12 Minuten hin, lokalisierten einen gebrochenen
      Kaltwasser-Steigstrang, sperrten gezielt ab – der Rest des Hauses blieb
      wasserversorgt. Der Fleischer konnte geöffnet bleiben, nur der Kühlraum
      war kurz außer Betrieb. Reparatur sauber am Sonntag, Montag pünktlich
      weitergearbeitet.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Immer erreichbar</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Tel. +43 676 634 90 34. Für 1120 gilt: schnelle Anfahrt, klare
      Kommunikation, dokumentierter Einsatzbericht.
    </p>
  </>
);
