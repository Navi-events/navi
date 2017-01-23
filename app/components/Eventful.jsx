import React from 'react';
import Marker from './Marker';
import { listTag } from './ListMarker';

export default function Eventful (props) {
  return (
    <div className={ props.cssClass }>
      <img src={ props.imageUrl } alt="event-image" className="event-image" />
      <div className="event-info">
      <h4 className="event-title">{ props.event.title }</h4>
      <div style={ listTag }>{props.tag}</div>
      <a href={ `${props.event.url}` } target="_blank"><button type="button" className="btn btn-info btn-xs">Details</button></a>
      <p className="event-details"><b className="line-title">Date:</b> {new Date(props.event.start_time).toDateString()}</p>
      <p className="event-details"><b className="line-title">Time:</b> { props.event.start_time }</p>
      <p className="event-details"><b className="line-title">Borough:</b> { props.event.region_name }</p>
      { props.event.description && <p className="event-details"><b className="line-title">Description: </b>{ props.event.description.slice(0, 200) + '...'}</p> }
    </div>
  </div>
  );
}
