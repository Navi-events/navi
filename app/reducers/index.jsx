import { combineReducers } from 'redux';
import eventsReducer from './events';
import eventfulReducer from './eventful';
import mapStateReducer from './mapState';

const rootReducer = combineReducers({
  events: eventsReducer,
  eventful: eventfulReducer,
  mapState: mapStateReducer
});

export default rootReducer;
