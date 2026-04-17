import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Was macht Meidling (1120) zu einem starken Installateur-Bezirk?"
      answer={
        <p>
          <strong>Meidling</strong> ist einer der größten Wohnbezirke Wiens:
          Gemeindebau der Zwischenkriegszeit, Nachkriegs-Wohnblöcke,
          Gründerzeit-Altbau rund um die Meidlinger Hauptstraße und moderner
          Neubau entlang der Schönbrunner Schloßstraße und dem Areal Gaudenzdorf.
          Für uns als Nachbarbezirk bedeutet das ein hohes Auftragsvolumen –
          von Thermentausch und Bad-Modernisierung bis hin zu
          Fernwärme-Anschlüssen im Neubau.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 12. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht vom Meidlinger Markt über die Meidlinger
      Hauptstraße und den Philadelphiabrücke-Knoten bis nach Altmannsdorf und
      Unter-Meidling. Die Gemeindebauten (Fuchsenfeldhof, Schöpfwerk) sind eigene
      Großprojekte; wir arbeiten hier primär auf Wiener-Wohnen-Freigabe. Rund um
      das U6-Band und den Bahnhof Meidling kommen Gewerbeflächen und
      Bürogebäude dazu.
    </p>

    <IconList
      items={[
        { text: "Thermentausch in Zinshäusern Meidlinger Hauptstraße" },
        { text: "Heizkörper- und Ventiltausch in Wiener-Wohnen-Wohnungen (Schöpfwerk, Fuchsenfeldhof)" },
        { text: "Rohrbruch-Notdienst rund um Philadelphiabrücke / Bahnhof Meidling" },
        { text: "Fernwärme-Kompaktstation warten in Neubau Schönbrunner Schloßstraße" },
        { text: "Badsanierung im Nachkriegs-Wohnbau Längenfeldgasse" },
        { text: "Verstopfungs-Notdienst in Einkaufsmeilen (Meidlinger Markt, Niederhofstraße)" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Gemeindebau Schöpfwerk: vorab klären" icon="🧱">
      Das Schöpfwerk ist ein eigenständiges Großareal mit spezifischer Technik
      (Zentralheizung, gemeinsame Steigleitungen). Mieter-Eigeninitiativen werden
      von Wiener Wohnen nur bei Freigabe akzeptiert. Wir holen die Zustimmung
      ein, bevor wir Material einkaufen – das erspart dem Mieter böse
      Überraschungen bei Auszug oder Nachforderung.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Meidlinger Hauptstraße" icon="🛒">
        Einkaufsader, dichter Altbau. Thermen, Gastro-Sanitär, Verstopfungen.
      </EntityCard>
      <EntityCard label="Grätzl" title="Schöpfwerk / Fuchsenfeldhof" icon="🏘">
        Großwohnhäuser, Gemeindebau. Heizkörpertausch, Wiener-Wohnen-Freigabe.
      </EntityCard>
      <EntityCard label="Grätzl" title="Altmannsdorf" icon="🌳">
        Einfamilienhäuser, Siedlungen. Wärmepumpen-Umbau,
        Öl-Aus, Wasseranlagen.
      </EntityCard>
      <EntityCard label="Grätzl" title="Bahnhof Meidling / Philadelphiabrücke" icon="🚆">
        Büros, Hotels, Verkehrsknoten. Gewerbe-Sanitär,
        Warmwasser-Zirkulation, Notdienst.
      </EntityCard>
    </div>

    <MiniStory
      title="Rohrbruch am Meidlinger Markt"
      context="1120 Wien, Geschäftslokal mit Wohnung darüber, Gründerzeithaus 1898"
      outcome="Leck in 2 Stunden trocken, Strangerneuerung 2 Tage später mit HV koordiniert."
    >
      Samstagvormittag, der Fleischer meldete Wasser im Kühlraum. Wir waren in
      18 Minuten vor Ort (direkte Strecke von 1100 über Gaudenzdorf),
      lokalisierten einen gebrochenen Kaltwasser-Steigstrang zwischen Erdgeschoß
      und 1. Stock, sperrten gezielt ab, sodass der Rest des Hauses
      wasserversorgt blieb. Am Montag koordinierten wir mit der HV die
      Strang-Erneuerung – keine Verluste für den Fleischer.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Meidling</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Meidling grenzt direkt an Favoriten. Über Laxenburger Straße / Gaudenzdorfer
      Gürtel sind wir in 10–15 Minuten auf der Meidlinger Hauptstraße. Im
      Notdienst fahren wir 1120 meist innerhalb von 20 Minuten an.
    </p>
  </>
);
