export function createSet(payload) {
    return {
        type: 'set',
        payload,
    }
}

let idSeq = Date.now();


export function createAdd(text) {
    // return {
    //     type: 'add',
    //     payload,
    // }
    return (dispatch, getState) => {
		setTimeout(() => {
			// const { todos } = state; 为了立即获得state的值，需要换成回调函数
			const { todos } = getState();

			if (!todos.find(todo => todo.text === text)) {
				dispatch({
					type: "add",
					payload: {
						id: ++idSeq,
						text,
						complete: false
					}
				});
			}
		}, 3000);
	};
}
export function createRemove(payload) {
    return {
        type: 'remove',
        payload,
    }
}
export function createToggle(payload) {
    return {
        type: 'toggle',
        payload,
    }
}