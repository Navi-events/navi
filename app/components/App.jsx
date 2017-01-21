import React from 'react';
import EventsContainer from '../containers/EventsContainer';

export default function App() {
  return (
    <main className="container-fluid">
      <div className="row">
        <section id="map" className="col-xs-8">
          Map goes here
        </section>
        <section id="event-list" className="col-xs-4">
          <EventsContainer />
        </section>
      </div>
    </main>
  );
}
