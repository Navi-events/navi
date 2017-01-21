import React from 'react';

export default function SingleEvent (props) {
  return (
    <div className="row single-event">
      <img src="http://www.bloggingtips.com/wp-content/uploads/2014/12/Event-Blogging-Strategies.jpg" alt="event-image" className="event-image" />
      <div className="event-info">
        <div className="event-info">
          <h4>Event Name</h4>
          <p className="event-details">Time: 3:30pm</p>
          <p className="event-details">Borough</p>
          <p className="event-details">Location</p>
          <p className="event-details">WebLink</p>
          <p className="event-details">Description: With all of the world’s best players on board for the J.P. Morgan  Tournament of Champions, the world’s largest spectator squash event, the  on-court action will be compelling from the very first round when the  tournament gets underway on Friday, January 16 in NYC’s Grand Central  Terminal</p>
        </div>
      </div>
    </div>
  );
}
