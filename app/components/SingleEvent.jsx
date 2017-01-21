import React from 'react';

export default function SingleEvent (props) {
  return (
    <div className={`row ${props.cssClass}`}>
      <img src={props.imageUrl} alt="event-image" className="event-image" />
      <div className="event-info">
        <div className="event-info">
          <h4>{props.event.name}</h4>
          <p className="event-details">Date: {props.event.datePart}</p>
          <p className="event-details">Time: {props.event.timePart}</p>
          <p className="event-details">Borough: {props.boroughs}</p>
        <a href={`${props.event.website}`} className="remove-underline"><button className="button">Details Page</button></a>
        <p className="event-details">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
