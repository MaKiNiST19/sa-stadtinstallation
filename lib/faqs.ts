// Zentrale FAQ-Bibliothek, nach Themen gruppiert.
// Jede Seite pickt sich einen relevanten Subset (um Duplicate Content zu vermeiden)
// und speist daraus ihren sichtbaren FAQ-Block + das FAQPage-JSON-LD.

import type { FaqItem } from "./schema";

// -----------------------------------------------------------
// Home / Übersicht
// -----------------------------------------------------------
export const FAQ_HOME: FaqItem[] = [
  {
    question: "Wie schnell ist SA Stadtinstallation im Notfall in Wien vor Ort?",
    answer:
      "Innerhalb der Kernzone (1. bis 10. Bezirk) sind wir in der Regel innerhalb von 30 Minuten vor Ort. In den äußeren Bezirken planen wir 45 bis 60 Minuten ein. Sie erreichen unseren 24h-Notdienst unter +43 676 634 90 34.",
  },
  {
    question: "In welchen Wiener Bezirken sind Sie tätig?",
    answer:
      "Wir decken alle 23 Wiener Gemeindebezirke (1010 bis 1230) ab. Unser Firmensitz in der Humboldtgasse 33 liegt in 1100 Favoriten, von dort sind alle Bezirke schnell erreichbar.",
  },
  {
    question: "Sind Ihre Preise transparent?",
    answer:
      "Ja. Sie erhalten vor Arbeitsbeginn ein schriftliches Festpreis-Angebot. Bei Notfällen nennen wir die Anfahrtspauschale telefonisch und dokumentieren Material und Arbeitszeit transparent. Keine versteckten Kosten.",
  },
  {
    question: "Welche Qualifikationen hat SA Stadtinstallation?",
    answer:
      "Wir sind konzessionierter Meisterbetrieb, eingetragen bei der Wirtschaftskammer Wien und der Landesinnung der Sanitär-, Heizungs- und Lüftungstechniker. Zusätzlich sind wir durch den Google-Käuferschutz verifiziert.",
  },
  {
    question: "Wer zahlt bei einem Wasserrohrbruch – Mieter oder Vermieter?",
    answer:
      "Grundsätzlich ist der Vermieter für die allgemeinen Versorgungsleitungen (Steigleitungen) verantwortlich. Alles ab dem Zähler innerhalb der Wohnung fällt zumeist an den Mieter. In akuten Notfällen: zuerst absichern, dann klären – wir helfen Ihnen gern bei der Dokumentation für Hausverwaltung oder Versicherung.",
  },
  {
    question: "Arbeiten Sie auch an Wochenenden und Feiertagen?",
    answer:
      "Ja, unser Notdienst ist 24/7 erreichbar – auch Samstag, Sonntag und an Feiertagen. Für planbare Arbeiten (Badsanierung, Heizungstausch) vereinbaren wir Werktagstermine Mo–Fr 07:00–18:00.",
  },
];

// -----------------------------------------------------------
// Notfall
// -----------------------------------------------------------
export const FAQ_NOTFALL: FaqItem[] = [
  {
    question: "Was kostet ein Notfall-Installateur in Wien nachts oder am Wochenende?",
    answer:
      "Wir arbeiten mit einer fixen Notdienst-Anfahrtspauschale, die wir Ihnen telefonisch vor der Anfahrt transparent nennen. Materialkosten und Arbeitszeit werden separat abgerechnet. Sie bekommen IMMER einen Festpreis, bevor wir mit der Reparatur beginnen.",
  },
  {
    question: "Welche Fälle gelten als echter Notfall?",
    answer:
      "Typische Notfälle sind: Wasserrohrbruch, Gasgeruch, Heizungsausfall im Winter, verstopftes WC mit Rückstau, austretendes Wasser aus Decke oder Wand, Ausfall der Therme mit Temperaturabfall unter 15 °C. Unsicher? Rufen Sie an – wir beraten auch am Telefon.",
  },
  {
    question: "Was soll ich bis zu Ihrem Eintreffen tun?",
    answer:
      "Wasserrohrbruch: Haupthahn abdrehen (meist im Keller oder Vorraum). Gasgeruch: sofort Fenster öffnen, keine Schalter betätigen, Gas abdrehen und Haus verlassen – danach 128 (Feuerwehr) + uns anrufen. Verstopfung: kein heißes Wasser mehr einleiten. Wir sagen Ihnen am Telefon genau, was zu tun ist.",
  },
  {
    question: "Wie schnell sind Sie vor Ort?",
    answer:
      "Unser Ziel: 30 Minuten in den Bezirken 1–10, maximal 60 Minuten in den Außenbezirken. Bei hoher Einsatzdichte (z.B. Frost, Starkregen) kann es länger dauern – wir sagen Ihnen das am Telefon offen.",
  },
];

