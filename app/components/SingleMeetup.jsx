import React from 'react';
import { listTag } from './ListMarker';

export default function SingleMeetup (props) {
  return (
    <div className={props.cssClass}>
        <img src={props.imageUrl} alt="event-image" className="event-image" />
        <div className="event-info">
          <h4 className="event-title">{props.meetup.name}</h4>
          <a href={`${props.meetups.event_iurl}`} target="_blank"><button type="button" className="btn btn-info btn-xs">Details</button></a>
          <p className="event-details"><b className="line-title">Date:</b> {this.props.day}</p>
          <p className="event-details"><b className="line-title">Time:</b> {this.props.time }</p>
          <p className="event-details"><b className="line-title">Description: </b>{props.description}</p>
          {props.tag && <div style={ listTag }>{props.tag}</div>}
        </div>
    </div>
  );
}
