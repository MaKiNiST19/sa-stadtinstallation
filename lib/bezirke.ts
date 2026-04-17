// Die 23 Wiener Gemeindebezirke
// Jeder Bezirk ist eine eigene Pillar-Seite /bezirke/[slug]
// UND wird mit jeder der 7 Leistungen zu einer Cluster-Seite kombiniert.
//
// Die Struktur wird von der allgemeinen Pillar-Cluster-Architektur benötigt
// und durch die schema.ts und sitemap.ts konsumiert.

export interface Bezirk {
  plz: string;               // 1010, 1020, …
  slug: string;              // URL-Slug (innere-stadt, leopoldstadt, …)
  name: string;              // Vollname inkl. Nummer, z.B. "1. Bezirk – Innere Stadt"
  shortName: string;         // kurz, z.B. "Innere Stadt"
  number: number;            // 1..23
  lat: number;
  lng: number;
  neighborhoods: string[];   // Grätzl / Ortslagen (für lokale Keywords & Grätzl-Listen)
  landmarks: string[];       // bekannte Bauten / Plätze (für E-E-A-T / lokale Relevanz)
  buildingStyle: string[];   // vorherrschende Bauepochen (für sanitär/installationstechnischen Kontext)
  keywords: string[];        // Such-Keywords pro Bezirk
  description: string;       // Meta-Description (<=158 Zeichen)
  intro: string;             // Intro-Absatz für die Bezirksseite
  population: number;        // Einwohner, ungefähr
  area: number;              // km²
}

