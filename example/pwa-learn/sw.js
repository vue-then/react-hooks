//  不能访问dom，window，locastorage等对象
//  self代表ServiceWorker全局作用域对象
//  ServiceWorker 以生命周期的方式提供的交互手段
self.addEventListener("install", event => {
    console.log("install", event);
    // 强制停止旧的ServiceWorker，并激活新的ServiceWorker
    event.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", event => {
    console.log("activate", event);
    // clients指的是 ServiceWorker 控制的所有页面
    // 能让页面在首次加载后同样受到 ServiceWorker 的控制
    event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch',event => {
    console.log("fetch", event);
})


