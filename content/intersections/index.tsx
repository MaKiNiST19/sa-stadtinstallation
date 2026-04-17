// Registry für handgeschriebene Bezirk×Leistung-Kombinationen.
// Key-Format: "{bezirk-slug}/{leistung-slug}".
// Fehlt ein Eintrag, rendert die Seite ihren Default-Text mit
// bauepochen-spezifischer Passage aus [bezirk]/[leistung]/page.tsx.

import { type ReactNode } from "react";

// Favoriten (alle 7 Leistungen)
import favoritenNotfall from "./favoriten-notfall-installateur-wien";
import favoritenThermenwartung from "./favoriten-thermenwartung-wien";
import favoritenGas from "./favoriten-gas-installateur-wien";
import favoritenWasser from "./favoriten-wasserinstallateur-wien";
import favoritenHeizung from "./favoriten-heizungstechnik-wien";
import favoritenSanitaer from "./favoriten-sanitaertechnik-wien";
import favoritenVerstopfung from "./favoriten-verstopfung-wien";

// Innere Stadt
import innereStadtGas from "./innere-stadt-gas-installateur-wien";
import innereStadtNotfall from "./innere-stadt-notfall-installateur-wien";
import innereStadtThermen from "./innere-stadt-thermenwartung-wien";
import innereStadtHeizung from "./innere-stadt-heizungstechnik-wien";

// Leopoldstadt
import leopoldstadtNotfall from "./leopoldstadt-notfall-installateur-wien";
import leopoldstadtThermen from "./leopoldstadt-thermenwartung-wien";
import leopoldstadtGas from "./leopoldstadt-gas-installateur-wien";

// Donaustadt
import donaustadtHeizung from "./donaustadt-heizungstechnik-wien";
import donaustadtNotfall from "./donaustadt-notfall-installateur-wien";
import donaustadtThermen from "./donaustadt-thermenwartung-wien";
import donaustadtGas from "./donaustadt-gas-installateur-wien";

// Simmering
import simmeringNotfall from "./simmering-notfall-installateur-wien";
import simmeringThermen from "./simmering-thermenwartung-wien";
import simmeringHeizung from "./simmering-heizungstechnik-wien";

// Meidling
import meidlingNotfall from "./meidling-notfall-installateur-wien";
import meidlingThermen from "./meidling-thermenwartung-wien";
import meidlingVerstopfung from "./meidling-verstopfung-wien";

// Landstraße
import landstrasseNotfall from "./landstrasse-notfall-installateur-wien";
import landstrasseThermen from "./landstrasse-thermenwartung-wien";

// Hietzing
import hietzingHeizung from "./hietzing-heizungstechnik-wien";

// Döbling
import doeblingHeizung from "./doebling-heizungstechnik-wien";

// Floridsdorf
import floridsdorfNotfall from "./floridsdorf-notfall-installateur-wien";
import floridsdorfHeizung from "./floridsdorf-heizungstechnik-wien";

export const INTERSECTION_CONTENT: Record<string, ReactNode> = {
  // Favoriten (7)
  "favoriten/notfall-installateur-wien": favoritenNotfall,
  "favoriten/thermenwartung-wien": favoritenThermenwartung,
  "favoriten/gas-installateur-wien": favoritenGas,
  "favoriten/wasserinstallateur-wien": favoritenWasser,
  "favoriten/heizungstechnik-wien": favoritenHeizung,
  "favoriten/sanitaertechnik-wien": favoritenSanitaer,
  "favoriten/verstopfung-wien": favoritenVerstopfung,

  // Innere Stadt (4)
  "innere-stadt/gas-installateur-wien": innereStadtGas,
  "innere-stadt/notfall-installateur-wien": innereStadtNotfall,
  "innere-stadt/thermenwartung-wien": innereStadtThermen,
  "innere-stadt/heizungstechnik-wien": innereStadtHeizung,

  // Leopoldstadt (3)
  "leopoldstadt/notfall-installateur-wien": leopoldstadtNotfall,
  "leopoldstadt/thermenwartung-wien": leopoldstadtThermen,
  "leopoldstadt/gas-installateur-wien": leopoldstadtGas,

  // Donaustadt (4)
  "donaustadt/heizungstechnik-wien": donaustadtHeizung,
  "donaustadt/notfall-installateur-wien": donaustadtNotfall,
  "donaustadt/thermenwartung-wien": donaustadtThermen,
  "donaustadt/gas-installateur-wien": donaustadtGas,

  // Simmering (3)
  "simmering/notfall-installateur-wien": simmeringNotfall,
  "simmering/thermenwartung-wien": simmeringThermen,
  "simmering/heizungstechnik-wien": simmeringHeizung,

  // Meidling (3)
  "meidling/notfall-installateur-wien": meidlingNotfall,
  "meidling/thermenwartung-wien": meidlingThermen,
  "meidling/verstopfung-wien": meidlingVerstopfung,

  // Landstraße (2)
  "landstrasse/notfall-installateur-wien": landstrasseNotfall,
  "landstrasse/thermenwartung-wien": landstrasseThermen,

  // Hietzing (1)
  "hietzing/heizungstechnik-wien": hietzingHeizung,

  // Döbling (1)
  "doebling/heizungstechnik-wien": doeblingHeizung,

  // Floridsdorf (2)
  "floridsdorf/notfall-installateur-wien": floridsdorfNotfall,
  "floridsdorf/heizungstechnik-wien": floridsdorfHeizung,
};
