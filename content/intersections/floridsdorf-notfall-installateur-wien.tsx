import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Notfall-Installateur in Floridsdorf (1210): Wie schnell kommen wir an?"
      answer={
        <p>
          Transdanubien bedeutet: wir müssen über die Donau. Aus 1100 Favoriten
          über A23 – Nordbrücke rechnen wir mit 25–35 Minuten bis
          Floridsdorfer Bahnhof, für entlegene Lagen (Strebersdorf, Jedlesee)
          eher 35–45 Minuten. Für akute Notfälle priorisieren wir über die
          kürzeste Route und haben auch für Transdanubien-Kunden eine
          strukturierte Reaktionszeit.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Notfälle in 1210</h2>
    <IconList
      items={[
        { text: "Wärmepumpen-Störung in Einfamilienhäusern Strebersdorf" },
        { text: "Rohrbruch in Siedlungshäusern Jedlesee / Großjedlersdorf" },
        { text: "Thermenausfall in Wiener-Wohnen-Wohnungen Schloßhofer Straße" },
        { text: "Fernwärme-Störung in Neu-Leopoldau / Leopoldauer Felder" },
        { text: "Verstopfung in Handel- und Gastrobetrieben Floridsdorfer Markt" },
        { text: "Kellerflutung bei Starkregen in Siedlungsgebieten" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Priorisierung für Wartungskunden" icon="🔔">
      Kunden mit Wartungsvertrag haben im Notfall Priorität. Das heißt: Wir
      fahren sie zuerst an. Für Einfamilienhaus-Besitzer in Transdanubien
      empfehlen wir daher den Rahmen-Wartungsvertrag – der Stundensatz für
      Wartung ist moderat, der Vorteil im Winter spürbar.
    </HighlightBox>

    <MiniStory
      title="Heizungsausfall an einem Januarmorgen"
      context="1210 Wien, Einfamilienhaus Strebersdorf, Luft-Wasser-Wärmepumpe 3 Jahre alt"
      outcome="Anfahrt 32 Minuten, Fehlercode Sicherheitsdruckschalter, Teil am Lager, binnen 2 Stunden wieder warm."
    >
      7:10 Uhr, Anruf: Haus kalt, WP meldet Störung. Wir fuhren ab Humboldtgasse
      über A23 – Nordbrücke, lasen den Fehlercode aus (Sicherheitsdruckschalter
      Heizkreis defekt), hatten das Teil im Servicefahrzeug und tauschten es
      in 35 Minuten. Um 9:40 lief die Anlage wieder, Kinder waren zur Schule
      mit einer Stunde Verspätung.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Tel. +43 676 634 90 34</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      24/7-Notdienst für 1210. Anfahrt typisch 25–40 Minuten, je nach Lage.
      Mit Wartungsvertrag priorisierter Einsatz.
    </p>
  </>
);
