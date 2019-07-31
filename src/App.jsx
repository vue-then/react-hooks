import React, { Component, useState, useEffect } from "react";

// class App extends Component {
// 	render() {
//     return null;
//   }
// }

class App2 extends Component {
	state = {
		count: 0,
		size: {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		}
	};

	// @bind()
	// onResize(){}

	onResize = () => {
		this.setState({
			size: {
				width: document.documentElement.clientWidth,
				height: document.documentElement.clientHeight
			}
		});
	};
	componentDidMount() {
		document.title = this.state.count;

		window.addEventListener("resize", this.onResize, false);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.onResize, false);
	}
	componentDidUpdate() {
		document.title = this.state.count;
	}
	render() {
		const { count,size } = this.state;
		return (
			<button
				type="button"
				onClick={() => {
					this.setState({ count: count + 1 });
				}}
			>
        Click {count}
        size: {size.width}x{size.height}
			</button>
		);
	}
}

function App(prop) {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight
  });
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
	  });
  }

	useEffect(() => {
    document.title = count;
  })
  useEffect(() => {
      // 一直在调用
      window.addEventListener("resize", onResize, false);
      // 触发时机 重新渲染，组件卸载、
      // 第一次渲染后，组件卸载之前
      return () => {
        window.removeEventListener("resize", onResize, false);
      };
    }, 
  // 可选数组，只有数组的每一项不变，useEffect才不会执行
  []);

  // 测试count变化是否才不发useEffect函数
  useEffect(() => {
    console.log('count', count)
  }, [count])

  const onClick = () => {
    console.log('click');
  }
  useEffect(() => {
    document.querySelector("#size").addEventListener('click', onClick, false);

    return () => {
      document.querySelector("#size").removeEventListener("resize", onResize, false);
    }
  })


	return (
		<div>
			<button type="button" onClick={() => setCount(count + 1)}>
				Click {count}
				size: {size.width}x{size.height}
			</button>
      {
        count%2
        ?<span id="size">size: {size.width}x{size.height}</span>
        :<p id="size">size: {size.width}x{size.height}</p>
      }
		</div>
	);
}






export default App;
