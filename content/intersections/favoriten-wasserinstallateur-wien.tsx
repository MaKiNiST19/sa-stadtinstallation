import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Wasserinstallateur in Favoriten (1100): Was leisten wir vor Ort?"
      answer={
        <p>
          Als Wasserinstallateur im 10. Bezirk arbeiten wir auf beiden Seiten:
          klassische Altbauten mit verkalkten Steigleitungen und zunehmend
          häufig undichten Stahlrohren – und moderne Neubauwohnungen im
          Sonnwendviertel und am Hauptbahnhof-Umfeld mit Mehrschicht-Verbundrohr.
          Standardarbeiten reichen vom Wasserhahnwechsel über Steigleitungs-Sanierung
          bis zur Legionellenbeprobung in Mehrfamilienhäusern.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Wasserinstallations-Einsätze in 1100</h2>
    <IconList
      items={[
        { text: "Rohrbruch in Altbau-Wohnungen Favoritenstraße / Keplergasse" },
        { text: "Steigleitungs-Sanierung in Gründerzeithäusern Buchengasse" },
        { text: "Wasserhahn- und Armaturen-Tausch in Wiener-Wohnen-Objekten" },
        { text: "Legionellenbeprobung und thermische Spülung in Mehrparteienhäusern" },
        { text: "Entkalker- und Enthärtungsanlagen Oberlaa / Neu-Favoriten" },
        { text: "Trinkwasser-Hausanschluss im Neubau Sonnwendviertel" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Legionellen ernst nehmen" icon="🧪">
      In älteren Mehrparteienhäusern mit zentraler Warmwasserbereitung sind
      Legionellen ein echtes Thema – vor allem in Tot-Strängen mit wenig
      Durchfluss. Wir sichern per thermischer Spülung (70 °C, 3 Minuten pro
      Zapfstelle) und dokumentieren die Arbeit. Bei Verdacht holen wir eine
      Laborprobe.
    </HighlightBox>

    <MiniStory
      title="Rohrbruch in der Favoritenstraße"
      context="1100 Wien, Gründerzeithaus, 3. Stock, Nacht-Notdienst"
      outcome="Abgesperrt in 35 Minuten nach Anruf, Reparatur am nächsten Vormittag."
    >
      Um 01:20 meldete ein Mieter Wasserschaden in der Wohnung darunter. Wir
      fuhren ab Humboldtgasse 33 in 8 Minuten hin, fanden das Leck am
      Kaltwasser-Anschluss der Küche (verpresste Kupferverbindung, Jahre alt),
      sperrten mit Etagenventil ab. Trockenlegung durch Blower am Vormittag,
      neue Verbindung in Edelstahl-Pressfittung – fertig bis 13 Uhr.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Warum lokaler Wasserinstallateur?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Bei Wasserschäden zählt jede Minute. Aus 1100 sind wir in praktisch
      jeden Winkel des 10. Bezirks in unter 20 Minuten. Kein Anfahrtsaufschlag,
      klare Kommunikation, dokumentierter Bericht – die Grundlagen für zügige
      Versicherungsabwicklung.
    </p>
  </>
);
