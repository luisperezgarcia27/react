/* eslint-disable prettier/prettier */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { throttle } from 'lodash';

import rootReducer from '../reducers/rootReducers';

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());

  store.subscribe(
    throttle(() => {}),
    1000
  );

  return store;
};

export default configureStore;
