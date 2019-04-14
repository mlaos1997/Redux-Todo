import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import TodoList from './components/TodoList';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
