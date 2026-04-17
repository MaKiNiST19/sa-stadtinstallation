import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Thermenwartung in Simmering (1110): Was machen wir?"
      answer={
        <p>
          In Simmering warten wir Gasthermen und Gas-Zentralheizungen für
          Einfamilienhäuser in Kaiserebersdorf und Geiselberg sowie Wohnungen in
          Gemeindebauten entlang der Simmeringer Hauptstraße. Eine jährliche
          Wartung erfüllt die gesetzliche Vorgabe (raumluftabhängige Geräte)
          und verlängert die Lebensdauer. Als Nachbarbezirk sind wir in
          10–20 Minuten bei Ihnen.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Inhalt der Wartung</h2>
    <IconList
      items={[
        { text: "Brenner reinigen, Ionisationselektrode kontrollieren" },
        { text: "Wärmetauscher prüfen und bei Bedarf entkalken" },
        { text: "Gaseinstellung nach Herstellerwerten justieren" },
        { text: "Abgasweg mit Rauchfangkehrer abnehmen" },
        { text: "Systemdruck, Ausdehnungsgefäß, Sicherheitsventil prüfen" },
        { text: "Wartungsprotokoll mit Messwerten übergeben" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Einfamilienhaus: Systemwartung" icon="🏡">
      In Kaiserebersdorfer Einfamilienhäusern ist oft eine Gas-Zentralheizung
      mit Pufferspeicher installiert. Dort warten wir nicht nur den Kessel,
      sondern auch Zirkulationspumpe, Speicher-Hygiene und Heizkurven-Einstellung.
      Das braucht etwa 90 Minuten – bringt aber spürbare Effizienzgewinne.
    </HighlightBox>

    <MiniStory
      title="Wartung mit kleinem Problem"
      context="1110 Wien, Einfamilienhaus Kaiserebersdorf, Junkers-Kombigerät Baujahr 2011"
      outcome="Wartung + defekte Sicherheitsventil-Dichtung getauscht, Anlage wieder druckstabil, 75 Minuten Arbeitszeit."
    >
      Bei der Jahreswartung zeigte sich Wasseraustritt am Sicherheitsventil.
      Ursache: alter Dichtring. Wir tauschten die Dichtung sofort (Lagerware
      im Fahrzeug), prüften den Systemdruck neu und dokumentierten alles. Der
      Kunde war nach 75 Minuten durch – inklusive Rauchfangkehrer-Termin.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Rahmenvertrag</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Für Hausverwaltungen mit mehreren Gerätewartungen bieten wir
      Rahmenverträge. Einmal Jahr, feste Termine, ein Ansprechpartner. Für
      Einfamilienhäuser arbeiten wir mit persönlicher Terminerinnerung im
      Herbst.
    </p>
  </>
);
