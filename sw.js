const staticCacheName = 'site-static';
const assets = [
    './',
    '/index.html',
    '/public/app.js',
    '/src/styles.css',
    '/public/styles.css',
    '/icons/icon-64x64.ico',
    'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
    'https://fonts.googleapis.com',
    'https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
]

self.addEventListener('install', e => {
    //console.log('Heyyyyyyyyy doneeeeee')
    e.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    )
});


self.addEventListener('activate', e => {
    //console.log('Heyyyyyyyyy doneeeeee')
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
                )
        })
    );
});


self.addEventListener('fetch', e => {
    //console.log('Heyyyyyyyyy doneeeeee')
    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request);
        })
    );
});