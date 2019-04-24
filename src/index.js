import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Link, Route, NavLink, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import addTodo from './reducers/add'

const store = createStore(addTodo)

const App = () => {
    console.log(store.getState())
    return (<div>
        <Route exact path='/' render={() => <Menu />} />
        <Route exact path='/list' render={() => <List />} />
        <Route exact path='/add' render={() => <AddTask />} />
    </div>)
}

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/list'>Task List</Link></li>
                <li><Link to='/add'>Add Task</Link></li>
            </ul>
        </div>
    )
}

const add = text => {
  return {type : 'ADD', text : text}
}

const AddTask = (dispatch) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                store.dispatch(add(input.value))
            }}>
                <input ref={node => input = node}/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: ['Task 1', 'Task 2', 'Task 3']
        }
    }

    componentWillMount () {
        this.setState({tasks : store.getState().todos})
    }

    render() {
        
        return (
            <ul>
                {this.state.tasks.map(task => <li>{task}</li>)}
            </ul>
        )
    }
}

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));
