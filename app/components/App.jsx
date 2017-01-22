import React from 'react';
import Map from '../containers/MapContainer';
import EventsContainer from '../containers/EventsContainer';

export default function App() {
  return (
    <main>
        <img src="/images/navi-hey-listen.png" alt="navi-logo" className="navi-logo" />
        <section id="title-section">
          <h1 id="title">Navi</h1>
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
