import React from 'react';
import { delTodo, compTodo } from '../actions/actions'
import { connect } from "react-redux";
import EditTodo from "../components/EditTask";

const mapStateToProps = (state, ownProps) => ({
    tasks: state.todos
})

const List = props =>
    <div>
        <ol>
            {props.tasks.map((task, index) =>
                <li key={index}>
                    {task.text}{task.completed && '+'}
                    <div>
                        <button onClick={() => props.delTodoMethod(index)}>Delete</button>
                        <button onClick={() => props.compTodoMethod(index)}>Complete</button>
                        <EditTodo id={index} />
                    </div>
                </li>
            )}
        </ol>
    </div>

const mapDispatchToProps = dispatch => {
    return {
        delTodoMethod: (content) => dispatch(delTodo(content)),
        compTodoMethod: (content) => dispatch(compTodo(content))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
