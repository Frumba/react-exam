import { combineReducers } from 'redux';

import jediReducer from './jedi';

export default combineReducers({
  jedis: jediReducer
});
