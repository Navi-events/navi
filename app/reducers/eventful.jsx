'use strict';
import axios from 'axios';

//*********** Constants ***********:

export const LOAD_ALL_EVENTFUL = 'LOAD_ALL_EVENTFUL';


//*********** Action Creators ***********:

export const loadAllEvents = (allEvents) => ({ type: LOAD_ALL_EVENTS, allEvents});


//*********** Async Action Creators ***********:

export const getAllEvents = () => {
  return (dispatch, getState) => {
  axios.get('/api/events')
    .then(res => {
      const allEvents = res.data;
      // console.log('these are the events', allEvents);
      dispatch(loadAllEvents(allEvents));
    })
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
