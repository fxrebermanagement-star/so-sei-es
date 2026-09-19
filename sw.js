/* So sei es service worker */
const VERSION = "1.3.0";
const CACHE = "so-sei-es-" + VERSION;
const SHELL = [
  "./", "./index.html", "./css/app.css",
  "./js/util.js", "./js/storage.js", "./js/rituals.js",
  "./js/rituals-soft.js", "./js/rituals-hard.js", "./js/rituals-feld.js",
  "./js/app.js", "./js/b0.js", "./js/b1.js", "./js/b2.js", "./js/b3.js", "./js/b4.js", "./js/b5.js", "./js/b6.js", "./js/b7.js", "./js/b8.js", "./js/b9.js", "./js/b10.js", "./js/b11.js", "./js/b12.js", "./js/b13.js", "./js/b14.js", "./js/b15.js", "./js/b16.js", "./js/b17.js",
  "./manifest.webmanifest", "./assets/icon.svg"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then(async (c) => {
    for (const url of SHELL) { try { await c.add(url); } catch (err) {} }
  }).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((k) => k.startsWith("so-sei-es-") && k !== CACHE).map((k) => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(caches.match(req).then((cached) => {
    const net = fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy));
      return res;
    }).catch(() => cached);
    return cached || net;
  }));
});
