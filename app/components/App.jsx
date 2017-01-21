import React from 'react';
import Map from './Map';
import EventsContainer from '../containers/EventsContainer';

export default function App() {
  return (
    <main className="container-fluid">
      <div className="row">
        <section className="col-xs-8 gmap">
          <Map />
        </section>
        <section id="event-list" className="col-xs-4">
          <EventsContainer />
          <EventsContainer />
        </section>
      </div>
    </main>
  );
}
