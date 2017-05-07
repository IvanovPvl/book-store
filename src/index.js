import 'babel-polyfill';
import React from 'react';
import routes from './routes';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import '../node_modules/bootstrap/scss/bootstrap.scss';

import configureStore from './store/configureStore';
import * as booksActions from './actions/bookActions';

const store = configureStore();
store.dispatch(booksActions.fetchBooks());

render (
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
