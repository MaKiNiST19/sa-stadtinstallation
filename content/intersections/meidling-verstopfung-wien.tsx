import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Verstopfung in Meidling (1120): Was hilft?"
      answer={
        <p>
          Meidling hat sehr dichten Altbaubestand mit Guss-Fallsträngen und
          verkalkten Kanalanschlüssen. Wir kommen mit Spirale, Hochdruckreinigung
          und bei Bedarf Kanalkamera. Für 1120 gilt besondere
          Reaktionsgeschwindigkeit durch Nachbarschaft zu 1100 – meistens unter
          20 Minuten vor Ort. Kein Anfahrtsaufschlag für Stammkunden.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Verstopfungen in 1120</h2>
    <IconList
      items={[
        { text: "Küchenabflüsse in Altbau-Wohnungen Meidlinger Hauptstraße" },
        { text: "WC-Rückstau in Wiener-Wohnen-Wohnblocks" },
        { text: "Fallstrang-Probleme in Gründerzeithäusern" },
        { text: "Gewerbe-Abflüsse in Gastro-Betrieben Schönbrunner Straße" },
        { text: "Waschmaschinen-Abläufe in Kellern gestaut" },
        { text: "Regenwasserfallrohre nach Laubablagerung verstopft" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Wurzeleinwuchs erkennen" icon="🌳">
      In älteren Tonrohren der Grundleitung wachsen Baumwurzeln ein – vor
      allem in Gründerzeithäusern mit Garten. Wenn die Spirale keinen
      dauerhaften Erfolg bringt, kommt die Kanalkamera. Sanierung
      typischerweise durch Inliner-Verfahren oder partielle Erneuerung –
      wir vermitteln an spezialisierte Partner.
    </HighlightBox>

    <MiniStory
      title="Wiederkehrender Rückstau am Fuchsenfeldhof"
      context="1120 Wien, Wiener-Wohnen-Großwohnhaus, vier Wohnungen über Monate betroffen"
      outcome="Kanalkamera identifizierte Wurzeleinwuchs, Wiener Wohnen beauftragte Inliner-Sanierung, seither keine Rückstauten."
    >
      Die Hausverwaltung hatte wiederholt Verstopfungen durch uns beheben
      lassen – meist hielt die Reinigung 3–6 Monate. Wir schlugen Kanalkamera
      vor, fanden starken Wurzeleinwuchs in der Grundleitung unter dem
      Garten. Wiener Wohnen beauftragte eine Inliner-Sanierung (ohne
      Grabung), das Problem ist seit 18 Monaten Geschichte.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Notdienst rund um die Uhr</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Tel. +43 676 634 90 34 – auch nachts und am Wochenende. Transparente
      Verrechnung, keine versteckten Kosten.
    </p>
  </>
);
