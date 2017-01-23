'use strict';
import axios from 'axios';

//*********** Constants ***********:

export const LOAD_MAP = 'LOAD_MAP';


//*********** Action Creators ***********:

export const loadMap = (allEvents) => ({ type: LOAD_MAP, allEvents});


//*********** Reducer ***********:

const mapStateReducer = (state = [], action) => {

  switch (action.type) {
    case LOAD_MAP:
      return action.allEvents;
    default:
      return state;
  }
};

export default mapStateReducer;
