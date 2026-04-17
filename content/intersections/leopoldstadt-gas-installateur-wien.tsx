import FeaturedSnippet from "@/components/content/FeaturedSnippet";
import HighlightBox from "@/components/content/HighlightBox";
import IconList from "@/components/content/IconList";
import MiniStory from "@/components/content/MiniStory";

export default (
  <>
    <FeaturedSnippet
      question="Gasinstallateur in Leopoldstadt (1020): Welche Arbeiten übernehmen wir?"
      answer={
        <p>
          Als ÖVGW G1/G2-zertifizierter Gasinstallateur übernehmen wir im
          2. Bezirk sämtliche gasrechtlichen Arbeiten: Installation, Prüfung,
          Zähler-Änderung, Dichtheitsprüfung, und im Bedarfsfall die Abschaltung.
          Leopoldstadt hat durch die große Mischung Alt-/Neubau sehr
          unterschiedliche Anforderungen – vom Jugendstil-Gasanschluss bis zur
          modernen Gas-Brennwerttechnik im sanierten Dachgeschoß.
        </p>
      }
    />

    <h2 style={{ marginTop: "48px" }}>Gas-Aufträge in 1020</h2>
    <IconList
      items={[
        { text: "Gasdichtheitsprüfung und -protokoll in Gründerzeithäusern" },
        { text: "Zählerplatz-Erneuerung im Keller bei Wechsel auf Smart Meter" },
        { text: "Steigleitungs-Erneuerung (Stahl → Edelstahl-Pressfitting)" },
        { text: "Gas-Brennwerttherme anschließen mit neuer Gasleitung" },
        { text: "Außerbetriebnahme und Abschaltung bei Umstieg auf Fernwärme" },
        { text: "Gasgeruch-Notdienst und Leckortung" },
      ]}
      columns={1}
    />

    <HighlightBox variant="blue" title="Sicher zuerst" icon="⚠">
      Bei Gasgeruch gilt: Fenster öffnen, keine elektrischen Schalter
      bedienen, Haupthahn schließen (wenn gefahrlos erreichbar), Wiener Netze
      Gasnotruf 128 anrufen. Wir kommen parallel mit Lecksuchgerät für die
      Feinortung und Reparatur.
    </HighlightBox>

    <MiniStory
      title="Steigleitungs-Erneuerung im Stuwerviertel"
      context="1020 Wien, Gründerzeit-Zinshaus, 16 Wohnungen, Gas-Steigleitung Baujahr unbekannt"
      outcome="Komplett-Erneuerung Keller bis Dachgeschoß, Edelstahl-Pressfitting, ÖVGW-Abnahme, 5 Tage."
    >
      Die Hausverwaltung ließ eine Dichtheitsprüfung durchführen – die
      Steigleitung zeigte mehrere Leckpunkte. Wir erneuerten komplett auf
      Edelstahl, setzten neue Absperrhähne auf jeder Etage und pressten
      sämtliche Verbindungen. Wiener Netze wurde koordiniert (Abschaltung
      15:00, Wiederinbetriebnahme 19:00 am selben Tag), Abnahme ÖVGW bestanden.
    </MiniStory>

    <h2 style={{ marginTop: "48px" }}>Ihre Sicherheit, unsere Zertifizierung</h2>
    <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--mid)" }}>
      Wir sind ÖVGW-geprüft (G1/G2) und halten regelmäßige Weiterbildungen.
      Jede Arbeit wird nach ÖVGW-Richtlinien dokumentiert und ist für die
      nächste Abnahme nachweisbar.
    </p>
  </>
);
