import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Worauf muss ein Installateur im 1. Bezirk achten?"
      answer={
        <p>
          Die <strong>Innere Stadt</strong> ist Wiens historischer Kern mit hohem
          Denkmalschutzanteil und einer Baustruktur, die von gotischen Elementen über
          barocke Palais bis zur Gründerzeit reicht. Installateur-Arbeiten in 1010
          erfordern: behutsames Arbeiten im Bestand, Abstimmung mit dem Bundesdenkmalamt
          bei baulichen Eingriffen, Umgang mit alten Blei- und Messingverrohrungen, enge
          Stiegenhäuser und oft strenge Lieferfenster für Fußgängerzonen. Wir
          arbeiten in der Inneren Stadt seit Jahren mit Schwerpunkt Palais- und
          Gewerbeinstallationen.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge zwischen Stephansplatz und Ringstraße</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die Innere Stadt ist kein klassisches Wohngebiet – nur rund 16.400 Einwohner auf
      3 km². Der Großteil unserer Arbeit hier betrifft historische Palais, Büros,
      Gastronomie und Hotellerie. Das verändert die Anforderungen: höhere
      Nutzungsintensität der Sanitäreinrichtungen, strengere Anforderungen an
      Dichtheit und Hygiene, oft Nachtarbeit wegen Geschäftsbetrieb.
    </p>

    <IconList
      items={[
        { text: "Denkmalschutz-abgestimmter Gasleitungstausch in Palaisbauten am Ring" },
        { text: "Gewerbe-WC-Anlagen in Hotellerie und Gastronomie – normkonform nach ÖNORM B 2531" },
        { text: "Thermentausch in Altbauten mit feuchteunempfindlicher Abgasführung (LAS)" },
        { text: "Rohrbruch-Notdienst mit besonders sensibler Schadensbegrenzung (Parkett, Stuckdecken)" },
        { text: "Sanitäreinbau in Dachgeschoß-Ausbauten (Statik & Schallschutz nach ÖNORM B 8115)" },
        { text: "Klima- und Lüftungsanbindungen für Büroetagen und Retail am Graben/Kärntner Straße" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Besonderheit 1010: Lieferzonen & Zufahrt" icon="🚚">
      Große Teile der Inneren Stadt sind Fußgängerzone oder Anrainer-Zufahrt. Für
      Liefer- und Absperr-Arbeiten (Wasserzählertausch, größere Rohrlieferungen)
      brauchen wir eine Ausnahmegenehmigung der MA 46. Wir kümmern uns darum – inkl.
      rechtzeitiger Anmeldung, damit Ihre Arbeit nicht am Zufahrtsschein scheitert.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Denkmal" title="Bundesdenkmalamt" icon="🏛">
        Bei baulichen Eingriffen in denkmalgeschützten Häusern ist eine Anzeige (§ 4 DMSG)
        erforderlich. Wir arbeiten mit BDA-erfahrenen Architekten und halten Verputze,
        Stuckdecken und historische Böden wo möglich unberührt.
      </EntityCard>
      <EntityCard label="Grätzl" title="Stephansplatz & Graben" icon="🛍">
        Retail- und Hotellerie-Dichte. Unsere Aufträge hier: Gewerbe-Sanitär,
        Brandschutz-konforme Leitungen, Betriebspausen-Fenster nachts 22–06.
      </EntityCard>
      <EntityCard label="Grätzl" title="Schottenring & Börsegasse" icon="🏢">
        Büro- und Finanzquartier. Viele Grand-Palais und Jahrhundertwende-Büros
        mit Komplettsanierungsbedarf.
      </EntityCard>
      <EntityCard label="Grätzl" title="Am Hof & Freyung" icon="⛪">
        Historisches Zentrum. Hoher Kirchen- und Klosteranteil – wir haben dort
        mehrfach Sakristei- und Pfarrhaus-Sanitär saniert, mit viel Erfahrung
        im Bestand.
      </EntityCard>
    </div>

    <MiniStory
      title="Gasleitungs-Sanierung in einem Palais am Ring"
      context="1010 Wien, Bauepoche 1878"
      outcome="Austausch auf Pressfitting-Stahl, 3-Tage-Einsatz bei laufendem Büro­betrieb, 0 Nachträge."
    >
      Ein Anwaltsbüro am Ring meldete periodischen Gasgeruch. Die Messung zeigte
      diffuse Leckage über mehrere alte Verschraubungen. Wir tauschten die gesamte
      Hausleitung in Etappen aus (3 Tage, freitags bis sonntags, kein Büroausfall),
      dokumentierten jede Teiletappe mit Dichtheitsprüfung und übergaben ein
      vollständiges ÖVGW-konformes Abnahmeprotokoll an die Hausverwaltung.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Warum große Hausverwaltungen uns in 1010 rufen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      In der Inneren Stadt sind wir kein anonymer Dienstleister – hier zählt, dass die
      Hausverwaltung einen verlässlichen Ansprechpartner hat, der vom ersten
      Telefonat bis zur Endabnahme derselbe bleibt. Wir vergeben keine Gewerke an
      unbekannte Subunternehmer. Jede Dichtheitsprüfung, jedes Abnahmeprotokoll
      trägt den Stempel unseres Meisterbetriebs – nachweisbar und nachhaltbar auch
      Jahre später.
    </p>

    <HighlightBox title="Arbeitszeit-Fenster nach Ihrer Vorgabe" icon="🕑">
      Geschäftsbetrieb und Kundenfrequenz stehen in 1010 oft im Vordergrund. Wir
      passen uns an: Frühstart vor 07:00, Nacht-Slots 22:00–06:00, Wochenend-Einsätze
      bei geplanten Absperrungen. Sprechen Sie uns an – wir finden ein Fenster, das
      für Ihre Mieter, Ihr Geschäft oder Ihre Kanzlei passt.
    </HighlightBox>
  </>
);