// -----------------------------------------------------------
// Gas
// -----------------------------------------------------------
export const FAQ_GAS: FaqItem[] = [
  {
    question: "Wer darf in Wien eine Gasleitung verlegen?",
    answer:
      "Nur konzessionierte Gas-Installateure mit gültiger ÖVGW-Berechtigung. Jede neue Gasleitung und jeder Umbau muss nach den Richtlinien G1/G2 erfolgen und dichtheitsgeprüft werden. Wir sind als Meisterbetrieb voll konzessioniert und dokumentieren jede Arbeit revisionssicher.",
  },
  {
    question: "Was kostet eine Gas-Dichtheitsprüfung in Wien?",
    answer:
      "Eine Standard-Dichtheitsprüfung für eine Wohnung bewegt sich je nach Umfang im mittleren zweistelligen bis niedrigen dreistelligen Bereich. Wir erstellen Ihnen vorher ein Festpreis-Angebot. Die Prüfung ist Pflicht bei Übergabe, Umbau oder Gasgeruch.",
  },
  {
    question: "Wie oft muss eine Gastherme überprüft werden?",
    answer:
      "Jährliche Wartung ist Pflicht nach ÖNORM B 8131. Die Abgasüberprüfung erfolgt jährlich durch den Rauchfangkehrer, die gerätetechnische Wartung durch den Installateur. Wir erinnern unsere Kunden auf Wunsch automatisch.",
  },
  {
    question: "Was ist der Unterschied zwischen Gas-Durchlauferhitzer und Gastherme?",
    answer:
      "Ein Gas-Durchlauferhitzer erwärmt nur Wasser (kein Heizbetrieb). Eine Gastherme heizt zusätzlich und liefert Warmwasser. Moderne Brennwertthermen nutzen die Abgaswärme und erreichen Wirkungsgrade von über 100 % bezogen auf den Heizwert.",
  },
];

// -----------------------------------------------------------
// Wasser
// -----------------------------------------------------------
export const FAQ_WASSER: FaqItem[] = [
  {
    question: "Wie erkenne ich einen versteckten Wasserschaden?",
    answer:
      "Typische Anzeichen: unerklärlich hohe Wasserrechnung, feuchte Stellen an Wänden/Decken, muffiger Geruch, Schimmelbildung, plätschernde Geräusche hinter Wänden. Im Zweifel: Wasserzähler über Nacht ablesen – läuft er ohne Verbrauch weiter, haben Sie ein Leck.",
  },
  {
    question: "Wie lange hält eine Wasserleitung?",
    answer:
      "Kupferleitungen 40–60 Jahre, Kunststoff (PE-Xa, Mehrschichtverbund) 50+ Jahre, alte Bleileitungen sollten SOFORT getauscht werden. Im Wiener Altbau finden wir oft noch Bleileitungen aus der Zwischenkriegszeit – hier ist Austausch dringend empfohlen.",
  },
  {
    question: "Was kostet eine neue Wasserleitung im Altbau?",
    answer:
      "Der Preis hängt stark von Länge, Zugänglichkeit und Wandstärke ab. Für eine typische 60 m² Altbauwohnung in Wien bewegen sich die Kosten im mittleren vierstelligen Bereich. Wir erstellen Ihnen nach einem kostenlosen Vor-Ort-Termin ein Festpreis-Angebot.",
  },
  {
    question: "Bleileitungen – was tun?",
    answer:
      "Bleileitungen sind in Österreich seit 1975 verboten. Wenn Ihr Wasser bleihältig sein könnte (Altbau, vor 1960), sollten Sie es nicht zum Trinken verwenden und zeitnah auf Kupfer oder Kunststoff umstellen. Wir tauschen Bleileitungen inkl. Dokumentation für die MA 31.",
  },
];

