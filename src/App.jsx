import React, { Component, PureComponent, memo } from "react";
import logo from './logo.svg';
import './App.css';

// class Foo extends PureComponent {
// 	// PureComponent: 只有传入的props第一级发生变化才会触发此函数
// 	// shouldComponentUpdate(nextProps, nextState) {
// 	// 	if (nextProps.name === this.props.name) {
// 	// 		return false;
// 	// 	}
// 	// 	return true;
// 	// }
// 	render() {
// 		console.log("Foo render");
// 		return <div>{this.props.person.age}</div>;
// 	}
// }
const Foo = memo(function Foo(props) {
  return <div>{props.person.age}</div>;
})

class App extends Component {
	state = {
		count: 0,
		person: {
			age: 1
		}
	};
	// callback (){}; //this指向不确定
	callback = () => {};

	render() {
		const person = this.state.person;
		return (
			<div>
				{/* <button onClick={() => this.setState({count: this.state.count+=1})}>Add</button> */}
				<button
					onClick={() => {
						person.age++;
						this.setState({
							person
						});
					}}
				>
					Add
				</button>

				<Foo person={person} cb={this.callback} />
			</div>
		);
	}
}


export default App;
