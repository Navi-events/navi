'use strict';
import axios from 'axios';

//*********** Constants ***********:

export const LOAD_ALL_EVENTFUL_EVENTS = 'LOAD_ALL_EVENTFUL_EVENTS';


//*********** Action Creators ***********:

export const loadAllEventfulEvents = (allEvents) => ({ type: LOAD_ALL_EVENTFUL_EVENTS, allEvents});


//*********** Async Action Creators ***********:

export const getAllEventfulEvents = () => {
  return (dispatch, getState) => {
    let today = new Date();
    let day = today.getDate().toString();
    let month = (today.getMonth() + 1).toString();
    let year = today.getFullYear().toString();
    day = day.length < 2 ?  '0' + day : day;
    month = month.length < 2 ?  '0' + month : month;
    var oArgs = {
        app_key: "QMWF79Gdgd6XdmXV",
        q: "food || outdoors_recreation",
        where: "New York",
        "date": year + month + day + "00" + "-" + year + month + day + "00",
        "include": "tags,categories",
        page_size: 10,
        sort_order: "popularity",
    };
    //EVDB is a special object that is imported in when we run the eventful API script on index.html
    EVDB.API.call("/events/search", oArgs, function(oData) {
      dispatch(loadAllEventfulEvents(oData.events.event))
    });
  };
};


//*********** Reducer ***********:

const eventfulReducer = (state = [], action) => {

  switch (action.type) {
    case LOAD_ALL_EVENTFUL_EVENTS:
      return action.allEvents;
    default:
      return state;
  }
};

export default eventfulReducer;
