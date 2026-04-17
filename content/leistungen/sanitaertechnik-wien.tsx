import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was umfasst Sanitärtechnik in Wien?"
      answer={
        <p>
          <strong>Sanitärtechnik in Wien</strong> umfasst alle Arbeiten rund um Waschtisch,
          WC, Dusche, Wanne, Bidet, Urinal und die zugehörigen Vor- und Abwasserleitungen.
          SA Stadtinstallation plant und realisiert komplette Badsanierungen, einzelne
          Austauschmaßnahmen und barrierefreie Umbauten – von der ersten Skizze bis zur
          Endabnahme. Wir arbeiten mit Marken wie Geberit, Grohe, Hansgrohe, Laufen und
          Duravit und liefern alles aus einer Hand, inklusive Koordination mit Fliesenleger
          und Maler.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Unsere Sanitär-Leistungen</h2>
    <IconList
      items={[
        { text: "Komplette Badsanierung inkl. Neuverrohrung (Kalt, Warm, Abfluss)" },
        { text: "Bodengleiche Dusche mit Linienentwässerung oder Punktablauf" },
        { text: "Badewannentausch – klassisch Stahl, Acryl oder freistehend" },
        { text: "WC-Umbau auf Geberit-Wandhänge-System mit Unterputzspülkasten" },
        { text: "Barrierefreier Umbau nach ÖNORM B 1600 (Zugänglichkeit)" },
        { text: "Waschtisch- und Armaturentausch (Grohe, Hansgrohe, Villeroy & Boch)" },
        { text: "Urinal, Bidet, Stand-WC, Doppelwaschtisch, Handtuchheizkörper" },
        { text: "Kleine Reparaturen: Silikonerneuerung, Stöpsel, Duschstangen" },
      ]}
      columns={1}
    />

    <h2 style={{ marginTop: "48px" }}>Badsanierung in Wien – was realistisch möglich ist</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Ein durchschnittliches Wiener Wohnungsbad (4–6 m²) lässt sich in 8–14 Werktagen
      komplett sanieren – vorausgesetzt, wir dürfen parallel arbeiten (Sanitär, Fliesen,
      Strom). Entscheidend ist die Abstimmung mit der Hausverwaltung: Kernzeiten für
      Lärm (meist 8–17 Uhr werktags), Entsorgung über Bauaufzug oder Stiege, und
      Wasserabsperrung, die den gesamten Strang betreffen kann.
    </p>

    <HighlightBox variant="blue" title="So läuft ein typischer Badumbau bei uns ab" icon="🛁">
      <ol style={{ margin: 0, paddingLeft: "22px", lineHeight: 1.9 }}>
        <li>Vor-Ort-Termin mit Aufmaß, Fotos, Planungsbesprechung.</li>
        <li>Festpreis-Angebot mit 3D-Skizze, Material- und Farbvorschlägen.</li>
        <li>Bemusterung (Fliesen, Armaturen, Sanitärobjekte) in Partnerausstellung.</li>
        <li>Abbruch, Entsorgung, ggf. Estricharbeiten.</li>
        <li>Neuverrohrung, Spülkästen, Duschelemente.</li>
        <li>Fliesenleger, Maler, Elektriker – koordiniert durch uns.</li>
        <li>Endmontage der Sanitärobjekte, Silikonarbeiten, Endreinigung.</li>
        <li>Schriftliche Abnahme mit Mängelprotokoll (in der Regel: keiner).</li>
      </ol>
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Rechtlich" title="MA 37 & Mietrecht" icon="⚖">
        Bauliche Eingriffe in Mietwohnungen (z. B. Wannentausch auf Dusche) brauchen oft
        die Zustimmung der Hausverwaltung oder des Eigentümers. Wir beraten, welche
        Arbeiten anzeigepflichtig sind und welche als Instandhaltung gelten.
      </EntityCard>
      <EntityCard label="Technisch" title="Schallschutz ÖNORM B 8115" icon="🔇">
        Wand-WC-Systeme und Steigstränge müssen nach ÖNORM B 8115 schallentkoppelt montiert
        werden. Wir verwenden Körperschall-entkoppelte Halterungen und Dämmungen – das
        schützt vor Beschwerden der Nachbarn.
      </EntityCard>
      <EntityCard label="Gebäude" title="Altbau-Konstruktion" icon="🏛">
        In Altbauten mit Holztramdecke dürfen bodengleiche Duschen nur mit abgestimmter
        Tragkonstruktion und Dichtungsebene eingebaut werden. Wir arbeiten mit statisch
        geprüften Aufbauten nach ÖNORM B 3407.
      </EntityCard>
      <EntityCard label="Finanziell" title="Budgetrahmen" icon="€">
        Einfache Modernisierung (Objekte tauschen, Fliesen bleiben): ab 3.500 €.
        Komplette Badsanierung 5 m²: 12.000 – 22.000 €. Barrierefreier Vollumbau mit
        Fördermittel: individuell kalkuliert.
      </EntityCard>
    </div>

    <h2 style={{ marginTop: "48px" }}>Barrierefreier Umbau – Förderung und Planung</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Der Umbau einer Wanne zur bodengleichen Dusche oder die Nachrüstung von Stütz- und
      Haltegriffen ist in Wien mehrfach förderbar: über die Pflegeversicherung (PVA, SVS)
      bei Pflegegeldbezug, über die Wiener Wohnbauförderung und in Einzelfällen über die
      Gemeinde Wien. Wir erstellen Kostenvoranschläge nach den Vorgaben der jeweiligen
      Förderstelle, sodass diese sofort einreichungsfähig sind.
    </p>

    <MiniStory
      title="Wannen-Umbau zur bodengleichen Dusche in 1160 Ottakring"
      context="November 2025, 78-jährige Mieterin, Pflegestufe 3"
      outcome="Kompletter Umbau in 9 Werktagen, Förderung durch PVA i.H.v. 4.000 € direkt abgerechnet."
    >
      Der Wannenumbau war nach einem Sturz dringend nötig. Wir erstellten einen
      förderkonformen Kostenvoranschlag, die PVA genehmigte die Beihilfe binnen
      vier Wochen, wir stellten das Angebot auf Vorfinanzierung um und starteten
      sofort nach Genehmigung. Die Kundin konnte nach 9 Werktagen wieder sicher
      duschen – mit rutschhemmenden Fliesen (R10), Duschsitz und zwei Haltegriffen.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Kleine Sanitärarbeiten – oft schneller als gedacht</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Nicht jede Sanitärarbeit ist ein Großprojekt. Einzelne Reparaturen wie tropfende
      Mischbatterien, defekte Spülkästen, abgebrochene WC-Deckel, undichte Eckventile
      oder ausgetauschte Duschbrausen erledigen wir meist im Rahmen eines Einzeltermins
      von 30–90 Minuten. Minutengenaue Abrechnung oder kleiner Pauschalpreis – Sie
      entscheiden vor Arbeitsbeginn.
    </p>

    <HighlightBox title="Angebote für Hausverwaltungen & WEG" icon="🏢">
      Wohnungseigentümergemeinschaften (WEG) und Hausverwaltungen betreuen wir mit
      Rahmenvereinbarungen: feste Stundensätze, Sammelabrechnung, fixe Ansprechperson.
      Bei Bedarf führen wir jährliche Sanitär-Inspektionsrunden im Gebäude durch, bei
      denen Spülkästen, Eckventile und Warmwasserleitungen stichprobenweise geprüft
      werden – das beugt teuren Wasserschäden vor.
    </HighlightBox>

    <h2 style={{ marginTop: "48px" }}>Planung einer Badsanierung: wie lange dauert das wirklich?</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Die häufigste Kundenfrage vor einer Badsanierung ist: „Wie lange können wir
      nicht duschen?" Die ehrliche Antwort hängt vom Umfang ab. Ein reiner
      Wanne-zu-Dusche-Umbau in einem Standardbad ohne Leitungsänderungen dauert
      typisch 4–6 Arbeitstage – inklusive Abriss, neuer Estrich-Aufbau mit
      Gefälle, Abdichtung, bodenebene Duschrinne, Wandfliesen, Armatur, Silikon-
      Fugen. Bei einem Komplettumbau mit Verlegung der Leitungen (neue Position
      für WC, Waschtisch, Dusche) plus Entfernung alter Fliesen und neuer
      Fliesenlegung sind 2–3 Wochen realistisch. Wenn zusätzlich Steigleitungen
      mit erneuert werden müssen (was in Gründerzeithäusern oft sinnvoll ist),
      kommen nochmal 3–5 Tage dazu. Wir planen grundsätzlich in drei Phasen:
      Demontage/Rohbau/Leitungen (Tag 1–3), Abdichtung + Fliesenlegung
      (Tag 4–10), Sanitär-Endmontage + Silikon-Fugen (letzte 2 Tage). Ein Bad,
      das parallel ausgetauscht wird, bleibt nur so lange geschlossen, wie
      die Leitungen offen sind – die Duschmöglichkeit bei Nachbarn oder in
      einer Zweitwohnung bleibt idealerweise vorgeplant.
    </p>

    <h2 style={{ marginTop: "48px" }}>Barrierefreiheit: mehr als nur Haltegriffe</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Barrierefreies Bad ist ein Thema, das jedes Lebensalter betreffen kann – nicht
      nur nach Unfall oder im Pflegefall. Gute Planung beginnt mit der
      Bewegungsfläche: vor WC und Dusche sollten mindestens 120 × 120 cm frei
      bleiben, besser 150 × 150 cm. Die Dusche ist bodengleich mit flachem
      Einstieg und rutschhemmenden Fliesen (Mindestanforderung R10, in der
      Dusche R11 mit V4-Verdrängung). WC-Höhe auf 46–48 cm (Standard ist
      40–42 cm) erleichtert Aufstehen; Haltegriffe sind keine Dekoration,
      sondern müssen richtig hoch und in der Wand verankert sein. Für
      Förderung durch PVA, Land Wien oder private Versicherung dokumentieren
      wir den Umbau normgerecht (ÖNORM B 1600 für Barrierefreiheit). Wir
      beraten bei Projektbeginn, welche Förderschiene (Pflegekostenzuschuss,
      Gesundheits- und Pflegefonds, etc.) infrage kommt.
    </p>

    <h2 style={{ marginTop: "48px" }}>Hersteller und Markenqualität: was wir empfehlen und warum</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Im Sanitärmarkt gibt es Marken, mit denen wir seit Jahren gute
      Erfahrungen machen – und Produkte, bei denen wir vorsichtig sind. Bei
      <strong> Keramiken</strong> (WC, Waschtisch) greifen wir meist auf
      Villeroy & Boch, Duravit oder Laufen zurück: solide Qualität, gute
      Ersatzteilverfügbarkeit auch nach Jahren, klare Spezifikationen. Bei
      <strong> Armaturen</strong> setzen wir meist Grohe oder Hansgrohe ein –
      beide Hersteller haben ein weitreichendes Ersatzteilprogramm, auch für
      ältere Modelle. Billigarmaturen aus Baumarkt-Segment vermeiden wir, weil
      die Kartuschen nach 2–4 Jahren auswechselbar sind – wenn es sie dann
      noch gibt. Bei <strong>Duschabtrennungen</strong> arbeiten wir mit
      Partnerbetrieben, weil die Maßanfertigung (bei schiefen Wänden eines
      Altbaus fast Standard) eine eigene Disziplin ist. Bei
      <strong>Spülkästen</strong> ist Geberit der Marktführer – wir empfehlen
      die Standardmodelle Duofix oder Kombifix, weil die Ersatzteilversorgung
      aktuell und in 10 Jahren verlässlich sein wird.
    </p>

    <h2 style={{ marginTop: "48px" }}>Gewerbe-Sanitär: besondere Anforderungen</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Bei Gewerbe-Sanitärbauten – Restaurants, Arztpraxen, Kindergärten, Hotels –
      gelten neben ÖNORM-Anforderungen oft zusätzliche behördliche Vorgaben.
      In Gastronomiebetrieben sind <strong>Fettabscheider</strong> nach
      ÖNORM B 5101 dimensionspflichtig, in Zahnarztpraxen gelten
      <strong> Amalgamabscheider</strong> (ÖNORM B 5106), in Krankenhäusern
      und medizinischen Einrichtungen sind <strong>Rückflussverhinderer</strong>
      an jedem kritischen Zapfpunkt Pflicht. Wir arbeiten diese Normen in
      die Planung ein und dokumentieren die Abnahme durch MA 15
      (Lebensmittelbehörde) bzw. MA 40 (Gesundheitsamt) mit. Bei
      Neueröffnungen ist die sanitäre Abnahme oft der kritische Pfad – wir
      planen so, dass keine Nacharbeit nötig wird.
    </p>

    <h2 style={{ marginTop: "48px" }}>Kosten-Orientierung Sanitärtechnik Wien</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Ein einzelner WC-Tausch mit Keramik, Spülkasten, Anschluss: 700 €–1.200 €
      je nach Modell. Waschtisch-Wechsel mit Unterschrank und Armatur:
      650 €–1.400 €. Wannenumbau zur bodenebenen Dusche (mit Fliesenanpassung,
      neuer Ablauf, Abdichtung): 4.500 €–7.500 €. Komplettsanierung eines
      Standardbads (6–8 m²) mit allen Positionen, exkl. Fliesen und Malerarbeiten:
      9.500 €–16.000 €. Premium-Badsanierung (Designarmaturen, Duschfliesen
      großformatig, Naturstein, aufwendige Beleuchtung): 18.000 €–32.000 €.
      Ein Gäste-WC-Neueinbau in bestehender Abstellkammer: 5.500 €–9.500 €,
      je nach Leitungsabstand und baulichen Voraussetzungen. Die genauen
      Zahlen klären wir immer im Vor-Ort-Termin.
    </p>

    <h2 style={{ marginTop: "48px" }}>Was Sie vor dem Beratungstermin vorbereiten können</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Je besser die Grundlage, desto präziser unser Angebot. Hilfreich sind:
      eine grobe Skizze des Bads (mit Maßen), Fotos aller Wände,
      ein Grundriss-Ausschnitt der Wohnung (wenn vorhanden), die Information,
      ob Fallstrang, Steigleitung und Fußbodenaufbau bekannt sind. Bei
      Mietwohnungen: schriftliche Zustimmung des Vermieters bzw. Hausverwaltung
      für Umbauten, die über reine Reparaturen hinausgehen. Bei
      Eigentumswohnungen: Wohnungseigentümergemeinschafts-Zustimmung für
      alles, was die Allgemeinflächen (Fallstrang, Versorgungsleitungen)
      betrifft. Wir klären im Beratungsgespräch, welche Freigaben nötig
      sind – oft mehr als Kunden annehmen, selten mehr als in 1–2 Wochen
      einholbar.
    </p>
  </>
);
