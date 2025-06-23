const CACHE_NAME = 'dayneeds-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/cart.html',
  '/cart.js',
  '/mainApplication/Productspages/p1.html',
  '/mainApplication/CartPages/cart.html',
  '/mainApplication/ProfilePage/profile.html',
  '/audiofiles/finalcutwebfile.mp3',
  'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs'
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercept network requests and serve cached files when available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

// Update the service worker and delete old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
