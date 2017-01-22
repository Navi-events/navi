'use strict';
import axios from 'axios';

//*********** Constants ***********:

export const LOAD_ALL_EVENTS = 'LOAD_ALL_EVENTS';


//*********** Action Creators ***********:

export const loadAllEvents = (allEvents) => ({ type: LOAD_ALL_EVENTS, allEvents});


//*********** Async Action Creators ***********:

export const getAllEvents = () => {
  return (dispatch, getState) => {
  axios.get('/api/events')
    .then(res => {
      const allEvents = res.data;
      const allEventsSortedByDate = allEvents.sort((a, b) => {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      });
      dispatch(loadAllEvents(allEventsSortedByDate));
    });
  };
};


//*********** Reducer ***********:

const eventReducer = (state = [], action) => {

  switch (action.type) {
    case LOAD_ALL_EVENTS:
      return action.allEvents;
    default:
      return state;
  }
};

export default eventReducer;
