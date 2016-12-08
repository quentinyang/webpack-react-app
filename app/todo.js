// import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import todoReducers from '../component/todo/reducers'

import App from '../component/todo/container/App';

let store = createStore(todoReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
