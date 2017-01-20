'use strict';
import axios from 'axios';

//*********** Constants ***********:

export const LOAD_ALL_EVENTS = 'LOAD_ALL_EVENTS';


//*********** Action Creators ***********:

export const allEvents = (events) => ({ type: LOAD_ALL_EVENTS, events});

export const getAllEvents = () => {
  return (dispatch, getState) => {
    axios.get('/api/events')
      .then(res => res.data)
      .then(allEvents => {
        dispatch(loadAllEvents(allEvents));
      })
  }
}


//*********** Reducer ***********:
const initialState = { allEvents: [] };

const eventReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case LOAD_ALL_EVENTS:
      newState.allEvents = action.allEvents;
      break;
    default:
      return state;
  }
  return newState;
}

export default eventReducer;
