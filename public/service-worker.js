// This service worker script enables caching for offline functionality and asset management.

const CACHE_NAME = 'risk-o-meter-cache-v1';
const urlsToCache = [
    // '/',
    // './index.html',
    // '../src/css/styles.css',
    // '../src/js/app.js',
    // '../src/js/risk-calculator.js',
    // './icons/icon-192x192.png',
    // './icons/icon-512x512.png',
];

// Install event - caching assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serving cached assets
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return the cached response if found, otherwise fetch from the network
                return response || fetch(event.request);
            })
    );
});

// Activate event - cleaning up old caches
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