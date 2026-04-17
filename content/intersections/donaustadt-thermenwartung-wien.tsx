import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Thermenwartung in der Donaustadt (1220): Für wen?"
      answer={
        <p>
          In der Donaustadt ist das Bild gemischt: viele Einfamilienhäuser mit
          eigenen Gas-Zentralheizungen, zahlreiche Wohnungen mit Etagenthermen in
          Hirschstetten, Stadlau und Kagran, und im Neubau-Bereich (Seestadt,
          Kagraner Leitn) meist Fernwärme – also kein Thermenservice notwendig.
          Wir warten alle gängigen Marken (Vaillant, Viessmann, Buderus, Junkers,
          Brötje, Wolf) jährlich und koordinieren die Abgaswegkontrolle mit dem
          Rauchfangkehrer.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Inhalt einer Thermenwartung</h2>
    <IconList
      items={[
        { text: "Brennerreinigung und Düsensatz prüfen" },
        { text: "Wärmetauscher-Reinigung und Kalkentfernung" },
        { text: "Gasdruck und Gemisch einstellen nach Herstellervorgabe" },
        { text: "Abgasweg mit Rauchfangkehrer abnehmen (bei raumluftabhängigen Geräten)" },
        { text: "Systemdruck, Ausdehnungsgefäß, Sicherheitsventil prüfen" },
        { text: "Dokumentation mit Messwerten übergeben" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Einfamilienhaus mit Gas-Zentralheizung" icon="🏡">
      In 1220 haben viele Einfamilienhäuser Gas-Zentralheizung mit
      Pufferspeicher und Warmwasserbereitung. Die Wartung ist komplexer als bei
      einer Wohnungstherme: Pufferspeicher-Hygiene, Zirkulationspumpe,
      Druckausgleichsgefäße. Wir warten das komplette System in einem Termin.
    </HighlightBox>

    <MiniStory
      title="Jahreswartung mit Systemcheck in Hirschstetten"
      context="1220 Wien, Einfamilienhaus, Vaillant ecoTEC 24 kW, Baujahr 2018"
      outcome="Wartung + Systemcheck + Gasdruck nachjustiert, Gas-Verbrauch im Folgejahr –7 %."
    >
      Der Kunde nutzt einen Wartungsvertrag mit fixem Jahrestermin. Wir
      stellten fest: Gas-Luft-Gemisch leicht über Sollwert, Wärmetauscher
      leicht verrußt. Reinigung und Neukalibrierung brachten im Folgejahr
      einen messbaren Verbrauchsrückgang – durchschnittlich 7 % weniger Gas
      über die Heizperiode.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Wartungsvertrag in 1220</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wir bieten Einfamilienhaus-Kunden in der Donaustadt einen Rahmenvertrag
      mit Jahreswartung und Notdienst-Priorität. Preis ist fix, keine
      Einzelabrechnung nötig. Termin wird im Herbst koordiniert, vor
      Heizperiode.
    </p>
  </>
);
