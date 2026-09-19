export const $ = (sel, el = document) => el.querySelector(sel);
export const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

export function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function uid() {
  return "r" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function fill(text, vars) {
  let t = String(text ?? "");
  for (const [k, v] of Object.entries(vars || {})) {
    t = t.split("[" + k + "]").join(v || ("[" + k + "]"));
  }
  return t;
}

export function fmtWhen(ts) {
  try {
    return new Date(ts).toLocaleString("de-CH", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return String(ts);
  }
}

export function hoursLeft(until) {
  const ms = until - Date.now();
  if (ms <= 0) return 0;
  return Math.ceil(ms / 3600000);
}
