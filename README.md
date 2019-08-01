### react-hooks
- some of usehooks
- nvm use v10.15.3
- npx create-react-app projectName
- 此工程为MPA

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

