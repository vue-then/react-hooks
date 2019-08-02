import React, { Component,PureComponent,useState,useRef,useMemo,useCallback,memo,useEffect  } from "react";
import {
    createSet
,createAdd
,createRemove
,createToggle
} from './actions';
import './App.css';
import reducer from './reducers.js'

// class App extends Component {
// 	render() {
//     return null;
//   }
// }
let idSeq = Date.now();



function bindActionCreators(actionCreators, dispatch) {
    const ret = {};

    for(let key in actionCreators) {
        ret[key] = function(...args) {
            console.log(...args,'args',key)
            const actionCreator = actionCreators[key];
            const action = actionCreator(...args);
            dispatch(action);
        };
    }
    return ret;
}

const Control = memo(function Control(props) {
    // const { addTodo } = props;
    // const { dispatch } = props;
    const { addTodo } = props;
    const inputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        const newText = inputRef.current.value.trim();
        if(newText.length === 0) {
            return;
        }
        // addTodo({
        //     id: ++idSeq,
        //     text: newText,
        //     complete: false,
        // })
        // dispatch({
        //     type: 'add',
        //     payload: {
        //         id: ++idSeq,
        //         text: newText,
        //         complete: false,
        //     }
        // })
        // dispatch(createAdd({
        //     id: ++idSeq,
        //     text: newText,
        //     complete: false,
        // }))
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
})

const TodoItem = memo(function TodoItem(props) {
    const {
        todo: {
            id,
            text,
            complete
        },
        // dispatch
        removeTodo,
        toggleTodo
    }  = props;

    const onChange = () => {
        // toggleTodo(id);
        // dispatch({type: 'toggle', payload: id});
        // dispatch(createToggle(id))
        toggleTodo(id);
    }
    const onRemove = () => {
        // removeTodo(id);
        // dispatch({type: 'remove', payload: id});
        // dispatch(createRemove(id))
        removeTodo(id);
    }

    return (
        <li className="todo-item"> 
            <input type="checkbox" onChange={onChange} checked={complete}/>
            <label className={complete?'complete':''}>{text}</label>
            <button onClick={onRemove}>&#xd7;</button>
        </li>
    );
})

const Todos = memo(function Todos(props) {
    // const { todos, toggleTodo, removeTodo } = props;
    // const {todos,dispatch} = props;
    const { todos, toggleTodo, removeTodo } = props;
    return (
        <ul>
            {
                todos.map(todo => {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        // dispatch={dispatch}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                    />
                })
            }
        </ul>
    );
})
const LS_KEY="_$-todos_"


const TodoList = memo(function TodoList(prop) {
    const [todos, setTodos] = useState([]);
    const [incrementCount, setIncrementCount] = useState(0);

    const addTodo = useCallback(todo => {
        setTodos(todos => [...todos, todo]);
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
    // todos
    // actions.reducer(function (lastTodos, action) {
    //     return [...lastTodos, action.payload];
    // }, todos)
    

    // function reducer(state, action) {
    //     const {type, payload} = action;
    //     const {todos, incrementCount} = state;

    //     switch(type) {
    //         case 'set':
    //             return {
    //                 ...state,
    //                 todos: payload,
    //                 incrementCount: incrementCount + 1,
    //             }
    //         case 'add':
    //             return {
    //                 ...state,
    //                 todos: [...todos, payload],
    //                 incrementCount: incrementCount + 1,
    //             }
    //         case 'remove':
    //             return {
    //                 ...state,
    //                 todos: todos.filter(todo => {
    //                     return todo.id !== payload;
    //                 })
    //             }
    //         case 'toggle':
    //             return {
    //                 ...state,
    //                 todos: todos.map(todo => {
    //                     return todo.id === payload
    //                         ? {
    //                             ...todo,
    //                             complete: !todo.complete,
    //                         }
    //                         : todo;
    //                 })
    //             }
    //     }
    //     return state;
    // }

    const dispatch = useCallback((action) => {
        const state = {
            todos,
            incrementCount,
        };
        const setters = {
            todos: setTodos,
            incrementCount: setIncrementCount
        }
        const newState = reducer(state, action);

        for(let key in newState) {
            setters[key](newState[key]);
            // console.log(key, setters)
            // console.log(newState, "newState");
        }

    },[todos, incrementCount])

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
        // setTodos(todos);
        // dispatch({type: 'set', payload: todos})
        dispatch(createSet(todos));
    },[])

    useEffect(() => {
        localStorage.setItem(LS_KEY,JSON.stringify(todos));
    }, [todos])


	return (
		<div className="todo-list">
			{/* <Control addTodo={addTodo} />
            <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos}/> */}
            {/* <Control dispatch={dispatch} /> */}
            <Control
            {
                ...bindActionCreators({
                    addTodo: createAdd
                }, dispatch)
            }/>
            {/* <Todos dispatch={dispatch} todos={todos} /> */}
            <Todos
            {
                ...bindActionCreators({
                    removeTodo: createRemove,
                    toggleTodo: createToggle,
                },dispatch)
            }
            todos={todos} />
		</div>
	);
})



export default TodoList;
