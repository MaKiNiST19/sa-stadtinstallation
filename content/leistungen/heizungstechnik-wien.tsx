import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Welche Heizungssysteme installiert ein Wiener Heizungstechniker?"
      answer={
        <p>
          Ein <strong>Heizungstechniker in Wien</strong> plant, baut und wartet Gasthermen
          (Brennwert), Fernwärmeanschlüsse, Luft-Wasser- und Sole-Wärmepumpen, Pellets- und
          Hackschnitzelkessel sowie Kombilösungen mit Solarthermie. Für Wien spielt zunehmend
          auch der Austausch fossiler Anlagen nach „Raus aus Gas" eine Rolle. SA Stadtinstallation
          ist konzessionierter Meisterbetrieb für Gas-, Wasser- und Heizungsinstallation.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Unsere Leistungen rund um Heizung in Wien</h2>
    <IconList
      items={[
        { text: "Kesseltausch: alte Gastherme → neue Brennwerttherme (Viessmann, Vaillant, Buderus, Wolf)" },
        { text: "Heizungsplanung nach ÖNORM H 7500 – inklusive Heizlastberechnung" },
        { text: "Hydraulischer Abgleich – optimale Durchflussmengen für jeden Heizkörper" },
        { text: "Umstieg auf Wärmepumpe (Luft/Wasser, Sole) – Förderabwicklung inklusive" },
        { text: "Anschluss an Wien Energie Fernwärme inkl. Kompaktstation" },
        { text: "Fußbodenheizung: Neubau und Nachrüstung in Bestandsgebäuden" },
        { text: "Heizkörpertausch, Thermostat-Upgrade, Smart-Home-Anbindung" },
        { text: "Jahreswartung inkl. Abgasmessung und Prüfprotokoll" },
      ]}
      columns={1}
    />

    <h2 style={{ marginTop: "48px" }}>Kesseltausch in Wien – in 3 Schritten</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Der Austausch einer alten Gastherme gegen ein modernes Brennwertgerät ist in Wien
      das häufigste Heizungsprojekt. In typischen Wohnungen dauert der reine Tausch 1–2
      Tage. Bei Altbauten mit unzureichendem Kamin kommt der Bau bzw. die Sanierung der
      Abgasführung (LAS-Schacht) dazu.
    </p>

    <IconList
      items={[
        { text: "1. Vor-Ort-Termin – Aufmaß, Fotos, Kesseltyp, Abgasführung, Warmwasserkonzept" },
        { text: "2. Festpreis-Angebot mit Fördersumme, Gerätevorschlag und Terminrahmen" },
        { text: "3. Ausführung mit Entsorgung der Altanlage, Inbetriebnahme und Kundeneinweisung" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Förderung 2026 – was Sie jetzt bekommen" icon="€">
      Für den Umstieg von Gas auf Wärmepumpe oder Fernwärme in Wien kombinieren sich
      Bundesförderung („Raus aus Öl und Gas") und die Wiener Landesförderung zu bis zu
      <strong> 75 % der förderfähigen Kosten</strong>. Wir rechnen Ihnen die Summe konkret vor,
      reichen die Förderanträge ein und treten bei Bedarf in Vorleistung (Fördervorfinanzierung).
      Förderkonditionen ändern sich laufend – Stand dieser Seite ist April 2026.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Wärmepumpe im Wiener Altbau – geht das?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Kurze Antwort: oft ja, aber nicht immer sinnvoll. Eine Luft-Wasser-Wärmepumpe braucht
      niedrige Vorlauftemperaturen (idealerweise unter 50 °C). In schlecht gedämmten Wiener
      Gründerzeit-Wohnungen mit kleinen Heizkörpern ist das ohne Dämmung und ohne größere
      Heizflächen schwer zu erreichen. Wir rechnen vor der Empfehlung eine realistische
      Jahresarbeitszahl (JAZ) und prüfen, ob Fernwärme, eine Hybridlösung oder zunächst
      eine Dämmmaßnahme wirtschaftlicher ist.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Rechtlich" title="ÖNORM H 7500 & EAVG" icon="⚖">
        Heizungsanlagen sind in Wien nach ÖNORM H 7500 zu dimensionieren.
        Das Wiener Heizungsanlagengesetz (WrHeizG) regelt die Zulässigkeit bestimmter
        Energieträger im Neubau. Wir beraten auf Basis aktueller Rechtslage.
      </EntityCard>
      <EntityCard label="Technisch" title="Hydraulischer Abgleich" icon="🔧">
        Oft werden nach einem Kesseltausch einzelne Räume zu kalt oder die Pumpe läuft zu
        laut. Der hydraulische Abgleich sorgt dafür, dass jeder Heizkörper genau die
        berechnete Wassermenge bekommt – spart 5–15 % Energie.
      </EntityCard>
      <EntityCard label="Behörde" title="MA 36 & Rauchfangkehrer" icon="🏢">
        Bei Kesseltausch mit geänderter Leistung oder geändertem Brennstoff ist die
        Rauchfangkehrer-Abnahme Pflicht. Wir koordinieren den Termin und übergeben Protokolle.
      </EntityCard>
      <EntityCard label="Finanziell" title="Lebenszykluskosten" icon="📊">
        Wir rechnen nicht nur den Anschaffungspreis, sondern auch Wartung, Strom/Gas und
        Lebensdauer. Oft ist das „teurere" Gerät nach 10 Jahren deutlich günstiger.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>Jahreswartung – warum sie sich rechnet</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Jede Heizungsanlage verliert ohne Wartung nach wenigen Jahren 5–10 % Effizienz.
      Brenner verschmutzen, Elektroden brennen ab, Ausdehnungsgefäße verlieren Druck,
      Pumpen laufen zu hoch. Eine Jahreswartung für 129–179 € brutto (Standardtherme)
      amortisiert sich meist über die Energieeinsparung und verdoppelt praktisch die
      Lebensdauer gegenüber ungewarteten Anlagen.
    </p>

    <MiniStory
      title="Heizungstausch in 1210 Floridsdorf"
      context="Februar 2026, 3-Zimmer-Wohnung im Gemeindebau"
      outcome="Neue Brennwerttherme + hydraulischer Abgleich, Gasverbrauch um 28 % gesunken, Förderung ausgezahlt."
    >
      Der Kunde hatte eine 19 Jahre alte Atmospherentherme mit zuletzt sehr hohen Gasrechnungen.
      Wir planten einen 1:1-Brennwerttausch, ergänzten einen hydraulischen Abgleich aller
      sechs Heizkörper und installierten Thermostatventile mit Presetting. Die Bundesförderung
      für den Kesseltausch in Höhe von 1.500 € wurde über unsere Abwicklung beantragt und
      direkt auf das Kundenkonto ausgezahlt.
    </MiniStory>

    <HighlightBox title="Heizung fällt aus – was tun?" icon="🚨">
      Im Winter ist ein Heizungsausfall kein Komfortproblem, sondern kann ein Gesundheitsrisiko
      sein – besonders bei älteren Menschen und Kleinkindern. Unser 24h-Notdienst rückt auch
      am Wochenende aus. Bei Wohnungen über 17 °C Raumtemperatur sehen wir die Reparatur als
      planbar an und terminieren meist innerhalb von 1–3 Werktagen.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Wärmepumpen in Wien: für wen sich der Umstieg rechnet</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wärmepumpen sind kein Allheilmittel. Damit eine Luft-Wasser-Wärmepumpe ihre
      versprochenen Jahresarbeitszahlen (JAZ) von 3,5 bis 4,5 erreicht, muss das
      Haus stimmen: ausreichende Dämmung, ausreichende Heizflächen (Fußbodenheizung
      oder großzügig dimensionierte Heizkörper), niedrige Vorlauftemperatur
      (idealerweise unter 45 °C). In einem thermisch sanierten Einfamilienhaus in
      1220 Donaustadt ist das typischerweise erreichbar – in einem unsanierten
      Gründerzeithaus ohne Dachdämmung meist nicht. Wir berechnen vor jedem Angebot
      die <strong>Heizlast nach ÖNORM H 7500</strong> und leiten daraus die
      benötigte Wärmepumpen-Leistung ab. Ein überdimensioniertes Gerät taktet
      unruhig und verschleißt schneller, ein unterdimensioniertes nutzt im Winter
      den teuren Heizstab. Sole-Wasser-Wärmepumpen mit Erdsonden erreichen
      JAZ über 4,5 und bieten im Sommer Passivkühlung über die
      Fußbodenheizung – sind aber nur bei grundstücksmäßig passenden
      Einfamilienhäusern realistisch, weil die Tiefenbohrung (60–120 m)
      Platz und behördliche Genehmigung braucht.
    </p>

    <h2 style={{ marginTop: "48px" }}>Fernwärme in Wien: Alternative zur Wärmepumpe</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      In vielen Wiener Neubaugebieten und zunehmend auch in Bestandsgebieten steht
      Fernwärme als Alternative zum Gas- und Wärmepumpen-Thema zur Verfügung.
      Wien Energie baut das Fernwärme-Netz kontinuierlich aus, besonders in
      Bezirken wie Favoriten (Sonnwendviertel), Landstraße (Hauptbahnhof-Umfeld),
      Leopoldstadt (Handelskai) und Floridsdorf (Leopoldauer Felder). Eine
      Fernwärme-Kompaktstation ist technisch einfach: sie übergibt die Wärme
      vom Primärnetz auf den sekundären Heizkreis der Wohnung oder des Hauses,
      benötigt keinen Brenner, keinen Abgasweg und keine Wartung durch den
      Rauchfangkehrer. Die jährliche Anlagenwartung ist deutlich einfacher als
      bei Gas oder Wärmepumpe. Wir prüfen bei jedem Heizungstausch, ob
      Fernwärme-Anschluss verfügbar ist und rechnen die Wirtschaftlichkeit gegen
      Wärmepumpe durch.
    </p>

    <h2 style={{ marginTop: "48px" }}>Hydraulischer Abgleich – der unsichtbare Hebel</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Ein hydraulischer Abgleich ist wie das Feintuning eines Motors: die Heizung
      läuft danach ruhiger, verbraucht weniger und liefert gleichmäßige Wärme in
      allen Räumen. Ohne Abgleich bekommt meist der kürzeste Heizkörper zu viel
      Heizwasser, die weiter entfernten zu wenig – die Folge sind kalte Räume
      trotz voll aufgedrehtem Thermostat und unnötig hoher Gasverbrauch. Wir
      führen den Abgleich nach voreinstellbaren Thermostatventilen durch,
      ermitteln Raum für Raum die benötigte Wassermenge und stellen jeden
      Heizkörper auf diesen Wert ein. Bei älteren Anlagen ohne voreinstellbare
      Ventile tauschen wir im Zuge des Abgleichs die Ventile mit aus. Effekte:
      typisch 8–15 % weniger Gas- oder Stromverbrauch, deutlich höherer
      Wohnkomfort und meist leisere Anlage.
    </p>

    <h2 style={{ marginTop: "48px" }}>Heizkörper vs. Fußbodenheizung: keine Glaubensfrage</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die richtige Wärmeabgabe hängt am System. Fußbodenheizung ist ideal bei
      niedriger Vorlauftemperatur (Wärmepumpe, Brennwerttechnik), weil die
      große Fläche genug Wärme liefert. Sie braucht aber Aufbauhöhe (mindestens
      8–12 cm Estrichaufbau) und ist bei Sanierung im Bestand oft nur im
      Erdgeschoß oder bei Komplettrenovierung realistisch. Klassische Heizkörper
      sind im Wiener Altbau weit verbreitet: Gussradiatoren sind technisch
      vollwertig, langlebig und haben eine beträchtliche Heizfläche. Wir erhalten
      sie bei Sanierungen bewusst, wenn sie technisch einwandfrei sind. Moderne
      Flachheizkörper sparen Platz und reagieren schneller, brauchen aber oft
      höhere Vorlauftemperaturen für gleiche Leistung – was mit Wärmepumpe dann
      nur funktioniert, wenn die Fläche reichlich bemessen ist. Bei jedem
      Projekt rechnen wir das durch.
    </p>

    <h2 style={{ marginTop: "48px" }}>Kosten-Orientierung Heizungstechnik Wien</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Gas-Brennwerttausch in der Wohnung (gleiche Gasleitung, LAS-Schacht
      vorhanden): 3.800 €–5.500 € brutto, inklusive Gerät, Montage, Inbetriebnahme
      und Entsorgung. Kompletter Umstieg auf Luft-Wasser-Wärmepumpe im
      Einfamilienhaus (10–12 kW, Pufferspeicher 500–800 l, Brauchwasserspeicher):
      22.000 €–32.000 € vor Förderung, mit Bund- und Wien-Förderung oft 10.000 €
      bis 14.000 € Zuschuss, sodass der Eigentümer-Anteil bei 10.000 €–20.000 €
      liegt. Sole-Wasser-Wärmepumpe mit Erdsonden (3–4 Bohrungen à 80–100 m):
      36.000 €–55.000 € vor Förderung. Fernwärme-Kompaktstation-Tausch: 3.500 €–5.500 €
      je nach Dimensionierung. Hydraulischer Abgleich mit Ventiltausch in einer
      Standardwohnung: 650 €–1.200 €. Diese Zahlen sind Richtwerte – das genaue
      Angebot erstellen wir nach Vor-Ort-Termin mit Heizlastberechnung.
    </p>

    <h2 style={{ marginTop: "48px" }}>Wartungsverträge: was sie leisten</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Ein Heizungs-Wartungsvertrag hat drei Zwecke: regelmäßige Wartung (damit
      die Anlage effizient läuft und die Gewährleistung nicht erlischt), feste
      Jahrestermine (damit nichts vergessen wird), und Priorität im Notfall.
      Kunden mit Wartungsvertrag sehen wir im Winter zuerst an. Unsere Verträge
      enthalten grundsätzlich die Jahreswartung nach Herstellervorgabe, das
      Wartungsprotokoll mit Messwerten, die Koordination mit dem Rauchfangkehrer
      (bei raumluftabhängigen Geräten) und die bevorzugte Terminvergabe bei
      Störungen. Je nach Vertragsvariante sind zusätzlich Anfahrtskosten im
      Notdienst, Standardverschleißteile oder Ersatzanlagen-Stellung enthalten.
      Die Kosten liegen je nach Anlagengröße zwischen 129 € und 290 € pro Jahr –
      und rechnen sich praktisch immer gegen einen Notdienst-Einsatz im Winter.
    </p>
  </>
);
