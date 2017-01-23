import { combineReducers } from 'redux';
import eventsReducer from './events';
import eventfulReducer from './eventful';

const rootReducer = combineReducers({
  events: eventsReducer,
  eventful: eventfulReducer
});

export default rootReducer;
