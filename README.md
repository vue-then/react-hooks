### react-hooks
- some of usehooks
- nvm use v10.15.3
- npx create-react-app projectName
- 此工程为MPA

### 相关地址
https://touch.train.qunar.com

### react新特性
- Context
- ![react-hooks](https://github.com/vue-then/react-hooks/blob/master/img/1.png)
- ContextType
- lazy
- Suspense
- memo

### 类组件不足（一）
1，状态逻辑复用难
- 缺少复用机制
- 渲染属性和高阶组件导致层级冗余
2，趋向复杂难以维护
- 生命周期函数混杂不相干逻辑
- 相干逻辑分散在不同生命周期
3，this指向困扰
- 内联函数过度创建新句柄
- 类成员函数不能保证this
### Hooks优势
优化类组件的三大问题
- 函数组件无this问题
- 自定义Hook方便复用状态逻辑
- 副作用的关注点分离


### 注意
- reacthooks必须按照顺序调用

### useRef
- 获取子组件或者DOM节点的句柄
- 渲染周期之间共享数据的存储

### hooks使用法则
- 只能在顶层运用hooks函数
- 只能在react组件中，不能在其他普通函数中调用hooks函数

### hooks常见问题
- ![react-hooks](https://github.com/vue-then/react-hooks/blob/master/img/2.png)

### PWA
- Progressive Web App 间接式网络应用
- Service Worker
```
服务工作线程
    常驻内存运行
    代理网络请求
    依赖HTTPS
```
- Promise
```
控制流
async/await语法同步化
service worker 的API风格
```
- fetch
```
网络请求
    比XMLHttpRequest更简洁
    Promise风格
    依旧存在不足（不支持progress清除报告，不能中断）
```
- cache API
```
支持资源的缓存系统
    缓存资源(css/script/image)
    依赖Service Worker代理网络请求
    支持离线程序运行
```
- Notification API
```
消息推送
    依赖用户授权
    适合在Service Worker中推送
```

### 如何在项目中开启PWA
- https://developers.google.com/web/tools/workbox/
