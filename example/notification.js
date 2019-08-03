Notification.permission
Notification.requestPermission().then(permission => console.log(permission))
new Notification("Hello notification",{body: 'This is from console'})

// sw.js中调用
self.registration.showNotification('Hello')