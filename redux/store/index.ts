import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import getReducers from 'redux/reducers';
import { StateLoader } from './stateLoader';

// TODO create custom typing system
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const config = {
  // TOGGLE_TODO will not be triggered in other tabs
  blacklist: ['TOGGLE_TODO'],
};

const stateLoader = new StateLoader();
const middleware = [thunkMiddleware];

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware));

// init the store with the thunkMiddleware which allows us to make async actions play nicely with the store
export const initStore = (initialState?: Object) => {
  let store = createStore(getReducers(), initialState || {}, composedEnhancers);

  store.subscribe(() => {
    stateLoader.saveState(store.getState());
  });

  return store;
};
