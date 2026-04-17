import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Sanitärtechnik in Favoriten (1100): Was bauen wir ein?"
      answer={
        <p>
          Sanitärtechnik im 10. Bezirk reicht vom Bad-Komplettumbau im
          Jahrhundertwende-Altbau bis zur Erst-Einrichtung im Neubau Sonnwendviertel.
          Wir arbeiten mit namhaften Marken (Villeroy & Boch, Laufen, Duravit,
          Grohe, Hansgrohe) und übernehmen Planung, Demontage, Montage und
          Inbetriebnahme – meist als geschlossener Auftrag aus einer Hand.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Sanitär-Projekte in Favoriten</h2>
    <IconList
      items={[
        { text: "Komplett-Badsanierung in Gründerzeit-Wohnungen Keplergasse / Buchengasse" },
        { text: "Wanne-zu-Dusche-Umbau in Wiener-Wohnen-Objekten (seniorengerecht)" },
        { text: "Gäste-WC-Neueinbau in Einfamilienhäusern Oberlaa" },
        { text: "Behindertengerechte WC-Anlagen in Gewerbe und öffentlichen Räumen" },
        { text: "Gewerbe-Sanitär für Gastronomie Reumannplatz / Keplerplatz" },
        { text: "Spültischtausch und Armaturen in Gemeindebau-Wohnungen" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Seniorengerechter Umbau: Förderung nützen" icon="🧑‍🦳">
      Die Stadt Wien fördert barrierefreie Bad-Umbauten (bodenebene Dusche,
      WC-Erhöhung, Haltegriffe) für ältere Menschen. Wir prüfen bei
      Angebotserstellung, ob der Kunde für den Zuschuss in Frage kommt, und
      dokumentieren die Arbeiten so, dass der Antrag auf die Förderung ohne
      Nachfragen durchgeht.
    </HighlightBox>

    <MiniStory
      title="Bad-Komplettumbau in der Keplergasse"
      context="1100 Wien, Jugendstilhaus 1904, 3. Stock, 58 m² Wohnung, Bad 4,5 m²"
      outcome="Neues Bad mit bodenebener Dusche, WC, Waschtisch + Unterschrank – 5 Arbeitstage."
    >
      Die Mieterin war kniebeschädigt und konnte nicht mehr in die Badewanne
      steigen. Wir planten mit Hausverwaltungs-Zustimmung einen barrierefreien
      Umbau: alte Wanne raus, neuer Estrich mit Gefälle, bodenebene Dusche mit
      linearem Ablauf, neuer WC-Keramik (Erhöhung +5 cm), Waschtisch mit
      Armatur Grohe Eurosmart. Fliesen in hellem Beige, Silikon-Fugen sauber,
      Übergabe am Freitagabend.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Warum lokaler Sanitärbetrieb?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Bad-Umbau geht selten ohne Überraschungen aus dem Bestand. Undichte
      Fallrohre, verkalkte Steigleitungen, unerwartete Bodenschäden –
      mit lokaler Erfahrung und kurzer Anfahrt kommen wir schneller mit
      Nachmaterial oder Helfer. Das verkürzt die Umbau-Zeit spürbar.
    </p>
  </>
);
