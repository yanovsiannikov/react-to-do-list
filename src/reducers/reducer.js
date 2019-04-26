import {ADD_TODO, DELETE_TODO, UPDATE_TODO, COMPLETE_TODO } from '../actions/actionTypes';

const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
   switch (action.type) {
        case ADD_TODO : 
            return { ...state, todos : [...state.todos, {text: action.text, completed: false }]};
        case DELETE_TODO :
            return { ...state, todos : [...state.todos.filter((e, i) => i !== action.id)]};
        case COMPLETE_TODO :
            return {...state, todos : [...state.todos.map((el, i) => 
                i === action.id ? {...el, completed : !el.completed} : el)]};
        case UPDATE_TODO :
        return {...state,  todos : [...state.todos.map((el, i) => 
                i === action.id ? {...el, text : action.text} : el)]};
        default : return state;
    }
}
