import React, { Component,PureComponent,useState,useRef,useMemo,useCallback,memo,useEffect  } from "react";

// class App extends Component {
// 	render() {
//     return null;
//   }
// }

function useCounter(count) {
    const size = useSize();
    console.log('Counter render');
    return (
        <h1 >{count},{size.width}x{size.height}</h1>
    )
}
// // 获取子组件扩展dom元素
// class Counter extends PureComponent{
//     speak() {
//         console.log(`now counter is: ${this.props.count}`)
//     }
//     render() {
//         const {props} = this;
//         return (
//             <h1>{props.count}</h1>
//         )
//     }
// }

function useCount(defaultCount) {
    const [count, setCount] = useState(defaultCount);
    const it = useRef;

    useEffect(() => {
        //用来同步不同渲染周期之间需要相互共享的数据
        it.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
    }, [])
    useEffect(() => {
        if (count >= 10) {
            clearInterval(it.current);
        }
    })

    return [count, setCount]
}

function useSize() {
    // useState初始化默认值
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    },[])

    useEffect(() => {
        window.addEventListener('resize', onResize, false);
        return () => {
            window.removeEventListener('resize', onResize, false)
        }
    },[]);
    return size;
}


function App(prop) {
  const [count, setCount] = useCount(0)
  const Counter = useCounter(count)
  const size = useSize();

	return (
		<div>
			<button type="button" onClick={() => setCount(count + 1)}>
				Click ({count}),{size.width}x{size.height}
			</button>
			{/* <Counter count={count} /> */}
			{Counter}
		</div>
	);
}






export default App;
