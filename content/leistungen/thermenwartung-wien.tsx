import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Wie oft muss eine Gastherme in Wien gewartet werden?"
      answer={
        <p>
          Eine Gastherme in Wien sollte <strong>einmal jährlich</strong> vom konzessionierten
          Installateur gewartet werden – unabhängig von der periodischen Rauchfangkehrer-Prüfung.
          Die Jahreswartung ist keine gesetzliche Pflicht für den Bewohner, aber von fast allen
          Herstellern als Garantie- und Gewährleistungs-Voraussetzung vorgeschrieben und im
          Mietrecht oft Teil der „laufenden Instandhaltung". SA Stadtinstallation wartet alle
          gängigen Marken: Vaillant, Viessmann, Junkers, Bosch, Buderus, Wolf, Saunier Duval.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Was wir bei einer Thermenwartung machen</h2>
    <IconList
      items={[
        { text: "Sichtprüfung der Therme, Dichtungsprüfung gasseitig (außerhalb Dichtheitsprüfung)" },
        { text: "Brennerreinigung und Prüfung der Zündelektroden" },
        { text: "Reinigung Wärmetauscher (je nach Zustand nass oder trocken)" },
        { text: "Kontrolle und ggf. Nachfüllen des Ausdehnungsgefäßes" },
        { text: "Überprüfung der Sicherheitseinrichtungen (Druckschalter, STB, Ionisationsstrom)" },
        { text: "Abgasmessung und Einstellung der Verbrennungswerte" },
        { text: "Funktionskontrolle Warmwasserbereitung, Zirkulation, Regelung" },
        { text: "Schriftliches Wartungsprotokoll für Garantie und Hausverwaltung" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Preis-Transparenz – Jahreswartung SA Stadtinstallation" icon="€">
      <p style={{ margin: 0 }}>
        <strong>Standardwartung Gastherme</strong> (1-Familien-Wohnung, Vaillant/Viessmann/Junkers):
        ab 129 € brutto inkl. Anfahrt, Arbeitszeit bis 90 Min., Standardverschleißteile.<br />
        <strong>Kombitherme mit Brauchwasserseite</strong>: ab 159 €.<br />
        <strong>Brennwerttherme &gt; 25 kW</strong>: ab 179 €.<br />
        Mit <strong>Wartungsvertrag</strong> (jährlich automatisch): 10 % Rabatt + Vorrang bei Störungen.
      </p>
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Warum sich die Wartung rechnet</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Eine ungewartete Therme verliert jedes Jahr rund 2–5 % Wirkungsgrad durch Brennerverschmutzung
      und Wärmetauscher-Ablagerungen. Über fünf Jahre summiert sich das auf 10–20 % Mehrverbrauch –
      bei einer Wiener Wohnung mit 1.400 m³ Gas/Jahr sind das leicht 150–300 € im Jahr. Die Wartung
      amortisiert sich also meist im ersten Jahr und verlängert zusätzlich die Lebensdauer der
      Anlage.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Rechtlich" title="Mietrecht & Wartungspflicht" icon="⚖">
        In Wien ist die jährliche Wartung einer in Bestand gegebenen Therme meist Sache des
        Vermieters (§ 3 MRG, laufende Erhaltung). Reparaturen nach Verschleiß ebenfalls.
        Details: siehe Mietvertrag und OGH-Rechtsprechung.
      </EntityCard>
      <EntityCard label="Technisch" title="Was zählt als Verschleiß?" icon="🔧">
        Standardverschleißteile sind Zündelektroden, Ionisationsstift, Dichtungen, Siebe.
        Ausdehnungsgefäße, Pumpen, Leiterplatten sind reparatur- oder Tauschpositionen,
        werden separat ausgewiesen.
      </EntityCard>
      <EntityCard label="Behörde" title="Rauchfangkehrer ≠ Installateur" icon="🏢">
        Der Rauchfangkehrer prüft periodisch die Abgasführung und die Abgaswerte an der
        Messöffnung. Die mechanische Wartung der Therme ist Aufgabe des Installateurs.
        Beides ergänzt sich, ersetzt sich aber nicht.
      </EntityCard>
      <EntityCard label="Finanziell" title="Wartungsvertrag" icon="📋">
        Unser Wartungsvertrag garantiert Wartung jedes Jahr im selben Monat, Rabatt auf
        Ersatzteile und bevorzugte Terminvergabe bei Ausfällen. Laufzeit 12 Monate,
        jährlich kündbar.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>Fehlercodes – wann ist die Therme reif für Wartung?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Moderne Thermen zeigen Fehlercodes an, die Aufschluss über Wartungsbedarf geben. Ein
      paar häufige Beispiele aus unserem Alltag:
    </p>

    <IconList
      items={[
        { text: "Vaillant F.22 → Wasserdruck zu niedrig. Anlage nachfüllen, Ursache prüfen (Leck?)." },
        { text: "Viessmann A2 → Flammenüberwachung gestört. Elektrodentausch & Brennerreinigung fällig." },
        { text: "Junkers E9 → Wärmetauscher heißlauf. Pumpe prüfen, Wärmetauscher reinigen." },
        { text: "Bosch 286 → Abgassensor defekt oder LAS-Schacht teilverstopft. Rauchfangkehrer-Abstimmung." },
        { text: "Wolf FC20 → Gebläsefehler. Gebläse reinigen oder tauschen." },
      ]}
      columns={1}
    />

    <MiniStory
      title="Jahreswartung in 1110 Simmering"
      context="Oktober 2025, 12 Jahre alte Vaillant ecoTEC"
      outcome="Nach 12 Monaten Pause lief die Anlage wieder ruhig, Gasverbrauch sank um 11 %."
    >
      Der Kunde hatte die letzte Wartung vor über drei Jahren machen lassen und zuletzt
      Geräusche beim Brennerstart bemerkt. Wir reinigten den Brenner, tauschten die
      Zündelektroden und den Ionisationsstift, prüften den Wärmetauscher und stellten
      die Verbrennung neu ein. Die Abgasmessung bestätigte: das Gerät ist noch gut für
      weitere 5–7 Jahre.
    </MiniStory>

    <HighlightBox title="Frühjahrs- oder Herbstwartung?" icon="📅">
      Wir empfehlen die Wartung im Spätsommer oder Frühherbst (September/Oktober) – dann
      ist die Anlage vor der Heizsaison in bestem Zustand. Wer im Winter wartet, riskiert
      bei einem Ausfall tagelange Wartezeit auf Ersatzteile. Unsere Wartungstermine sind
      das ganze Jahr buchbar – Kunden mit Wartungsvertrag werden automatisch im gleichen
      Monat wie im Vorjahr kontaktiert.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Wartung bei Hausverwaltungen und Großobjekten</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Für Hausverwaltungen führen wir die Wartung aller Wohnungs-Thermen in einem Objekt
      gebündelt durch. Das spart Anfahrtskosten und garantiert einheitliche Dokumentation.
      Ablauf: Terminankündigung per Aushang + Infozettel im Briefkasten 2 Wochen vor
      Wartung, Durchführung innerhalb von 2–3 Tagen, Sammelprotokoll an die Verwaltung,
      Einzelprotokolle pro Wohnung. Gerne gehen wir auch als Subunternehmer in bestehende
      Rahmenverträge.
    </p>

    <h2 style={{ marginTop: "48px" }}>Ablauf einer Wartung – Schritt für Schritt</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Damit Sie wissen, was Sie bei uns erwartet, hier der typische Ablauf einer Jahreswartung
      an einer Kombitherme in einer Wiener Wohnung. Wir planen pro Gerät 60 bis 90 Minuten
      ein – länger bei älteren Modellen oder wenn mehrere Jahre keine Wartung erfolgt ist.
    </p>
    <IconList
      items={[
        { text: "Schritt 1 – Anamnese: Fragen an den Kunden zu Geräuschen, Fehlercodes, Warmwasser-Temperatur, Heizleistung, Druckverlust. Wir wollen die Geschichte der Anlage kennen." },
        { text: "Schritt 2 – Datenerfassung: Seriennummer, Baujahr, Typ, letzter Wartungszeitpunkt, aktueller Betriebsdruck, aktuelle Vorlauftemperatur werden im Protokoll erfasst." },
        { text: "Schritt 3 – Gerät außer Betrieb nehmen: Gas absperren, elektrisch freischalten, Kondenswasser ablassen, Wärmetauscher drucklos schalten." },
        { text: "Schritt 4 – Demontage der Verkleidung, Sichtprüfung auf Korrosion, Rußspuren, Kondensat-Rückstände, Schmutz am Gebläse." },
        { text: "Schritt 5 – Brennerzug ausbauen, Brennerstäbe und Mischkammer reinigen, Zündelektroden und Ionisationsstift prüfen bzw. tauschen." },
        { text: "Schritt 6 – Wärmetauscher prüfen: bei Brennwertgeräten Lamellen mit weicher Bürste reinigen, bei starker Verschmutzung nass spülen mit Spezialreiniger." },
        { text: "Schritt 7 – Siphon und Kondensatablauf reinigen (häufigste Ursache für Fehlerabschaltung bei Brennwertgeräten)." },
        { text: "Schritt 8 – Ausdehnungsgefäß kontrollieren: Vordruck messen, ggf. Stickstoff nachfüllen. Bei defekter Membran Tausch empfehlen." },
        { text: "Schritt 9 – Wiederzusammenbau, Dichtheitsprüfung Gasseite mit Lecksuchspray, Druckaufbau heizseitig, Entlüftung." },
        { text: "Schritt 10 – Inbetriebnahme, Abgasmessung mit kalibriertem Messgerät, Einstellung CO₂/O₂ und Gas-Luft-Verhältnis." },
        { text: "Schritt 11 – Prüfung der Heizkennlinie, Warmwasser-Solltemperatur, Zirkulationszeiten, Nachtabsenkung." },
        { text: "Schritt 12 – Schriftliches Wartungsprotokoll mit allen Messwerten, Empfehlungen und Unterschrift des Kunden." },
      ]}
      columns={1}
    />

    <h2 style={{ marginTop: "48px" }}>Hersteller-Spezifika – worauf es bei welchem Gerät ankommt</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Jeder Hersteller hat Eigenheiten, die man kennen muss. Wir warten alle gängigen Marken
      auf dem Wiener Markt und haben mit jedem Fabrikat tausende Einsätze hinter uns. Hier
      ein Auszug, damit Sie sehen, wie unterschiedlich die Themen je nach Gerät sind.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "24px",
      }}
    >
      <EntityCard label="Marke" title="Vaillant (ecoTEC, atmoTEC, VC/VCW)" icon="🔧">
        Solides Brennwertprogramm, in Wien stark verbreitet seit den 2000ern. Achtung auf
        den <strong>Kondensat-Siphon</strong> (häufigster Fehler F.22/F.27), die <strong>
        Zündelektroden</strong> (oft korrodiert nach 4–5 Jahren) und das <strong>
        Ausdehnungsgefäß</strong>, das bei ecoTEC-Geräten tendenziell an Vordruck verliert.
        Firmware-Updates regelmäßig nötig.
      </EntityCard>
      <EntityCard label="Marke" title="Viessmann (Vitodens 100/200/222)" icon="🔧">
        Viessmann baut robuste Inox-Radial-Wärmetauscher, die lange halten, aber sehr
        empfindlich auf <strong>schmutziges Heizwasser</strong> reagieren. Heizwasser-Analyse
        alle 2–3 Jahre sinnvoll. Der <strong>MatriX-Brenner</strong> braucht bei Wartung
        besondere Aufmerksamkeit: zu starkes Reinigen kann die Oberfläche beschädigen.
      </EntityCard>
      <EntityCard label="Marke" title="Junkers/Bosch (Cerapur, Condens)" icon="🔧">
        Seit der Umfirmierung heißt vieles Bosch. Typische Wartungsthemen: <strong>
        Gebläse-Lager</strong> nach 8–10 Jahren, <strong>Abgassensor</strong> (Fehler 286/287),
        <strong>3-Wege-Ventil</strong>. Ersatzteile in Österreich gut verfügbar, Preise fair.
        Wir führen gängige Verschleißteile im Fahrzeug mit.
      </EntityCard>
      <EntityCard label="Marke" title="Wolf (CGB, CGW, FGB)" icon="🔧">
        In Wien seltener, aber in Einfamilienhäusern im Süden (Liesing, Hietzing, Döbling)
        anzutreffen. Der <strong>Silumin-Wärmetauscher</strong> von Wolf ist sehr effizient,
        aber teuer im Tausch. Regelmäßige Wartung verlängert hier die Lebensdauer erheblich.
      </EntityCard>
      <EntityCard label="Marke" title="Buderus (Logamax, GB172/192)" icon="🔧">
        Bosch-Schwester, technisch sehr ähnlich zu Junkers. Wartungsintervalle und
        Verschleißteile weitgehend identisch. Bei älteren Logamax-U-Geräten empfehlen wir
        Planung für Austausch, da Ersatzteile knapp werden.
      </EntityCard>
      <EntityCard label="Marke" title="Saunier Duval, Brötje, Vaillant-Töchter" icon="🔧">
        Saunier Duval technisch nah an Vaillant (gleicher Konzern), Brötje eigene Konstruktion
        mit Fokus auf Modulation. Für beide Marken halten wir Kontakte zu Wiener Ersatzteil-
        Lieferanten, sodass wir auch ältere Modelle noch instandsetzen können.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>Das Zusammenspiel mit dem Rauchfangkehrer</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      In Wien ist der Rauchfangkehrer (Kehrbetrieb) weiterhin ein eigener Gewerbezweig. Er ist
      zuständig für die periodische Überprüfung der Abgasanlage, die gesetzlich vorgeschriebene
      Abgasmessung an der Messöffnung und die Erstattung der Kehrbücher an die Baubehörde MA
      25. Als Installateur wartet SA Stadtinstallation das Gerät selbst – Brenner, Wärmetauscher,
      Sicherheitseinrichtungen, Regelung, Hydraulik. Beide Arbeiten ergänzen sich, und wir
      koordinieren uns bei Bedarf mit Ihrem Rauchfangkehrer: Wenn der Rauchfangkehrer erhöhte
      CO-Werte oder verstopfte LAS-Schächte feststellt, dokumentieren wir gemeinsam die
      Schnittstelle und lösen das Problem abgestimmt. Kunden, die beides aus einer Hand
      wollen, koordinieren wir auf Wunsch den Kehrbetrieb-Termin mit unserem Wartungstermin.
    </p>

    <HighlightBox variant="blue" title="Wichtig: Wartung ≠ Abnahme nach Neuinstallation" icon="ℹ">
      Eine Wartung ist eine laufende Instandhaltung und keine amtliche Erstabnahme. Nach
      Neuinstallation oder Gerätetausch ist eine separate <strong>Inbetriebnahme und
      Dichtheitsprüfung nach ÖVGW G1/G2</strong> erforderlich – inkl. Eintragung in die
      Gasprüfbescheinigung und Meldung an den Netzbetreiber Wiener Netze. Wir übernehmen
      auch diese Erstinbetriebnahmen für alle Gerätetausch-Projekte.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Legionellen-Prävention bei Kombithermen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Im Gegensatz zu zentralen Warmwasser-Boilern (wo ÖNORM B 5019 Legionellenprüfung
      verlangt) sind Kombithermen hydraulisch nicht dieselbe Risikogruppe – das Warmwasser
      wird im Durchlauf erzeugt und nicht gespeichert. Dennoch: Wenn eine Wohnung länger
      leersteht (Urlaub, Zweitwohnsitz, Leerstand nach Auszug), kann in den Rohrleitungen
      ab der Therme Stagnation entstehen und Legionellen-Bildung begünstigen. Wir empfehlen
      bei Wiedernutzung nach mehr als 4 Wochen Stillstand: alle Wasserhähne 3 Minuten auf
      höchster Temperatur laufen lassen, Duschköpfe zuvor abnehmen und nicht ins Gesicht
      vernebeln. Bei Häusern mit zentraler Warmwasserversorgung (z. B. Gemeindebau mit
      Fernwärme-Übergabestation) ist die Wartung der Zentrale Sache der Hausverwaltung –
      wir führen auch solche Objektwartungen durch, inklusive Temperaturmessungen nach
      ÖNORM B 5019.
    </p>

    <h2 style={{ marginTop: "48px" }}>Wartungsvertrag – welche Varianten gibt es?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Ein Wartungsvertrag ist mehr als nur ein Kalendereintrag. Wir bieten drei Stufen:
    </p>
    <IconList
      items={[
        { text: "Basis – Jährliche Wartung automatisch im selben Monat wie im Vorjahr. 10 % Rabatt auf Standardwartung. Laufzeit 12 Monate, jährlich kündbar. Ideal für Einfamilienhäuser." },
        { text: "Komfort – Wartung inkl. Abgasmessung nach § 15a B-VG, Vorrangtermin bei Störungen (binnen 24 h in Heizperiode), 10 % Rabatt auf Ersatzteile. Ideal für Mietwohnungen mit dauerhaft bewohntem Gerät." },
        { text: "Objekt – Rahmenvertrag für Hausverwaltungen und Eigentümer mehrerer Objekte. Individuelle Terminplanung, gebündelte Abrechnung, Sammelprotokoll digital im Verwaltungsportal. Preis nach Anzahl Thermen gestaffelt." },
      ]}
      columns={1}
    />

    <h2 style={{ marginTop: "48px" }}>Was tun, wenn die Therme trotz Wartung ausfällt?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Eine gewartete Therme fällt statistisch seltener aus – aber nicht nie. Häufigste Ursachen
      für Ausfall zwischen zwei Wartungsterminen: Druckverlust durch Leck im Heizkreis (oft an
      alten Flachheizkörper-Verschraubungen), Ausfall des Ausdehnungsgefäßes, verstopfter
      Kondensat-Siphon bei Brennwertgeräten (Algenbildung im Sommer), defekte Leiterplatte
      nach Gewitter/Überspannung. Kunden mit Wartungsvertrag erreichen uns über eine eigene
      Störungs-Hotline und bekommen binnen 24 h einen Techniker in der Heizperiode (Oktober
      bis April). Ohne Vertrag laufen Sie über die reguläre Notfall-Hotline, was im
      Heizperioden-Peak mehrere Tage Wartezeit bedeuten kann.
    </p>

    <h2 style={{ marginTop: "48px" }}>Austausch statt Reparatur – ab wann rechnet sich das?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Eine gute Faustregel: Wenn die geplante Reparatur mehr als 40 % des Neugerätepreises
      kostet und das Gerät älter als 15 Jahre ist, sollte ein Austausch erwogen werden.
      Gründe: Moderne Brennwertgeräte arbeiten mit Wirkungsgraden über 108 % (bezogen auf
      Heizwert), alte Niedertemperatur-Thermen liegen bei 85–92 %. Der Unterschied sind
      in einer 70-m²-Wohnung schnell 150–250 € Gas pro Jahr. Dazu kommen Förderungen: Für
      den Umstieg von Gas auf Wärmepumpe oder Fernwärme greift 2024–2026 die Bundesförderung
      „Raus aus Gas" mit bis zu 75 % Förderquote (einkommensabhängig), plus Wien-Zuschlag.
      Wir beraten herstellerunabhängig und rechnen beide Varianten – Tausch gegen neue Gastherme
      versus Wechsel auf Wärmepumpe/Fernwärme – transparent durch.
    </p>

    <h2 style={{ marginTop: "48px" }}>Häufige Fragen zur Thermenwartung in Wien</h2>
    <IconList
      items={[
        { text: "Muss ich als Mieter die Wartung zahlen? – Nein, in den meisten Wiener Mietverträgen ist die laufende Erhaltung der mitvermieteten Therme Sache des Vermieters (§ 3 MRG). Prüfen Sie Ihren Vertrag; wir stellen auf Wunsch die Rechnung direkt an die Hausverwaltung." },
        { text: "Wie lange dauert eine Wartung? – 60 bis 90 Minuten bei planmäßiger Jahreswartung. Bei Erstwartung nach mehreren Jahren Pause 90 bis 120 Minuten." },
        { text: "Brauche ich Ersatzteile vorzurätig? – Nein, wir führen Standardverschleißteile (Dichtungen, Elektroden, Siebe, Sicherungen) im Fahrzeug mit. Nur bei sehr alten oder seltenen Modellen bestellen wir nach Besichtigung." },
        { text: "Wird das Gas abgedreht? – Ja, für die Zeit der Brennerreinigung wird die Gaszufuhr kurz abgesperrt. Das betrifft nur Ihre Therme, nicht die Gaszufuhr anderer Wohnungen." },
        { text: "Wie erkenne ich, ob die letzte Wartung wirklich durchgeführt wurde? – Am Wartungsprotokoll mit Unterschrift und an einem Aufkleber am Gerät mit Wartungsdatum. Wir hinterlassen immer beides." },
        { text: "Ist Wartung im Sommer günstiger? – Nein, der Preis ist gleich. Aber Ersatzteil-Bestellungen gehen im Sommer schneller, und Sie starten garantiert mit frischem Gerät in die Heizsaison." },
      ]}
      columns={1}
    />
  </>
);
