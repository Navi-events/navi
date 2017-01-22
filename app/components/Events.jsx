import React from 'react';
import SingleEventContainer from '../containers/SingleEventContainer';

export default function Events (props) {
  return (
    <div>
      <section id="current-event-title">
        EventSelection
        <ul>
          <li>
            NYC Events
          </li>
        </ul>
      </section>
      {
        props.allEvents && props.allEvents.map((event, index) => {
          return (
            <SingleEventContainer key={event.id} event={event} cssClass={props.getCssClassName(index)} />
          );
        })
      }
    </div>
  );
}
