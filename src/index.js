import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import reducers from './js/reducers';
import './styles/main.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers(reducers));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
