import React, { Component, lazy, Suspense } from "react";
import logo from './logo.svg';
import './App.css';

const About = lazy(()=>import(/* webpackChunkName: "about" */ './About.jsx'));

// ErrorBoundary
// componentDidCatch

class App extends Component {
	state = {
		hasError: false
	};
	// componentDidCatch() {
	//   this.setState({
	//     hasError: true,
	//   });
	// }
	static getDerivedStateFromError() {
		return {
			hasError: true
		};
	}
	render() {
		if(this.state.hasError){
		  return <div>error</div>
		}
		return (
			<div>
				<Suspense fallback={<div>loading</div>}>
					<About />
				</Suspense>
			</div>
		);
	}
}


export default App;
