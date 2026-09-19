/* So sei es service worker */
const VERSION = "1.0.2";
const CACHE = "so-sei-es-" + VERSION;
const SHELL = [
  "./",
  "./index.html",
  "./css/app.css",
  "./js/util.js",
  "./js/storage.js",
  "./js/rituals.js",
  "./js/rituals-soft.js",
  "./js/rituals-hard.js",
  "./js/rituals-feld.js",
  "./js/app.js",
  "./js/src-0.js",
  "./js/src-1.js",
  "./js/src-2.js",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then(async (c) => {
      for (const url of SHELL) {
        try { await c.add(url); } catch (err) { /* optional asset */ }
      }
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith("so-sei-es-") && k !== CACHE)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(
    caches.match(req).then((cached) => {
      const net = fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => cached);
      return cached || net;
    })
  );
});
