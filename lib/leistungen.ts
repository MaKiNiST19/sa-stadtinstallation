// Die 7 Kern-Leistungen von SA Stadtinstallation
// Jede Leistung bildet eine eigene Pillar-Seite unter /leistungen/[slug]
// UND wird mit jedem der 23 Wiener Bezirke zu einer Cluster-Seite kombiniert.

export interface Leistung {
  slug: string;
  title: string;              // H1 / Seitentitel
  shortTitle: string;         // Navi / Karten
  menuLabel: string;          // kurzer Label für Footer/Dropdown
  description: string;        // Meta-Description (<=158 Zeichen)
  tagline: string;            // Hero-Untertitel
  image: string;              // /images/leistungen/{slug}.jpg
  imageAlt?: string;          // SEO-optimiertes Alt (inkl. Marke + Wien)
  icon: string;               // Emoji-Fallback (später SVG)
  keywords: string[];         // primäre + sekundäre Keywords
  searchIntents: string[];    // Such-Intents (für AI Overview / FAQ)
  commonProblems: string[];   // E-E-A-T: konkrete Probleme die wir lösen
  relatedServices: string[];  // interne Verlinkung (slugs)
  priceHint?: string;         // transparenter Preishinweis
  emergency?: boolean;        // 24/7?
  featuredQuestion: string;   // H2 für Featured-Snippet direkt unter Hero
  shortAnswer: string;        // 1-2 Sätze, direkte Antwort (AI Overview)
}