export const BEZIRKE: Bezirk[] = [
  {
    plz: "1010",
    slug: "innere-stadt",
    name: "1. Bezirk – Innere Stadt",
    shortName: "Innere Stadt",
    number: 1,
    lat: 48.2082,
    lng: 16.3738,
    neighborhoods: ["Stephansplatz", "Am Hof", "Graben", "Kärntner Straße", "Freyung", "Schottentor"],
    landmarks: ["Stephansdom", "Hofburg", "Staatsoper", "Peterskirche", "Graben", "Kärntner Straße"],
    buildingStyle: ["Gotik", "Barock", "Gründerzeit", "historische Palais"],
    keywords: [
      "Installateur 1010",
      "Installateur Innere Stadt",
      "Notdienst 1. Bezirk Wien",
      "Rohrbruch 1010 Wien",
      "Gas Installateur Innere Stadt",
    ],
    description:
      "Installateur 1010 Wien – 24h Notdienst in der Inneren Stadt. Altbau-Spezialist für Palais, Gründerzeithäuser & Gewerbeobjekte. In 30 Min. vor Ort.",
    intro:
      "Die Innere Stadt ist Wiens historischer Kern – und eine besondere installationstechnische Herausforderung. Zwischen Stephansdom, Hofburg und Graben arbeiten wir täglich in Gründerzeithäusern, barocken Palais und denkmalgeschützten Gebäuden mit jahrzehntealten Blei- oder Bleilot-Leitungen.",
    population: 16400,
    area: 3.01,
  },
  {
    plz: "1020",
    slug: "leopoldstadt",
    name: "2. Bezirk – Leopoldstadt",
    shortName: "Leopoldstadt",
    number: 2,
    lat: 48.2172,
    lng: 16.3946,
    neighborhoods: ["Praterstern", "Nestroyplatz", "Karmeliterviertel", "Stuwerviertel", "Volkertviertel", "Zwischenbrücken"],
    landmarks: ["Prater", "Riesenrad", "Augarten", "Karmelitermarkt", "Praterstern", "Donaukanal"],
    buildingStyle: ["Gründerzeit", "Zwischenkriegszeit", "moderne Neubauten", "Gemeindebauten"],
    keywords: [
      "Installateur 1020",
      "Installateur Leopoldstadt",
      "Notdienst 2. Bezirk Wien",
      "Rohrbruch 1020 Wien",
      "Gas Installateur Leopoldstadt",
    ],
    description:
      "Installateur 1020 Leopoldstadt – 24h Notdienst zwischen Prater und Augarten. Altbau, Gemeindebau und Neubau: wir kennen den Bezirk.",
    intro:
      "Die Leopoldstadt ist ein Bezirk der Gegensätze: Altbau-Blöcke im Karmeliterviertel, moderne Projekte am Donaukanal, Gemeindebauten im Stuwerviertel. Seit Jahren sind wir im 2. Bezirk täglich im Einsatz.",
    population: 106000,
    area: 19.24,
  },
  {
    plz: "1030",
    slug: "landstrasse",
    name: "3. Bezirk – Landstraße",
    shortName: "Landstraße",
    number: 3,
    lat: 48.1975,
    lng: 16.3946,
    neighborhoods: ["Rochusmarkt", "Fasanviertel", "Weißgerberviertel", "Rennweg", "Erdberg", "Sankt Marx"],
    landmarks: ["Belvedere", "Hauptbahnhof", "Rochusmarkt", "Arsenal", "Kunsthaus Wien", "Botanischer Garten"],
    buildingStyle: ["Gründerzeit", "Jugendstil", "Gemeindebau", "Hauptbahnhof-Neubau"],
    keywords: [
      "Installateur 1030",
      "Installateur Landstraße",
      "Notdienst 3. Bezirk Wien",
      "Rohrbruch 1030 Wien",
      "Gas Installateur Landstraße",
    ],
    description:
      "Installateur 1030 Landstraße – 24h Notdienst rund um Belvedere, Rochusmarkt und Hauptbahnhof. Altbau & Neubau mit Festpreis.",
    intro:
      "Die Landstraße verbindet das klassische Wien rund um das Belvedere mit dem modernen Hauptbahnhof-Viertel. Ob Jugendstilhaus im Weißgerberviertel oder Neubau am Sonnwendviertel – wir arbeiten in beiden Welten.",
    population: 94000,
    area: 7.42,
  },
  {
    plz: "1040",
    slug: "wieden",
    name: "4. Bezirk – Wieden",
    shortName: "Wieden",
    number: 4,
    lat: 48.1912,
    lng: 16.3680,
    neighborhoods: ["Freihausviertel", "Karlsplatz", "Operngasse", "Schleifmühlgasse", "Paulanerviertel"],
    landmarks: ["Karlskirche", "Naschmarkt", "TU Wien", "Theresianum", "Belvedere (Südseite)"],
    buildingStyle: ["Gründerzeit", "Jugendstil", "Palaisbauten"],
    keywords: [
      "Installateur 1040",
      "Installateur Wieden",
      "Notdienst 4. Bezirk Wien",
      "Rohrbruch 1040 Wien",
    ],
    description:
      "Installateur 1040 Wieden – Notdienst rund um Karlsplatz, Naschmarkt und TU Wien. Altbau-Spezialist mit Erfahrung in Jugendstilhäusern.",
    intro:
      "Die Wieden ist ein dicht bebauter Innenbezirk mit vielen Altbauten, Jugendstilhäusern und Studentenwohnungen rund um die TU. Wir kennen die typischen Probleme: alte Steigleitungen, enge Stiegenhäuser, empfindliche Fassaden.",
    population: 33000,
    area: 1.78,
  },
  {
    plz: "1050",
    slug: "margareten",
    name: "5. Bezirk – Margareten",
    shortName: "Margareten",
    number: 5,
    lat: 48.1872,
    lng: 16.3572,
    neighborhoods: ["Schlossquadr", "Matzleinsdorfer Platz", "Einsiedlerplatz", "Bacherpark", "Siebenbrunnenplatz"],
    landmarks: ["Reinprechtsdorfer Straße", "Margaretenhof", "Bacherpark", "Einsiedlerpark"],
    buildingStyle: ["Gründerzeit", "rote Wiener Gemeindebauten", "Margaretenhof (1884)"],
    keywords: [
      "Installateur 1050",
      "Installateur Margareten",
      "Notdienst 5. Bezirk Wien",
      "Rohrbruch 1050 Wien",
    ],
    description:
      "Installateur 1050 Margareten – 24h Notdienst in Gründerzeit- und Gemeindebauten. Fairer Preis, transparent.",
    intro:
      "Margareten ist stark durch Gründerzeit und große Gemeindebauten geprägt. Der Margaretenhof von 1884 zählt zu den bekanntesten. Genau in diesen Häusern liegen die installationstechnischen Besonderheiten, die wir täglich meistern.",
    population: 56000,
    area: 2.01,
  },
  {
    plz: "1060",
    slug: "mariahilf",
    name: "6. Bezirk – Mariahilf",
    shortName: "Mariahilf",
    number: 6,
    lat: 48.1951,
    lng: 16.3490,
    neighborhoods: ["Mariahilfer Straße", "Gumpendorf", "Loquaiplatz", "Raimundhof"],
    landmarks: ["Mariahilfer Straße", "Haus des Meeres", "Gumpendorfer Straße", "Raimund Theater"],
    buildingStyle: ["Gründerzeit", "Jugendstil", "Geschäftslokale im Erdgeschoss"],
    keywords: [
      "Installateur 1060",
      "Installateur Mariahilf",
      "Notdienst 6. Bezirk Wien",
      "Rohrbruch 1060 Wien",
    ],
    description:
      "Installateur 1060 Mariahilf – Notdienst für Wohnungen und Geschäfte rund um die Mariahilfer Straße. 24h erreichbar.",
    intro:
      "Mariahilf pulsiert rund um die längste Einkaufsstraße Wiens. Wir betreuen hier sowohl Wohnungen in Gründerzeithäusern als auch Gastronomie und Einzelhandel – oft mit sensibler Logistik (Lieferzeiten, Kundenfrequenz).",
    population: 32000,
    area: 1.46,
  },
  {
    plz: "1070",
    slug: "neubau",
    name: "7. Bezirk – Neubau",
    shortName: "Neubau",
    number: 7,
    lat: 48.2028,
    lng: 16.3455,
    neighborhoods: ["Spittelberg", "Neubaugasse", "Zieglergasse", "Siebensterngasse"],
    landmarks: ["MuseumsQuartier", "Spittelberg", "Volkstheater", "Ulrichsplatz"],
    buildingStyle: ["Gründerzeit", "Biedermeier (Spittelberg)", "Jugendstil"],
    keywords: [
      "Installateur 1070",
      "Installateur Neubau",
      "Notdienst 7. Bezirk Wien",
      "Rohrbruch 1070 Wien",
    ],
    description:
      "Installateur 1070 Neubau – Altbau-Spezialist zwischen Spittelberg und MuseumsQuartier. Schnell, sauber, fair.",
    intro:
      "Der Neubau ist kreativ, klein gegliedert und voller Biedermeier- und Gründerzeithäuser. Besonders am Spittelberg und rund um die Neubaugasse ist Fingerspitzengefühl nötig – die Häuser sind alt, die Substanz empfindlich.",
    population: 31500,
    area: 1.61,
  },
  {
    plz: "1080",
    slug: "josefstadt",
    name: "8. Bezirk – Josefstadt",
    shortName: "Josefstadt",
    number: 8,
    lat: 48.2105,
    lng: 16.3482,
    neighborhoods: ["Alser Straße", "Lerchenfelder Straße", "Piaristenviertel", "Strozzigasse"],
    landmarks: ["Theater in der Josefstadt", "Piaristenkirche", "Rathaus (Nähe)", "Volkstheater"],
    buildingStyle: ["Biedermeier", "Gründerzeit", "enge Altbauten"],
    keywords: [
      "Installateur 1080",
      "Installateur Josefstadt",
      "Notdienst 8. Bezirk Wien",
    ],
    description:
      "Installateur 1080 Josefstadt – kleinster Bezirk Wiens, größter Altbau-Anteil. Wir kennen jede Stiege.",
    intro:
      "Die Josefstadt ist flächenmäßig der kleinste Bezirk Wiens – aber mit einem der höchsten Altbau-Anteile. Enge Stiegenhäuser, Biedermeierhäuser rund um das Theater und die Piaristenkirche gehören zu unserem täglichen Einsatzgebiet.",
    population: 25000,
    area: 1.09,
  },
  {
    plz: "1090",
    slug: "alsergrund",
    name: "9. Bezirk – Alsergrund",
    shortName: "Alsergrund",
    number: 9,
    lat: 48.2250,
    lng: 16.3576,
    neighborhoods: ["Servitenviertel", "Althanviertel", "Liechtensteinviertel", "Rossauer Lände"],
    landmarks: ["AKH", "Sigmund-Freud-Park", "Votivkirche", "Liechtenstein-Palais", "Spittelau"],
    buildingStyle: ["Gründerzeit", "Palais", "moderne Uni-Neubauten"],
    keywords: [
      "Installateur 1090",
      "Installateur Alsergrund",
      "Notdienst 9. Bezirk Wien",
    ],
    description:
      "Installateur 1090 Alsergrund – Notdienst rund um AKH, Votivkirche und Servitenviertel. 24h in 30 Minuten vor Ort.",
    intro:
      "Der Alsergrund ist der Universitätsbezirk Wiens. Zwischen AKH, WU-Altgebäuden und den schönen Gründerzeithäusern des Servitenviertels arbeiten wir mit einem breiten Spektrum – vom Ordinations-Notfall bis zum Studentenheim.",
    population: 42000,
    area: 2.98,
  },
  {
    plz: "1100",
    slug: "favoriten",
    name: "10. Bezirk – Favoriten",
    shortName: "Favoriten",
    number: 10,
    lat: 48.1778,
    lng: 16.3731,
    neighborhoods: ["Reumannplatz", "Viktor-Adler-Markt", "Keplerplatz", "Sonnwendviertel", "Oberlaa", "Unterlaa"],
    landmarks: ["Hauptbahnhof", "Reumannplatz", "Böhmischer Prater", "Therme Wien Oberlaa", "Humboldtplatz"],
    buildingStyle: ["Gründerzeit", "Gemeindebau", "Sonnwendviertel-Neubau", "Reihenhäuser in Oberlaa"],
    keywords: [
      "Installateur 1100",
      "Installateur Favoriten",
      "Notdienst 10. Bezirk Wien",
      "Rohrbruch 1100 Wien",
      "Gas Installateur Favoriten",
    ],
    description:
      "Installateur 1100 Favoriten – Ihr Nachbar in der Humboldtgasse. Lokaler Meisterbetrieb, 24h Notdienst, Festpreis.",
    intro:
      "Favoriten ist unser Heimatbezirk. Unsere Werkstatt liegt in der Humboldtgasse 33. Wir kennen jede Gasse – vom Reumannplatz über das Sonnwendviertel bis nach Oberlaa. Ihre Anfahrt ist meistens kostenlos.",
    population: 210000,
    area: 31.82,
  },
  {
    plz: "1110",
    slug: "simmering",
    name: "11. Bezirk – Simmering",
    shortName: "Simmering",
    number: 11,
    lat: 48.1683,
    lng: 16.4296,
    neighborhoods: ["Simmeringer Hauptstraße", "Kaiserebersdorf", "Albern", "Hasenleiten"],
    landmarks: ["Gasometer", "Zentralfriedhof", "Simmeringer Hauptstraße"],
    buildingStyle: ["Gemeindebau", "Reihenhäuser", "Gasometer-Umbau"],
    keywords: [
      "Installateur 1110",
      "Installateur Simmering",
      "Notdienst 11. Bezirk Wien",
    ],
    description:
      "Installateur 1110 Simmering – Notdienst zwischen Gasometer und Zentralfriedhof. Gemeindebau- und Einfamilienhaus-Erfahrung.",
    intro:
      "Simmering ist ein Arbeiterbezirk mit großen Gemeindebauten, aber auch vielen Einfamilienhäusern in Kaiserebersdorf und Albern. Die Gasometer sind ein eigenes Kapitel – wir betreuen dort sowohl Wohnungen als auch Gewerbeeinheiten.",
    population: 105000,
    area: 23.26,
  },
  {
    plz: "1120",
    slug: "meidling",
    name: "12. Bezirk – Meidling",
    shortName: "Meidling",
    number: 12,
    lat: 48.1725,
    lng: 16.3333,
    neighborhoods: ["Meidlinger Hauptstraße", "Schönbrunn", "Wilhelmsdorf", "Hetzendorf", "Gaudenzdorf"],
    landmarks: ["Schloss Schönbrunn (Südseite)", "Meidlinger Markt", "Wienerberg City"],
    buildingStyle: ["Gründerzeit", "Gemeindebau", "Reihenhäuser Hetzendorf"],
    keywords: [
      "Installateur 1120",
      "Installateur Meidling",
      "Notdienst 12. Bezirk Wien",
    ],
    description:
      "Installateur 1120 Meidling – von Schönbrunn bis Wienerberg. Altbau, Gemeindebau und Einfamilienhaus – wir haben alles im Griff.",
    intro:
      "Meidling verbindet dichten Gründerzeitkern mit den offenen Wohnquartieren rund um Hetzendorf. Von der Meidlinger Hauptstraße bis zum Wienerberg betreuen wir ein sehr gemischtes Einsatzgebiet.",
    population: 97000,
    area: 8.10,
  },
  {
    plz: "1130",
    slug: "hietzing",
    name: "13. Bezirk – Hietzing",
    shortName: "Hietzing",
    number: 13,
    lat: 48.1869,
    lng: 16.3019,
    neighborhoods: ["Ober St. Veit", "Unter St. Veit", "Speising", "Lainz", "Hacking"],
    landmarks: ["Schloss Schönbrunn", "Tiergarten Schönbrunn", "Lainzer Tiergarten", "Hermesvilla"],
    buildingStyle: ["Gründerzeit-Villen", "Jugendstil", "Einfamilienhäuser"],
    keywords: [
      "Installateur 1130",
      "Installateur Hietzing",
      "Notdienst 13. Bezirk Wien",
    ],
    description:
      "Installateur 1130 Hietzing – Villen- und Einfamilienhaus-Spezialist von Schönbrunn bis Lainz. Diskret, sauber, pünktlich.",
    intro:
      "Hietzing ist grün, ruhig und oft noblesse. Viele unserer Aufträge hier sind Villen, Jahrhundertwendehäuser und große Einfamilienhäuser mit komplexer Haustechnik – Wärmepumpen, Geothermie, große Bäder.",
    population: 55000,
    area: 37.71,
  },
  {
    plz: "1140",
    slug: "penzing",
    name: "14. Bezirk – Penzing",
    shortName: "Penzing",
    number: 14,
    lat: 48.2000,
    lng: 16.2833,
    neighborhoods: ["Breitensee", "Baumgarten", "Hütteldorf", "Hadersdorf-Weidlingau"],
    landmarks: ["Otto-Wagner-Spital", "Hütteldorf", "Wienerwald", "Auhof"],
    buildingStyle: ["Otto-Wagner-Stadtbahn", "Jugendstil", "Einfamilienhäuser im Westen"],
    keywords: [
      "Installateur 1140",
      "Installateur Penzing",
      "Notdienst 14. Bezirk Wien",
    ],
    description:
      "Installateur 1140 Penzing – Jugendstil und Einfamilienhaus am Wienerwaldrand. Fairer Preis, schneller Service.",
    intro:
      "Penzing ist ein langer Bezirk – vom städtischen Breitensee bis zum fast ländlichen Hadersdorf-Weidlingau. Wir betreuen hier Otto-Wagner-Jugendstilhäuser ebenso wie Einfamilienhäuser am Wienerwaldrand.",
    population: 94000,
    area: 33.76,
  },
  {
    plz: "1150",
    slug: "rudolfsheim-fuenfhaus",
    name: "15. Bezirk – Rudolfsheim-Fünfhaus",
    shortName: "Rudolfsheim-Fünfhaus",
    number: 15,
    lat: 48.1964,
    lng: 16.3308,
    neighborhoods: ["Schmelz", "Reindorf", "Sechshaus", "Rustensteg"],
    landmarks: ["Westbahnhof", "Schmelz", "Stadthalle"],
    buildingStyle: ["Gründerzeit dicht", "Gemeindebau", "Reihenhäuser Schmelz"],
    keywords: [
      "Installateur 1150",
      "Installateur Rudolfsheim-Fünfhaus",
      "Notdienst 15. Bezirk Wien",
    ],
    description:
      "Installateur 1150 – Notdienst zwischen Westbahnhof und Stadthalle. Dichter Altbau, schnelle Anfahrt, faire Preise.",
    intro:
      "Rudolfsheim-Fünfhaus gehört zu den dichtesten Altbau-Bezirken Wiens. Rund um den Westbahnhof und die Stadthalle findet man typische Gründerzeitstrukturen mit den typischen Problemen: alte Steigleitungen, wenig Platz, viele Mietparteien pro Haus.",
    population: 77000,
    area: 3.92,
  },
  {
    plz: "1160",
    slug: "ottakring",
    name: "16. Bezirk – Ottakring",
    shortName: "Ottakring",
    number: 16,
    lat: 48.2114,
    lng: 16.3125,
    neighborhoods: ["Yppenmarkt", "Brunnenviertel", "Sandleitenhof", "Wilhelminenberg"],
    landmarks: ["Brunnenmarkt", "Ottakringer Brauerei", "Wilhelminenberg", "Sandleitenhof"],
    buildingStyle: ["Gründerzeit", "große Gemeindebauten (Sandleitenhof)", "Einfamilienhaus Wilhelminenberg"],
    keywords: [
      "Installateur 1160",
      "Installateur Ottakring",
      "Notdienst 16. Bezirk Wien",
    ],
    description:
      "Installateur 1160 Ottakring – vom Yppenmarkt bis zum Wilhelminenberg. Altbau, Gemeindebau, Einfamilienhaus.",
    intro:
      "Ottakring ist bunt: urbaner Yppenmarkt, riesige Gemeindebauten wie der Sandleitenhof, Villenviertel am Wilhelminenberg. Unsere Aufträge reichen vom 30m²-Bassenahaus bis zum 300m²-Einfamilienhaus.",
    population: 103000,
    area: 8.67,
  },
  {
    plz: "1170",
    slug: "hernals",
    name: "17. Bezirk – Hernals",
    shortName: "Hernals",
    number: 17,
    lat: 48.2333,
    lng: 16.3167,
    neighborhoods: ["Hernalser Hauptstraße", "Dornbach", "Neuwaldegg"],
    landmarks: ["Kalvarienberg", "Schwarzenbergpark", "Dornbacher Pfarre"],
    buildingStyle: ["Gründerzeit", "Einfamilienhäuser Dornbach/Neuwaldegg"],
    keywords: [
      "Installateur 1170",
      "Installateur Hernals",
      "Notdienst 17. Bezirk Wien",
    ],
    description:
      "Installateur 1170 Hernals – Altbau und Einfamilienhaus am Wienerwaldrand. 24h Notdienst in ganz Hernals.",
    intro:
      "Hernals steigt vom dichten Altbau der Hernalser Hauptstraße sanft in Richtung Wienerwald hinauf. In Dornbach und Neuwaldegg dominieren Einfamilienhäuser – mit eigenen Heizsystemen, Gärten und oft alten Wasseranschlüssen.",
    population: 55000,
    area: 11.40,
  },
  {
    plz: "1180",
    slug: "waehring",
    name: "18. Bezirk – Währing",
    shortName: "Währing",
    number: 18,
    lat: 48.2333,
    lng: 16.3333,
    neighborhoods: ["Gersthof", "Pötzleinsdorf", "Weinhaus", "Währinger Cottageviertel"],
    landmarks: ["Cottageviertel", "Türkenschanzpark", "Pötzleinsdorfer Schlosspark"],
    buildingStyle: ["Gründerzeit-Villen", "Cottageviertel", "Jugendstil"],
    keywords: [
      "Installateur 1180",
      "Installateur Währing",
      "Notdienst 18. Bezirk Wien",
    ],
    description:
      "Installateur 1180 Währing – Villenviertel und Cottage. Erfahrener Partner für anspruchsvolle Haustechnik.",
    intro:
      "Währing ist geprägt vom Cottageviertel und den Villenlagen in Pötzleinsdorf. Unsere Kunden schätzen diskreten, pünktlichen Service und die Erfahrung mit komplexer Haustechnik in Mehrgenerationen-Häusern.",
    population: 50000,
    area: 6.35,
  },
  {
    plz: "1190",
    slug: "doebling",
    name: "19. Bezirk – Döbling",
    shortName: "Döbling",
    number: 19,
    lat: 48.2500,
    lng: 16.3333,
    neighborhoods: ["Grinzing", "Nussdorf", "Sievering", "Heiligenstadt", "Oberdöbling", "Kahlenbergerdorf"],
    landmarks: ["Kahlenberg", "Leopoldsberg", "Heurigen Grinzing", "Karl-Marx-Hof"],
    buildingStyle: ["Karl-Marx-Hof", "Weinbauerhäuser", "Gründerzeit-Villen"],
    keywords: [
      "Installateur 1190",
      "Installateur Döbling",
      "Notdienst 19. Bezirk Wien",
    ],
    description:
      "Installateur 1190 Döbling – Grinzing, Nussdorf, Heiligenstadt. Villen und Heurige gehören zu unserem Alltag.",
    intro:
      "Döbling ist Wiens grüner, hügeliger Norden mit Weinbergen, Heurigen und prächtigen Villen. Der Karl-Marx-Hof ist einer der größten Gemeindebauten der Welt – auch hier sind wir regelmäßig im Einsatz.",
    population: 73000,
    area: 24.94,
  },
  {
    plz: "1200",
    slug: "brigittenau",
    name: "20. Bezirk – Brigittenau",
    shortName: "Brigittenau",
    number: 20,
    lat: 48.2333,
    lng: 16.3833,
    neighborhoods: ["Hannovermarkt", "Friedrich-Engels-Platz", "Brigittaplatz"],
    landmarks: ["Millennium Tower", "Hannovermarkt", "Brigittaplatz"],
    buildingStyle: ["Gründerzeit", "Gemeindebau", "Hochhäuser am Donaukanal"],
    keywords: [
      "Installateur 1200",
      "Installateur Brigittenau",
      "Notdienst 20. Bezirk Wien",
    ],
    description:
      "Installateur 1200 Brigittenau – Altbau und Hochhaus. 24h Notdienst vom Hannovermarkt bis zum Millennium Tower.",
    intro:
      "Die Brigittenau liegt zwischen Donau und Donaukanal. Dicht bebaut, viele Altbauten, einige markante Hochhäuser wie der Millennium Tower. In Hochhäusern hat die Installation besondere Anforderungen – Druckzonen, Steigleitungen, Lüftungstechnik.",
    population: 88000,
    area: 5.71,
  },
  {
    plz: "1210",
    slug: "floridsdorf",
    name: "21. Bezirk – Floridsdorf",
    shortName: "Floridsdorf",
    number: 21,
    lat: 48.2667,
    lng: 16.4000,
    neighborhoods: ["Stammersdorf", "Strebersdorf", "Großjedlersdorf", "Jedlesee", "Floridsdorfer Hauptstraße"],
    landmarks: ["Floridsdorfer Hauptstraße", "Alte Donau", "Stammersdorf (Heuriger)", "Bisamberg"],
    buildingStyle: ["Einfamilienhaus", "Reihenhaus", "Neubau-Siedlungen"],
    keywords: [
      "Installateur 1210",
      "Installateur Floridsdorf",
      "Notdienst 21. Bezirk Wien",
    ],
    description:
      "Installateur 1210 Floridsdorf – Einfamilienhaus-Spezialist nördlich der Donau. Wärmepumpe, Heizungstausch, Neubau.",
    intro:
      "Floridsdorf ist ein weiter, familienfreundlicher Bezirk nördlich der Donau. Viele Einfamilienhäuser, Reihenhaussiedlungen, dazu die Weinhauerdörfer Stammersdorf und Strebersdorf. Hier geht es oft um Heizungstausch, Wärmepumpe oder Neubau.",
    population: 170000,
    area: 44.46,
  },
  {
    plz: "1220",
    slug: "donaustadt",
    name: "22. Bezirk – Donaustadt",
    shortName: "Donaustadt",
    number: 22,
    lat: 48.2333,
    lng: 16.4500,
    neighborhoods: ["Kaisermühlen", "Aspern Seestadt", "Stadlau", "Hirschstetten", "Eßling", "Breitenlee"],
    landmarks: ["Donauturm", "UNO-City", "Seestadt Aspern", "Alte Donau", "Donauinsel"],
    buildingStyle: ["Seestadt (Neubau)", "Einfamilienhaus", "Hochhäuser Kaisermühlen"],
    keywords: [
      "Installateur 1220",
      "Installateur Donaustadt",
      "Notdienst 22. Bezirk Wien",
      "Installateur Seestadt Aspern",
    ],
    description:
      "Installateur 1220 Donaustadt – von Kaisermühlen bis Seestadt Aspern. Neubau, Smart-Home und Einfamilienhaus.",
    intro:
      "Die Donaustadt ist flächenmäßig der größte Bezirk Wiens und wächst rasant. Die Seestadt Aspern ist eines der größten Stadtentwicklungsprojekte Europas – viele Neubauten mit moderner Haustechnik, Fernwärme und Smart Home.",
    population: 210000,
    area: 102.34,
  },
  {
    plz: "1230",
    slug: "liesing",
    name: "23. Bezirk – Liesing",
    shortName: "Liesing",
    number: 23,
    lat: 48.1333,
    lng: 16.2833,
    neighborhoods: ["Rodaun", "Kalksburg", "Mauer", "Siebenhirten", "Atzgersdorf", "Inzersdorf"],
    landmarks: ["Wotrubakirche", "Maurer Wald", "Liesingbach", "Perchtoldsdorfer Heide"],
    buildingStyle: ["Einfamilienhaus", "Villen Rodaun/Kalksburg", "Industriegebiet Inzersdorf"],
    keywords: [
      "Installateur 1230",
      "Installateur Liesing",
      "Notdienst 23. Bezirk Wien",
    ],
    description:
      "Installateur 1230 Liesing – Einfamilienhaus-Spezialist im Südwesten Wiens. Wärmepumpe, Heizungstausch, Badsanierung.",
    intro:
      "Liesing ist der Südwest-Zipfel Wiens – grün, hügelig, geprägt von Einfamilienhäusern in Rodaun, Kalksburg und Mauer. Viele unserer Kunden hier planen Heizungstausch, Wärmepumpe oder Komplett-Badsanierung.",
    population: 106000,
    area: 32.06,
  },
];

export const BEZIRK_SLUGS = BEZIRKE.map((b) => b.slug);

export function getBezirk(slug: string): Bezirk | undefined {
  return BEZIRKE.find((b) => b.slug === slug);
}
