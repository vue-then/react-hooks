import React, { Component, useState, createContext, useContext } from "react";

const CountContext = createContext();

class Foo extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {
          count => <h1>{count}</h1>
        }
      </CountContext.Consumer>
    )
  }
}
class Bar extends Component {
	render() {
		return (
			<CountContext.Consumer>
				{count => <h1>{count}</h1>}
			</CountContext.Consumer>
		);
	}
}

function Counter() {
  const count = useContext(CountContext);
  return (
    <h1>{count}</h1>
  )
}

function App(prop) {
  const [count, setCount] = useState(0);

	return (
		<div>
			<button type="button" onClick={() => setCount(count + 1)}>
				Click {count}
			</button>
			Click ({count})
			<CountContext.Provider value={count}>
				<Foo />
				<Bar />
				<Counter />
			</CountContext.Provider>
		</div>
	);
}






export default App;
