import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Heizungstechnik in Floridsdorf (1210): Was sind die Themen?"
      answer={
        <p>
          In Floridsdorf dominiert der Umstieg: viele Einfamilienhäuser in
          Strebersdorf, Jedlesee und Großjedlersdorf rüsten von Gas oder Öl
          auf Wärmepumpe um. In den Neubaugebieten (Leopoldauer Felder,
          Neu-Leopoldau) herrscht Fernwärme vor, wartungsseitig also primär
          Kompaktstationen. In Gemeindebauten entlang der Schloßhofer Straße
          arbeiten wir an Heizkörper- und Ventiltausch.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Aufträge in 1210</h2>
    <IconList
      items={[
        { text: "Öl/Gas-Aus mit Luft-Wasser-Wärmepumpe in Einfamilienhäusern" },
        { text: "Brauchwasser-Wärmepumpe in Reihenhäusern Jedlesee" },
        { text: "Fernwärme-Kompaktstation tauschen/warten in Leopoldauer Felder" },
        { text: "Heizkörpertausch + hydraulischer Abgleich in Wiener-Wohnen-Objekten" },
        { text: "Gas-Brennwert-Erneuerung (Übergang) in Bestandshäusern" },
        { text: "Solarthermie-Nachrüstung bei bestehender Dachreserve" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Förderungen: über 14.000 €" icon="💶">
      Bei Umstieg von Öl oder Gas auf Wärmepumpe im Einfamilienhaus in 1210
      kombinieren wir Bundes-Sanierungsoffensive und Wiener Landesförderung.
      Je nach Projekt realistisch 12.000–16.000 € Zuschuss. Wir unterstützen
      die Antragstellung und bereiten die Dokumentation kompatibel auf.
    </HighlightBox>

    <MiniStory
      title="Öl-Aus in Strebersdorf"
      context="1210 Wien, Einfamilienhaus Baujahr 1978, 190 m², Ölkessel 20 Jahre"
      outcome="Luft-Wasser-Wärmepumpe 11 kW, Pufferspeicher 500 l, Heizkörpertausch in 4 Räumen, 3,5 Wochen, Förderung 14.200 €."
    >
      Der Eigentümer war fest entschlossen zum Öl-Ausstieg – Tank alt,
      Kessel ineffizient. Heizlast 10,4 kW. Wir setzten eine 11-kW-Luft-
      Wasser-Wärmepumpe, 500-l-Puffer, Brauchwasser-Wärmepumpe im Keller, und
      tauschten vier Heizkörper auf größere Flächen für niedrigere
      Vorlauftemperatur. Tank fachgerecht entsorgt, Keller wieder nutzbar,
      Förderung Bund + Wien rund 14.200 €.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Kontaktaufnahme</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Für Heizungsprojekte in 1210 vereinbaren wir einen Vor-Ort-Termin mit
      Heizlastberechnung (kostenfrei bei Angebots-Annahme). Danach sauber
      dokumentiertes Festpreis-Angebot.
    </p>
  </>
);
