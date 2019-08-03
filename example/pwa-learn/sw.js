//  不能访问dom，window，locastorage等对象
//  self代表ServiceWorker全局作用域对象
//  ServiceWorker 以生命周期的方式提供的交互手段

const CACHE_NAME = 'cache-v3'
// 新 ServiceWorker 被下载之后 只会执行一次
self.addEventListener("install", event => {
    console.log("install", event);
    // 强制停止旧的ServiceWorker，并激活新的ServiceWorker
    // event.waitUntil(self.skipWaiting());

    // 代开缓存空间
    event.waitUntil(caches.open(CACHE_NAME).then(cache => {
        cache.addAll([
            '/',
            './index.css'
        ])
    }));
});
// 新 ServiceWorker 被启用之后 只会执行一次
self.addEventListener("activate", event => {
    console.log("activate", event);
    // clients指的是 ServiceWorker 控制的所有页面
    // 能让页面在首次加载后同样受到 ServiceWorker 的控制
    // event.waitUntil(self.clients.claim());

    event.waitUntil(caches.keys().then(cacheNames => {
        return Promise.all(cacheNames.map(cacheName => {
            if(cacheName !== CACHE_NAME) {
                return caches.delete(cacheName);
            }
        }))
    }));
});
// 能够一直执行
self.addEventListener('fetch',event => {
    console.log("fetch", event);
    event.respondWith(caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
            if(response) {
                return response
            }
            return fetch(event.request).then(response => {
                cache.put(event.request,response.clone());
                return response;
            })
        })
    }))
})


