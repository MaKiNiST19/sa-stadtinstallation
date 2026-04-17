import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was ist bei einer Gasinstallation in Favoriten (1100) zu beachten?"
      answer={
        <p>
          Favoriten ist unser Heimatbezirk – wir arbeiten hier täglich. Zwischen
          Reumannplatz, Sonnwendviertel und Oberlaa gibt es drei sehr unterschiedliche
          Baubestände: dichter Gründerzeit-Altbau (Quellenstraße, Favoritenstraße),
          Gemeindebauten der 1920er–1960er und Neubauten mit teils Fernwärme statt
          Gas. Als ÖVGW-zertifizierter Gasinstallateur (G1/G2) übernehmen wir alle
          gasrechtlichen Arbeiten in 1100 – mit bekannt schneller Anfahrt, da
          unser Sitz in der Humboldtgasse 33 liegt.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Gasinstallation in Favoriten: unsere häufigsten Aufträge</h2>
    <IconList
      items={[
        { text: "Gas-Anschluss-Erneuerung in Gründerzeit-Zinshäusern Quellenstraße" },
        { text: "Zählermontage und Leitungsabschnitt-Erneuerung Wienerberg-Terrasse" },
        { text: "Gasdichtheitsprüfung nach ÖVGW G1 in Wiener-Wohnen-Häusern" },
        { text: "Therme-Neuinstallation mit Leitungsverlegung Humboldtgasse / Kudlichgasse" },
        { text: "Gasdruckregler und Hausanschluss-Check Oberlaa / Favoritenstraße" },
        { text: "Umstellung Gas → Fernwärme bei Anschluss-Möglichkeit im Sonnwendviertel" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Kein Anfahrtsaufschlag für 1100" icon="🏠">
      Unser Betrieb sitzt in der Humboldtgasse 33, 1100 Wien. Für Kunden im
      10. Bezirk verrechnen wir keinen Anfahrtsaufschlag – egal ob Reumannplatz,
      Laaerberg, Oberlaa oder Monte Laa. Notdienst und Terminarbeit laufen
      meistens binnen 30 Minuten.
    </HighlightBox>

    <MiniStory
      title="Gasleitungs-Erneuerung im Gründerzeitzinshaus"
      context="1100 Wien, Quellenstraße, Gebäude 1906, 14 Wohnungen"
      outcome="Komplette Steigleitung erneuert, alle Zählerplätze neu gesetzt, Abnahme ÖVGW bestanden."
    >
      Bei einer Gasdichtheitsprüfung zeigte sich: die Steigleitung aus
      verzinktem Stahl war an mehreren Stellen stark korrodiert. Wir
      erneuerten auf Edelstahl (Pressfitting), setzten neue Absperrhähne je
      Wohnung und erneuerten die Zählerplätze im Keller. Abstimmung mit Wiener
      Netze für Umstellung, Arbeitsdauer 6 Tage, keine Wohnung war länger als
      4 Stunden ohne Gas.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Wann braucht man den Gasinstallateur in Favoriten?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Gasgeruch, Therme liefert kein Warmwasser, Zähler zeigt Fehler, Umbau
      steht an – alles Fälle, die nach ÖVGW-zertifizierter Bearbeitung verlangen.
      Wir kommen mit Lecksuchgerät, Manometer und Zertifizierung, dokumentieren
      jede Arbeit und übergeben Ihnen eine Anlagenkarte für die nächste Prüfung.
    </p>
  </>
);
