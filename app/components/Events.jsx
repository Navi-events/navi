import React from 'react';
import SingleEventContainer from '../containers/SingleEventContainer';

const key = 'ABCDEFGHIJK'.split('');

export default function Events (props) {
  return (
    <div>
      <section>
        <h3 id="event-selection-title">Events Selection</h3>
        <h5 className="event-categories">NYC Events</h5>

      </section>
      {
        props.allEvents && props.allEvents.map((event, index) => {
          let hasTag = event.hasOwnProperty('lat') ? key.shift() : false;
          return (
            <SingleEventContainer key={event.id} event={event} cssClass={props.getCssClassName(index)} tag={hasTag}/>
          );
        })
      }
    </div>
  );
}
