import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";
import { createStore, applyMiddleware, compose } from 'redux';

const isClient = typeof window !== 'undefined';

export function getComposeEnhancers() {
  if (
    isClient &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line
  ) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line
  }
  return compose;
}



export default function configureStore(initialState) {
  const middlewares = [thunk,logger];

  const composeEnhancers = getComposeEnhancers();
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers/");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
