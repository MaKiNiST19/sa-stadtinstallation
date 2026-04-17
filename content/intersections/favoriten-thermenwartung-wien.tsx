import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was kostet Thermenwartung in Favoriten?"
      answer={
        <p>
          In 1100 Favoriten bieten wir <strong>Thermenwartung ab 129 € brutto</strong> für
          klassische Wohnungsthermen (Vaillant, Viessmann, Junkers, Bosch, Wolf). Mit
          Wartungsvertrag 10 % Rabatt und Vorrang bei Störungen. Da unsere Werkstatt in
          der Humboldtgasse 33 liegt, bündeln wir Wartungen in Favoriten häufig auf einen
          einzigen Arbeitstag – das hält die Anfahrtskosten niedrig und erlaubt uns,
          faire Preise zu garantieren.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Wartungssituationen in Favoriten</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Favoriten ist ein gemischter Bezirk: Gründerzeit-Wohnungen am Reumannplatz mit
      kleinen, oft 15–25 Jahre alten Junkers- oder Vaillant-Thermen; Gemeindebauten
      mit Zentralheizung (die wir nicht warten – das macht Wien Energie bzw. die
      Hausverwaltung); Neubau im Sonnwendviertel mit Fernwärme (ebenfalls keine
      Einzeltherme); Einfamilienhäuser in Oberlaa und Unterlaa mit großen
      Brennwertthermen oder Wärmepumpen.
    </p>

    <IconList
      items={[
        { text: "Gründerzeit-Wohnung am Keplerplatz: klassische Vaillant turboTEC mit Kamin, jährliche Wartung empfohlen." },
        { text: "Altbau-Wohnung am Viktor-Adler-Markt: Junkers Cerastar, oft mit Brauchwasserseite." },
        { text: "Reihenhaus in Oberlaa: Viessmann Vitodens 200, Brennwert mit Solarthermie-Einbindung." },
        { text: "Einfamilienhaus in Unterlaa: Buderus Logamax plus, oft im Kellerraum aufgestellt." },
        { text: "Sonnwendviertel-Wohnung: meist Fernwärme-Kompaktstation, keine Einzeltherme." },
      ]}
      columns={1}
    />

    <h2 style={{ marginTop: "48px" }}>Was genau passiert bei der Wartung?</h2>
    <IconList
      items={[
        { text: "Sichtprüfung – Rauchspuren, Feuchtigkeit, Anschlüsse." },
        { text: "Brenner zerlegen, reinigen, Zündelektroden und Ionisationsstift prüfen, ggf. tauschen." },
        { text: "Wärmetauscher kontrollieren – nass oder trocken reinigen je nach Zustand." },
        { text: "Ausdehnungsgefäß-Druck prüfen und nachfüllen." },
        { text: "Abgasmessung und Verbrennungseinstellung." },
        { text: "Warmwasser- und Heizkreis-Funktion prüfen." },
        { text: "Protokoll für Garantie und Hausverwaltung erstellen." },
      ]}
      columns={2}
    />

    <HighlightBox variant="blue" title="Gebündelte Wartung für Hausverwaltungen" icon="🏢">
      Wir betreuen in Favoriten mehrere Wiener Hausverwaltungen mit jährlicher
      Sammelwartung aller Wohnungs-Thermen in einem Objekt. Ablauf: Terminankündigung
      2 Wochen vorher per Aushang, Durchführung in 2–3 Arbeitstagen, Sammelprotokoll
      an die Verwaltung, Einzelprotokolle pro Wohnung. Das spart 20–30 % gegenüber
      Einzeleinsätzen.
    </HighlightBox>

    <MiniStory
      title="Jahreswartung in einem 20-Parteien-Haus am Humboldtplatz"
      context="1100 Wien, Oktober 2025"
      outcome="20 Thermen in 2 Tagen gewartet, 3 kritische Befunde (Ausdehnungsgefäß, Elektrode, Sicherheitsventil) sofort behoben, Protokollmappe an Hausverwaltung."
    >
      Die Hausverwaltung beauftragte uns mit der Sammelwartung aller Wohnungsthermen.
      Wir planten zwei Monteure, zwei Tage, 8–16 Uhr. Die Mieter wurden per Aushang und
      Briefkasten-Info eingeladen. An beiden Tagen waren alle Wohnungen zugänglich.
      Drei Thermen zeigten kritische Befunde (die Wartung hatte 3–5 Jahre Rückstand),
      wir tauschten direkt vor Ort. Die Hausverwaltung erhielt am Abend der zweiten
      Wartung eine digitale Mappe mit allen Protokollen.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Wartungsvertrag in Favoriten – was Sie bekommen</h2>
    <IconList
      items={[
        { text: "Einmal jährlich Wartung im selben Monat wie im Vorjahr, automatisch terminiert." },
        { text: "10 % Rabatt auf Wartungskosten gegenüber Einzeleinsatz." },
        { text: "Vorrang bei Störungen – wir sind innerhalb 24h da, bei Notfällen sofort." },
        { text: "Ersatzteil-Rabatt 5 % auf Listenpreis." },
        { text: "Laufzeit 12 Monate, jährlich kündbar, automatische Verlängerung." },
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
      <EntityCard label="Preis" title="Ab 129 € brutto" icon="€">
        Standardtherme, bis 90 Min. Arbeit, inkl. Standardverschleißteile.
      </EntityCard>
      <EntityCard label="Dauer" title="60–90 Min." icon="⏱">
        Typischer Wartungseinsatz. Bei Kombithermen 20 Min. mehr.
      </EntityCard>
      <EntityCard label="Protokoll" title="Digital + Papier" icon="📄">
        Sie erhalten das Prüfprotokoll digital und als Ausdruck. Für Garantie, Vermieter
        und Versicherung.
      </EntityCard>
      <EntityCard label="Termin" title="Spätsommer / Frühherbst" icon="📅">
        Optimale Zeit für die Wartung. Die Anlage geht frisch gewartet in die Heizsaison.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>Fehlercodes & was sie in Favoriten oft bedeuten</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Viele Favoritner Altbau-Thermen sind 15+ Jahre alt. Die häufigsten Fehlercodes,
      die wir bei Wartungen diagnostizieren:
    </p>

    <IconList
      items={[
        { text: "Vaillant F.22 – Wasserdruck zu niedrig (häufig nach Heizsaison-Beginn)." },
        { text: "Junkers E9 – Wärmetauscher heißlauf (Verkalkung, besonders in Favoriten wegen Wiener Wasserhärte)." },
        { text: "Viessmann A2 – Flammenüberwachung, Elektroden-Tausch fällig." },
        { text: "Bosch 286 – Abgassensor oder LAS-Schacht verlegt, Rauchfangkehrer einbeziehen." },
      ]}
      columns={1}
    />

    <HighlightBox title="Ab wann tauschen statt warten?" icon="🔧">
      Eine gut gewartete Therme läuft 18–22 Jahre. Bei Anlagen über 15 Jahren lohnt sich
      bei der Wartung ein Blick auf die Wirtschaftlichkeit: Reparaturkosten über die
      nächsten 5 Jahre vs. Tauschkosten inkl. Brennwertzuschlag und Förderung. Wir
      rechnen das bei jeder Wartung neutral durch – Sie entscheiden.
    </HighlightBox>
  </>
);
