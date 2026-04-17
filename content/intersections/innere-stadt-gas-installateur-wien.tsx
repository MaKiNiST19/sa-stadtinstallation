import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Wer darf Gas-Installationen in 1010 Wien ausführen?"
      answer={
        <p>
          In der <strong>Inneren Stadt</strong> wie in ganz Wien dürfen Gasarbeiten nur
          konzessionierte Gas-, Wasser- und Heizungsinstallateure ausführen (WKÖ-
          Gewerbeberechtigung, Eintrag in die Landesinnung). In 1010 kommen
          Denkmalschutz-Aspekte hinzu: Bei baulichen Eingriffen in denkmalgeschützten
          Gebäuden ist eine Anzeige nach § 4 Denkmalschutzgesetz beim Bundesdenkmalamt
          erforderlich. SA Stadtinstallation ist konzessioniert, WKÖ-Mitglied und hat
          in der Inneren Stadt mehrfach Gasleitungs-Sanierungen in Palais und
          historischen Gebäuden abgewickelt.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Gas in der Inneren Stadt – das Technische Profil</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      1010 ist kein Bezirk mit vielen Wohnungs-Gasthermen – viele Häuser sind an
      Fernwärme angeschlossen oder nutzen zentrale Kesselanlagen. Wo Gas verwendet wird,
      findet man typischerweise: ältere Gasleitungen aus Stahl (teils über 40 Jahre),
      zentrale Heizkesselanlagen in Palais, Gewerbeküchen in Gastronomie und Hotellerie,
      Gasthermen in einzelnen Wohnungen mit komplizierter Abgasführung über historische
      Kamine.
    </p>

    <IconList
      items={[
        { text: "Gasleitungs-Sanierung in Palaisgebäuden (Ringstraße, Parkring, Schottenring)" },
        { text: "Dichtheitsprüfung und Erneuerung der Hauseinspeisung bei Eigentümerwechsel" },
        { text: "Gewerbe-Gasanschluss für Gastronomie (Küchengeräte, Kombidämpfer, Gas-Heizung)" },
        { text: "Einzel-Therme mit LAS-Schacht-Nachrüstung bei denkmalgeschütztem Kamin" },
        { text: "Umstellung von Altkessel auf Brennwert-Zentralheizung in Zinshäusern" },
        { text: "Koordination Rauchfangkehrer + MA 36 + Bundesdenkmalamt bei Änderungen" },
      ]}
      columns={1}
    />

    <HighlightBox variant="red" title="Gasgeruch in der Inneren Stadt – Erstmaßnahmen" icon="⚠">
      Bei wahrnehmbarem Gasgeruch sofort: Fenster öffnen, Gashahn zudrehen, keine
      elektrischen Schalter (auch keinen Aufzug!) betätigen, Gebäude verlassen.
      Draußen anrufen: Wiener Netze Gas-Gebrechen 128 oder unser 24h-Notdienst.
      In historischen Gebäuden ist die Evakuierung oft über sehr enge Stiegenhäuser –
      ruhig vorgehen, Mitbewohner mitinformieren.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Arbeiten bei laufendem Geschäftsbetrieb</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Ein Großteil unserer Gasarbeiten in 1010 findet in Objekten statt, die tagsüber
      betrieblich genutzt werden (Kanzleien, Hotellerie, Retail). Wir planen diese
      Projekte meist so, dass Absperrungen und lautere Arbeiten in Randzeiten (früh
      morgens oder am Wochenende) liegen. Bei Gastronomiebetrieben erledigen wir
      Gasarbeiten traditionell am Ruhetag oder in den Stunden zwischen Frühstück und
      Mittagsgeschäft.
    </p>

    <MiniStory
      title="Thermentausch mit Denkmal-Abstimmung, 1010 Schottenring"
      context="Frühjahr 2026, Palais aus 1883"
      outcome="Neue Brennwerttherme + denkmalkonforme Abgasführung, 5 Tage Bauzeit, BDA-Freigabe schriftlich, 0 Nachträge."
    >
      Eine Anwaltskanzlei in einem Palais am Ring hatte eine 25 Jahre alte Gastherme,
      die ausfiel. Der Kamin war denkmalgeschützt und feuchteempfindlich. Wir
      beantragten beim Bundesdenkmalamt eine Anzeige nach § 4 DMSG für die
      Abgasführung (innenliegender LAS-Schacht aus Edelstahl), koordinierten mit
      Rauchfangkehrer und Hausverwaltung und führten die Arbeiten an einem langen
      Wochenende aus. Am Montag früh war die Kanzlei wieder beheizt.
    </MiniStory>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Rechtlich" title="ÖVGW G1/G2 + DMSG" icon="⚖">
        Gas-Installation in denkmalgeschützten Gebäuden verlangt ÖVGW-Konformität UND
        Anzeige nach Denkmalschutz. Wir beherrschen beides.
      </EntityCard>
      <EntityCard label="Behörde" title="Wiener Netze + MA 36" icon="🏢">
        Bei größeren Änderungen ist eine Meldung bei Wiener Netze (Netzbetreiber) und
        ggf. bei MA 36 (Gewerberecht) nötig. Wir übernehmen die Kommunikation.
      </EntityCard>
      <EntityCard label="Material" title="Pressfitting + Edelstahl" icon="🔧">
        In bewohnten Palais arbeiten wir bevorzugt mit verpressten Verbindungen statt
        mit Schweißen – weniger Hitze, weniger Staub, kein Funkenschlag nahe
        historischen Materialien.
      </EntityCard>
      <EntityCard label="Zugang" title="Anrainer-Zufahrt" icon="🚚">
        Für Materialtransport in die Kernzone 1010 organisieren wir Sondergenehmigungen
        bei MA 46 und liefern in den vorgeschriebenen Zeitfenstern an.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>Gas-Umstieg in der Inneren Stadt – worauf zu achten ist</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Viele Eigentümer in 1010 erwägen angesichts Klimazielen und „Raus aus Gas"-
      Förderungen den Umstieg auf Fernwärme oder Wärmepumpe. In der Inneren Stadt ist
      Fernwärme oft direkt am Haus verfügbar – der Anschluss ist dann technisch meist
      gut machbar, erfordert aber Platz für die Kompaktstation und einen Raum, der
      ausreichende Belüftung und Zugänglichkeit bietet. Wärmepumpen sind in
      denkmalgeschützten Häusern komplizierter (Außengerät, Schallschutz, Fassaden-
      Eingriffe) – hier planen wir individuell.
    </p>

    <HighlightBox title="Gas-Dichtheitsprotokoll für Hausverwaltungen" icon="📋">
      Hausverwaltungen in 1010 verlangen bei jedem Mieter- oder Eigentümerwechsel ein
      aktuelles Dichtheitsprotokoll der Gasleitung. Wir führen die Prüfung nach ÖVGW G1
      durch, erstellen das Protokoll digital und legen es binnen 24 h vor. Preis pauschal
      nach Wohnungsgröße; für Rahmenverträge gibt es eigene Konditionen.
    </HighlightBox>
  </>
);
