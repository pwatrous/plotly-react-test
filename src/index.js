import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const reducer = (state={}, action) => {
	switch (action.type) {
		case "TOGGLE_GRAPH":
			return { ...state, selectedData: action.payload };
		default:
			return state;
	}
};

const store = createStore(reducer);
