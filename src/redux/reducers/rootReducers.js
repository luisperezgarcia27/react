/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import item from './itemReducer';

const rootReducer = combineReducers({
  item,
});
const appReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    // eslint-disable-next-line no-return-assign
    return state || {};
  }
  return rootReducer(state, action);
};

export default appReducer;
