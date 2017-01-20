import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  events: require('./events').default
});

export default rootReducer;
