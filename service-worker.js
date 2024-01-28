self.addEventListener('install', (event) => {
    self.skipWaiting();
    // Post a message when the service worker is installing
    self.clients.matchAll().then(clients => {
      clients.forEach(client => client.postMessage({ action: 'installing' }));
    });
});

self.addEventListener('activate', (event) => {
    // Post a message when the service worker has activated
    self.clients.matchAll().then(clients => {
      clients.forEach(client => client.postMessage({ action: 'activated' }));
    });
});
