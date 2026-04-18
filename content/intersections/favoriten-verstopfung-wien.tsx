import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Verstopfung im 10. Bezirk: Wann helfen wir?"
      answer={
        <p>
          Verstopfte Abflüsse, Rückstau aus dem WC, Waschbecken das nicht mehr
          leerläuft – in Favoriten gehören diese Einsätze zum Alltag. Wir kommen
          mit Spirale, Hochdruckspülung und bei Bedarf Kanalkamera, lokalisieren
          die Ursache und lösen die Verstopfung sauber. Als Heimatbezirk-Betrieb
          in 1100 sind wir in Notfällen meist binnen 30 Minuten vor Ort.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Verstopfungs-Fälle in 1100</h2>
    <IconList
      items={[
        { text: "Küchenabfluss in Altbau-Wohnungen Quellenstraße" },
        { text: "WC-Rückstau in Wiener-Wohnen-Objekten (Fettablagerungen im Fallstrang)" },
        { text: "Dusch-Ablauf verstopft (Haare, Seife) in Mehrfamilienhäusern" },
        { text: "Waschbecken-Siphon durch Haarpflegeprodukte blockiert" },
        { text: "Kellerablauf zurückgestaut in Gründerzeithäusern" },
        { text: "Gastro-Abflüsse rund um Reumannplatz (Fett, Speisereste)" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Wann hilft Spirale, wann Hochdruck?" icon="🛠">
      Bei einzelnen Siphon-Verstopfungen reicht meist die Spirale. Bei Fallrohr-
      oder Grundleitungs-Problemen kommt die Hochdruckreinigung zum Einsatz. Bei
      Rückstau in mehreren Wohnungen gleichzeitig: Kanalkamera – hier liegt oft
      eine tiefere Wurzel-Einwachsung oder ein Fallrohrsturz vor. Wir
      entscheiden vor Ort anhand Befund.
    </HighlightBox>

    <MiniStory
      title="WC-Rückstau in der Ada-Christen-Gasse"
      context="1100 Wien, Wiener-Wohnen-Wohnblock, 4 Wohnungen betroffen"
      outcome="Fallstrang über Dach gereinigt, Problem binnen 90 Minuten behoben, keine Kanalkamera notwendig."
    >
      Mehrere Mieter meldeten am Sonntagabend rückgestautes WC. Wir fuhren
      ab Puchsbaumgasse 39a in 12 Minuten hin, identifizierten Fettablagerungen
      im Fallstrang (klassisches Sonntagabend-Phänomen nach Mittagessen).
      Reinigung mit Hochdruck über das Dach, alle vier Wohnungen innerhalb
      von 90 Minuten wieder nutzbar, Abrechnung über die HV.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>24h-Notdienst in Favoriten</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Verstopfungs-Notrufe nehmen wir 24/7 entgegen. Für 1100 gilt: kein
      Anfahrtsaufschlag, transparente Stundenverrechnung, keine unnötigen
      Zusatzleistungen. Nach Arbeit schriftliche Dokumentation für
      Versicherungsfälle.
    </p>
  </>
);
