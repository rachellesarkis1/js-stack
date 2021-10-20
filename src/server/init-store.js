// @flow

import Immutable from "immutable";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import helloReducer from "../shared/reducer/hello";

// $FlowIgnore
const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined;

  // $FlowIgnore
  if (plainPartialState && plainPartialState.hello) {
    // $FlowIgnore
    preloadedState.hello = helloReducer(undefined, {}).merge(
      Immutable.fromJS(plainPartialState.hello)
    );
  }

  return createStore(
    combineReducers({ hello: helloReducer }),
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
};
export default initStore;
