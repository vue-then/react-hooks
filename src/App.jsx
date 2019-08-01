import React, { Component,PureComponent,useState,useRef,useMemo,useCallback,memo,useEffect  } from "react";
import './App.css';

// class App extends Component {
// 	render() {
//     return null;
//   }
// }
let idSeq = Date.now();

function Control(props) {
    const {addTodo} = props;
    const inputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        const newText = inputRef.current.value.trim();
        if(newText.length === 0) {
            return;
        }
        addTodo({
            id: ++idSeq,
            text: newText,
            complete: false,
        })

        inputRef.current.value = ''
    }


    return (
			<div className="control">
				<h1>todos</h1>
				<form onSubmit={onSubmit}>
					<input
						type="text"
						ref={inputRef}
						className="new-todo"
						placeholder="What needs to be done?"
					/>
				</form>
			</div>
		);
}

function Todos() {
    return <div></div>;
}


function TodoList(prop) {
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback(todo => {
        setTodos(todo => [...todos, todo]);
    },[]);
 
    const removeTodo = useCallback((id) => {
        setTodos(todos => todos.filter(todo => {
            return todo.id !== id;
        }))
    }, [])

    const toggleTodo = useCallback((id) => {
        setTodos(todos => todos.map(todo => {
            return todo.id === id
                ? {
                    ...todo,
                    complete: !todo.complete,
                }
                : todo;
        }))
    },[])

	return (
		<div className="todo-list">
			<Control addTodo={addTodo} />
            <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos}/>
		</div>
	);
}






export default TodoList;
