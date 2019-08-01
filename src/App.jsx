import React, { Component,useState,useMemo,useCallback,memo  } from "react";

// class App extends Component {
// 	render() {
//     return null;
//   }
// }

const Counter = memo(function Counter(props) {
    console.log('Counter render');
    return (
        <h1 onClick={props.onClick}>{props.count}</h1>
    )
})

function App(prop) {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
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
    },[])
    // useMemo(()=>fn) === useCallback(fn)

	return (
		<div>
			<button type="button" onClick={() => setCount(count + 1)}>
				Click ({count}) ，double：({double})
			</button>
            <Counter count={double} onClick={onClick}/>
		</div>
	);
}






export default App;
