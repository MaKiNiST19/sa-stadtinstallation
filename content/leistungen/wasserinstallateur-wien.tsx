import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was deckt ein Wasserinstallateur in Wien ab?"
      answer={
        <p>
          Ein <strong>Wasserinstallateur in Wien</strong> plant, verlegt und repariert
          sämtliche trinkwasserführenden Leitungen im Wohn- und Gewerbebereich: Kalt- und
          Warmwasserstränge, Steigleitungen, Wohnungsverteiler, Armaturen, WC-Anschlüsse,
          Waschmaschinenventile sowie Boiler- und Warmwasserbereiter. Alle Arbeiten erfolgen
          nach ÖNORM B 2531 (Trinkwasserleitungen) und den Richtlinien der MA 31 (Wiener Wasser).
          SA Stadtinstallation ist konzessionierter Meisterbetrieb mit WKÖ-Mitgliedschaft.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Wann Sie einen Wasserinstallateur brauchen</h2>
    <IconList
      items={[
        { text: "Rohrbruch in Wohnung, Steigstrang oder Zählerbereich" },
        { text: "Tropfende Armatur, defekte Mischbatterie, kaputtes Eckventil" },
        { text: "Badsanierung – Neuverrohrung, Dusche, Wanne, WC, Waschtisch" },
        { text: "Austausch korrodierter Stahlleitungen auf Verbundrohr oder Kupfer gepresst" },
        { text: "Installation oder Tausch von Boilern und Warmwasserbereitern" },
        { text: "Waschmaschinen- und Geschirrspüleranschluss inkl. Eckventil und Schlauch" },
        { text: "Feuchtigkeit im Mauerwerk – Leckortung mit Kamera, Feuchtigkeitsmessung" },
        { text: "Sanierung nach Wasserschaden, Koordination mit Versicherung" },
      ]}
      columns={1}
    />

    <HighlightBox variant="red" title="Rohrbruch – was Sie in den ersten 3 Minuten tun sollten" icon="💧">
      <ol style={{ margin: 0, paddingLeft: "22px", lineHeight: 1.8 }}>
        <li><strong>Hauptwasserhahn zudrehen</strong> – meist im Kellerabgang oder Technikraum.</li>
        <li><strong>Strom in betroffenen Räumen abschalten</strong>, wenn Wasser in Steckdosennähe kommt.</li>
        <li><strong>Wasser aus Leitung ablassen</strong> – tiefsten Hahn öffnen.</li>
        <li>Nachbarn unter Ihnen informieren, wenn Wasser durchsickert.</li>
        <li>24h-Notdienst rufen: <strong>+43 676 634 90 34</strong>.</li>
      </ol>
      Wir sind je nach Bezirk innerhalb von 30–60 Minuten vor Ort.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Alte Rohre in Wiener Altbauten – das typische Problem</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      In Gründerzeithäusern (1880–1918) und frühen Zwischenkriegsbauten finden wir
      regelmäßig Stahl- oder verzinkte Stahlleitungen, die nach 60–80 Jahren im Inneren
      stark korrodieren. Anzeichen sind rostbraunes Wasser nach längerer Nichtnutzung,
      sinkender Durchfluss trotz sauberer Perlatoren und punktuelle Feuchtigkeitsstellen
      im Mauerwerk. In solchen Fällen empfehlen wir Strang für Strang eine Erneuerung auf
      Mehrschicht-Verbundrohr oder Pressfitting-Kupfer.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Rechtlich" title="ÖNORM B 2531 & MA 31" icon="⚖">
        Trinkwasserleitungen müssen hygienisch einwandfrei geplant und montiert werden.
        Wiener Wasser (MA 31) ist für den Hausanschluss zuständig; ab Wasserzähler
        beginnt der Verantwortungsbereich des Eigentümers.
      </EntityCard>
      <EntityCard label="Technisch" title="Materialien im Vergleich" icon="🔧">
        Wir verwenden Pressfitting-Kupfer für Hauptstränge (langlebig), Mehrschicht-
        Verbundrohr für flexible Verlegung (Wohnungen, Badumbau) und Edelstahl dort,
        wo Trinkwasserhygiene kritisch ist (Großobjekte, Schulen, Gastronomie).
      </EntityCard>
      <EntityCard label="Gebäude" title="Altbau vs. Neubau" icon="🏛">
        Wiener Altbau: meist Steigstränge aus Stahl, Wohnungsabzweige aus Kupfer.
        Neubau: Verbundrohr, Zentralverteilung. Beides erfordert unterschiedliche
        Sanierungsstrategien.
      </EntityCard>
      <EntityCard label="Finanziell" title="Festpreis & Versicherung" icon="€">
        Wir arbeiten grundsätzlich mit Festpreis nach Vor-Ort-Besichtigung. Bei
        Leitungswasserschäden unterstützen wir Sie bei der Schadensmeldung und
        Abrechnung mit Ihrer Haushalts- oder Gebäudeversicherung.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>Leckortung statt Stemmen – moderne Methoden</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Eine feuchte Wand heißt nicht automatisch, dass die halbe Wohnung aufgestemmt werden muss.
      Mit Endoskopkamera, Feuchtigkeitsmessgerät und Thermografie können wir Leckstellen oft
      punktgenau lokalisieren. So beschränkt sich die Öffnung auf 20–40 cm Durchmesser statt
      mehrerer Quadratmeter – das spart Zeit, Material und Renovierungskosten.
    </p>

    <MiniStory
      title="Wasserschaden in 1150 Rudolfsheim"
      context="Jänner 2026, 5-stöckiges Zinshaus"
      outcome="Leckstelle in 2 Stunden lokalisiert, Reparatur am selben Tag, Trocknung in 10 Tagen."
    >
      Feuchte Decke im 3. Stock, Ursache unklar. Per Kamera-Inspektion in der darüberliegenden
      Wohnung fanden wir ein haarfeines Leck an einer Eckverschraubung hinter dem WC. Öffnung
      einer Fliese, Tausch der Verschraubung, Dichtheitsprüfung und Dokumentation für die
      Gebäudeversicherung. Die Decke wurde anschließend von einer Partnerfirma
      trockengelegt und neu verputzt.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Badsanierung – vom Abriss bis zur fertigen Dusche</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die Badsanierung ist eine unserer Kernleistungen. Wir übernehmen komplette
      Abwicklungen: Demontage alter Sanitäreinrichtung, Neuverrohrung, WC-Anschluss mit
      Wandeinbau-Spülkasten (Geberit), bodengleiche Duschen mit Ablauf nach ÖNORM,
      Einbau von Armaturen (Grohe, Hansgrohe) und die Endkontrolle auf Dichtheit.
      Fliesen- und Malerarbeiten koordinieren wir über langjährige Partnerbetriebe.
    </p>

    <HighlightBox title="Festpreis vor Arbeitsbeginn" icon="📋">
      Bei jeder planbaren Wasserinstallation erhalten Sie vorab ein schriftliches Angebot mit
      detaillierten Positionen: Material, Arbeitszeit, Entsorgung, Anfahrt. Nachträge gibt es
      nur, wenn sich während der Arbeit unvorhersehbare Umstände zeigen (z. B. versteckte
      Altrohre im Mauerwerk) – dann informieren wir vor der Ausführung.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Wie wir mit Wiener Hausverwaltungen zusammenarbeiten</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Ein großer Teil unserer Aufträge läuft über Hausverwaltungen. Wir rechnen direkt über
      die Verwaltung ab, erstellen Leistungsnachweise mit Datum, Arbeitszeit und Material,
      dokumentieren Fotos vor/nach und koordinieren Termine mit den Mietern. Wenn Sie Mieter
      sind und einen Wasserschaden haben, sprechen Sie uns an – wir klären die
      Kostenzuständigkeit (Mieter vs. Vermieter) vor Arbeitsbeginn.
    </p>

    <h2 style={{ marginTop: "48px" }}>Wiener Wasser: was in die Zuständigkeit von MA 31 fällt</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die Grenze zwischen öffentlicher und privater Installation verläuft in Wien am
      Wasserzähler. Alles davor – die Anschlussleitung vom Straßenkanal bis zum
      Zählerplatz – liegt im Verantwortungsbereich von Wiener Wasser (MA 31). Alles
      ab dem Zähler ist Eigentümer-Sache, also Hauseigentümer oder bei Wohnungszählern
      (Zählertausch auf Smart Meter) eine komplexere Konstellation. Für Sie als Kunde
      bedeutet das: bei Rohrbruch im Haus sind wir zuständig, bei Druckabfall in der
      ganzen Straße ist es MA 31. Wir helfen bei der Einordnung und melden bei Bedarf
      direkt. Das gilt auch bei Ausfällen: Wenn ein ganzes Haus kein Wasser hat, ist
      oft ein Hauptabsperrschieber durch MA 31 geschaltet – dann fällt der Einsatz
      eines Installateurs weg.
    </p>

    <h2 style={{ marginTop: "48px" }}>Trinkwasserhygiene: Legionellen und Stagnation ernst nehmen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      In Mehrparteienhäusern mit zentraler Warmwasserbereitung ist Trinkwasserhygiene
      kein Nebenthema. Legionellen vermehren sich in warmem Wasser zwischen 25 °C und
      45 °C – genau in dem Bereich, in dem viele ältere Warmwasserspeicher ihre Nebenstränge
      halten. Eine ÖNORM B 5019-konforme Anlage sichert: 60 °C am Speicherausgang,
      55 °C in der Zirkulation, regelmäßige thermische Spülung bei seltener Nutzung.
      Wir prüfen bei jeder Sanierung, ob die vorgefundene Anlage die aktuellen
      Hygieneanforderungen erfüllt, und ergänzen bei Bedarf mit Zirkulationspumpe,
      Rückflussverhinderer, Probenahmestellen. Bei Verdacht auf Legionellen-Befall
      nehmen wir Wasserproben und senden sie zur akkreditierten Labor-Analyse. Die
      Ergebnisse dokumentieren wir für Hausverwaltung und gegebenenfalls
      Betriebsanlagenbehörde.
    </p>

    <h2 style={{ marginTop: "48px" }}>Materialwechsel: warum Pressfitting heute Standard ist</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Ein Sanierungsprojekt zeigt oft den Generationenwechsel in der Installationstechnik:
      Alte Stahl- und Kupferleitungen werden durch Pressfitting-Kupfer und
      Mehrschicht-Verbundrohr ersetzt. Pressfitting hat mehrere handfeste Vorteile:
      schnellere Montage (kein Löten, keine Brandgefahr), Kontrollfenster an jedem Fitting
      (ein falsch verpresstes System dichtet zuverlässig ab), und in der Materialqualität
      dauerhaft trinkwassertauglich. Mehrschicht-Verbundrohr (Kunststoff mit
      Aluminium-Kern) ist dort unsere erste Wahl, wo Leitungen flexibel verlegt werden
      müssen – z.B. hinter Vorwandinstallationen, bei Badsanierungen mit engen
      Schächten, oder bei Leitungsführungen um Eckverbindungen. Lötarbeiten an
      Kupferleitungen führen wir weiterhin durch, wenn bestehende Anlagen erweitert
      oder repariert werden und ein sortenreines System sinnvoll ist.
    </p>

    <h2 style={{ marginTop: "48px" }}>Kosten & Preisorientierung Wasserinstallation</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Zur groben Orientierung für Wiener Projekte: Ein Armaturentausch (Mischbatterie
      Dusche oder Waschtisch, Standardgerät Grohe oder Hansgrohe) liegt inklusive
      Gerät und Montage meist zwischen 280 € und 450 € brutto. Ein WC-Austausch mit
      neuer Keramik, Spülkasten und Anschluss kommt typisch auf 650 €–1.100 €,
      abhängig vom Modell (Standard-WC vs. Einbau-Spülkasten hinter Vorwand).
      Komplettsanierung eines Standardbads (ca. 6 m², neue Verrohrung,
      bodenebene Dusche, WC, Waschtisch mit Unterschrank, exkl. Fliesenarbeiten)
      bewegt sich zwischen 8.500 € und 14.000 €. Rohrbruch-Notdienst ohne
      Vorwissen über den Umfang: die Anfahrt und die ersten 60 Minuten
      kosten im Notdienst-Tarif zwischen 180 € und 260 €, weitere Arbeitszeit
      nach regulärem Stundensatz. Als Orientierung – nach Vor-Ort-Besichtigung
      erhalten Sie immer ein schriftliches Festpreisangebot.
    </p>

    <h2 style={{ marginTop: "48px" }}>Was bei einem Wasserschaden versicherungsrechtlich wichtig ist</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wenn Wasser austritt und die eigene Wohnung oder die Nachbarn beschädigt,
      greift meist die <strong>Leitungswasserversicherung</strong> (Teil der
      Haushalts- und Gebäudeversicherung) oder die <strong>Haftpflicht</strong>,
      wenn Sie als Mieter den Schaden beim Nachbarn verursachen. Was die
      Versicherung sehen will: dokumentierte Schadensursache, fachgerechte
      Reparatur durch einen konzessionierten Betrieb, Rechnung mit
      ÖNORM-Referenz. Wir dokumentieren jeden Einsatz so, dass die
      Versicherungsabwicklung reibungslos läuft: Foto vorher/nachher, Skizze
      der Leitungsführung, Protokoll der Dichtheitsprüfung, Rechnung mit
      klar gegliederten Positionen. Das spart Ihnen Rückfragen und
      verkürzt die Bearbeitungszeit spürbar.
    </p>

    <h2 style={{ marginTop: "48px" }}>Wann ein Kaltwasser-Weichenspeicher oder Enthärter Sinn macht</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wiener Leitungswasser ist gut, aber regional unterschiedlich hart. In Bezirken
      wie Hietzing, Liesing oder Teilen von Döbling bewegt sich die Gesamthärte im
      mittleren bis höheren Bereich, was zu schnellerer Verkalkung von Armaturen,
      Durchlauferhitzern und Warmwasserspeichern führt. Eine Enthärtungsanlage kann
      die Lebensdauer verlängern und Reinigungsaufwand reduzieren – sie ist aber
      nicht universal sinnvoll. Wir prüfen im Einzelfall: Wasserhärte messen, mit
      Geräteherstellern abgleichen, Wirtschaftlichkeit rechnen. In vielen Wiener
      Wohnungen reicht regelmäßiges Entkalken der Armaturen und ein Kalkschutz für
      die Therme völlig aus – eine zentrale Enthärtungsanlage ist eher für
      Einfamilienhäuser mit vielen Zapfstellen oder Gewerbebetriebe mit hohem
      Warmwasserbedarf interessant.
    </p>
  </>
);
