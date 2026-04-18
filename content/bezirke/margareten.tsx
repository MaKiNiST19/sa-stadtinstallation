import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import EntityCard from "@/components/content/EntityCard";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Warum ist Margareten (1050) für Installateure ein besonderer Bezirk?"
      answer={
        <p>
          <strong>Margareten</strong> steht für roten Gemeindebau und dichten
          Gründerzeit-Altbau. Zwischen Margaretenhof, Reinprechtsdorfer Straße und
          Matzleinsdorfer Platz finden sich einige der am stärksten bewohnten
          Häuserblöcke Wiens. Für uns heißt das: viele Mieter mit Gasetagenheizung,
          viele Gemeindebau-Wohnungen mit zentraler Warmwasserversorgung und
          Austauschbedarf an Heizkörpern, und ein hoher Anteil schneller
          Notdienste – weil bei so viel Altbestand Rohre irgendwann einfach
          ausfallen.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Aufträge im 5. Bezirk</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Das Einsatzgebiet reicht vom Margaretengürtel über die Reinprechtsdorfer
      Straße bis zum Margaretenplatz und Matzleinsdorfer Platz. Gemeindebauten
      wie der Reumannhof oder der Matteottihof haben zentrale Versorgungen – hier
      arbeiten wir meistens mit der Hausverwaltung (Wiener Wohnen bzw. beauftragte
      HV). In der Schönbrunner Straße finden sich viele kleine Gewerbebetriebe
      mit Sanitärbedarf.
    </p>

    <IconList
      items={[
        { text: "Thermentausch in Gründerzeitwohnungen Reinprechtsdorfer Straße" },
        { text: "Heizkörperwechsel und Ventil-Erneuerung in Wiener-Wohnen-Objekten" },
        { text: "Rohrbruch-Notdienst (Gründerzeit, Altmetallrohre werden porös)" },
        { text: "Verstopfungs-Notdienst Schönbrunner Straße / Stiegengasse" },
        { text: "Badsanierung mit Wanne-zu-Dusche-Umbau in Gemeindebau-Wohnungen" },
        { text: "Warmwasserbereiter-Tausch (Elektroboiler) in älteren Gemeindewohnungen" },
      ]}
      columns={1}
    />

    <HighlightBox variant="green" title="Gemeindebau-Arbeiten: Abstimmung zählt" icon="🧱">
      In Wiener-Wohnen-Häusern arbeiten wir immer mit Freigabe der zuständigen
      Hausverwaltung. Mieter-Rechnung nur mit schriftlicher Zustimmung – sonst
      kann Wiener Wohnen Haftung und Rückbau verlangen. Wir erklären das vorab
      und holen die Freigabe bei Bedarf mit.
    </HighlightBox>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
        marginTop: "40px",
      }}
    >
      <EntityCard label="Grätzl" title="Margaretengürtel & Reumannhof" icon="🏘">
        Großer Gemeindebau 1924–1926. Zentrale Warmwasserversorgung,
        Heizkörpertausch häufig, strikte HV-Prozesse.
      </EntityCard>
      <EntityCard label="Grätzl" title="Reinprechtsdorfer Straße" icon="🛍">
        Dichter Gründerzeit-Altbau mit Geschäftslokalen. Thermen,
        Rohrsanierung, Gastro-Sanitär.
      </EntityCard>
      <EntityCard label="Grätzl" title="Margaretenplatz & Schönbrunner Straße" icon="⛪">
        Historisches Zentrum mit Margaretenkirche. Sanierte Eigentums-Bäder,
        Wanne-zu-Dusche-Umbauten.
      </EntityCard>
      <EntityCard label="Grätzl" title="Matzleinsdorfer Platz" icon="🚋">
        Verkehrsknoten, gemischte Nutzung. Bürogebäude, Klinik-Umfeld,
        Gewerbesanitär.
      </EntityCard>
    </div>

    <MiniStory
      title="Rohrbruch-Notdienst in der Reinprechtsdorfer Straße"
      context="1050 Wien, Gründerzeithaus Baujahr 1895, Hausanschluss Kaltwasser"
      outcome="Leck lokalisiert und abgeschottet innerhalb von 90 Minuten, Dauer-Reparatur am Folgetag."
    >
      Um 23:40 meldete ein Mieter Wassereinbruch im Stiegenhaus. Wir waren in
      22 Minuten vor Ort, konnten die Steigleitung am Hauptschieber absperren,
      Haus blieb wasserversorgt über Nebenstrang. Am nächsten Vormittag kamen
      wir mit der Hausverwaltung zurück und tauschten das gerissene Rohrstück.
      Keine Bausubstanz-Folgeschäden.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Anfahrt nach Margareten</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      1050 ist direkter Nachbarbezirk von 1100 Favoriten. Von der Puchsbaumgasse
      sind wir über den Matzleinsdorfer Platz in rund 10 Minuten im 5. Bezirk –
      auch im Berufsverkehr selten länger als 20 Minuten. Dadurch schaffen wir
      Notdienste in Margareten oft als schnellste Adresse im gesamten südlichen
      Wien.
    </p>
  </>
);
