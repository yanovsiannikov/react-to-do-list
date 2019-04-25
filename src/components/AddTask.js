import React from 'react';
import {addTodo} from '../actions/actions';
import { connect } from "react-redux";

const AddTodo = props => {
    let input
return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                props.addTodoMethod(input.value);
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoMethod: (content) => dispatch(addTodo(content))
  }
}

export default connect(
    null,
    mapDispatchToProps
)(AddTodo)
