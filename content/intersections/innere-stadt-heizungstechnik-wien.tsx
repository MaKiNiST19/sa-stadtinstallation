import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Heizungstechnik in der Inneren Stadt (1010): Was ist möglich?"
      answer={
        <p>
          Heizungstechnik im 1. Bezirk ist Denkmal-Heizungstechnik: historische
          Radiatoren, Fußbodenheizung in sanierten Palais, Zentralheizungen mit
          Jahrzehnten Betrieb. Wärmepumpen sind selten machbar (keine
          Außengeräte an Fassaden möglich), Fernwärme verbreitet, Gas-Brennwert
          der Standard beim Kesseltausch. Wir planen mit Rücksicht auf Substanz
          und koordinieren mit Bundesdenkmalamt und MA 19, wenn sichtbare
          Änderungen anstehen.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Heizungs-Projekte in 1010</h2>
    <IconList
      items={[
        { text: "Gas-Brennwerttherme erneuern in Palais-Wohnungen am Ring" },
        { text: "Fernwärme-Kompaktstation tauschen in Büroetagen" },
        { text: "Hydraulischer Abgleich in großen Zinshäusern" },
        { text: "Historische Gussradiatoren erhalten und neu einregeln" },
        { text: "Warmwasser-Zirkulation für mehrere Bäder in Palais" },
        { text: "Heizlastberechnung nach ÖNORM H 7500 vor Kesseltausch" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Gussheizkörper: nicht wegwerfen" icon="🏛">
      Gussheizkörper aus der Gründerzeit sind wertvoll: große Heizfläche, lange
      Lebensdauer, charakteristische Optik. Bei vielen Sanierungen sind sie
      erhaltenswert – wir reinigen, spülen und setzen neue Thermostatventile,
      statt sie zu ersetzen. Das spart Material und behält den Charakter.
    </HighlightBox>

    <MiniStory
      title="Kesseltausch in einem Palais am Schottenring"
      context="1010 Wien, Gründerzeit-Palais, 320 m² Wohnfläche, alter Niedertemperaturkessel 24 Jahre"
      outcome="Gasbrennwertkessel 30 kW, hydraulischer Abgleich, Gussheizkörper erhalten, Warmwasser zentral neu, 3 Wochen Bauzeit."
    >
      Der alte Kessel war ineffizient und begann auszufallen. Wir planten mit
      den Eigentümern einen sauberen Brennwert-Kessel, führten einen
      hydraulischen Abgleich durch, erhielten die 14 Gussheizkörper (gereinigt,
      neue Ventile) und ersetzten die zentrale Warmwasserbereitung durch einen
      effizienteren 300-l-Speicher mit Zirkulationspumpe. Gasverbrauch im
      folgenden Winter: –22 % gegenüber Vorjahr.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Förderungen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Für den Tausch von Altkesseln auf Brennwert oder Fernwärme gibt es
      Wien-Förderungen. Wärmepumpen sind in 1010 praktisch nur mit interner
      Aufstellung (z.B. Abluft-Wärmepumpe) realistisch – wir prüfen jeden
      Einzelfall.
    </p>
  </>
);
