self.addEventListener('install', (e) => {
    console.info('[SW] Install...');
});

self.addEventListener('activate', async (e) => {
    console.info('[SW] Activate...');
});

self.addEventListener('fetch', (e) => {
    console.info('[SW] Fetch...');
});