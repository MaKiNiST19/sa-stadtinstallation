import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Notfall-Installateur in der Landstraße (1030): Wie schnell?"
      answer={
        <p>
          Die Landstraße erreichen wir aus 1100 Favoriten über Landstraßer Gürtel
          oder A23 in 15–25 Minuten. Der 3. Bezirk hat ein sehr breites Spektrum
          – vom Jugendstil-Altbau im Weißgerberviertel bis zum modernen
          Hauptbahnhof-Viertel mit Fernwärme und Smart Home. Entsprechend
          unterschiedlich sind die Notfälle: Rohrbruch im Altbau, Fernwärme-
          Störung im Neubau, Heizungsausfall im Zwischenbau.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Notfälle in 1030</h2>
    <IconList
      items={[
        { text: "Rohrbruch in Jugendstil-Zinshäusern Weißgerberviertel" },
        { text: "Fernwärme-Störung in Neubauten Sonnwendviertel / Quartier Belvedere" },
        { text: "Heizungsausfall in Gründerzeithäusern am Rennweg" },
        { text: "Verstopfung in Bürokomplexen rund um den Hauptbahnhof" },
        { text: "Thermenausfall in Mietwohnungen Landstraßer Hauptstraße" },
        { text: "Wasseraustritt in Geschäftslokalen am Rochusmarkt" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Bauträger-Service im Neubau" icon="🏗">
      Für Bauträger mit Beständen im Sonnwendviertel oder Quartier Belvedere
      haben wir Rahmenverträge für Mängelbehebung in Erstbezug-Wohnungen und
      Garantie-Arbeiten. Das erspart Bauträgern das Sourcing bei jedem
      Einzelfall.
    </HighlightBox>

    <MiniStory
      title="Rohrbruch um 22:30 im Weißgerberviertel"
      context="1030 Wien, Jugendstilhaus 1908, 3. Stock, Mieter im Bad überrascht"
      outcome="Absperrung in 30 Minuten, Abnahme Hausversicherung am nächsten Tag ohne Streitigkeiten."
    >
      Ein Mieter meldete Wassereinbruch nach Klopfen in der Wand. Wir kamen
      in 22 Minuten, lokalisierten das Leck in der Warmwasser-Steigleitung,
      sperrten ab, dokumentierten den Schaden mit Foto und Zeitprotokoll.
      Der Mieter übergab die Dokumentation an die Haftpflicht – ohne
      Nachfragen erledigt.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Erreichbar 24/7</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Tel. +43 676 634 90 34. Für 1030 mit durchschnittlicher Anfahrt von
      18 Minuten aus 1100.
    </p>
  </>
);
