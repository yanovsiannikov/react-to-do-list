const init = {
    todos: []
};

const addTodo = (state = init, action) => {
    //С Кейсом не работало
    if (action.type === 'ADD') {
        state.todos.push({ text: action.text, completed: false });
    };

    if (action.type === 'DLT') {
        state.todos.splice(action.id, 1)
    };

    if (action.type === 'COMPLETE') {
        (state.todos[action.id].completed) = !state.todos[action.id].completed
    };

    if (action.type === 'EDIT') {
        (state.todos[action.id].text) = action.text
    };

    return state
} 

export default addTodo;
