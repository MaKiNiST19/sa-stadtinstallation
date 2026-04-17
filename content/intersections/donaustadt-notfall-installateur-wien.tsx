import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Notfall-Installateur in der Donaustadt (1220): Was zählt?"
      answer={
        <p>
          Die Donaustadt ist flächenmäßig der größte Wiener Bezirk: von der
          Seestadt Aspern über Hirschstetten, Stadlau, Kagran bis Essling.
          Notdienste erreichen wir aus 1100 Favoriten über A23/Südosttangente
          in 20–35 Minuten. Besonderheit: sehr unterschiedliche Bausubstanz –
          von Einfamilienhäusern mit Wärmepumpe bis zur Großwohnanlage mit
          Fernwärme. Entsprechend müssen wir bei Notdienst immer schnell die
          Anlage verstehen.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Typische Notfälle in 1220</h2>
    <IconList
      items={[
        { text: "Wärmepumpen-Ausfall in Einfamilienhäusern Essling / Breitenlee" },
        { text: "Rohrbruch in Siedlungshäusern 1960er Hirschstetten / Kagran" },
        { text: "Fernwärme-Störung in Seestadt-Wohnungen" },
        { text: "Heizungsausfall in Gemeindebau-Wohnhäusern Stadlau" },
        { text: "Kellerflutung bei Starkregen in Ein- und Reihenhausgebieten" },
        { text: "Gasgeruch in älteren Einfamilienhäusern mit Gas-Zentralheizung" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Wärmepumpe im Notfall" icon="❄">
      Bei Wärmepumpen-Störungen prüfen wir zuerst den Druck im Heizkreis,
      Sole-Kreis (bei Erdwärme) und Kältemittel-Warnsystem. Viele Ausfälle
      sind Elektronik-Störungen – ein Neustart mit gezielter Fehlercode-
      Analyse löst oft mehr als 50 % der Fälle sofort. Für kältere Tage
      haben wir Heizungsnotbetrieb (mobile Notheizung) in Reserve.
    </HighlightBox>

    <MiniStory
      title="Wärmepumpe steht still in Essling"
      context="1220 Wien, Einfamilienhaus, Januar, –8 °C Außentemperatur"
      outcome="Fehlercode ausgelesen, defekter Drucksensor getauscht, Anlage binnen 2 Stunden wieder in Betrieb."
    >
      Anruf um 7:30 am Morgen: Haus kalt, Wärmepumpe meldete Fehler. Wir
      fuhren in 30 Minuten an, lasen den Fehlercode aus (Drucksensor
      Heizkreis), hatten Ersatz im Servicefahrzeug und tauschten das Teil in
      einer Stunde. Um 10:30 war das Haus wieder warm, Familie konnte zur
      Arbeit/Schule.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Wir sind erreichbar</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Notdienst 1220: Tel. +43 676 634 90 34. Für die Seestadt und entlegene
      Teile des Bezirks planen wir mit 30–40 Minuten Anfahrt. Bei bekannten
      Kunden mit Wartungsvertrag sind wir vorrangig.
    </p>
  </>
);
