import React from 'react';
import Marker from './Marker';
import { listTag } from './ListMarker';

export default function SingleEvent (props) {
  return (
    <div className={props.cssClass}>
        <img src={props.imageUrl} alt="event-image" className="event-image" />
        <div className="event-info">
          <h4 className="event-title">{props.event.name}</h4>
          {props.tag && <div style={ listTag }>{props.tag}</div>}
          <a href={`${props.event.website}`} target="_blank"><button type="button" className="btn btn-info btn-xs">Details</button></a>
          <p className="event-details"><b className="line-title">Date:</b> {new Date(props.event.startDate).toDateString()}</p>
          <p className="event-details"><b className="line-title">Time:</b> {props.event.timePart}</p>
          <p className="event-details"><b className="line-title">Borough:</b> {props.boroughs}</p>
          <p className="event-details"><b className="line-title">Description: </b>{props.description}</p>
        </div>
    </div>
  );
}
