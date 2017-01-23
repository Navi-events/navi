import React from 'react';
import SingleEventContainer from '../containers/SingleEventContainer';
import SingleMeetupContainer from '../containers/SingleMeetupContainer';


export default class Events extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      NYCgovKey: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      meetupKey: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      showNYCgov: false,
      showMeetup: false
    };
    this.toggleNYCgov = this.toggleNYCgov.bind(this);
    this.toggleMeetup = this.toggleMeetup.bind(this);
  }

  toggleNYCgov () {
    this.setState({
      NYCgovKey: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      showNYCgov: !this.state.showNYCgov,
    });
  }
  toggleMeetup () {
    this.setState({
      NYCgovKey: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      showMeetup: !this.state.showMeetup,
    });
  }


  render () {
    //NYCgov constants
    const toggleNYCgov = this.toggleNYCgov;
    const showNYCgov = this.state.showNYCgov;
    let NYCgovKey = this.state.NYCgovKey;
    const allEvents = this.props.allEvents;

    //Eventful constants
    //comming soon...


    //Meetup constants
    const { allMeetups } = this.props;
    let meetupKey = this.state.meetupKey;
    let showMeetup = this.state.showMeetup;
    console.log('these are the meetups', allMeetups)

    return (
      <div>
        <section>
          <h3 id="event-selection-title">Events Selection</h3>
          <button type="button" className="btn btn-info btn-xs" onClick={toggleNYCgov}>NYC.gov</button>
          <button type="button" className="btn btn-info btn-xs">Eventful</button>
          <button type="button" className="btn btn-info btn-xs" onClick={this.toggleMeetup}>Meetups</button>
        </section>
        {
          showNYCgov && allEvents && allEvents.map((event, index) => {
            let hasTag = event.hasOwnProperty('lat') ? NYCgovKey.shift() : false;
            return (
              <SingleEventContainer key={event.id} event={event} cssClass={this.props.getCssClassName(index)} tag={hasTag} />
            );
          })
        }
        {
          showMeetup && allMeetups && allMeetups.map((meetup, index) => {
            let hasTag = event.hasOwnProperty('venue') ? meetupKey.shift() : false;
            return (
              <SingleMeetupContainer key={meetup.id} meetup={meetup} cssClass={this.props.getCssClassName(index)} tag={hasTag} />
            );
          })
        }
      </div>
  )}
}
