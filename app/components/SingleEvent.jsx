import React from 'react';

export default function SingleEvent (props) {
  return (
    <div className={props.cssClass}>
        <img src={props.imageUrl} alt="event-image" className="event-image" />
        <div className="event-info">
          <h4 className="event-title">{props.event.name}</h4>
          <a href={`${props.event.website}`}><button type="button" className="btn btn-info btn-xs">Details</button></a>
          <p className="event-details"><b className="line-title">Date:</b> {props.event.datePart}</p>
          <p className="event-details"><b className="line-title">Time:</b> {props.event.timePart}</p>
          <p className="event-details"><b className="line-title">Borough:</b> {props.boroughs}</p>
          <p className="event-details"><b className="line-title">Description: </b>{props.description}</p>
        </div>
    </div>
  );
}
