import { combineReducers } from 'redux';
import eventsReducer from './events';
import meetupsReducer from './MeetupsReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  meetups: meetupsReducer
});

export default rootReducer;
