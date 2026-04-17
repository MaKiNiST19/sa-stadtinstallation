import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Notfall-Installateur in der Inneren Stadt (1010): Wie schnell sind wir da?"
      answer={
        <p>
          Der 1. Bezirk ist dicht, historisch und denkmalgeschützt – Notfälle
          brauchen hier besondere Vorsicht. Wir sind 24/7 erreichbar und fahren
          ab unserem Sitz in 1100 Favoriten über Gürtel/Ring in 15–25 Minuten
          in die Innere Stadt. Für denkmalgeschützte Häuser bedeutet Notdienst:
          schnell absperren, Substanz schützen, dokumentieren und die dauerhafte
          Reparatur in Abstimmung mit Hausverwaltung und ggf. Bundesdenkmalamt
          planen.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Notdienst-Einsätze in 1010</h2>
    <IconList
      items={[
        { text: "Rohrbruch in UNESCO-geschützten Häusern rund um Stephansplatz / Graben" },
        { text: "Heizungsausfall in Büroetagen am Schottenring / Ring" },
        { text: "Wasseraustritt in Palais-Wohnungen (Habsburgergasse, Plankengasse)" },
        { text: "Verstopfung im Gastro-Keller am Fleischmarkt / Graben" },
        { text: "Gasgeruch-Alarm in Wohnungen über Geschäftslokalen" },
        { text: "Kellerflutung in Ringstraßen-Palais nach Starkregen" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Substanzschutz zuerst" icon="🏛">
      In der Inneren Stadt arbeiten wir bei Notfällen mit Blick auf die
      historische Substanz: Stuck nicht beschädigen, Parkett trocken halten,
      Nachbarn zeitnah informieren. Die kurze Reaktionszeit (15–25 Minuten)
      ist zentral – je schneller abgesperrt, desto kleiner der Folgeschaden.
    </HighlightBox>

    <MiniStory
      title="Heizungs-Wasseraustritt am Graben"
      context="1010 Wien, Palais-Wohnung, 220 m², Ringleitungssystem aus 1987"
      outcome="Leck in 40 Minuten abgesperrt, Wohnung trocken, Reparatur in Etappen über HV koordiniert."
    >
      Freitagabend 22:30, Anruf eines Bewohners: Wasser rinnt aus der Decke in
      den Salon. Wir fuhren ab Humboldtgasse in 22 Minuten hin, lokalisierten
      einen Heizungsverbinder über der Stuckdecke (zugänglich nur über eine
      Revisionsklappe, die wir im Gang öffneten). Abgesperrt, Wasser
      aufgenommen, Parkett trocken – keine Folgeschäden. Dauerhafte Lösung:
      Ringleitungs-Teilsanierung in Abstimmung mit HV.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Immer erreichbar</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Tel. +43 676 634 90 34 – direkte Verbindung, keine Warteschleife. Für
      1010 rechnen wir mit 15–25 Minuten Anfahrt. Nach Einsatz: dokumentierter
      Bericht für Versicherung und Hausverwaltung.
    </p>
  </>
);
