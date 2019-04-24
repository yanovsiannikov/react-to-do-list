const init = {
    todos: []
};

const addTodo = (state = init, action) => {
    if (action.type === 'ADD') {
        state.todos.push(action.text);
    } 
    return state
}

export default addTodo;