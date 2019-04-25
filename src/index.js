import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducer';

import AddTodo from './components/AddTask'
import List from './components/List'

const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const App = () => {
    return (
        <div>
            <Route exact path='/' render={() => <Menu />} />
            <Route exact path='/list' render={() =>
                <div>
                    <List />
                    <AddTodo />
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

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
