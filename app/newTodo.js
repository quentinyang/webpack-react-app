// import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import todoReducers from '../modules/todo/reducers'
import App from '../modules/todo/components/App';

let store = createStore(todoReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
