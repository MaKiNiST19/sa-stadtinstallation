import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was kostet eine Rohrreinigung in Wien?"
      answer={
        <p>
          Eine einfache <strong>Verstopfung (WC, Waschbecken, Küchenspüle)</strong> in Wien
          wird bei uns <strong>ab 149 € brutto</strong> behoben – Festpreis, inklusive Anfahrt
          innerhalb Wien und Arbeitszeit bis 60 Minuten. Aufwendigere Fälle (Fallstrang,
          Grundleitung, Kamera-Inspektion) werden nach Vor-Ort-Einschätzung kalkuliert und
          immer vor Arbeitsbeginn schriftlich fixiert. SA Stadtinstallation arbeitet mit
          Elektrospirale, Hochdruckspülung und Kanalkamera – kein pauschales Stundensatz-
          Abkassieren.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Wann welches Verfahren? Unser Entscheidungsbaum</h2>
    <IconList
      items={[
        { text: "WC langsam ablaufend → Saugglocke, dann Spirale, selten Hochdruck." },
        { text: "Küchenspüle riecht & ist dicht → meist Fettpfropfen, Spirale + Heißwasserspülung." },
        { text: "Dusche / Badewanne → Haare in Ablauf & Siphon, mechanisch zerlegen." },
        { text: "Mehrere Abflüsse gleichzeitig verstopft → Fallstrang oder Grundleitung, Kamera einsetzen." },
        { text: "Abwasser kommt hoch → Grundleitung bis Kanalanschluss, Hochdruck-Reinigung + Kamera." },
      ]}
      columns={1}
    />

    <h2 style={{ marginTop: "48px" }}>Unsere Technik</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Eine unspezifische „Verstopfung" gibt es nicht – es gibt Fett, Kalk, Haare,
      Fremdkörper, Wurzeln, versetzte Rohrverbindungen oder Rohrbrüche. Jedes davon
      verlangt ein anderes Werkzeug. Wir bringen bei Anfahrt standardmäßig mit:
    </p>

    <IconList
      items={[
        { text: "Elektrospirale mit verschiedenen Köpfen (Kreuzkopf, Speerkopf, Fräse)" },
        { text: "Hochdruckspülgerät bis 150 bar für Fallstränge und Grundleitungen" },
        { text: "Kanalkamera mit Sonde zur Ortung über Magnetortung" },
        { text: "Chemiefreie Heißwasser-Entfettung für Küchenabflüsse" },
      ]}
      columns={2}
    />

    <HighlightBox variant="red" title="Was Sie NICHT tun sollten" icon="⚠">
      <ul style={{ margin: 0, paddingLeft: "22px", lineHeight: 1.9 }}>
        <li><strong>Keine Rohrreiniger-Chemie</strong> als Dauerlösung – zerstört Dichtungen und verätzt bei Rückstau die Hände des Installateurs.</li>
        <li><strong>Keine Saugglocke mit voller Kraft bei undichtem Rohr</strong> – Sie drücken das Abwasser in die Wand.</li>
        <li><strong>Kein Draht in die Leitung</strong> – er verkeilt sich oft und macht die Reinigung teurer.</li>
        <li><strong>Keine Haushaltsmittel wie Backpulver + Essig</strong> – funktioniert bei harten Verstopfungen praktisch nie.</li>
      </ul>
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Was kostet wirklich wie viel?</h2>
    <IconList
      items={[
        { text: "WC oder Waschbecken (Einzelverstopfung, bis 60 Min.): 149 € brutto – Festpreis." },
        { text: "Küchenspüle inkl. Siphon-Reinigung: 169 € brutto." },
        { text: "Fallstrang (mehrere Wohnungen betroffen): 290–480 € je nach Länge & Zugänglichkeit." },
        { text: "Hochdruckspülung Grundleitung bis 20 m: 320–520 €." },
        { text: "Kanalkamera-Inspektion mit Dokumentation: 180–320 €." },
        { text: "Nacht-/Wochenendzuschlag: 60 € (Ausnahme: echte Notfälle mit Wasseraustritt → kein Zuschlag)." },
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
      <EntityCard label="Rechtlich" title="Wer zahlt – Mieter oder Vermieter?" icon="⚖">
        Grundsatz: Verstopfungen innerhalb der Wohnung (Siphon, Abflussrohr bis Fallstrang)
        sind meist Mietersache. Fallstränge und Grundleitungen sind Eigentümersache. Wir
        dokumentieren die Ursache fotografisch – das schafft Klarheit bei der
        Kostenzuteilung.
      </EntityCard>
      <EntityCard label="Technisch" title="Fallstrang oder Einzelabfluss?" icon="🔧">
        Faustregel: ist nur ein Abfluss betroffen → Einzelverstopfung. Sind mehrere
        Abflüsse gleichzeitig zu → Fallstrang / Grundleitung. Wir prüfen mit einem
        einfachen Test vor Arbeitsbeginn.
      </EntityCard>
      <EntityCard label="Gebäude" title="Wiener Altbau vs. Neubau" icon="🏛">
        Altbauten haben häufig noch Guss- oder Steinzeugleitungen in der Grundleitung.
        Das sind Bruchrisiken. Wir arbeiten dort bewusst vorsichtiger mit Spirale und
        niedrigem Druck, um Folgeschäden zu vermeiden.
      </EntityCard>
      <EntityCard label="Finanziell" title="Versicherung" icon="€">
        Bei Wasserschäden durch Rückstau deckt die Gebäudeversicherung meist die Folgeschäden,
        nicht die Rohrreinigung selbst. Unsere Rechnung ist klar strukturiert, damit
        Versicherungen sie akzeptieren.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>Warum Wiener uns rufen – und nicht den Erstbesten</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Der Markt der „Rohrreinigung Wien" ist der klassische Drücker-Dienst-Markt:
      Google-Anzeigen mit 39-€-Lockpreisen, vor Ort dann 450 € „Anfahrtspauschale"
      und „Notfallzuschlag". Wir arbeiten anders. Unser Preis steht vor der Anfahrt fest,
      wir fahren mit einer Rechnung pro Einsatz, und wir zeigen Ihnen mit der Kamera,
      was wirklich im Rohr passiert. Kunden, die einmal bei uns waren, rufen uns wieder
      – das spart uns Marketing und macht den Preis fair kalkulierbar.
    </p>

    <MiniStory
      title="Fallstrang-Verstopfung in 1020 Leopoldstadt"
      context="Jänner 2026, 4-stöckiges Zinshaus"
      outcome="Ursache (Fremdkörper in Grundleitung) in 45 Min. gefunden, Reparatur inkl. Kamera-Dokumentation für die Hausverwaltung."
    >
      Zwei Wohnungen im Erdgeschoss hatten gleichzeitig Rückstau. Klassischer
      Fallstrang-Fall. Wir gingen über den Reinigungsschacht im Hof, fräsern zunächst mit
      der Elektrospirale den Pfropfen frei und stellten per Kamera einen Kinderschuh
      (!) in der Grundleitung fest, der als Kern der Verstopfung gedient hatte. Entfernung,
      Kontrollspülung, Kamera-Dokumentation an die Hausverwaltung – Kostenträger geklärt,
      Fall in 2 Stunden erledigt.
    </MiniStory>

    <HighlightBox title="Vorbeugen statt reinigen" icon="💡">
      Regelmäßiges Spülen mit heißem Wasser (wöchentlich 1× die Küchenspüle mit 2 Litern
      kochendem Wasser), Haarsiebe in Dusche und Wanne, keine Fette ins WC oder in den
      Abfluss – das sind die einfachsten Mittel, um sich Geld und Ärger zu sparen. Für
      Gewerbekunden (Gastronomie, Kantinen) bieten wir eine halbjährliche
      Wartungsspülung der Küchenabflüsse mit Heißwasser + Fettlöser auf Enzymbasis.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Spirale vs. Hochdruck – wann was sinnvoll ist</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die zwei Hauptverfahren der Abflussreinigung sind mechanisch (Elektrospirale) und
      hydraulisch (Hochdruckspülung). Beide haben ihre Stärken und Schwächen – wer sie
      unkritisch einsetzt, verursacht unnötige Schäden.
    </p>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die <strong>Elektrospirale</strong> ist unsere erste Wahl bei Einzelverstopfungen
      im Leitungsinneren. Sie bohrt punktuell durch einen Pfropfen, zerteilt Haare, Fett
      und weichere Ablagerungen. Stärke: sehr präzise Steuerung der Kraft. Schwäche: sie
      reinigt nur den Querschnitt, nicht die Rohrwand – verbleibender Belag begünstigt
      Neuverstopfung. Köpfe, die wir je nach Rohr einsetzen: Kreuzkopf bei weichen
      Pfropfen, Speerkopf für enge Bögen, Fräse bei verhärtetem Urinstein oder Wurzeln.
      Beim Einsatz in alten Guss- oder Steinzeugrohren (Wiener Zinshäuser vor 1945)
      arbeiten wir mit reduziertem Drehmoment, um Rohrschäden zu vermeiden.
    </p>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die <strong>Hochdruckspülung</strong> ist das Mittel der Wahl für Fallstränge,
      Grundleitungen und wenn die Rohrwand gereinigt werden soll. Wir arbeiten mit Drücken
      zwischen 80 und 150 bar, je nach Rohrmaterial und -alter. In HT-Rohren (Kunststoff)
      aus der Nachkriegszeit sind 120 bar Standard; in alten Steinzeugleitungen reduzieren
      wir auf 60–80 bar, weil die Muffen-Verbindungen sonst leck werden können. Der große
      Vorteil: nach einer Hochdruckreinigung ist die Rohrwand nahezu blank, die Lebensdauer
      bis zur nächsten Verstopfung verdreifacht sich gegenüber einer reinen Spiralen-
      Reinigung. Nachteil: benötigt Wasseranschluss und Ablauf vor Ort, und der Dreck
      muss anschließend entsorgt werden.
    </p>

    <h2 style={{ marginTop: "48px" }}>Kanalkamera – wann sie Pflicht ist</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Eine Kanalkamera ist nicht bei jedem Einsatz nötig – bei einer einfachen WC-Verstopfung
      wäre sie überdimensioniert. Pflicht wird sie in folgenden Situationen:
    </p>
    <IconList
      items={[
        { text: "Mehrfach auftretende Verstopfung am selben Abfluss binnen weniger Monate – Hinweis auf Rohrversatz, Riss oder ungünstiges Gefälle." },
        { text: "Haftungsklärung zwischen Mieter, Vermieter und Hausverwaltung – die Kamera-Aufnahme dokumentiert Ursache und Zuständigkeitsbereich." },
        { text: "Vor einer Kanalsanierung oder einem Inliner-Einbau – Ortung, Abmessung und Zustandsbewertung." },
        { text: "Bei Verdacht auf Fremdkörper oder Wurzeleinwuchs – besonders in Gärten in Hietzing, Döbling, Liesing." },
        { text: "Nach einem Wasserschaden zur Klärung gegenüber der Versicherung." },
      ]}
      columns={1}
    />
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wir liefern zur Kanal-TV-Inspektion ein PDF-Protokoll mit Standbildern, Positionsangabe
      (Meterangabe vom Revisionsschacht) und Zustandsbeschreibung nach DIN EN 13508-2.
      Dieses Protokoll wird von Hausverwaltungen, Versicherungen und bei Streitfällen als
      Beweismittel anerkannt.
    </p>

    <h2 style={{ marginTop: "48px" }}>Inliner-Sanierung – Alternative zur Aufgrabung</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wenn eine Grundleitung gebrochen, korrodiert oder versetzt ist, lautet die Wahl oft:
      aufgraben und neu verlegen – oder grabenlos mit einem Inliner sanieren. Der Inliner
      ist ein mit Harz getränkter Textilschlauch, der in die schadhafte Leitung eingezogen,
      aufgeblasen und ausgehärtet wird. Das Ergebnis ist ein neues Rohr im alten Rohr –
      ohne Aufgrabung von Pflaster, Garten oder Innenboden. Gerade in Wien, wo Altbau-
      Innenhöfe mit altem Pflaster und Grundleitungen unter dem Keller häufig sind, sparen
      Inliner-Sanierungen oft fünfstellige Beträge gegenüber der klassischen Aufgrabung.
      Wir selbst führen Inliner-Sanierungen nur in Zusammenarbeit mit spezialisierten
      Partnern aus – für uns als Installateur wichtig ist, dass wir die Entscheidung
      „Spirale, Hochdruck, Inliner oder klassische Erneuerung" sauber abwägen und
      transparent begründen können.
    </p>

    <HighlightBox variant="blue" title="Typische Grundleitungs-Probleme in Wien" icon="ℹ">
      <ul style={{ margin: 0, paddingLeft: "22px", lineHeight: 1.9 }}>
        <li><strong>Versatz</strong> an Muffenverbindungen alter Steinzeugrohre (vor 1960) – Ursache Setzungen.</li>
        <li><strong>Wurzeleinwuchs</strong> in Grundleitungen unter Gärten (Hietzing, Döbling, Liesing).</li>
        <li><strong>Fettablagerungen</strong> in Grundleitungen bei Gastro-dichten Häusern (Innere Stadt, Neubau, Mariahilf).</li>
        <li><strong>Inkrustationen</strong> durch Urinstein in Mehrparteienhäusern mit vielen WCs pro Fallstrang.</li>
        <li><strong>Rückstau aus dem Kanal</strong> bei Starkregen (Transdanubien 1210/1220) – Rückstauklappe fehlt oder defekt.</li>
      </ul>
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Fettabscheider und Gewerbe-Abflüsse</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Gastronomiebetriebe in Wien sind nach ÖNORM B 5101 und Wiener Abwasser-Rahmenverordnung
      verpflichtet, einen <strong>Fettabscheider</strong> zu betreiben, wenn fetthaltige
      Abwässer anfallen. Die Dimensionierung erfolgt nach Abwasser-Spitzenlast und wird bei
      Neueröffnung mit der MA 30 (Wien Kanal) abgestimmt. Die Wartung umfasst:
    </p>
    <IconList
      items={[
        { text: "Entleerung und Grundreinigung alle 4 Wochen (bei hoher Last wöchentlich) durch zugelassenes Entsorgungsunternehmen." },
        { text: "Halbjährliche Funktionsprüfung inkl. Sichtkontrolle Dichtungen, Lüftung und Rückhaltung." },
        { text: "Jährliche Generalreinigung mit Hochdruck + Protokollierung für die Behörde." },
        { text: "Im Ausfallfall: Notentleerung binnen 24 h." },
      ]}
      columns={1}
    />
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      SA Stadtinstallation übernimmt die Wartung der vor- und nachgelagerten Leitungen sowie
      die Notfallbehandlung bei Verstopfungen. Die eigentliche Entleerung (Abtransport des
      Fettes als Abfall nach EAK-Schlüssel 19 08 09) lassen wir durch lizenzierte Entsorger
      wie Wien Kanal oder private Entsorgungsbetriebe erledigen und übernehmen auf Wunsch
      die Koordination.
    </p>

    <h2 style={{ marginTop: "48px" }}>Rückstau und Starkregen in Wien</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wien hat ein Mischkanalsystem: Regen- und Schmutzwasser laufen gemeinsam ab. Bei
      Starkregen, wie er in den letzten Jahren zunehmend auftritt (Klimawandel, Hitzeinseln,
      Starkniederschläge in 1210 Floridsdorf, 1220 Donaustadt, 1230 Liesing), stößt das
      Kanalnetz an Kapazitätsgrenzen. Wasser wird dann über Rückstauebene aus dem Kanal
      zurück in tiefliegende Gebäudeabflüsse gedrückt – Keller-WCs, Souterrainbäder und
      Kellerabläufe überfluten. Schutz davor bieten:
    </p>
    <IconList
      items={[
        { text: "Rückstauklappen in der Grundleitung – mechanisch oder elektrisch, nach DIN EN 13564." },
        { text: "Hebeanlagen bei Objekten unter Rückstauebene (normaler Straßenhöhe)." },
        { text: "Bei Neubau: konsequente Trennung von Schmutz- und Niederschlagswasser wo möglich." },
      ]}
      columns={1}
    />
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wir prüfen bei Einsätzen immer, ob ein funktionierender Rückstauschutz vorhanden ist,
      und weisen Eigentümer auf Nachrüstbedarf hin – gerade nach Schadensereignissen, wo
      die Versicherung bei fehlendem Rückstauschutz die Leistung kürzen kann.
    </p>

    <h2 style={{ marginTop: "48px" }}>Versicherung bei Rohrschäden – was ist wie gedeckt</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Eine einfache Verstopfung ist kein Versicherungsfall. Interessant wird es, wenn Folgeschäden
      entstehen – Wasseraustritt, durchfeuchtete Wände, beschädigte Parkettböden. Für diese
      Folgeschäden greifen:
    </p>
    <IconList
      items={[
        { text: "Haushaltsversicherung – für Schäden am beweglichen Inventar des Mieters/Bewohners." },
        { text: "Eigenheim-/Gebäudeversicherung – für Schäden an Mauerwerk, Böden, fest verbauten Einrichtungen." },
        { text: "Haftpflichtversicherung – wenn Sie als Mieter einen Schaden in der Nachbarwohnung verursachen." },
        { text: "Elementarschaden-Deckung – für Rückstau aus öffentlichem Kanal, nur wenn explizit vereinbart." },
      ]}
      columns={1}
    />
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wichtig für die Schadensregulierung: <strong>fotografische Dokumentation</strong> vor
      jeder Arbeit, <strong>Rechnung mit exakter Leistungsbeschreibung</strong> (nicht nur
      „Rohrreinigung pauschal", sondern: „Spirale im Fallstrang 2.OG Küche, Ortung Pfropfen
      in Höhe EG, Fremdkörper entfernt, Funktionskontrolle, Kanalkamera-Dokumentation").
      Wir liefern diese Dokumentation in allen relevanten Fällen – die meisten Versicherungen
      reagieren dann innerhalb weniger Tage.
    </p>

    <h2 style={{ marginTop: "48px" }}>24/7-Notfalleinsatz – wie wir arbeiten</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Ein Rohrbruch oder massiver Rückstau ist ein Notfall. Wir rücken 24/7 in ganz Wien
      innerhalb von 30–60 Minuten Stadtgebiet aus. Ablauf beim Notfallanruf:
    </p>
    <IconList
      items={[
        { text: "Am Telefon – kurze Sofort-Anleitung: Hauptwasserhahn/Absperrventil schließen, Stromkreise im betroffenen Raum abschalten, Möbel aus dem Wasser räumen." },
        { text: "Disposition – wir senden das Fahrzeug mit passender Ausrüstung (Spirale + Hochdruck + Kamera + Saugsystem für Wasser)." },
        { text: "Vor Ort – Erstmaßnahme (Absperrung, Wasser stoppen), dann Ursachenanalyse, dann Reparatur oder Provisorium bis zur endgültigen Lösung." },
        { text: "Nachgelagert – Rechnung, Fotodokumentation und auf Wunsch Schadensmeldung-Unterstützung für Ihre Versicherung." },
      ]}
      columns={1}
    />
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Unser Grundsatz: Notfall-Preise sind Notfall-Preise – aber <strong>transparent</strong>.
      Der Nacht-/Wochenendzuschlag beträgt 60 € pauschal, bei echten Wassernotfällen mit
      akutem Wasseraustritt <strong>entfällt er ganz</strong>. Wir wollen nicht, dass jemand
      aus Angst vor der Rechnung stundenlang mit einem Wasserschaden wartet.
    </p>

    <h2 style={{ marginTop: "48px" }}>Häufige Fragen zur Rohrreinigung Wien</h2>
    <IconList
      items={[
        { text: "Dürfen Sie ohne Absprache mit dem Vermieter arbeiten? – Bei Gefahr im Verzug (Rückstau, Wasseraustritt) ja, dokumentiert. Bei planbaren Reinigungen bitte vorher die Hausverwaltung informieren, damit die Kostenzuteilung sauber läuft." },
        { text: "Wie lange dauert eine Rohrreinigung? – Einzelabfluss 30–60 Minuten, Fallstrang 1–2 Stunden, Grundleitung mit Kamera 2–4 Stunden." },
        { text: "Arbeiten Sie mit Chemie? – Standardmäßig nein. Enzymatische Fettlöser auf biologischer Basis kommen nur bei Gastro-Wartung zum Einsatz, aggressive Säuren oder Laugen nie." },
        { text: "Sind Ihre Preise inkl. MwSt.? – Alle genannten Preise sind Bruttopreise inkl. 20 % USt." },
        { text: "Reinigen Sie auch Regenrohre und Dachrinnen? – Ja, im Rahmen von Sanitärtechnik-Aufträgen. Reine Dachrinnenreinigung ohne Installationsbezug verweisen wir an Partnerbetriebe." },
        { text: "Bekomme ich Garantie auf die Reinigung? – Wir garantieren, dass der Abfluss nach unserer Arbeit frei läuft. Treten Verstopfungen binnen 4 Wochen am selben Punkt wieder auf, kommen wir kostenlos und prüfen die Ursache (meist struktureller Schaden, dann Kameraeinsatz)." },
      ]}
      columns={1}
    />
  </>
);
