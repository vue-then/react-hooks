import React, { Component,PureComponent,useState,useRef,useMemo,useCallback,memo,useEffect  } from "react";

// class App extends Component {
// 	render() {
//     return null;
//   }
// }

// const Counter = memo(function Counter(props) {
//     console.log('Counter render');
//     return (
//         <h1 onClick={props.onClick}>{props.count}</h1>
//     )
// })
// 获取子组件扩展dom元素
class Counter extends PureComponent{
    speak() {
        console.log(`now counter is: ${this.props.count}`)
    }
    render() {
        const {props} = this;
        return (
            <h1 onClick={props.onClick}>{props.count}</h1>
        )
    }
}

function App(prop) {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const counterRef = useRef();
  const it = useRef;
  // 返回值可以直接参与渲染，渲染期间完成的,策略和useEffect一样的
  const double = useMemo(() => {
		return count * 2;
    }, [count===3]);
  
    // const onClick = useMemo(() => {
    //     return () => {
    //         console.log('Click');
    //     }
    // }, [])
    const onClick = useCallback(() => {
        console.log('Click')
        setClickCount((clickCount) => clickCount+1)
        console.log(counterRef.current);
        counterRef.current.speak()
    }, [counterRef])
    // useMemo(()=>fn) === useCallback(fn)

    useEffect(() => {
        //用来同步不同渲染周期之间需要相互共享的数据
        it.current = setInterval(()=>{
            setCount(count => count+1)
        },1000)
    },[])
    useEffect(() => {
        if(count >=10){
            clearInterval(it.current);
        }
    })

	return (
		<div>
			<button type="button" onClick={() => setCount(count + 1)}>
				Click ({count}) ，double：({double})
			</button>
			<Counter ref={counterRef} count={double} onClick={onClick} />
		</div>
	);
}






export default App;
