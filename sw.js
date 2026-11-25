const CACHE = "meisan-v15";
const ASSETS = ["/", "/styles.css", "/kyushu-cities.js", "/chugoku-shikoku-cities.js", "/kansai-cities.js", "/chubu-cities.js", "/kanto-cities.js", "/tohoku-cities.js", "/hokkaido-cities.js", "/mie-cities.js", "/app.js", "/manifest.webmanifest"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
