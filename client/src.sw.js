//imports
const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);
//page caching
const pageCache = new CacheFirst({
    cacheName: 'page-cache',
    plugins: [
        new CacheableResponsePlugin({
            statuses: [0, 200],
        }),
        new ExpirationPlugin({
            maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
    ],
});

warmStrategyCache({
    urls: ['/index.html', '/'],
    strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

//asset caching
registerRoute(
    ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
    new StaleWhileRevalidate({
        //name cache storage
        cacheName: 'assets-cache',
        plugins: [
            //cacheable response plugin - 30 day max age
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    }),
);

//offline fallback
// offlineFallback();
