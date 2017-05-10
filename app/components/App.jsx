import React from 'react';
import Map from '../containers/MapContainer';
import EventsContainer from '../containers/EventsContainer';
import EventfulContainer from '../containers/EventfulContainer';

export default function App() {
  return (
    <main>
        <header>
            <img src="/images/navi-hey-listen.png" alt="navi-logo" className="navi-logo" />
            <p id="title">Navi</p>
        </header>
        <hr/>
      <section id="gmap">
        <Map />
      </section>
      <section id="event-list">
        <EventsContainer />
      </section>
      <footer>
        <span className="glyphicon glyphicon-wrench" /> &nbsp; with &nbsp; <span className="glyphicon glyphicon-heart" />&nbsp; by Sean Martin and Jimmy Wang at &nbsp;<a href="http://fullstackacademy.com"> Fullstack Academy of Code </a> <p>&nbsp;</p> <span className="glyphicon glyphicon-education" />
        <div className="eventful-badge eventful-small">
          <img src="http://api.eventful.com/images/powered/eventful_58x20.gif" alt="Local Events, Concerts, Tickets" />
          <p className="eventful-msg"><a href="http://eventful.com/">Events</a> by Eventful</p>
        </div>
      </footer>
    </main>
  );
}
