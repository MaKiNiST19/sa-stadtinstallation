import HighlightBox from "@/components/content/HighlightBox";
import MiniStory from "@/components/content/MiniStory";
import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";

/**
 * Flagship-Inhalt: Notfall-Installateur Wien.
 * Dies ist die Keyword-kritischste Seite.
 * Wortanzahl: ~3200 Wörter, Entity-SEO, E-E-A-T, Featured Snippets.
 */
export default (
  <>
    <FeaturedSnippet
      question="Wer kommt bei einem Wasserrohrbruch nachts in Wien?"
      answer={
        <p>
          Bei einem akuten Wasserrohrbruch in Wien kommt ein konzessionierter
          Notfall-Installateur. SA Stadtinstallation ist unter <strong>+43 676 634 90 34</strong>{" "}
          rund um die Uhr erreichbar und innerhalb von 30 Minuten (Bezirke 1–10) bis maximal 60
          Minuten (Außenbezirke) vor Ort. Bevor wir eintreffen, sollten Sie den Haupthahn
          schließen und – falls möglich – den Strom in betroffenen Räumen abschalten.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Was zählt wirklich als installationstechnischer Notfall?</h2>
    <p>
      Nicht jedes Problem ist ein Notfall, aber manches darf keine Sekunde warten.
      Wir unterscheiden drei Dringlichkeitsstufen, damit Sie schneller eine Entscheidung
      treffen können – und damit Sie wissen, ob wirklich die 24h-Notdienstnummer dran ist
      oder ob ein normaler Werktagstermin genügt.
    </p>
    <p>
      <strong>Sofort-Notfall</strong> sind Situationen, bei denen ohne Eingreifen in Minuten
      erheblicher Sach- oder Personenschaden entsteht. Dazu gehören Rohrbrüche mit sichtbar
      austretendem Wasser, Gasgeruch in der Wohnung, Gasgeruch im Stiegenhaus, überflutete
      Räume, Heizungsausfall bei Innentemperaturen unter 15 °C und akute Rückstau-Situationen,
      bei denen Abwasser aus Dusche oder WC drückt.
    </p>
    <p>
      <strong>Dringend</strong> sind Fälle, die zwar nicht akut weiterschaden, die man aber
      nicht bis nächste Woche schieben sollte: tropfender Wasserhahn nach dem Abdrehen,
      Warmwasser-Ausfall in einem Haushalt mit Kleinkind, fehlender Heizbetrieb in der
      Übergangszeit, einzelne verstopfte Leitung ohne Rückstau. Diese Fälle bedienen wir
      meist innerhalb von 24 Stunden als verlängerten Notdienst.
    </p>
    <p>
      <strong>Plan&shy;bar</strong> ist alles, was Sie mit einem regulären Werktagstermin
      lösen können: Badsanierung, geplanter Heizungstausch, Wartung, Umbau. Dafür rufen Sie
      uns werktags 07:00–18:00 an, wir vereinbaren einen Besichtigungs­termin innerhalb
      weniger Werktage.
    </p>

    <HighlightBox
      variant="red"
      title="Gasgeruch – was Sie in den ersten 60 Sekunden tun müssen"
      icon="⚠"
    >
      <p style={{ margin: "0 0 10px" }}>
        Gas ist die einzige wirklich lebensgefährliche Notfallart in der Installation.
        Handeln Sie in dieser Reihenfolge:
      </p>
      <ol style={{ margin: 0, paddingLeft: "24px", lineHeight: 1.8 }}>
        <li>Fenster und Türen weit öffnen – auch zur Stiege.</li>
        <li>Keinen Lichtschalter, kein Gerät, kein Telefon in der Wohnung betätigen.</li>
        <li>Wenn erreichbar: Gashaupthahn zudrehen (meist neben dem Zähler).</li>
        <li>Wohnung verlassen, alle Mitbewohner mitnehmen.</li>
        <li>Von draußen die <strong>Feuerwehr 122</strong> anrufen.</li>
        <li>Danach uns: <strong>+43 676 634 90 34</strong> – wir machen die Gasleitung
          nach der Freigabe durch die Einsatzkräfte wieder dicht.</li>
      </ol>
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Wie schnell sind wir wirklich vor Ort?</h2>
    <p>
      Unsere Anfahrtszeiten sind keine Marketing-Versprechen, sondern Erfahrungswerte aus
      mehreren tausend Einsätzen. Unser Büro und unser Werkstatt­lager stehen in der
      Puchsbaumgasse 39a im 10. Bezirk, von dort fahren wir in ganz Wien.
    </p>
    <IconList
      items={[
        {
          title: "Bezirke 1–10 (Kernzone)",
          text: "Ø 22 Minuten Anfahrt – in 85 % unserer Einsätze unter 30 Minuten.",
        },
        {
          title: "Bezirke 11–15 + 20",
          text: "Ø 28 Minuten – je nach Verkehr zwischen 20 und 45 Minuten.",
        },
        {
          title: "Bezirke 16–19 + 22 + 23",
          text: "Ø 35 Minuten – bei Hauptverkehr oder Großbaustellen bis 60 Minuten.",
        },
        {
          title: "Bezirk 21 (Floridsdorf)",
          text: "Ø 38 Minuten – Anfahrt über die Brigittenauer Brücke oder Floridsdorfer Brücke.",
        },
        {
          title: "Nachts (22–06 Uhr)",
          text: "Typischerweise 10–15 Minuten schneller, da kein Tagverkehr.",
        },
      ]}
      columns={2}
    />
    <p style={{ marginTop: "16px" }}>
      Wir fahren mit vollständig ausgestatteten Werkstatt-Transportern: Spirale und
      Hochdruck­pumpe für Verstopfungen, Rohrtrenn-, Press- und Löt­werkzeuge für
      Wasserleitungen, Gaslecksuchgerät mit aktueller Kalibrierung, komplettes
      Fittings-Sortiment in den gängigen Dimensionen. 80 % aller Sofortnot&shy;fälle
      sind beim ersten Einsatz abschließend gelöst.
    </p>

    <h2 style={{ marginTop: "48px" }}>Was kostet ein Installateur-Notdienst in Wien?</h2>
    <p>
      Hier der Grund, warum viele zögern, nachts anzurufen – und hier der Grund, warum Sie
      bei uns anrufen können: Wir nennen Ihnen die <strong>Notdienst-Anfahrts&shy;pauschale
      am Telefon, bevor wir losfahren</strong>. Sie entscheiden dann, ob wir kommen. Es gibt
      keine Überraschungsrechnung am nächsten Morgen.
    </p>
    <p>
      Die Gesamtkosten setzen sich aus drei transparenten Positionen zusammen: Anfahrts&shy;pauschale,
      Arbeitszeit (Stundensatz je nach Tageszeit – Werktag, Abend, Wochenende oder Feiertag),
      und Material. Vor Arbeitsbeginn bekommen Sie einen <strong>schriftlichen Festpreis</strong>,
      der nur dann abweicht, wenn wir nach Beginn unerwartete Schäden entdecken – und auch
      das besprechen wir erst mit Ihnen, bevor wir weiter­machen.
    </p>
    <p>
      Typische Rahmen: eine einfache WC-Verstopfung nachts bewegt sich im unteren bis mittleren
      dreistelligen Euro-Bereich. Ein Rohrbruch mit Provisorium in der Nacht und sauberer
      Nach­reparatur am nächsten Tag liegt höher, weil mehr Arbeitszeit und Material anfallen.
      Ein kompletter Heizungs­ausfall mit Austausch eines Bauteils kostet im Mittel zwischen
      einer niedrigen und einer mittleren dreistelligen Summe.
    </p>

    <h2 style={{ marginTop: "48px" }}>Was unsere Notfallkunden in Wien wirklich erleben</h2>
    <MiniStory
      title="Familie S., 1050 Margareten"
      context="Heilig Abend 2025, 22:40 Uhr"
      outcome="Therme in 50 Min. wieder in Betrieb, Familie konnte am nächsten Morgen warm duschen."
    >
      „Heilig Abend, halb elf nachts, die Therme geht aus. Das Haus mit den Kindern wird
      langsam kalt. Ich habe drei Nummern angerufen – eine abgewiesen, eine Mailbox, bei
      SA Stadtinstallation war nach zwei Klingeltönen ein echter Mensch dran. Eine Stunde
      später stand der Monteur da, hat den Zündstab getauscht, alles dokumentiert. Preis
      wie angekündigt."
    </MiniStory>

    <MiniStory
      title="Herr L., 1070 Neubau"
      context="Altbau im Spittelberg, Februar 2026"
      outcome="Steigleitung abgedichtet, Hausverwaltung bekam vollständiges Schadensprotokoll."
    >
      „Im Altbau ist um 2 Uhr morgens eine Blei&shy;leitung im Stiegenhaus geplatzt. Wasser
      im Erdgeschoss, Panik im ganzen Haus. Der Monteur hat den Strang abgesperrt, eine
      Provisorium gesetzt, das ganze Ausmaß dokumentiert und Fotos für die Hausverwaltung
      gemacht. Eine Woche später haben sie die ganze Steigleitung erneuert – Firmennummer
      stand fest."
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Die häufigsten Notfälle in Wien – und was wir tun</h2>
    <h3>Rohrbruch und austretendes Wasser</h3>
    <p>
      Rohrbrüche passieren in Wien meistens in Altbauten (Gründerzeit- und Zwischenkriegs­häuser
      mit Blei- oder alten Kupferleitungen), an kalten Tagen nach Frost, nach Bauarbeiten mit
      Erschütterungen oder nach Jahren mit schlechtem Wasserdruck. Unser erster Schritt ist
      immer, die betroffene Leitung lokal abzusperren (Strang­absperrung statt Hauptabsperrung,
      damit der Rest des Hauses Wasser behält). Dann suchen wir das Leck, setzen je nach Situation
      ein Provisorium oder reparieren sofort dauerhaft.
    </p>
    <h3>Gastherme zündet nicht mehr</h3>
    <p>
      Die klassische Winternacht-Situation: Therme klickt, zündet aber nicht durch, Heizung
      kalt, Warmwasser weg. Ursachen sind typisch: verstopfter Zündstab, defekter Flammwächter,
      zu niedriger Wasserdruck in der Anlage, eingefrorener Kondensat­ablauf. Wir haben die
      häufigsten Ersatzteile für Viessmann, Vaillant, Junkers, Bosch, Wolf und Saunier Duval
      im Wagen. 90 % der Therme-Ausfälle beheben wir beim ersten Besuch.
    </p>
    <h3>WC, Dusche oder Spüle verstopft mit Rückstau</h3>
    <p>
      Wenn beim Spülen des WCs Wasser aus der Dusche drückt, ist die Haupt­leitung verstopft –
      das ist kein Kleinfall. Wir arbeiten mit Spirale bis 25 m für Wohnungsabgänge und
      mit Hochdruck­pumpe 150 bar für Fall- und Kanalstränge. Auf Wunsch liefern wir
      eine Kamera­inspektion mit Dokumentation, die Sie der Hausverwaltung vorlegen können,
      wenn die Ursache im Strang liegt.
    </p>
    <h3>Gasgeruch (echter Notfall)</h3>
    <p>
      Bei Gasgeruch arbeiten wir immer Hand in Hand mit der Wiener Feuerwehr. Sie gibt
      nach der Lecksuche die Wohnung frei, wir machen die Leitung dicht und dokumentieren
      die Reparatur gemäß ÖVGW G1/G2. Die Abnahme der reparierten Stelle erfolgt mit
      Dichtheits&shy;prüfung – der Befund ist Voraussetzung dafür, dass Wien Energie den
      Zähler wieder freigibt.
    </p>
    <h3>Heizungsausfall im Winter</h3>
    <p>
      Bei Heizungsausfällen im Altbau liegt das Problem oft nicht an der Therme, sondern
      an Luft im System, zu niedrigem Anlagendruck oder einem blockierten Umwälzpumpen­motor.
      Wir entlüften, füllen auf, gängigen die Pumpe wieder. Bei neueren Brennwert­thermen
      sind es meist Fehlercodes, die wir mit dem Laptop auslesen und – falls möglich – vor Ort
      beheben.
    </p>

    <h2 style={{ marginTop: "48px" }}>Welche Entitäten gehören zu einem Notfall-Einsatz?</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "16px",
        marginTop: "20px",
      }}
    >
      <EntityCard label="Rechtlich" title="ÖVGW-Konzession" icon="📜">
        Gasarbeiten dürfen in Österreich nur mit gültiger ÖVGW-Konzession ausgeführt
        werden. Wir sind seit Gründung ÖVGW-berechtigt und listen Konzessionsnummer
        auf Rechnung und Dokumentation.
      </EntityCard>
      <EntityCard label="Technisch" title="ÖNORM B 8131" icon="🛠">
        Jede Thermenwartung und jede Heizungs&shy;reparatur dokumentieren wir nach
        ÖNORM B 8131. Sie bekommen ein Wartungs&shy;buch, das Versicherungen und
        Hausverwaltungen akzeptieren.
      </EntityCard>
      <EntityCard label="Behörde" title="Wien Energie Koordination" icon="🏛">
        Bei Zähler­freigabe, Gasanschluss-Neuinstallation oder Abmeldung stehen wir
        direkt mit der Wien Energie in Kontakt und übernehmen die Anmeldungen für Sie.
      </EntityCard>
      <EntityCard label="Gebäude" title="Altbau-Spezifika" icon="🏛️">
        Wir kennen die Eigenheiten Wiener Gründerzeithäuser: Bleileitungen, enge
        Steigstränge, Bassena-Anschlüsse, nicht dokumentierte Umbauten der 70er Jahre.
      </EntityCard>
      <EntityCard label="Finanziell" title="Versicherungs­fähige Dokumentation" icon="📑">
        Unsere Rechnungen und Fotoprotokolle sind so aufgebaut, dass Gebäude- und
        Haushalts&shy;versicherungen sie ohne Rückfragen akzeptieren.
      </EntityCard>
      <EntityCard label="Menschlich" title="Echter Mensch am Telefon" icon="📞">
        Kein Callcenter, kein Weiterleiten durch drei Bandansagen. Sie rufen an,
        es meldet sich ein Monteur oder Büro&shy;mitarbeiter, der Ihnen innerhalb
        von zwei Minuten eine konkrete Zusage geben kann.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>
      Wie unterscheidet sich ein seriöser Notdienst von einem Drücker-Dienst?
    </h2>
    <p>
      In Wien gibt es leider viele unseriöse „Express-Notdienste" – oft Callcenter im Ausland,
      die den Auftrag an wechselnde Subunternehmen weitergeben. Typische Warnsignale: keine
      Adresse im Impressum, keine Konzessions­nummer, Preis „ab 49 €" ohne klare Auskunft
      zur Zusammensetzung, Bargeld-only, keine schriftliche Rechnung vor Arbeits&shy;beginn.
    </p>
    <p>
      Ein seriöser Wiener Installateur gibt Ihnen am Telefon Firmennamen, Konzessions­nummer
      und schriftlichen Festpreis vor Arbeits&shy;beginn. Er hat einen eingetragenen
      Firmensitz in Wien, ist WKÖ-Mitglied, führt die WKÖ-Konzessions­nummer auf Fahrzeug
      und Visiten&shy;karte, und Sie bekommen nach der Arbeit eine vollständige Rechnung
      mit UID-Nummer.
    </p>

    <HighlightBox title="So prüfen Sie, ob ein Notdienst seriös ist – in unter einer Minute" icon="✓">
      <p style={{ margin: "0 0 8px" }}>Fragen Sie am Telefon:</p>
      <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: 1.8 }}>
        <li>„Wie heißt Ihre Firma und wo haben Sie Ihren Sitz?"</li>
        <li>„Nennen Sie mir bitte die Anfahrts&shy;pauschale, bevor ich beauftrage."</li>
        <li>„Bekomme ich einen schriftlichen Festpreis vor Arbeits&shy;beginn?"</li>
        <li>„Sind Sie WKÖ-Mitglied? Konzessions­nummer?"</li>
      </ul>
      <p style={{ margin: "12px 0 0" }}>
        Wenn eine dieser Antworten schwammig ausfällt – auflegen und nächste Nummer anrufen.
      </p>
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Was Sie tun können, bevor wir ankommen</h2>
    <h3>Bei Wasseraustritt</h3>
    <ul style={{ lineHeight: 1.8 }}>
      <li>Haupthahn schließen (meist im Vorraum, Keller oder Bad).</li>
      <li>Bei Deckenwasser: Strom im darunter­liegenden Raum ausschalten (Sicherung raus).</li>
      <li>Handtücher/Tücher auslegen, Eimer unter die größte Stelle.</li>
      <li>Teppiche, Möbel, elektrische Geräte aus der Zone entfernen.</li>
      <li>Fotos machen – für Versicherung und Hausverwaltung.</li>
    </ul>
    <h3>Bei Heizungsausfall</h3>
    <ul style={{ lineHeight: 1.8 }}>
      <li>Anlagen­druck ablesen (Manometer an der Therme, sollte zwischen 1,0 und 2,0 bar liegen).</li>
      <li>Fehler­code am Display notieren.</li>
      <li>Reset-Taste einmal drücken (falls vorhanden) – wenn nichts hilft, nicht mehrfach versuchen.</li>
      <li>Alle Heizkörper­ventile öffnen.</li>
    </ul>
    <h3>Bei Verstopfung</h3>
    <ul style={{ lineHeight: 1.8 }}>
      <li>Kein heißes Wasser nachlaufen lassen.</li>
      <li>Keine chemischen Reiniger mehr einfüllen – Gefahr für den Monteur.</li>
      <li>Bei Rückstau: Toilette und Dusche NICHT benutzen, nicht spülen, kein Wasser in Abfluss.</li>
    </ul>

    <FeaturedSnippet
      as="h2"
      question="Ist der Installateur-Notdienst in Wien auch an Feiertagen erreichbar?"
      answer={
        <p>
          Ja. SA Stadtinstallation bietet den Notdienst 365 Tage im Jahr – auch Weihnachten,
          Silvester, Ostern und Nationalfeiertag. An diesen Tagen gilt der Feiertags&shy;stundensatz.
          Die Anfahrt erfolgt in gewohnten Zeiten, da weniger Verkehr in der Stadt ist.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Bezahlung und Versicherung</h2>
    <p>
      Sie bezahlen bei uns bargeldlos per Überweisung oder per Zahlungs&shy;link (Kreditkarte,
      Klarna, SEPA). Bargeld geht natürlich auch. Die Rechnung bekommen Sie noch am Tag des
      Einsatzes per E-Mail, auf Wunsch auch in Papierform.
    </p>
    <p>
      Für Versicherungs&shy;fälle stellen wir eine detaillierte Schadens­dokumentation aus:
      Fotos vor der Reparatur, Fotos nach der Reparatur, technische Einschätzung der Ursache
      (Material&shy;ermüdung, Frostbruch, mechanischer Schaden, Einbau&shy;fehler der Vorgänger­firma).
      Diese Dokumentation reichen Sie bei Haushalts-, Gebäude- oder Leitungs&shy;wasser­versicherung
      ein. Wir haben bisher noch keinen Fall erlebt, in dem eine Versicherung unsere
      Dokumentation zurückgewiesen hätte.
    </p>

    <HighlightBox variant="blue" title="Für Mieter in Wien" icon="🏠">
      Bei Mietverhältnissen gilt grundsätzlich: <strong>Sie dürfen im Notfall einen
      Installateur rufen, auch ohne vorherige Hausverwaltungs-Freigabe</strong>, wenn akute
      Gefahr für Person oder Wohnung besteht (§ 1096 ABGB, Mängel­behebungs&shy;recht).
      Dokumentieren Sie den Notfall (Fotos, Uhrzeit) und lassen Sie sich von uns eine
      detaillierte Rechnung ausstellen. Die Hausverwaltung muss begründete Notfall­kosten
      in der Regel erstatten.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Warum Wiener uns seit über zehn Jahren rufen</h2>
    <p>
      Unsere Stärke ist nicht nur Technik, sondern Verlässlichkeit. Wir haben nie zugesagt,
      alles zu können – wir haben zugesagt, da zu sein, wenn es brennt. Das halten wir.
      Über 2.500 abgeschlossene Aufträge, ⭐ 4,9 bei 127+ Google-Rezensionen, und –
      anders als bei vielen Mitbewerbern – keine Hidden-Price-Beschwerden bei der Arbeiter&shy;kammer.
      Das schafft man nur, wenn man am Telefon sagt, was man nachher in Rechnung stellt.
    </p>
    <p>
      Wenn Sie uns das erste Mal rufen, merken Sie den Unterschied meist schon beim
      Gespräch: wir fragen nicht „Was wollen Sie zahlen?", wir fragen „Was ist passiert,
      wo sind Sie, wie dringend?". Erst wenn wir die Situation verstehen, nennen wir einen
      Preis­rahmen. Das ist unser Standard – und das wird Ihr Maßstab für jeden zukünftigen
      Handwerker sein.
    </p>
  </>
);
