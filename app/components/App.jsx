import React from 'react';
import Map from './Map';
import EventsContainer from '../containers/EventsContainer';

export default function App() {
  return (
    <main>
      <section id="title">
        Events!
      </section>
      <section id="gmap">
        <Map />
      </section>
      <section id="event-list">
        <EventsContainer />
      </section>
    </main>
  );
}
