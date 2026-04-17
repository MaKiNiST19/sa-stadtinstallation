// Zentrale Registry für handgeschriebene Leistungsinhalte.
// Jede Leistung bekommt eine eigene Datei mit JSX – KEIN Auto-Generator.
// Fehlt ein Eintrag, zeigt die Seite die Standard-Struktur aus [slug]/page.tsx.

import { type ReactNode } from "react";
import notfall from "./notfall-installateur-wien";
import gas from "./gas-installateur-wien";
import wasser from "./wasserinstallateur-wien";
import heizung from "./heizungstechnik-wien";
import sanitaer from "./sanitaertechnik-wien";
import therme from "./thermenwartung-wien";
import verstopfung from "./verstopfung-wien";

export const LEISTUNG_CONTENT: Record<string, ReactNode> = {
  "notfall-installateur-wien": notfall,
  "gas-installateur-wien": gas,
  "wasserinstallateur-wien": wasser,
  "heizungstechnik-wien": heizung,
  "sanitaertechnik-wien": sanitaer,
  "thermenwartung-wien": therme,
  "verstopfung-wien": verstopfung,
};
