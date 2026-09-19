import soft from "./rituals-soft.js";
import hard from "./rituals-hard.js";
import feld from "./rituals-feld.js";

export const CAT_ORDER = ["Alltag", "Schutz", "Energie", "Liebe", "Trennung", "Hard", "Feld"];

export const RITUALS = [...soft, ...hard, ...feld];

export function ritualById(id) {
  return RITUALS.find((r) => r.id === id);
}

export function ritualsBySide(side) {
  return RITUALS.filter((r) => r.side === side);
}
