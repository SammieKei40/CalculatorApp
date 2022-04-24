if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then((reg) => console.log('Service worker ready', reg))
    .catch((err) => console.log('service worker not ready', err))
}