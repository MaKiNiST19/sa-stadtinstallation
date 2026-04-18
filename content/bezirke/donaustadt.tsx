import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Warum ist die Donaustadt installationstechnisch besonders?"
      answer={
        <p>
          Die <strong>Donaustadt</strong> ist flächenmäßig der größte Wiener Bezirk und
          das größte Stadtentwicklungsgebiet Europas. In der Seestadt Aspern, am Nordbahnhof,
          in Kaisermühlen und in den Einfamilienhaus-Siedlungen von Stadlau, Hirschstetten
          und Eßling kommen Techniken zum Einsatz, die es in Altbau-Bezirken kaum gibt:
          <strong> Fernwärme, Luft-Wasser-Wärmepumpen, Photovoltaik + Pufferspeicher,
          Smart-Home-Steuerungen, Regenwassernutzung</strong>. Gleichzeitig treffen wir
          hier regelmäßig auf klassische Einfamilienhäuser der 60er/70er mit
          Modernisierungsbedarf.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Seestadt Aspern – das neue Wien</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die Seestadt Aspern ist eines der spannendsten Arbeitsfelder für einen Wiener
      Installateur: Fernwärme ist Standard, Gas gibt es praktisch nicht, gearbeitet
      wird fast ausschließlich mit Mehrschicht-Verbundrohr. Die Gebäude folgen
      strengen Energiestandards (oft Niedrigstenergie oder Passiv-Ähnlich). Unsere
      Aufträge dort reichen von der Erstausstattung im Neubau über Garantie- und
      Mängelarbeiten bis hin zu individuellen Nachrüstungen (zusätzliches Gäste-WC,
      Duschabtrennung, Gartenbewässerung im Reihenhaus).
    </p>

    <IconList
      items={[
        { text: "Fernwärme-Kompaktstation einbauen, tauschen, warten" },
        { text: "Luft-Wasser-Wärmepumpen für Einfamilienhäuser in Hirschstetten und Stadlau" },
        { text: "Pufferspeicher + PV-Thermie-Anbindung – ganzheitlich gerechnet" },
        { text: "Gartenbewässerung und Außenwasserhähne mit Frostschutz" },
        { text: "Badsanierung in Reihenhäusern (oft bodengleiche Dusche für Alterung im Eigenheim)" },
        { text: "Rohrbruch und Wasserschaden in Einfamilienhäusern – Leckortung ohne Aufgraben" },
      ]}
      columns={1}
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Seestadt Aspern" icon="🏙">
        Neubau 2013+. Fernwärme, Verbundrohr, Smart Home. Wir sind registrierter
        Partner für mehrere Bauträger und Genossenschaften.
      </EntityCard>
      <EntityCard label="Grätzl" title="Kaisermühlen" icon="🏢">
        Hochhäuser (UNO-City-Nähe), gemischte Bauformen. Druckzonen,
        Druckminderer, gemeinschaftliche Haustechnik.
      </EntityCard>
      <EntityCard label="Grätzl" title="Stadlau, Hirschstetten, Eßling" icon="🏡">
        Einfamilienhaus-Bezirke. Wärmepumpen-Umstieg, Heizungsmodernisierung,
        Komplettbadsanierung – unsere Kernprojekte hier.
      </EntityCard>
      <EntityCard label="Grätzl" title="Donaucity & UNO-City" icon="🌆">
        Großvolumige Nutzung. Meist Wartungsverträge über Facility-Management;
        wir übernehmen Teilgewerke.
      </EntityCard>
    </div>

    <MiniStory
      title="Wärmepumpen-Umstieg in Hirschstetten"
      context="September 2025, Einfamilienhaus Baujahr 1978"
      outcome="Luft-Wasser-Wärmepumpe 12 kW + hydraulischer Abgleich + PV-Kopplung, Gasverbrauch eliminiert, 55 % Bundesförderung."
    >
      Der Kunde hatte eine 21 Jahre alte Gastherme mit hohem Verbrauch. Wir rechneten
      Jahresarbeitszahl, Heizlast und Förderkonstellation durch. Ergebnis: Luft-Wasser-
      Wärmepumpe wirtschaftlich sinnvoll dank ausreichend großer Heizflächen (Heizkörper
      + kleine Fußbodenheizung im Anbau). Wir bauten in 9 Werktagen um – inklusive
      Demontage alter Therme, Außenaufstellung, hydraulischem Abgleich, PV-Kopplung über
      vorhandenen Wechselrichter. Die Förderung wurde über uns eingereicht und direkt
      ausgezahlt.
    </MiniStory>

    <HighlightBox variant="blue" title={`Förderung „Raus aus Gas" in der Donaustadt`} icon="€">
      In der Donaustadt kombinieren sich aktuell Bundesförderung und Wiener
      Landesförderung beim Umstieg von Gas auf Wärmepumpe zu bis zu 75 % der
      förderfähigen Kosten. Wir rechnen das konkret für Ihr Haus durch und
      legen Ihnen die Zahlen schriftlich auf den Tisch. Stand: April 2026.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Anfahrt über Südosttangente & A23</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von unserem Standort Puchsbaumgasse (1100 Favoriten) erreichen wir die Donaustadt
      über die Südosttangente bzw. über die Praterbrücke in 25–45 Minuten je nach
      Tageszeit. Seestadt Aspern und Stadlau schaffen wir auch im Berufsverkehr
      durchschnittlich in 35 Minuten. Für größere Projekte (Badsanierung, Wärmepumpe)
      arbeiten wir zwei- bis dreitägig auf einer Baustelle – wir parken fix, das
      verkürzt den reinen Einsatztag erheblich.
    </p>

    <HighlightBox title="Smart-Home & Ihr Installateur" icon="🤖">
      Moderne Haustechnik in Seestadt und Co. bringt Komfort – und neue Fehlerquellen.
      Wenn Ihre Heizung über App steuerbar ist, heißt das nicht, dass die Hydraulik
      stimmt. Wir prüfen bei jeder Wartung auch die tatsächlichen Durchflussmengen und
      Regelsignale, nicht nur das, was die App sagt. So werden aus Smart-Home-
      Versprechen reale Einsparungen.
    </HighlightBox>
  </>
);
