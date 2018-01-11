import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import logger from 'redux-logger';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const json = {
  data: [{
    x: [3, 1, 4, 1, 5, 9],
    y: [1, 4, 7, 2, 6, 2],
    type: "bar",
    marker: {
      color: "#BADA55"
    },
    name: "graph1",
    key: 0
  }, {
    x: [0, 1, 4, 5, 7, 8],
    y: [2, 7, 1, 8, 2, 8],
    type: "line",
    marker: {
      color: "#D942F4"
    },
    name: "graph2",
    key: 1
  }],

  layout: {
    xaxis: {
      range: [0, 10]
    },
    yaxis: {
      range: [0, 10]
    },
    title: "Test Graph"
  }
};

const defaultState = {
  json: json,
  selectedData: 0
};

const store = createStore(reducer, defaultState, applyMiddleware(logger));


ReactDOM.render(<Provider store={store}>
	<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();