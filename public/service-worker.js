var cacheName = "svelte-ts-bla-cache"
var filesToCache = [
  "/",
  "/index.html",
  "/dist/app.js",
  "/dist/app.css",
  "manifest.json",
  "/scripts/install.js",
  "favicon.png"
];
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (thisCacheName) {
          if (thisCacheName !== cacheName) {
            return caches.delete(thisCacheName);
          }
        })
      );
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    (async function () {
      const response = await caches.match(e.request);
      return response || fetch(e.request);
    })()
  );
});
let reg = self.registration
self.addEventListener('push', event => {
  console.log("push", event)
  reg.showNotification(event.data)
});