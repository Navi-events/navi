'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import App from './components/App';
import EventsContainer from './containers/EventsContainer'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/events" />
        <Route path="/events" component={EventsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
