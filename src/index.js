import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import { createStore } from 'redux';
import taskList from './reducers/add';
import {add,del,edt,cpl} from './actions/index'; //Вынес action's в отдельный фаил

const store = createStore(taskList);

const center = {width : '50%',marginLeft : 'auto',marginRight : 'auto'};

const App = () => {
    return (
        <div>
            <Route exact path='/' render={() => <Menu />} />
            <Route exact path='/list' render={() =>
                <div>
                    <List />
                    <AddTask />
                    <Link to='/'>Back</Link>
                </div>} />
        </div>)
}

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/list'>Task List</Link></li>
            </ul>
        </div>
    )
}

const AddTask = () => {
    let input
return (
        <div style={center}>
            <form onSubmit={e => {
                e.preventDefault()
                store.dispatch(add(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
        store.subscribe(() => {
            this.setState({ tasks: store.getState().todos })
        })
    }

    componentWillMount() {
        this.setState({ tasks: store.getState().todos })
    }

    render() {
        return (
            <div style={center}>
                {this.state.tasks.map((task, i) =>
                <div key={i} style={{border : 'solid 1px black', padding : '10px'}}>
                {`#${i+1}  `}
                        {!task.completed &&
                            <p contentEditable="true" onBlur={e => store.dispatch(edt(e.target.textContent, i))}>{task.text}</p>}
                        {task.completed && 
                            <p style={{textDecoration: 'line-through'}}>{task.text}</p>}
                        <button onClick={() => store.dispatch(del(i))}>Delete</button>
                        <button onClick={() => store.dispatch(cpl(i))}>Complete</button>
                </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
