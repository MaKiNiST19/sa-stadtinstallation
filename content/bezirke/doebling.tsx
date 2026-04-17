import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was prägt Döbling (1190) aus Installateurssicht?"
      answer={
        <p>
          <strong>Döbling</strong> ist Wiens Weinbergs-Bezirk: Grinzing,
          Heiligenstadt, Nußdorf, Sievering, Oberdöbling, und der moderne
          Karl-Marx-Hof entlang der Heiligenstädter Straße. Die Mischung reicht
          von Heurigenhäusern mit historischer Substanz über Villen im Cottage
          bis zu großen Gemeindebauten. Themen hier: Wärmepumpen in
          Einfamilienhäusern, Heizungssanierung in denkmalgeschützten Häusern
          (Karl-Marx-Hof!), Premiumbäder in Villen und Thermen in Altbauwohnungen.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 19. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht von der Heiligenstädter Straße und dem
      Karl-Marx-Hof über Oberdöbling bis Grinzing, Sievering und Nußdorf. In
      den höheren Lagen finden sich Villen und Weingut-Häuser mit langjährigem
      Sanierungsbedarf. Der Karl-Marx-Hof (1.382 Wohnungen, Baujahr 1927–1930)
      ist ein eigenes Technik-Universum – Zentralheizung, Fernwärme-Anschluss,
      historische Substanz.
    </p>

    <IconList
      items={[
        { text: "Wärmepumpe und Erdwärme in Villen Grinzing / Sievering" },
        { text: "Heizkörper- und Ventiltausch im Karl-Marx-Hof (HV-koordiniert)" },
        { text: "Bad-Komplettumbau in Gründerzeit-Eigentumswohnungen Oberdöbling" },
        { text: "Thermenservice in Mietwohnungen Heiligenstädter Straße" },
        { text: "Solarthermie und PV-Warmwasser in Heurigen-Hausern Nußdorf" },
        { text: "Rohrsanierung in aufwendig denkmalgeschützten Häusern" },
      ]}
      columns={1}
    />

    <HighlightBox variant="yellow" title="Karl-Marx-Hof: Denkmalschutz im Großformat" icon="🏛">
      Der Karl-Marx-Hof steht unter Ensembleschutz. Fassaden-Eingriffe (z.B.
      Außengeräte Wärmepumpe) sind nicht zulässig. Wir arbeiten dort
      ausschließlich mit Wiener Wohnen, planen innenliegende LAS-Schächte und
      halten sämtliche Oberflächen-Veränderungen mit Bundesdenkmalamt und
      MA 19 ab.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Heiligenstadt & Karl-Marx-Hof" icon="🏛">
        Großgemeindebau, denkmalgeschützt. Heizkörper, Fernwärme,
        HV-Koordination.
      </EntityCard>
      <EntityCard label="Grätzl" title="Oberdöbling" icon="🍷">
        Dichter Altbau, sanierte Eigentumswohnungen. Premiumbäder,
        Heizungsmodernisierung.
      </EntityCard>
      <EntityCard label="Grätzl" title="Grinzing & Sievering" icon="🍇">
        Weinbergs-Grätzl, Villen. Wärmepumpen, Erdwärme, Solarthermie.
      </EntityCard>
      <EntityCard label="Grätzl" title="Nußdorf" icon="⛴">
        Donaunähe, Einfamilienhäuser, Heurigen. Wärmepumpen, Kellertrockenlegung,
        Warmwasser.
      </EntityCard>
    </div>

    <MiniStory
      title="Erdwärme für eine Villa in Grinzing"
      context="1190 Wien, Villa Baujahr 1925, 310 m², bisher Gasetagenheizung"
      outcome="Sole-Wasser-Wärmepumpe mit 4 Tiefenbohrungen à 95 m, Pufferspeicher 1.000 l, Inbetriebnahme vor Heizperiode."
    >
      Die Eigentümerfamilie wollte ein Generationen-Projekt: maximale
      Energieunabhängigkeit, Wärmepumpe auch bei Hitze als Passivkühlung.
      Heizlast 16 kW. Wir koordinierten die Tiefenbohrungen (viergleisig, je
      95 m), verlegten die Sole-Verteiler im Technikraum, setzten eine
      Sole-Wasser-Wärmepumpe mit 14 kW, einen 1.000-l-Puffer und ein
      Regelungssystem mit Solarthermie-Anbindung. Die Fassadenoptik blieb
      unverändert – alle Außengeräte entfielen durch die Erdsonden.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Döbling</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Von 1100 Favoriten über Gürtel – Heiligenstädter Straße rechnen wir mit
      25–35 Minuten bis Oberdöbling, für Grinzing oder Sievering eher
      35–45 Minuten. Große Projekte planen wir mit Baustellenlogistik (Kran,
      LKW für Bohrgeräte), Notdienste sind im 19. Bezirk möglich, aber
      zeitintensiver als im Süden der Stadt.
    </p>
  </>
);
