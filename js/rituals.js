import data from "./rituals-data.js";
export const CAT_ORDER = data.CAT_ORDER;
export const RITUALS = data.RITUALS;
export function ritualById(id) {
  return RITUALS.find((r) => r.id === id);
}
export function ritualsBySide(side) {
  return RITUALS.filter((r) => r.side === side);
}
