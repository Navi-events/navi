import React from 'react';
import EventsContainer from '../containers/EventsContainer';

const App = () => {
  return (
    <main className="container-fluid">
        <nav className="col-xs-9">
          Map
        </nav>
        <aside className="col-xs-3">
          <EventsContainer />
        </aside>
    </main>
  );
};

export default App;
