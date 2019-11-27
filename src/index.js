import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import movies from './reducers';
import App from './app/App';

import './index.css';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(
  movies,
  applyMiddleware(logger, sagaMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
