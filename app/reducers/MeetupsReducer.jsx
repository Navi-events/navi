import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const GET_MEETUPS = 'GET_MEETUPS';

/* -----------------    ACTION Creator     ------------------ */

const gatherMeetups = (allMeetups) => {
  return {
    type: GET_MEETUPS,
    allMeetups
  };
};

/* -----------------    DISPATCHERS     ------------------ */

export const getAllMeetups = () => dispatch => {
  axios.get('/api/meetups')
  .then(response => {
    console.log('these are meetups', response.data.results);
    const meetups = response.data.results;
    dispatch(gatherMeetups(meetups));
  });
};


/* -----------------    REDUCER     ------------------ */

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_MEETUPS:
      return action.allMeetups;
    default:
      return state;
  }
};

export default reducer;
