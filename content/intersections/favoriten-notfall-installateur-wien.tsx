import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Wer ist der schnellste Notfall-Installateur in 1100 Favoriten?"
      answer={
        <p>
          <strong>SA Stadtinstallation hat Firmensitz in der Puchsbaumgasse 39a, A-1100 Wien</strong> –
          direkt im 10. Bezirk. Das bedeutet für Sie: Im Notfall sind wir tagsüber in
          Favoriten durchschnittlich in 5–15 Minuten vor Ort, nachts je nach Tourenlage
          in 15–30 Minuten. Bei echten Notfällen (Rohrbruch, Gasgeruch, Heizungsausfall
          im Winter) berechnen wir keine pauschale Anfahrtspauschale für 1100 und keine
          Aufschläge, die Sie später erst auf der Rechnung sehen. Der Preis, den wir am
          Telefon nennen, steht.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Wir sind Ihre Nachbarn – buchstäblich</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die meisten Notdienste, die in Google für „Installateur Notdienst 1100 Wien"
      auftauchen, sitzen gar nicht in Favoriten. Sie sitzen in Niederösterreich,
      Floridsdorf oder wechseln den Standort je nach Google-Gebot. Das merkt man an
      der Anfahrtszeit (60+ Minuten für einen „24h-Notdienst") und oft am Preis, der
      sich vor Ort „wegen Anfahrt" verdoppelt. Wir sind hier zu Hause. Unsere Werkstatt,
      unser Lager und unsere Monteure sind im Bezirk.
    </p>

    <HighlightBox variant="red" title="Die 3 häufigsten Notfälle in Favoriten" icon="🚨">
      <ol style={{ margin: 0, paddingLeft: "22px", lineHeight: 1.9 }}>
        <li>
          <strong>Rohrbruch im Gründerzeit-Steigstrang</strong> (Reumannplatz, Keplerplatz,
          Viktor-Adler-Markt) – meist durch Materialermüdung an alten Stahlleitungen.
        </li>
        <li>
          <strong>Gastherme ausgefallen</strong> (typische Fehler F.22, A2, E9) – besonders
          oft an den ersten kalten Herbsttagen.
        </li>
        <li>
          <strong>Fallstrang-Verstopfung im Gemeindebau</strong> (Humboldtplatz,
          Stadionallee, Goldschlagstraße) – mehrere Wohnungen gleichzeitig betroffen.
        </li>
      </ol>
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Was in den ersten 60 Sekunden zu tun ist</h2>
    <IconList
      items={[
        { text: "Rohrbruch: Hauptwasserhahn im Keller / Technikraum zudrehen." },
        { text: "Gasgeruch: Fenster öffnen, Gashahn zu, keine Schalter betätigen, Wohnung verlassen, draußen anrufen." },
        { text: "Heizungsausfall im Winter: Manometer prüfen. Zeigt er unter 1,0 bar, nachfüllen – dann Installateur rufen." },
        { text: "WC überläuft: Spülkasten-Absperrventil (meist am Eckventil rechts) zudrehen, dann rufen." },
      ]}
      columns={1}
    />

    <MiniStory
      title="Notfall am Reumannplatz, 22:40 Uhr"
      context="1100 Wien, November 2025, Heiligabend-nah"
      outcome="Ankunft 22:52, Leck gestoppt 23:10, Rechnung Festpreis 289 €, Wohnung bewohnbar."
    >
      Eine junge Familie – Zweijähriger schläft bereits – meldet plötzlich Wasser im
      Vorraum. Heizungsrücklaufrohr abgerissen. Wir sind zu diesem Zeitpunkt im 10.
      Bezirk unterwegs, Anfahrt per Navi 12 Minuten. Vor Ort: Hauptabsperrhahn zu,
      Bereich lokalisiert, Pressfitting-Provisorium gesetzt, System befüllt und entlüftet.
      Heizung läuft wieder ab 23:10 Uhr. Am nächsten Tag endgültige Reparatur und
      Dokumentation für die Haushaltsversicherung.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Preise für Notdienst in Favoriten – transparent</h2>
    <IconList
      items={[
        { text: "Standardanfahrt Favoriten: kostenlos (als lokaler Betrieb kalkuliert in Grundpreis)." },
        { text: "Werktags 07–18 h, Stundensatz Notdienst: 95 €/h brutto." },
        { text: "Nacht 18–06 h, Sonn- und Feiertag: 135 €/h brutto." },
        { text: "Reines Absperren & Schadensbegrenzung (bis 30 Min.): 89 € Festpreis." },
        { text: "Typische Leckortung mit Kamera: 180–320 € je nach Aufwand." },
        { text: "Festpreis wird VOR Arbeitsbeginn schriftlich bestätigt – keine Überraschungen." },
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
      <EntityCard label="Lage" title="Puchsbaumgasse 39a, 1100" icon="📍">
        Unser Firmensitz. Von hier zu Reumannplatz 1,2 km, zum Keplerplatz 1,9 km,
        nach Oberlaa 4,5 km. Im Notfall tatsächlich schneller als jeder Zufallsdienst.
      </EntityCard>
      <EntityCard label="Bereitschaft" title="24/7 mit Monteur" icon="📱">
        Unsere Nummer wird 24/7 von einem Monteur entgegengenommen – nicht von einem
        Call-Center, das den Auftrag weiterreicht. Sie sprechen direkt mit dem, der
        zu Ihnen kommt.
      </EntityCard>
      <EntityCard label="Fahrzeug" title="Vollausgestattet" icon="🚐">
        Unser Einsatzfahrzeug hat Spirale, Hochdruck, Kamera, Pressfittings,
        Gasleitungsmaterial und Ersatzteile für alle gängigen Thermen an Bord. Zwei
        Fahrten sind selten nötig.
      </EntityCard>
      <EntityCard label="Dokumentation" title="Für Versicherung" icon="📄">
        Jeder Notfalleinsatz wird fotografiert und mit Zeitstempel protokolliert.
        Versicherungen akzeptieren unsere Unterlagen ohne Nachfrage.
      </EntityCard>
    </div>

    <HighlightBox title="Mieter in Favoriten? Wir klären die Kostenfrage vorab" icon="ℹ">
      Bei Mietwohnungen muss vor Arbeitsbeginn geklärt werden, wer die Kosten trägt:
      Mieter (kleine Instandhaltung bis ca. 350 €) oder Vermieter (größere Reparaturen
      und Anlagenteile). Wir telefonieren bei Bedarf direkt mit Ihrer Hausverwaltung
      und bekommen die Freigabe, damit Sie nicht in Vorleistung gehen müssen.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Warum wir beim lokalen Notdienst anders sind</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die Notdienst-Branche in Wien hat ein Vertrauensproblem. Billiganzeigen mit
      39-€-Preisen, dann vor Ort plötzlich 650 € Rechnung. Unsere Antwort darauf ist
      nicht „wir sind billiger" – unsere Antwort ist „wir sind berechenbar". Festpreis
      vor Arbeitsbeginn, lokaler Sitz, WKÖ-Mitgliedschaft, Google-Käuferschutz
      verifiziert, echte 5-Sterne-Bewertungen von Kunden aus Favoriten. Wenn Sie
      einmal bei uns waren, werden Sie beim nächsten Ernstfall wieder anrufen – genau
      das ist unser Geschäftsmodell.
    </p>
  </>
);
