import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was macht ein konzessionierter Gas-Installateur in Wien?"
      answer={
        <p>
          Ein konzessionierter <strong>Gas-Installateur in Wien</strong> plant, montiert,
          repariert und prüft Gasleitungen, Gasthermen, Gasherde und alle gasführenden
          Komponenten nach ÖVGW-Richtlinie G1/G2 sowie ÖNORM B 8131. Nur Betriebe mit
          gültiger WKÖ-Gewerbeberechtigung für das Gas-, Wasser- und Heizungsinstallateur-Handwerk
          dürfen gemäß Wiener Gasgesetz Arbeiten an Gasleitungen durchführen, Dichtheitsprüfungen
          protokollieren und Anlagen bei Wien Energie/Wiener Netze anmelden.
          SA Stadtinstallation ist seit 2015 eingetragener Meisterbetrieb mit WKÖ-Mitgliedschaft
          und Google Käuferschutz-Verifizierung.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Gas-Arbeiten, die wir in Wien ausführen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wien ist ein Gas-Land: Rund 600.000 Haushalte heizen mit Erdgas, viele davon über
      wohnungsweise installierte Gasthermen der Baujahre 1985–2005. Entsprechend breit ist das
      Spektrum der Arbeiten, die unser Team täglich erledigt – vom Thermentausch im Gründerzeithaus
      bis zur Komplettsanierung der Gasleitung in einem 1970er-Gemeindebau.
    </p>

    <IconList
      items={[
        { text: "Neuinstallation von Gasleitungen (Kupfer gepresst, Gas-Stahl, Edelstahl-Wellrohr)" },
        { text: "Austausch bestehender Gasthermen (Viessmann, Vaillant, Junkers, Bosch, Buderus)" },
        { text: "Umstellung Altgerät auf Brennwerttechnik inkl. Abgasführung" },
        { text: "Dichtheitsprüfung nach ÖVGW G1 – inkl. protokolliertem Prüfbericht" },
        { text: "Gasanschluss bei Neubau – Anmeldung bei Wiener Netze, Koordination mit Rauchfangkehrer" },
        { text: "Reparatur undichter Gasverschraubungen und defekter Absperrhähne" },
        { text: "Gasgeruch-Notdienst 24 h – Leckortung, Absperrung, Freigabe" },
        { text: "Installation von Gas-Durchlauferhitzern und Gasherden" },
      ]}
      columns={1}
    />

    <HighlightBox variant="red" title="Gasgeruch? Sofort handeln, nicht telefonieren." icon="⚠">
      Bei wahrnehmbarem Gasgeruch: <strong>Fenster öffnen, Gashahn zudrehen, keine elektrischen Schalter betätigen,
      kein Handy im Raum benutzen, Wohnung verlassen</strong>. Erst außerhalb der Wohnung anrufen:
      entweder direkt die Gas-Gebrechen-Hotline der Wiener Netze (128) oder unseren 24h-Notdienst.
      Wir kommen parallel und übernehmen nach der Netzfreigabe die Reparatur samt Dichtheitsprüfung.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Wie eine professionelle Gasleitungs-Installation abläuft</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Eine saubere Gasinstallation unterscheidet sich vom Pfusch nicht durch das Material, sondern
      durch die Dokumentation. Wir arbeiten nach einem festen Ablauf, der jeder Nachprüfung der
      MA 36 oder des Rauchfangkehrers standhält.
    </p>

    <IconList
      items={[
        { text: "1. Bestandsaufnahme: Verlauf, Querschnitte, Geräteliste, Abgasführung, Zählerstand" },
        { text: "2. Dimensionierung nach ÖVGW G2 – Druckverlustberechnung, Gleichzeitigkeitsfaktor" },
        { text: "3. Schriftliches Angebot mit Festpreis, Material, Norm-Referenzen und Terminrahmen" },
        { text: "4. Anmeldung bei Wiener Netze bei relevanten Änderungen (neue Geräte, geänderte Last)" },
        { text: "5. Ausführung mit geprüftem Material – verpresste Kupferrohre oder Edelstahl-Wellschlauch" },
        { text: "6. Dichtheitsprüfung mit 150 mbar Luftdruck über 10 Minuten, protokolliert" },
        { text: "7. Rauchfangkehrer-Abnahme koordiniert (bei Thermen- und Geräteänderung verpflichtend)" },
        { text: "8. Einweisung des Kunden, Übergabe Prüfprotokoll und Garantieunterlagen" },
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
      <EntityCard label="Rechtlich" title="ÖVGW G1/G2 & Wiener Gasgesetz" icon="⚖">
        Gasarbeiten sind in Wien ein reglementiertes Gewerbe. Nur zertifizierte Installateure
        mit Gewerbeberechtigung dürfen Gasleitungen öffnen, ändern und prüfen. SA Stadtinstallation
        ist WKÖ-Mitglied der Landesinnung Wien.
      </EntityCard>
      <EntityCard label="Technisch" title="Brennwerttechnik & Abgasführung" icon="🔥">
        Moderne Gasthermen nutzen Brennwerttechnik mit bis zu 109 % Nutzungsgrad. Erforderlich ist
        eine feuchteunempfindliche Abgasführung (meist LAS-Schacht) sowie Kondensatableitung.
      </EntityCard>
      <EntityCard label="Behörde" title="Wiener Netze & Rauchfangkehrer" icon="🏢">
        Wir melden Gasänderungen bei Wiener Netze an, koordinieren den Rauchfangkehrer und
        übergeben das Dichtheitsprotokoll. Nach Abschluss erhalten Sie die Freigabe für den Betrieb.
      </EntityCard>
      <EntityCard label="Finanziell" title="Förderung & Heizungstausch" icon="€">
        Beim Ausstieg aus Gas (Umstieg auf Wärmepumpe oder Fernwärme) gibt es „Raus aus Gas"-
        Förderungen der Stadt Wien und des Bundes. Bei reiner Geräteerneuerung bleibt Gas
        meist weiterhin sinnvoll – wir beraten neutral.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>Thermentausch: was Sie in Wien dazu wissen müssen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Gasthermen haben eine durchschnittliche Lebensdauer von 15–20 Jahren. Wird der Tausch
      notwendig, stellt sich die Frage: gleiches Gerät, Brennwerttausch oder kompletter Umstieg
      auf eine andere Energiequelle? In klassischen Wiener Altbauten mit Gaskamin ist oft nur
      ein Brennwertgerät mit LAS-Schacht möglich – hier beraten wir mit Blick auf den konkreten
      Schacht, die Mietsituation und die Wirtschaftlichkeit.
    </p>

    <MiniStory
      title="Thermentausch im 1080 Josefstadt"
      context="März 2026, Gründerzeithaus Albertgasse"
      outcome="Neue Vaillant ecoTEC plus 25 kW inkl. LAS-Führung, Betrieb nach 1,5 Tagen wieder aufgenommen, Förderung vorfinanziert."
    >
      Der Kunde hatte eine 22 Jahre alte Junkers-Therme mit defektem Gebläse. Nach Besichtigung
      empfahlen wir ein Brennwertgerät mit Erneuerung der Abgasführung, da der alte Gaskamin
      feuchteempfindlich war. Wir übernahmen die Kommunikation mit dem Rauchfangkehrer und
      dem Hausverwalter, holten die Rauchfang-Eignungsbestätigung ein und führten die
      Inbetriebnahme inkl. Wartungsvertrag durch.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Wiederkehrende Überprüfung – Pflicht für Gasanlagen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Gasanlagen in Wien müssen regelmäßig vom Rauchfangkehrer überprüft werden. Darüber hinaus
      empfiehlt sich alle 12 Monate eine Wartung durch den Installateur: Brennerreinigung,
      Tausch von Verschleißteilen (Zündelektroden, Dichtungen), Funktionskontrolle der
      Sicherheitsventile und Einstellung der Verbrennungswerte. Das spart Gas, verlängert
      die Lebensdauer und beugt Ausfällen vor.
    </p>

    <HighlightBox title="Wartungsvertrag – was er kostet und was er bringt" icon="🛠">
      Unsere Jahreswartung inklusive Anfahrt, Arbeitszeit, Standardverschleißteilen und
      Prüfprotokoll kostet für klassische Wohnungsthermen zwischen 129 € und 179 € brutto.
      Kunden mit Wartungsvertrag haben zudem Vorrang bei Störungen und erhalten einen
      vergünstigten 24h-Notdienst. Details im Wartungsvertrag auf Anfrage.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Warum Wiener Eigentümer und Hausverwaltungen uns rufen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wir arbeiten seit Jahren mit Wiener Hausverwaltungen und Genossenschaften zusammen.
      Das bedeutet: saubere Dokumentation, nachvollziehbare Abrechnung (auch direkt über
      Hausverwaltung), fristgerechte Terminkoordination und Rücksprache mit Mietern. Bei
      Gasarbeiten ist Vertrauen entscheidend – wir liefern schriftliche Festpreise, ÖVGW-
      konforme Dokumentation und Festtermine, an die wir uns halten.
    </p>

    <h2 style={{ marginTop: "48px" }}>Gasleitungsmaterialien: was Wien aktuell erlaubt und empfiehlt</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Früher dominierte verzinkter Stahl die Gasinstallation – heute ist das Bild
      heterogen. In Wien treffen wir drei Materialfamilien regelmäßig an: verpresstes
      Kupfer (Viega Gas, Geberit Mapress Gas), Edelstahl-Wellrohr (z.B. Hydroflex) und
      klassisches verzinktes Gewinderohr aus dem Altbestand. Das Material ist nicht
      Geschmackssache: ÖVGW-Richtlinien G1 und G2 definieren klar, welche Werkstoffe
      wo zulässig sind. Pressfitting-Kupfer ist heute State-of-the-Art für sichtbare
      Strecken in Wohnungen – schnell montiert, mit Kontrollfenster am Fitting, mit
      Prüfbericht für jeden einzelnen Pressvorgang. Edelstahl-Wellrohr nutzen wir
      bei engen Durchführungen und Dachbodendurchgängen, weil es flexibel zu verlegen
      ist und keine Hitzebeanspruchung beim Verpressen braucht. Altes Gewinderohr
      wird bei jedem Eingriff auf Korrosionsbestand geprüft – wenn wir Lochfraß oder
      Zunder finden, empfehlen wir den Abschnitts-Austausch, nicht die Reparatur.
    </p>

    <h2 style={{ marginTop: "48px" }}>Kosten & Preisorientierung Gas in Wien</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die häufigste Frage vor jedem Auftrag: was kostet das ungefähr? Wir arbeiten
      mit Festpreisen pro Projekt und können Ihnen nach Besichtigung ein
      schriftliches Angebot übergeben. Zur groben Orientierung: ein klassischer
      Thermentausch (gleiches Gerät, vorhandene Gasleitung, vorhandener Schacht)
      liegt in Wien meist zwischen 2.800 € und 3.900 € brutto inkl. Gerät und
      Entsorgung. Umstieg auf ein Brennwertgerät mit innenliegendem LAS-Schacht
      kommt typisch auf 4.500 € bis 6.500 €, abhängig von Schachtlänge und
      Fassadenzugang. Eine ÖVGW-Dichtheitsprüfung mit Protokoll kostet ab etwa 180 €,
      inklusive Anfahrt. Gaszählerverlegung plus neuer Absperrhahn im Keller bewegt
      sich im Bereich 450 €–750 €. Diese Zahlen sind keine Fixangebote – sie helfen
      Ihnen, Angebote einzuordnen, die Sie erhalten. Auffällig günstige Angebote
      ohne Festpreis-Garantie und ohne Nennung der ÖVGW-Normen sind in fast allen
      Fällen ein Warnsignal.
    </p>

    <h2 style={{ marginTop: "48px" }}>Raumluftabhängig oder raumluftunabhängig?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Der Unterschied klingt technisch, betrifft aber direkt die Sicherheit in Ihrer
      Wohnung. <strong>Raumluftabhängige Geräte</strong> (B-Geräte) ziehen die
      Verbrennungsluft aus dem Aufstellungsraum und leiten die Abgase über einen
      klassischen Kamin nach oben. Das ist billig und historisch verbreitet, braucht
      aber ausreichend Frischluftzufuhr und einen intakten Kamin. Moderne
      Wohnungen mit dichten Fenstern haben damit zunehmend Probleme – der
      Unterdruck aus einer Dunstabzugshaube kann die Verbrennung stören.
      <strong> Raumluftunabhängige Geräte</strong> (C-Geräte) holen sich die
      Verbrennungsluft über ein konzentrisches Rohr von außen und führen die
      Abgase im selben System getrennt hinaus. Das ist der Standard bei
      Brennwertgeräten, braucht einen LAS-Schacht (Luft-Abgas-System) oder
      Fassadenführung und ist für heutige, dicht gedämmte Bestandsgebäude
      die sichere Wahl. Wir beraten im Einzelfall – bei einer Wohnung im
      Gründerzeithaus mit Einzelofenkamin gehen beide Varianten, bei einer
      Dachgeschoßwohnung mit thermosanierter Gebäudehülle geht in der Regel
      nur noch raumluftunabhängig.
    </p>

    <h2 style={{ marginTop: "48px" }}>Raus aus Gas: Förderlandschaft 2024–2026</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wien und der Bund fördern den Umstieg von Gas auf Wärmepumpe, Fernwärme
      oder andere klimafreundliche Lösungen. Die Kombination aus Bundes-
      Sanierungsoffensive („Raus aus Gas") und Wiener Landesförderung bringt bei
      Einfamilienhäusern realistisch 10.000 € bis 16.000 € Zuschuss. Bei
      Wohnungen sind die Beträge geringer, aber für Fernwärme-Anschlüsse oder
      Etagen-Wärmepumpen ebenfalls zu haben. Wir rechnen bei jedem Angebot
      transparent durch, welche Förderung sich in Ihrem Projekt ansetzen
      lässt, und unterstützen bei der Antragstellung. Wichtig: Förderungen sind
      meist an Fristen, technische Mindeststandards (z.B. JAZ bei Wärmepumpen)
      und korrekte Dokumentation geknüpft. Wer hier schlampig plant, verliert
      unter Umständen den Anspruch – auch wenn die Anlage technisch einwandfrei
      läuft.
    </p>

    <h2 style={{ marginTop: "48px" }}>Häufige Fragen zu Gasinstallationen in Wien</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      <strong>Muss ich die Gastherme wirklich jährlich warten lassen?</strong> Bei
      raumluftabhängigen Geräten ist die Abgaswegüberprüfung durch den Rauchfangkehrer
      gesetzlich vorgeschrieben. Die Wartung selbst ist herstellerseitig Voraussetzung
      für die Gewährleistung – ohne Nachweis erlischt der Garantieanspruch im Schadensfall.
      <br /><br />
      <strong>Wer darf eine Gasleitung in Wien öffnen?</strong> Ausschließlich
      konzessionierte Installateure mit Gewerbeberechtigung Gas-Wasser-Heizung.
      Mieterseitige „Selbstreparaturen" sind nicht erlaubt und bei Schäden
      versicherungsrelevant – Haftpflicht und Hausversicherung können die
      Leistung verweigern.
      <br /><br />
      <strong>Wie schnell kommen Sie bei Gasgeruch?</strong> Unser Notdienst ist
      24/7 besetzt. Aus 1100 Favoriten sind wir in 1–15 Wien im Schnitt unter
      30 Minuten – in entlegeneren Bezirken wie 1140 oder 1210 bis 45 Minuten.
      Parallel bitte immer die Gas-Gebrechen-Hotline 128 (Wiener Netze) anrufen.
      <br /><br />
      <strong>Was passiert, wenn die Dichtheitsprüfung nicht besteht?</strong> Dann
      lokalisieren wir das Leck systematisch (Lecksuchgerät, Schauminspektion),
      tauschen die undichte Komponente und prüfen erneut. Die Anlage darf erst
      nach bestandener Prüfung wieder in Betrieb gehen – wir übergeben Ihnen das
      Protokoll als Nachweis für Hausverwaltung und Versicherung.
      <br /><br />
      <strong>Kann ich die Gastherme gegen eine Wärmepumpe tauschen, wenn ich nur
      eine Wohnung habe?</strong> In Einzelfällen ja: Luft-Wasser-Wärmepumpen mit
      Innenaufstellung (Abluft-Gerät) oder Fernwärme-Anschluss bei
      erschlossenen Lagen. In Wien Bezirken rund um den Hauptbahnhof
      (Sonnwendviertel, Quartier Belvedere) gibt es Fernwärme fast flächendeckend.
      Wir prüfen die konkrete Situation gemeinsam.
    </p>
  </>
);
