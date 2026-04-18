// Zentrale Firmendaten für SA Stadtinstallation
// Diese Datei ist die einzige Quelle der Wahrheit – alle Komponenten,
// Schema-Generatoren und Seiten lesen hier.

export const FIRMA = {
  name: "SA Stadtinstallation",
  legalName: "SA Stadtinstallation e.U.",
  shortName: "SA Stadt",
  url: "https://sa-stadtinstallation.at",
  logo: "https://sa-stadtinstallation.at/logo.png",
  telephone: "+436766349034",
  telephoneDisplay: "+43 676 634 90 34",
  email: "office@sa-stadtinstallation.at",
  priceRange: "€€",
  foundingDate: "2015",

  address: {
    street: "Puchsbaumgasse 39a",
    postalCode: "1100",
    city: "Wien",
    region: "Wien",
    country: "AT",
    countryName: "Österreich",
  },

  geo: {
    lat: 48.1778,
    lng: 16.3731,
  },

  // Öffnungszeiten (24/7 Notdienst, Büro 07–18)
  openingHours: {
    office: {
      days: ["Mo", "Di", "Mi", "Do", "Fr"],
      opens: "07:00",
      closes: "18:00",
    },
    emergency: {
      hours: "24/7",
      label: "Notdienst rund um die Uhr",
    },
  },

  // Vertrauenssignale für E-E-A-T
  trust: {
    googleKaeuferschutz: true,
    wkoMember: true,
    meisterbetrieb: true,
    innung: "Landesinnung Wien der Sanitär-, Heizungs- und Lüftungstechniker",
    rating: 5.0,
    reviewCount: 127,
    yearsInBusiness: 10,
  },

  // Soziale Kanäle & externe Profile (für sameAs in Schema)
  sameAs: [
    "https://www.google.com/maps/place/SA+Stadtinstallation",
    "https://firmen.wko.at/sa-stadtinstallation",
  ],

  // Marken/Hersteller die wir verbauen (für OrbitBrands & BrandCarousel)
  brands: [
    "Viessmann",
    "Vaillant",
    "Buderus",
    "Junkers",
    "Bosch",
    "Wolf",
    "Saunier Duval",
    "Grohe",
    "Hansgrohe",
    "Geberit",
    "Laufen",
    "Villeroy & Boch",
  ],

  // Kennzahlen für Hero / Badge-Bar
  stats: {
    yearsExperience: "10+",
    responseTime: "30 Min.",
    districtsServed: 23,
    jobsCompleted: "2.500+",
  },
} as const;

export type Firma = typeof FIRMA;
