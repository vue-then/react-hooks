### react-hooks

- some of usehooks
- nvm use v10.15.3
- npx create-react-app projectName
- 此工程为 MPA

### vscode 快捷键 mac

```
多次选中 option+command+up/down
选中当前行 command+shift+up/down
设置变换大小写 command+u+command+p/command+l+command+o
折叠代码块 cmd+[/cmd+]
快速修复 cmd+.
选中当前行 cmd+i
选中一样的 cmd+d
编辑器tab栏切换 cmd+option+左右键
是否打开左侧文件栏 cmd+\

文件内容顶、底部 cmd+上下键
选中当前行的头部、尾部 cmd+shift+左右键
同时编辑多处，多个光标 快捷键 ===> cmd+shift+拖动箭头至选中效果
选中当前光标所在单词 cmd+d
选中当前光标所在单词的尾部 cmd+option

格式化 option+shift+f
vscode安装 Better Align 左右对齐 option+= / shift+option+=

vscode安装 change-case 驼峰与大小写互转
cmd+p+>
    commands                abc_abc => abc_abc
**  camel                   abc_abc => abcAbc
    constant                abc_abc => ABC_ABC
    dot                     abc_abc => abc.abc
    kebab                   abc_abc => abc-abc
    lower                   ABC_ABC => abc_abc
    lowerFirst              ABC_ABC => aBC_ABC
    no                      abc_abc => abc abc
    param                   abc_abc => abc-abc
    pascal                  abc_abc => AbcAbc
    path                    ABC_ABC => abc/abc
    sentence                ABC_ABC => Abc abc
**  snake                   abcAbc  => abc_abc
    swap                    ABC_ABC => abc_abc
**  swap                    abcAbc  => ABCaBC
    title                   ABC_ABC => Abc Abc
    upper                   abc_abc => ABC_ABC
    upperFirst              abc_abc => Abc_abc

    abcAbc
    commands                abcAbc => abcAbc
**  camel                   abcAbc => abcAbc
    constant                abcAbc => ABC_ABC
    dot                     abcAbc => abc.abc
    kebab                   abcAbc => abc-abc
    no                      abcAbc => abc abc
    param                   abcAbc => abc-abc
    pascal                  abcAbc => AbcAbc
    path                    abcAbc => abc/abc
    sentence                abcAbc => Abc abc
    snake                   abcAbc => abc_abc
**  swap                    abcAbc => ABCaBC
    title                   abcAbc => Abc Abc
    
```

### 相关地址

https://touch.train.qunar.com

### react 新特性

- Context
- ![react-hooks](https://github.com/vue-then/react-hooks/blob/master/img/1.png)
- ContextType
- lazy
- Suspense
- memo (pureComponent 第二次不重新渲染)

### 类组件不足（一）

1，状态逻辑复用难

- 缺少复用机制
- 渲染属性和高阶组件导致层级冗余
  2，趋向复杂难以维护
- 生命周期函数混杂不相干逻辑
- 相干逻辑分散在不同生命周期
  3，this 指向困扰
- 内联函数过度创建新句柄
- 类成员函数不能保证 this

### Hooks 优势

优化类组件的三大问题

- 函数组件无 this 问题
- 自定义 Hook 方便复用状态逻辑
- 副作用的关注点分离

### 注意

- reacthooks 必须按照顺序调用

### useRef

- 获取子组件或者 DOM 节点的句柄
- 渲染周期之间共享数据的存储

### hooks 使用法则

- 只能在顶层运用 hooks 函数
- 只能在 react 组件中，不能在其他普通函数中调用 hooks 函数

### hooks 常见问题

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

### 如何在项目中开启 PWA

- https://developers.google.com/web/tools/workbox/

### 任务拆解

- React 视觉组件拆分
- redux store 状态涉及
- redux action/reducer 设计

### 底部滑动必要样式

```
.city-li:first-child {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    background-color: #f2f8fb;
    padding: 0 15px;
    margin-left: 0;
    position: sticky; /* !important */
    top: -1px;
    border-bottom: 0;
}
// 快速定位字母
const toAlpha = useCallback(alpha => {
    document.querySelector(`[data-cate='${alpha}']`).scrollIntoView();
}, []);
```

### 将数组按 7 个一组 重新分组

```
const weeks = [];
let days = [1,2,3,3,5,5,5,5,5,5,54,5,5,5,5,5,5,5,5,5,5]

for (let row = 0; row < days.length / 7; ++row) {
    const week = days.slice(row * 7, (row + 1) * 7);
    weeks.push(week);
}
console.log(weeks,'weeks')
```
