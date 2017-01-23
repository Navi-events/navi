'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import App from './components/App';
import EventsContainer from './containers/EventsContainer';

import { getAllEvents } from './reducers/events';
import { getAllMeetups } from './reducers/MeetupsReducer';

function onEventsEnter() {
  store.dispatch(getAllEvents());
  store.dispatch(getAllMeetups());
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/events" />
        <Route path="/events" component={EventsContainer} onEnter={onEventsEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
