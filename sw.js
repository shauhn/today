/* TODAY. service worker
   - The page and today's edition: network first, so a new edition shows as soon as it's published;
     the last copy is used when offline.
   - Fonts and icons: cache first (they never change). */
const VERSION = "today-v1";
const SHELL = ["./", "index.html", "edition.js", "manifest.webmanifest",
  "fonts/Anton-Regular.woff2", "fonts/InstrumentSerif-Regular.woff2", "fonts/InstrumentSerif-Italic.woff2",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "icons/favicon-32.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;           // article links etc. go straight to the network
  const fresh = req.mode === "navigate" || /\/(index\.html|edition\.js)?$/.test(url.pathname) || url.pathname.endsWith("edition.js");
  if (fresh) {
    e.respondWith(
      fetch(req, { cache: "no-store" }).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req.mode === "navigate" ? "index.html" : req, copy)); }
        return res;
      }).catch(() => caches.match(req.mode === "navigate" ? "index.html" : req, { ignoreSearch: true }))
    );
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  })));
});