export const LEISTUNGEN: Leistung[] = [
  {
    slug: "notfall-installateur-wien",
    title: "Notfall-Installateur Wien – 24h Notdienst in ganz Wien",
    shortTitle: "Notfall-Installateur",
    menuLabel: "Notdienst 24h",
    description:
      "24h Notfall-Installateur Wien – Rohrbruch, Wasserschaden, Gasgeruch oder defekte Therme? In 30 Minuten vor Ort, geprüfter Meisterbetrieb.",
    tagline: "Rohrbruch, Wasserschaden oder Gasalarm – wir sind in 30 Minuten bei Ihnen.",
    image: "/images/leistungen/notfall-installateur-wien.jpg",
    imageAlt:
      "Notfall-Installateur Wien in Aktion – 24h Notdienst von SA Stadtinstallation bei Rohrbruch und Wasserschaden",
    icon: "🚨",
    emergency: true,
    priceHint: "Anfahrt pauschal, Fixpreis vor Arbeitsbeginn",
    featuredQuestion: "Was kostet ein Installateur-Notdienst in Wien?",
    shortAnswer:
      "Die Kosten für einen Installateur-Notdienst in Wien hängen von Uhrzeit, Anfahrt, Problem und Material ab. Viele Einsätze starten mit Anfahrtspauschale plus Arbeitszeit – bei Gas-Notfällen koordinieren wir direkt mit Wiener Netze, bei Wasser mit dem Hausanschluss. SA Stadtinstallation liefert einen Fixpreis vor Arbeitsbeginn.",
    keywords: [
      "Notfall Installateur Wien",
      "24h Installateur Wien",
      "Installateur Notdienst Wien",
      "24 Stunden Installateur",
      "Wasserrohrbruch Wien",
      "Gasgeruch Notdienst",
      "Therme ausgefallen Wien",
      "Rohrbruch Notfall Wien",
    ],
    searchIntents: [
      "Wen rufe ich bei einem Wasserrohrbruch in Wien an?",
      "Was kostet ein Notfall-Installateur nachts in Wien?",
      "Wie schnell kommt ein Installateur in Wien bei einem Notfall?",
      "Ist der 24h-Notdienst auch am Wochenende erreichbar?",
    ],
    commonProblems: [
      "Platzende Wasserleitung in Altbau Wien (Gründerzeithaus, Steigleitung)",
      "Verstopftes WC mit Rückstau in die Dusche",
      "Therme zündet nicht mehr – kein Warmwasser",
      "Gasgeruch in der Küche oder im Stiegenhaus (Wiener Netze sofort informieren)",
      "Heizung fällt mitten im Winter aus – Fernwärme oder Gastherme",
      "Überlaufende Waschmaschine oder Spülmaschine",
      "Notfall im Gemeindebau – Hausverwaltung wird parallel informiert",
    ],
    relatedServices: [
      "wasserinstallateur-wien",
      "gas-installateur-wien",
      "verstopfung-wien",
      "thermenwartung-wien",
    ],
  },
  {
    slug: "gas-installateur-wien",
    title: "Gas-Installateur Wien – Gasleitungen, Gastherme & Prüfung",
    shortTitle: "Gas-Installateur",
    menuLabel: "Gas",
    description:
      "Konzessionierter Gas-Installateur in Wien: Gasleitung verlegen, Gastherme montieren, Dichtheitsprüfung & Gebrechen. Meisterbetrieb mit WKÖ-Konzession.",
    tagline: "Konzessionierte Gasarbeiten nach ÖVGW-Richtlinien – sicher, dokumentiert, abnahmefähig.",
    image: "/images/leistungen/gas-installateur-wien.jpg",
    imageAlt:
      "Gas-Installateur Wien montiert Gasleitung – konzessioniert bei WKO Wien, Dichtheitsprüfung nach ÖVGW G1",
    icon: "🔥",
    priceHint: "Festpreis-Angebot nach Vor-Ort-Termin",
    featuredQuestion: "Wer darf in Wien Gasarbeiten ausführen?",
    shortAnswer:
      "In Wien darf nur ein bei der WKO Wien konzessionierter Gas-Installateur Leitungen verlegen, Thermen anschließen oder Dichtheitsprüfungen nach ÖVGW G1 durchführen. Die Anmeldung des Gasanschlusses läuft über Wiener Netze, die Energieabrechnung meist über Wien Energie. SA Stadtinstallation ist Meisterbetrieb der Landesinnung Wien.",
    keywords: [
      "Gas Installateur Wien",
      "Gasleitung Wien",
      "Gastherme Montage Wien",
      "Gas Dichtheitsprüfung Wien",
      "Gas-Gebrechen Wien",
      "Gasanschluss neu Wien",
      "ÖVGW zertifiziert Wien",
    ],
    searchIntents: [
      "Wer darf in Wien eine Gasleitung verlegen?",
      "Was kostet eine Gas-Dichtheitsprüfung in Wien?",
      "Wie oft muss eine Gastherme in Wien überprüft werden?",
      "Welche Konzession braucht ein Gas-Installateur?",
    ],
    commonProblems: [
      "Neue Gastherme soll montiert werden – Anmeldung bei Wiener Netze und Wien Energie",
      "Gasgeruch – sofortige Dichtheitsprüfung nötig (Notfall-Kontakt Wiener Netze)",
      "Altbau Wien: Gasleitung entspricht nicht mehr ÖVGW G1",
      "Umstellung von Gas-Durchlauferhitzer auf Brennwerttherme im Gemeindebau",
      "Gas-Abmeldung bei Wohnungsübergabe – Protokoll für Hausverwaltung",
      "Prüfbefund nach WKO Wien / Landesinnung-Richtlinien",
    ],
    relatedServices: [
      "thermenwartung-wien",
      "heizungstechnik-wien",
      "notfall-installateur-wien",
    ],
  },
  {
    slug: "wasserinstallateur-wien",
    title: "Wasserinstallateur Wien – Rohrbruch, Leitungen, Armaturen",
    shortTitle: "Wasserinstallateur",
    menuLabel: "Wasser",
    description:
      "Wasserinstallateur Wien: Rohrbruch beheben, Wasserleitung tauschen, Armaturen montieren. Altbau-Spezialist, 24h Notdienst, Fixpreis.",
    tagline: "Vom tropfenden Wasserhahn bis zum kompletten Leitungsneubau – alles aus einer Hand.",
    image: "/images/leistungen/wasserinstallateur-wien.jpg",
    imageAlt:
      "Wasserinstallateur Wien tauscht Steigleitung im Altbau Wien – SA Stadtinstallation Meisterbetrieb",
    icon: "💧",
    priceHint: "Stundensatz transparent, Festpreis für geplante Arbeiten",
    featuredQuestion: "Was macht ein Wasserinstallateur im Altbau Wien?",
    shortAnswer:
      "Ein Wasserinstallateur im Altbau Wien tauscht korrodierte Steigleitungen, ersetzt alte Bleileitungen und behebt Rohrbrüche in Gründerzeithäusern. Viele Gemeindebauten benötigen strangweise Sanierungen, koordiniert mit der Hausverwaltung. SA Stadtinstallation arbeitet nach ÖNORM und ist Mitglied der Landesinnung Wien (WKO Wien).",
    keywords: [
      "Wasserinstallateur Wien",
      "Rohrbruch Wien",
      "Wasserleitung tauschen Wien",
      "Wasserleitung Altbau Wien",
      "Armaturen montieren Wien",
      "Wasserhahn reparieren Wien",
      "Wasserschaden Wien",
    ],
    searchIntents: [
      "Wer trägt die Kosten bei einem Wasserrohrbruch in Wien?",
      "Wie finde ich einen guten Wasserinstallateur in Wien?",
      "Was kostet es, eine Wasserleitung im Altbau zu tauschen?",
      "Mein Wasserhahn tropft – was tun?",
    ],
    commonProblems: [
      "Wasserrohrbruch in Altbau Wien – Steigleitung aus Stahl/Guss",
      "Bleileitungen im Gründerzeithaus müssen getauscht werden",
      "Wasserdruck in Gemeindebau-Wohnung zu niedrig",
      "Armaturen undicht, Silikon schwarz/schimmelig",
      "Waschmaschinenanschluss für neue Wohnung – Protokoll an Hausverwaltung",
      "Zählertausch-Koordination mit Wiener Netze / Wiener Wasser",
    ],
    relatedServices: [
      "sanitaertechnik-wien",
      "verstopfung-wien",
      "notfall-installateur-wien",
    ],
  },
  {
    slug: "heizungstechnik-wien",
    title: "Heizungstechnik Wien – Heizung planen, tauschen, warten",
    shortTitle: "Heizungstechnik",
    menuLabel: "Heizung",
    description:
      "Heizungstechnik in Wien: Gastherme, Wärmepumpe, Fernwärme-Anschluss, hydraulischer Abgleich. Planung, Montage & Wartung vom Meisterbetrieb.",
    tagline: "Effiziente Heizsysteme – von der hydraulischen Planung bis zur Inbetriebnahme.",
    image: "/images/leistungen/heizungstechnik-wien.jpg",
    imageAlt:
      "Heizungstechnik Wien – Wärmepumpen- und Fernwärme-Montage durch SA Stadtinstallation, konzessionierter Meisterbetrieb",
    icon: "🔆",
    priceHint: "Förderberatung (Wien & Bund) inklusive",
    featuredQuestion: "Welche Heizung ist in Wien heute sinnvoll?",
    shortAnswer:
      "In Wien ist der Heizungstausch stark vom Gebäudetyp abhängig: Altbau Wien mit hoher Vorlauftemperatur tendiert zu Brennwert-Gastherme oder hybrider Wärmepumpe, Gemeindebauten wechseln zunehmend auf Wien-Energie-Fernwärme, Neubauten fast immer auf Luft-Wasser-Wärmepumpe. Anmeldungen laufen über Wiener Netze, Förderungen prüfen wir mit.",
    keywords: [
      "Heizungstechnik Wien",
      "Heizung tauschen Wien",
      "Wärmepumpe Wien",
      "Fernwärme Anschluss Wien",
      "Gastherme erneuern Wien",
      "Hydraulischer Abgleich Wien",
      "Heizungsplanung Wien",
    ],
    searchIntents: [
      "Gas oder Wärmepumpe – was ist für Wien besser?",
      "Wie hoch ist die Förderung für den Heizungstausch in Wien?",
      "Was kostet eine neue Gastherme in Wien?",
      "Wie lange dauert ein Heizungstausch?",
    ],
    commonProblems: [
      "Alte Gastherme (>15 Jahre) verbraucht zu viel – Umstieg Wien-Energie-Fernwärme prüfen",
      "Heizkörper in einzelnen Räumen werden nicht warm (hydraulischer Abgleich)",
      "Umstieg von Gas auf Wärmepumpe geplant – Anmeldung Wiener Netze",
      "Fernwärme-Umstellung im Gemeindebau – Sanierungsmodul",
      "Heizungsanlage nach Wohnungskauf unbekannt – Befund erstellen",
      "Förderantrag Bund + Stadt Wien für Heizungstausch",
    ],
    relatedServices: [
      "thermenwartung-wien",
      "gas-installateur-wien",
      "sanitaertechnik-wien",
    ],
  },
  {
    slug: "sanitaertechnik-wien",
    title: "Sanitärtechnik Wien – Badsanierung, WC, Dusche, Waschbecken",
    shortTitle: "Sanitärtechnik",
    menuLabel: "Sanitär",
    description:
      "Sanitärtechnik Wien: komplette Badsanierung, barrierefreies Bad, WC-Tausch, Duschumbau. Planung bis Endmontage aus einer Hand.",
    tagline: "Vom alten Altbau-Bad zur modernen Wellness-Oase – alles aus einer Hand.",
    image: "/images/leistungen/sanitaertechnik-wien.jpg",
    imageAlt:
      "Sanitärtechnik Wien – Badsanierung im Altbau Wien durch SA Stadtinstallation, Meisterbetrieb WKO Wien",
    icon: "🛁",
    priceHint: "Komplett-Festpreis inkl. Material & Entsorgung",
    featuredQuestion: "Was kostet eine Badsanierung im Altbau Wien?",
    shortAnswer:
      "Eine Komplett-Badsanierung im Altbau Wien kostet je nach Größe und Ausstattung typischerweise zwischen 8.000 und 25.000 Euro (inkl. Material, Fliesen, Sanitär, Entsorgung). Im Gemeindebau laufen Badumbauten meist als Modul-Sanierung über die Hausverwaltung. SA Stadtinstallation ist konzessionierter Meisterbetrieb (WKO Wien / Landesinnung Wien) und arbeitet mit Festpreisen.",
    keywords: [
      "Sanitärtechnik Wien",
      "Badsanierung Wien",
      "Bad renovieren Wien",
      "WC tauschen Wien",
      "Dusche einbauen Wien",
      "barrierefreies Bad Wien",
      "Altbau Bad Wien",
    ],
    searchIntents: [
      "Was kostet eine Badsanierung in Wien?",
      "Wie lange dauert eine Komplett-Badsanierung?",
      "Was muss ich im Altbau beachten?",
      "Förderung für barrierefreies Bad in Wien?",
    ],
    commonProblems: [
      "Altbau Wien: Sitzbadewanne soll zu offener bodengleicher Dusche werden",
      "WC-Spülung defekt, Wasser läuft dauerhaft – Wasserkosten steigen",
      "Fugen schwarz, Silikon muss erneuert werden",
      "Barrierefreier Umbau für Angehörige – Förderung Stadt Wien prüfen",
      "Undichter Abfluss unter dem Waschbecken",
      "Badsanierung im Gemeindebau – Abstimmung mit Hausverwaltung",
    ],
    relatedServices: [
      "wasserinstallateur-wien",
      "verstopfung-wien",
      "heizungstechnik-wien",
    ],
  },
  {
    slug: "thermenwartung-wien",
    title: "Thermenwartung Wien – Service für Gasthermen & Brennwertgeräte",
    shortTitle: "Thermenwartung",
    menuLabel: "Therme",
    description:
      "Thermenwartung in Wien: jährliche Wartung, Reinigung & Abgasmessung nach ÖNORM B 8131. Alle Marken – Viessmann, Vaillant, Junkers, Bosch.",
    tagline: "Jährliche Wartung nach ÖNORM B 8131 – sicher, effizient, dokumentiert.",
    image: "/images/leistungen/thermenwartung-wien.jpg",
    imageAlt:
      "Thermenwartung Wien – SA Stadtinstallation beim Service einer Gastherme nach ÖNORM B 8131",
    icon: "⚙️",
    priceHint: "Festpreis für Wartung inkl. Abgasmessung",
    featuredQuestion: "Wie oft muss eine Gastherme in Wien gewartet werden?",
    shortAnswer:
      "In Wien ist eine jährliche Thermenwartung nach ÖNORM B 8131 empfohlen und bei vielen Versicherungen sowie durch die Wiener Rauchfangkehrer-Verordnung faktisch Pflicht. Die Wartung umfasst Reinigung, Dichtheitsprüfung und Abgasmessung. SA Stadtinstallation ist Meisterbetrieb (WKO Wien) und wartet alle Marken – besonders häufig im Altbau Wien und im Gemeindebau.",
    keywords: [
      "Thermenwartung Wien",
      "Therme Service Wien",
      "Gastherme warten Wien",
      "Abgasmessung Wien",
      "Viessmann Service Wien",
      "Vaillant Wartung Wien",
      "Junkers Service Wien",
    ],
    searchIntents: [
      "Wie oft muss ich meine Therme warten lassen?",
      "Was kostet eine Thermenwartung in Wien?",
      "Ist die Thermenwartung in Wien gesetzlich Pflicht?",
      "Welche Marken wartet ihr?",
    ],
    commonProblems: [
      "Therme älter als 1 Jahr, noch nie gewartet – Wiener Rauchfangkehrer fordert Nachweis",
      "Warmwasser wird nicht mehr heiß",
      "Therme taktet ständig / macht Geräusche",
      "Abgasmessung nach ÖNORM B 8131 erforderlich",
      "Mieterwechsel im Gemeindebau – Nachweis für Hausverwaltung",
      "Altbau Wien: Ersatzteilsuche bei älteren Gasthermen",
    ],
    relatedServices: [
      "gas-installateur-wien",
      "heizungstechnik-wien",
      "notfall-installateur-wien",
    ],
  },
  {
    slug: "verstopfung-wien",
    title: "Rohrverstopfung Wien – Abfluss, WC, Dusche freimachen",
    shortTitle: "Rohrverstopfung",
    menuLabel: "Verstopfung",
    description:
      "Verstopfung in Wien schnell beheben: WC, Abfluss, Dusche, Küchenspüle. Mit Spirale, Hochdruckspülung oder Kamerainspektion. 24h.",
    tagline: "Verstopfte Leitungen mit Spirale, Hochdruck oder Kamera – schnell, sauber, spurlos.",
    image: "/images/leistungen/verstopfung-wien.jpg",
    imageAlt:
      "Rohrverstopfung Wien – SA Stadtinstallation entstopft Abfluss mit Hochdruckspülung und Kamera-Inspektion",
    icon: "🌀",
    emergency: true,
    priceHint: "Fixpreis nach Diagnose, keine Überraschungen",
    featuredQuestion: "Wer zahlt bei Rohrverstopfung in Wien – Mieter oder Vermieter?",
    shortAnswer:
      "In Wien gilt: liegt die Verstopfung in der Wohnung (zwischen Einlauf und Fallstrang), trägt meist der Mieter die Kosten. Rückstau im Grund-/Sammelstrang fällt zum Vermieter bzw. zur Hausverwaltung – im Gemeindebau und Altbau Wien typisch. Bei kommunalem Kanalanschluss ist MA 30 / Wien Kanal Ansprechpartner. SA Stadtinstallation dokumentiert die Ursache für die Versicherung.",
    keywords: [
      "Verstopfung Wien",
      "Abfluss verstopft Wien",
      "WC verstopft Wien",
      "Rohrreinigung Wien",
      "Hochdruckspülung Wien",
      "Kanalreinigung Wien",
      "Dusche verstopft Wien",
    ],
    searchIntents: [
      "Wie bekomme ich einen verstopften Abfluss frei?",
      "Was kostet eine Rohrreinigung in Wien?",
      "Wer zahlt bei verstopftem Rohr – Mieter oder Vermieter?",
      "Welche Hausmittel helfen bei Verstopfung wirklich?",
    ],
    commonProblems: [
      "WC drückt beim Spülen Wasser in die Dusche (Rückstau im Fallstrang)",
      "Küchenspüle verstopft nach Silvester",
      "Dusche läuft nur noch langsam ab",
      "Waschbeckenabfluss riecht streng",
      "Kanal im Keller staut zurück – Schnittstelle MA 30 / Wien Kanal",
      "Altbau Wien: verlegte Steinzeug-Grundleitung braucht Kamera-Inspektion",
    ],
    relatedServices: [
      "wasserinstallateur-wien",
      "sanitaertechnik-wien",
      "notfall-installateur-wien",
    ],
  },
];

export const LEISTUNG_SLUGS = LEISTUNGEN.map((l) => l.slug);

export function getLeistung(slug: string): Leistung | undefined {
  return LEISTUNGEN.find((l) => l.slug === slug);
}
