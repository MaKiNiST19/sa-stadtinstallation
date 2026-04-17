import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was sollten Installateure über Brigittenau (1200) wissen?"
      answer={
        <p>
          <strong>Brigittenau</strong> ist ein dichter Arbeiter-Bezirk zwischen
          Donau und Donaukanal: Gründerzeit-Altbau um Wallensteinplatz und
          Jägerstraße, große Gemeindebauten entlang der Brigittenauer Lände,
          neuer Wohnbau am Handelskai und am Millennium-Tower-Areal. Für uns
          heißt das: viele Wiener-Wohnen-Aufträge, klassische Altbau-Thermen,
          Rohrbrüche in Bestandshäusern und Fernwärme-Themen im Neubau.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 20. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht vom Augarten-Umfeld über Wallensteinplatz und
      Hannovermarkt bis zur Brigittenauer Lände und zum Handelskai. Im Neubau
      (Stichwort Millennium Tower, Ufer-Wohnbau) arbeiten wir mit Fernwärme
      und modernem Verbundrohr; im Altbau dominieren Gasthermen-Wohnungen und
      verstärkt Rohrbrüche bei älteren Stahlrohren.
    </p>

    <IconList
      items={[
        { text: "Thermentausch in Gründerzeithäusern Wallensteinstraße / Jägerstraße" },
        { text: "Heizkörper + Ventile in Wiener-Wohnen-Objekten Brigittenauer Lände" },
        { text: "Fernwärme-Kompaktstation warten am Handelskai / Wehlistraße" },
        { text: "Rohrbruch-Notdienst in Altbauten rund um Augarten" },
        { text: "Badsanierung mit bodenebener Dusche in Wohnungen 1950er" },
        { text: "Gewerbe-Sanitär (Hannovermarkt, Geschäftslokale Dresdner Straße)" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Fernwärme am Wasser" icon="🌊">
      Im Neubau Handelskai/Wehlistraße herrscht Fernwärme vor. Wartung und
      Kompaktstations-Tausch sind Routine, die Armaturen sind oft auf
      Bauträger-Standard. Wichtig: bei Wechsel auf Fernwärme-Kompaktstation
      prüfen wir Strangschema und Regelkurve, damit der hydraulische Abgleich
      in der Wohnung passt.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Wallensteinplatz / Jägerstraße" icon="🛍">
        Einkaufsader, dichter Altbau. Thermen, Rohrbrüche, Bad-Umbau.
      </EntityCard>
      <EntityCard label="Grätzl" title="Brigittenauer Lände" icon="🏘">
        Gemeindebau entlang der Donau. Heizkörpertausch, Wiener-Wohnen.
      </EntityCard>
      <EntityCard label="Grätzl" title="Handelskai / Millennium Tower" icon="🏙">
        Bürotürme, Hotel, Neubau-Wohnen. Fernwärme, Gewerbe-Sanitär.
      </EntityCard>
      <EntityCard label="Grätzl" title="Augarten-Umfeld" icon="🌳">
        Ruhiges Altbau-Grätzl. Thermentausch, Heizungssanierung in kleinen
        Zinshäusern.
      </EntityCard>
    </div>

    <MiniStory
      title="Wohnhausanlage Brigittenauer Lände: 28 Heizkörper"
      context="1200 Wien, Wohnhausanlage Baujahr 1958, HV-Projekt"
      outcome="28 Heizkörper + Thermostatventile + hydraulischer Abgleich in 3 Arbeitstagen, Bewohner blieben in den Wohnungen."
    >
      Die HV wollte vor der Heizperiode die alten Gussheizkörper in einer
      Wohnhausanlage tauschen, ohne eine Gemeinschaftsentleerung des gesamten
      Stranges. Wir arbeiteten stockwerksweise mit einzelnen Schiebern und
      Entleerungsstutzen, tauschten 28 Heizkörper, setzten voreinstellbare
      Thermostatventile und führten den hydraulischen Abgleich durch. Effekt:
      Ruhigere Anlage, geringerer Gasverbrauch, keine kalten Wohnungen.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt in die Brigittenau</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten über Gürtel – Friedensbrücke rechnen wir mit
      25–35 Minuten. Notdienste in 1200 nehmen wir über A22 oder Gürtel,
      je nach Tageszeit. Im Handelskai-Umfeld sind Parkmöglichkeiten meist
      problemlos verfügbar.
    </p>
  </>
);
