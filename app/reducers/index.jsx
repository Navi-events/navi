import { combineReducers } from 'redux';
import eventsReducer from './events';
import eventfulReducer from './eventful';
import mapStateReducer from './mapState';
import meetupsReducer from './MeetupsReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  eventful: eventfulReducer,
  meetups: meetupsReducer,
  mapState: mapStateReducer
});

export default rootReducer;
