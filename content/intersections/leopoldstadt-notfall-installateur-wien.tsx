import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Notfall-Installateur in Leopoldstadt (1020): Wie reagieren wir?"
      answer={
        <p>
          Leopoldstadt bringt zwei Welten zusammen: sanierter Gründerzeit-Altbau
          im Karmelitergrätzl und an der Praterstraße, dicht an Donau und
          Donaukanal – und Neubau entlang der Praterstraße, Messekai und im
          Prater-Wohnungsumfeld. Bei Notfällen fahren wir aus 1100 Favoriten
          über A23 oder Gürtel in 15–25 Minuten in den 2. Bezirk. Unser Fokus:
          schnelles Absperren, Substanzschutz (vor allem bei Donau-Feuchte),
          dokumentierte Nachreparatur.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Notfälle in 1020</h2>
    <IconList
      items={[
        { text: "Rohrbruch in Gründerzeithäusern Karmelitergrätzl / Praterstraße" },
        { text: "Heizungsausfall in Neubauten am Messegelände" },
        { text: "Kellerflutung in Donaukanal-nahen Häusern" },
        { text: "Wasseraustritt in Stuwerviertel / Volkertviertel (oft Mischbebauung)" },
        { text: "Verstopfung/Rückstau in Altbauten mit alten Guss-Fallsträngen" },
        { text: "Gasgeruch-Alarm in Mietwohnungen mit älteren Thermen" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Donaukanal-Nähe: Feuchte mitdenken" icon="🌊">
      Häuser nah am Donaukanal haben oft hohe Grundfeuchte. Bei Wasserschäden
      empfehlen wir Bautrocknung nicht aufzuschieben – der Schimmelrisiko ist
      in 1020 merklich höher als in trockeneren Bezirken. Wir vermitteln bei
      Bedarf an spezialisierte Trockenfirmen.
    </HighlightBox>

    <MiniStory
      title="Rohrbruch in der Karmelitergasse"
      context="1020 Wien, Jugendstilhaus 1907, Nacht 03:10"
      outcome="Abgesperrt in 40 Minuten nach Anruf, Haus blieb wasserversorgt über Nebenstrang."
    >
      Ein Mieter meldete Wasser im Stiegenhaus und in seiner Wohnung. Wir
      fuhren ab Humboldtgasse in 18 Minuten über die Südosttangente, sperrten
      den betroffenen Strang im Keller ab, während die Nebenstränge
      wasserführend blieben. Am nächsten Vormittag tauschten wir das geborstene
      Stahlrohrstück gegen Edelstahl-Pressfitting. Keine Folgeschäden bei den
      Nachbarn.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>24h erreichbar</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Notdienst 1020: Tel. +43 676 634 90 34. Mit dokumentierter
      Absperrung und klarer Kommunikation an Hausverwaltung und Mieter.
    </p>
  </>
);
