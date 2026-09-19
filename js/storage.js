/** localStorage for Chronik, Gabe, 24h hard-lock. Prefix so-sei-es_v1_ */
const P = "so-sei-es_v1_";

function get(key, fallback) {
  try {
    const raw = localStorage.getItem(P + key);
    if (raw == null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function set(key, val) {
  localStorage.setItem(P + key, JSON.stringify(val));
}

export function loadChronik() {
  return get("chronik", []);
}

export function saveChronik(list) {
  set("chronik", list);
}

export function addChronik(entry) {
  const list = loadChronik();
  list.unshift(entry);
  saveChronik(list.slice(0, 200));
  return list;
}

export function loadGabe() {
  return get("gabe", { text: "", updated: null });
}

export function saveGabe(text) {
  set("gabe", { text: String(text || ""), updated: Date.now() });
}

export function getHardLock() {
  return get("hardLock", null);
}

export function setHardLock(ritualId, title) {
  const until = Date.now() + 24 * 3600 * 1000;
  set("hardLock", { until, ritualId, title, at: Date.now() });
  return until;
}

export function clearHardLock() {
  localStorage.removeItem(P + "hardLock");
}

export function hardLockActive() {
  const lock = getHardLock();
  if (!lock || !lock.until) return null;
  if (Date.now() >= lock.until) {
    clearHardLock();
    return null;
  }
  return lock;
}

export function exportAll() {
  return {
    version: 1,
    chronik: loadChronik(),
    gabe: loadGabe(),
    hardLock: getHardLock()
  };
}

export function importAll(data) {
  if (!data || typeof data !== "object") throw new Error("Ungültig");
  if (Array.isArray(data.chronik)) saveChronik(data.chronik);
  if (data.gabe) set("gabe", data.gabe);
  if (data.hardLock) set("hardLock", data.hardLock);
}
