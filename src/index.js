// Lib Import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
// Local Import
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import history from "./lib/history";
import configureStore from "../src/store/configureStore";
import initialState from "./store/initialState";

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
