import { ADD_TODO, DELETE_TODO, UPDATE_TODO, COMPLETE_TODO } from './actionTypes'

export const addTodo = text => ({ type: ADD_TODO, text: text });
export const delTodo = id => ({ type: DELETE_TODO, id: id });
export const compTodo = id => ({ type: COMPLETE_TODO, id: id });
export const updTodo = (text, id) => ({ type: UPDATE_TODO, text: text, id: id });
