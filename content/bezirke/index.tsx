// Registry für handgeschriebene Bezirks-Inhalte.
// Jeder Bezirk kann eine eigene .tsx mit lokalem Text bekommen.
// Fehlt ein Eintrag, rendert die Seite ihre Default-Struktur aus [slug]/page.tsx.

import { type ReactNode } from "react";
import favoriten from "./favoriten";
import innereStadt from "./innere-stadt";
import leopoldstadt from "./leopoldstadt";
import donaustadt from "./donaustadt";
import landstrasse from "./landstrasse";
import wieden from "./wieden";
import margareten from "./margareten";
import mariahilf from "./mariahilf";
import neubau from "./neubau";
import josefstadt from "./josefstadt";
import alsergrund from "./alsergrund";
import simmering from "./simmering";
import meidling from "./meidling";
import hietzing from "./hietzing";
import penzing from "./penzing";
import rudolfsheimFuenfhaus from "./rudolfsheim-fuenfhaus";
import ottakring from "./ottakring";
import hernals from "./hernals";
import waehring from "./waehring";
import doebling from "./doebling";
import brigittenau from "./brigittenau";
import floridsdorf from "./floridsdorf";
import liesing from "./liesing";

export const BEZIRK_CONTENT: Record<string, ReactNode> = {
  favoriten,
  "innere-stadt": innereStadt,
  leopoldstadt,
  donaustadt,
  landstrasse,
  wieden,
  margareten,
  mariahilf,
  neubau,
  josefstadt,
  alsergrund,
  simmering,
  meidling,
  hietzing,
  penzing,
  "rudolfsheim-fuenfhaus": rudolfsheimFuenfhaus,
  ottakring,
  hernals,
  waehring,
  doebling,
  brigittenau,
  floridsdorf,
  liesing,
};
