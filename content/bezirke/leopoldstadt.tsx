import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was zeichnet die Leopoldstadt installationstechnisch aus?"
      answer={
        <p>
          Die <strong>Leopoldstadt</strong> ist ein Bezirk der Gegensätze: dichter
          Gründerzeit-Altbau im Karmeliterviertel, große Gemeindebauten im Stuwerviertel,
          moderne Neubauprojekte am Donaukanal und entlang der Lassallestraße. Diese
          Mischung verlangt, dass ein Installateur alle Techniken beherrscht – von der
          Sanierung alter Stahlleitungen im Zinshaus bis zur Fernwärmestation im Neubau.
          Dazu kommen die Donau-Nähe (erhöhtes Grundwasser, feuchteempfindliche Keller)
          und die gute Verkehrsanbindung, die uns schnell im Bezirk sein lässt.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Die drei Gesichter der Leopoldstadt</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die Leopoldstadt zerfällt installationstechnisch in drei klar unterschiedliche
      Gebiete. Wer alle drei nicht kennt, macht im 2. Bezirk Fehler. Wir arbeiten
      seit Jahren in allen – und passen unser Vorgehen jeweils an.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "24px",
      }}
    >
      <EntityCard label="Bereich 1" title="Karmeliterviertel" icon="🏛">
        Dichter Altbau, Gründerzeit, oft revitalisiert. Typische Themen: Steigstrang-
        Sanierung, Thermentausch, Badumbau in kleinen Grundrissen.
      </EntityCard>
      <EntityCard label="Bereich 2" title="Stuwerviertel & Praterstern" icon="🏗">
        Gemeindebau und gemischter Altbau. Fallstrang-Verstopfungen, Kollektiv-
        Wartungen, Wasserhärte-Themen.
      </EntityCard>
      <EntityCard label="Bereich 3" title="Donaukanal & Nordbahnhof" icon="💧">
        Neubau 2015+. Fernwärme, Mehrschicht-Verbundrohr, Smart-Home-Steuerungen,
        hohe Energieeffizienz-Anforderungen.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>Häufige Fälle, die wir im 2. Bezirk bearbeiten</h2>
    <IconList
      items={[
        { text: "Gastherme erneuern in Gründerzeit-Altbau mit Kamineinbindung (Karmeliterviertel)" },
        { text: "Fallstrang-Verstopfung in Gemeindebau Stuwerviertel (Kamera + Hochdruck)" },
        { text: "Fernwärme-Kompaktstation im Neubau-Ensemble am Nordbahnhof" },
        { text: "Wasserschaden nach Rohrbruch im Zinshaus – Koordination mit Gebäudeversicherung" },
        { text: "Bad komplett erneuern in Wohnung am Praterstern (Wannen- auf Duschumbau)" },
        { text: "Gewerbe-Sanitär für Gastronomie am Karmelitermarkt – Fettabscheider inklusive" },
      ]}
      columns={1}
    />

    <MiniStory
      title="Badumbau in einem Gründerzeithaus am Karmelitermarkt"
      context="Oktober 2025, 1020 Wien"
      outcome="Wannenumbau zur bodengleichen Dusche + WC-Tausch auf Geberit-Unterputz, 11 Werktage."
    >
      Eine langjährige Mieterin wollte ein barrierefreies Bad, ohne ausziehen zu müssen.
      Wir bauten in Etappen: Tag 1–2 Abbruch und Entsorgung, Tag 3–4 Neuverrohrung
      und Spülkasten, Tag 5–8 Fliesen, Tag 9–11 Sanitärmontage und Endreinigung.
      Die Dusche stand nach 6 Tagen grob zur Nutzung bereit – endgültige Abnahme
      nach Tag 11. Kostenträger war die Hausverwaltung (Instandhaltung).
    </MiniStory>

    <HighlightBox variant="blue" title="Donau-Nähe: Wasserschäden ernster nehmen" icon="💧">
      In den donaukanal-nahen Lagen haben viele Keller bereits von Natur aus
      feuchte Wände oder erhöhtes Grundwasser. Ein Leitungswasserschaden ist
      dort oft folgenschwerer als in trockenen Lagen – wir empfehlen eine zügige
      Trocknung und eine gründliche Leckortung mit Kamera, bevor Verputz und
      Mauerwerk weiteren Schaden nehmen.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Anfahrt & Erreichbarkeit</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von unserem Standort Puchsbaumgasse 39a in 1100 Favoriten sind wir in die Leopoldstadt
      je nach Tageszeit in 15–25 Minuten. Bei Notfällen nutzen wir die Direktverbindung
      über Erdberger Lände – auch mitten in der Nacht verlässlich. Wir decken den
      gesamten 2. Bezirk ab, von Zwischenbrücken bis zur Donauplatte.
    </p>
  </>
);
