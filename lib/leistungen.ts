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
  icon: string;               // Emoji-Fallback (später SVG)
  keywords: string[];         // primäre + sekundäre Keywords
  searchIntents: string[];    // Such-Intents (für AI Overview / FAQ)
  commonProblems: string[];   // E-E-A-T: konkrete Probleme die wir lösen
  relatedServices: string[];  // interne Verlinkung (slugs)
  priceHint?: string;         // transparenter Preishinweis
  emergency?: boolean;        // 24/7?
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
    image: "/images/leistungen/notfall.jpg",
    icon: "🚨",
    emergency: true,
    priceHint: "Anfahrt pauschal, Fixpreis vor Arbeitsbeginn",
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
      "Platzende Wasserleitung in Altbauwohnung",
      "Verstopftes WC mit Rückstau in die Dusche",
      "Therme zündet nicht mehr – kein Warmwasser",
      "Gasgeruch in der Küche oder im Stiegenhaus",
      "Heizung fällt mitten im Winter aus",
      "Überlaufende Waschmaschine oder Spülmaschine",
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
    image: "/images/leistungen/gas.jpg",
    icon: "🔥",
    priceHint: "Festpreis-Angebot nach Vor-Ort-Termin",
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
      "Neue Gastherme soll montiert werden (Wien Energie Anmeldung)",
      "Gasgeruch – sofortige Dichtheitsprüfung nötig",
      "Altbau: Gasleitung entspricht nicht mehr ÖVGW G1",
      "Umstellung von Gas-Durchlauferhitzer auf Brennwerttherme",
      "Gas-Abmeldung bei Wohnungsübergabe",
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
    image: "/images/leistungen/wasser.jpg",
    icon: "💧",
    priceHint: "Stundensatz transparent, Festpreis für geplante Arbeiten",
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
      "Wasserrohrbruch in Altbau-Steigleitung",
      "Bleileitungen im Gründerzeithaus müssen getauscht werden",
      "Wasserdruck in der Wohnung zu niedrig",
      "Armaturen undicht, Silikon schwarz/schimmelig",
      "Waschmaschinenanschluss für neue Wohnung",
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
    image: "/images/leistungen/heizung.jpg",
    icon: "🔆",
    priceHint: "Förderberatung (Wien & Bund) inklusive",
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
      "Alte Gastherme (>15 Jahre) verbraucht zu viel",
      "Heizkörper in einzelnen Räumen werden nicht warm",
      "Umstieg von Gas auf Wärmepumpe geplant",
      "Fernwärme-Umstellung im Gemeindebau",
      "Heizungsanlage nach Wohnungskauf unbekannt",
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
    image: "/images/leistungen/sanitaer.jpg",
    icon: "🛁",
    priceHint: "Komplett-Festpreis inkl. Material & Entsorgung",
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
      "Altbau-Bad mit Sitzbadewanne soll offene Dusche werden",
      "WC-Spülung defekt, Wasser läuft dauerhaft",
      "Fugen schwarz, Silikon muss erneuert werden",
      "Barrierefreier Umbau für Angehörige",
      "Undichter Abfluss unter dem Waschbecken",
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
    image: "/images/leistungen/therme.jpg",
    icon: "⚙️",
    priceHint: "Festpreis für Wartung inkl. Abgasmessung",
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
      "Therme älter als 1 Jahr, noch nie gewartet",
      "Warmwasser wird nicht mehr heiß",
      "Therme taktet ständig / macht Geräusche",
      "Rauchfangkehrer fordert Wartungsnachweis",
      "Mieterwechsel – Nachweis für Hausverwaltung",
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
    image: "/images/leistungen/verstopfung.jpg",
    icon: "🌀",
    emergency: true,
    priceHint: "Fixpreis nach Diagnose, keine Überraschungen",
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
      "WC drückt beim Spülen Wasser in die Dusche",
      "Küchenspüle verstopft nach Silvester",
      "Dusche läuft nur noch langsam ab",
      "Waschbeckenabfluss riecht streng",
      "Kanal im Keller staut zurück",
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
