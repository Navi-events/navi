import React from 'react';
import SingleEventContainer from '../containers/SingleEventContainer';

export default function Events (props) {
  return (
    <div>
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
