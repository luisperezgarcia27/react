/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import item from './itemReducer';

const rootReducer = combineReducers({
  item,
});
const appReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    return state || {};
  }
  return rootReducer(state, action);
};

export default appReducer;