// -----------------------------------------------------------
// Heizung
// -----------------------------------------------------------
export const FAQ_HEIZUNG: FaqItem[] = [
  {
    question: "Gas-Brennwerttherme oder Wärmepumpe – was ist für Wien besser?",
    answer:
      "Im dichten Stadtgebiet Wiens ist die Fernwärme oft die einfachste Lösung. Im Einzelhaus (Hietzing, Liesing, Floridsdorf) ist eine Wärmepumpe langfristig wirtschaftlich, besonders in Kombination mit PV. Für Altbauten mit Heizkörpern bleibt Gas-Brennwert kurzfristig eine Option – mittelfristig ist der Umstieg klar. Wir beraten herstellerunabhängig.",
  },
  {
    question: "Welche Förderungen gibt es für den Heizungstausch in Wien?",
    answer:
      "Bund und Stadt Wien fördern den Umstieg von fossilen auf erneuerbare Systeme ('Raus aus Gas'/'Kesseltausch'). Die Förderhöhe variiert; wir prüfen Ihre konkrete Situation und helfen bei der Antragstellung. Oft lassen sich Förderungen kombinieren.",
  },
  {
    question: "Wie lange dauert ein Heizungstausch?",
    answer:
      "Gastherme gegen Gastherme: 1 Tag. Umstieg auf Wärmepumpe inkl. hydraulischem Abgleich: 3–5 Tage. Fernwärmeanschluss: 1–2 Tage (Koordination mit Wien Energie). Wir planen so, dass Sie maximal 24h ohne Warmwasser sind.",
  },
  {
    question: "Was ist ein hydraulischer Abgleich – und brauche ich das wirklich?",
    answer:
      "Beim hydraulischen Abgleich wird jeder Heizkörper exakt auf den Bedarf des Raums eingestellt. Ergebnis: einzelne Räume werden nicht mehr zu heiß/kalt, Verbrauch sinkt um 5–15 %. Für Förderungen meist Pflicht. Wir rechnen das Gebäude raumweise durch, statt 'nach Gefühl' einzustellen.",
  },
];

// -----------------------------------------------------------
// Sanitär
// -----------------------------------------------------------
export const FAQ_SANITAER: FaqItem[] = [
  {
    question: "Was kostet eine Badsanierung in Wien?",
    answer:
      "Richtwerte für Wien: kleines Bad (4–6 m²) ab ca. 8.000 €, mittleres Bad (7–10 m²) 12.000–18.000 €, Altbau-Komplettumbau mit Steigleitungen 20.000 €+. Wir machen Festpreis inkl. Material, Fliesen, Sanitär, Elektro-Koordination und Entsorgung.",
  },
  {
    question: "Wie lange dauert eine Komplett-Badsanierung?",
    answer:
      "Im Neubau 2–3 Wochen. Im Altbau mit Bodenaufbau, Fliesenabriss und neuen Leitungen 3–4 Wochen. Wir koordinieren alle Gewerke (Elektriker, Fliesenleger, Bodenleger) – Sie haben einen einzigen Ansprechpartner.",
  },
  {
    question: "Altbauwohnung: WC und Bad getrennt – kann ich das zusammenlegen?",
    answer:
      "Fast immer ja, aber nicht immer sinnvoll. Wir prüfen Steigstränge, Lüftung (oft Schachtanbindung nötig), tragende Wände. In vielen Wiener Altbauten lassen sich auch tolle Lösungen umsetzen: offene Dusche statt Sitzbadewanne, WC in separate Nische.",
  },
  {
    question: "Was kostet ein barrierefreies Bad?",
    answer:
      "Der Mehrpreis gegenüber einem Standardumbau liegt meist bei 1.500–4.000 € (ebenerdige Dusche, Stützgriffe, Unterfahrbarkeit). In Wien gibt es für barrierefreien Umbau oft Förderungen – wir beraten und helfen beim Antrag.",
  },
];

