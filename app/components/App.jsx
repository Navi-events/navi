import React from 'react';
import Map from './Map';
import EventsContainer from '../containers/EventsContainer';

const App = () => {
  return (
    <main className="container-fluid">
      <div className="col-md-9 gmap">
        <Map />
      </div>
      <aside className="col-md-3">
        <EventsContainer />
      </aside>
    </main>
  );
};

export default App;
