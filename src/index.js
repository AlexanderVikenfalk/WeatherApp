import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {compose, createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {createLogger} from 'redux-logger';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise,createLogger())(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