// -----------------------------------------------------------
// Therme
// -----------------------------------------------------------
export const FAQ_THERME: FaqItem[] = [
  {
    question: "Wie oft muss ich meine Therme warten lassen?",
    answer:
      "Laut ÖNORM B 8131 einmal jährlich. Zusätzlich erfolgt die Abgasüberprüfung durch den Rauchfangkehrer. Ohne Wartungsnachweis kann im Schadensfall die Versicherung die Leistung kürzen.",
  },
  {
    question: "Was kostet eine Thermenwartung in Wien?",
    answer:
      "Eine Standardwartung inkl. Reinigung, Funktionsprüfung und Dokumentation kostet bei uns pauschal. Kleinere Verschleißteile sind oft inkludiert. Sie bekommen vor dem Termin einen klaren Festpreis.",
  },
  {
    question: "Ist die Thermenwartung in Wien gesetzlich verpflichtend?",
    answer:
      "Die jährliche Wartung ist ÖNORM-Standard und wird von den meisten Herstellern zur Garantieerhaltung verlangt. Hausverwaltungen und Versicherungen verlangen den Nachweis. Ohne Wartung drohen Garantieverlust und Versicherungsprobleme.",
  },
  {
    question: "Welche Marken wartet ihr?",
    answer:
      "Alle gängigen: Viessmann, Vaillant, Buderus, Junkers, Bosch, Wolf, Saunier Duval, Riello, Baxi. Bei Spezialgeräten organisieren wir Original-Ersatzteile direkt vom Hersteller.",
  },
];

// -----------------------------------------------------------
// Verstopfung
// -----------------------------------------------------------
export const FAQ_VERSTOPFUNG: FaqItem[] = [
  {
    question: "Was kostet eine Rohrreinigung in Wien?",
    answer:
      "Einfache Verstopfung (WC, Waschbecken) mit Spirale: pauschal im niedrigen dreistelligen Bereich. Komplexere Fälle mit Hochdruckspülung oder Kamerainspektion: nach Diagnose. Wir nennen Ihnen IMMER den Festpreis, bevor wir arbeiten.",
  },
  {
    question: "Wer zahlt bei verstopftem Rohr – Mieter oder Vermieter?",
    answer:
      "Liegt die Verstopfung nach dem Bewohner-Verhalten (Haare, Essensreste, Hygieneartikel), trägt üblicherweise der Mieter die Kosten. Liegt die Ursache im Rohrsystem (Ablagerungen über Jahrzehnte, Wurzeleinwuchs, Materialschäden), ist es Sache des Eigentümers. Wir dokumentieren die Ursache sauber für beide Seiten.",
  },
  {
    question: "Helfen chemische Rohrreiniger wirklich?",
    answer:
      "Kurzfristig manchmal – langfristig greifen sie Dichtungen und Kunststoffrohre an und lösen das Grundproblem nicht. Unser Tipp: bei wiederkehrender Verstopfung mechanisch oder per Hochdruck reinigen lassen. Das ist nachhaltiger und günstiger als monatliches Nachgießen.",
  },
  {
    question: "Was ist eine Kamerainspektion und wann brauche ich sie?",
    answer:
      "Bei wiederkehrenden Verstopfungen, nach Bauarbeiten oder vor Immobilienkauf schieben wir eine Kamera bis 40 m ins Rohr. Sie sehen live, was wirklich los ist – Risse, Wurzeln, Ablagerungen. Danach entscheiden Sie informiert über die Sanierung.",
  },
];

// -----------------------------------------------------------
// Helper: Themen-Map + Mischer für Bezirk-Seiten
// -----------------------------------------------------------
export const FAQS_BY_TOPIC: Record<string, FaqItem[]> = {
  home: FAQ_HOME,
  notfall: FAQ_NOTFALL,
  gas: FAQ_GAS,
  wasser: FAQ_WASSER,
  heizung: FAQ_HEIZUNG,
  sanitaer: FAQ_SANITAER,
  therme: FAQ_THERME,
  verstopfung: FAQ_VERSTOPFUNG,
};

export function pickFaqs(topic: keyof typeof FAQS_BY_TOPIC, n = 6): FaqItem[] {
  return (FAQS_BY_TOPIC[topic] ?? FAQ_HOME).slice(0, n);
}
