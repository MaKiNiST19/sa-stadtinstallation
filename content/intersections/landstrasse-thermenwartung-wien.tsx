import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Thermenwartung in der Landstraße (1030): Besonderheiten?"
      answer={
        <p>
          Im 3. Bezirk ist der Altbau rund um Weißgerberviertel und Rochusmarkt
          noch sehr thermenlastig – im Neubau-Gürtel rund um den Hauptbahnhof
          dominiert Fernwärme. Wir warten die Thermen im Altbau und prüfen in
          den Übergangszonen, ob sich ein Umstieg auf Fernwärme rechnet. Die
          Jahreswartung kostet einen Bruchteil der Kosten eines vermeidbaren
          Ausfalls.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Wartungsarbeiten</h2>
    <IconList
      items={[
        { text: "Brenner, Ionisationselektrode, Zündelektrode reinigen/prüfen" },
        { text: "Wärmetauscher prüfen, bei Bedarf entkalken" },
        { text: "Gaseinstellung nach Herstellerwerten" },
        { text: "Abgasweg mit Rauchfangkehrer (bei raumluftabhängigen Geräten)" },
        { text: "Systemdruck, Ausdehnungsgefäß, Sicherheitsventil" },
        { text: "Wartungsprotokoll, Empfehlung für Folgearbeiten" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Jugendstil-Kamine checken" icon="🏛">
      In vielen Jugendstilhäusern im Weißgerberviertel ist der Kamin feucht
      oder undicht geworden. Eine Jahreswartung ohne Rauchfangkehrer-Blick auf
      den Abgasweg ist in solchen Häusern unvollständig. Wir arbeiten im
      Tandem mit dem Kehrer und dokumentieren den Zustand.
    </HighlightBox>

    <MiniStory
      title="Wartung als Frühwarnung"
      context="1030 Wien, Gründerzeithaus am Rennweg, Vaillant-Atmo-Therme 2012"
      outcome="Verzogene Dichtung am Wärmetauscher gefunden, getauscht – Ausfall vermieden, Mieter zahlte geringe Wartungs-Rechnung statt teuren Notdiensts."
    >
      Während der Jahreswartung fiel eine leicht feuchte Stelle am
      Wärmetauscher auf. Befund: Dichtung spröde, Austritt minimal. Wir
      tauschten die Dichtung sofort mit Lagerware – der wahrscheinliche
      Ausfall in der Heizperiode wurde so abgewendet. Kosten Wartung + Dichtung
      deutlich unter dem, was ein Notdiensteinsatz im Winter gekostet hätte.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Termin buchen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Für 1030 nehmen wir Anfragen tel. oder per Kontaktformular entgegen.
      Terminvorschläge binnen 2 Werktagen, Sammelwartung für Hausverwaltungen
      nach Absprache.
    </p>
  </>
);
