import React from 'react';
import SingleEventContainer from '../containers/SingleEventContainer';
import SingleMeetupContainer from '../containers/SingleMeetupContainer';
import EventfulContainer from '../containers/EventfulContainer';
import { loadMap } from '../reducers/mapState';
import store from '../store';


export default class Events extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      NYCgovKey: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      showNYCgov: false,
      eventfulKey: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      meetupKey: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      showEventful: false,
      showMeetup: false
    };
    this.toggleNYCgov = this.toggleNYCgov.bind(this);
    this.toggleMeetup = this.toggleMeetup.bind(this);
    this.toggleEventful = this.toggleEventful.bind(this);
  }

  toggleNYCgov () {
    this.setState({
      NYCgovKey: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      showNYCgov: !this.state.showNYCgov,
      showEventful: false,
      showMeetup: false
    })
    store.dispatch(loadMap(this.props.allEvents))
  }

  toggleEventful () {
    this.setState({
      eventfulKey: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      showEventful: !this.state.showEventful,
      showNYCgov: false,
      showMeetup: false,
    })
    store.dispatch(loadMap(this.props.eventfulEvents))
  }

  toggleMeetup () {
    this.setState({
      meetupKey: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      showMeetup: !this.state.showMeetup,
      showNYCgov: false,
      showEventful: false
    });
    store.dispatch(loadMap(this.props.allMeetups))
  }


  render () {
    //Shared constants
    const getCssClassName = this.props.getCssClassName;

    //NYCgov constants
    const toggleNYCgov = this.toggleNYCgov;
    const showNYCgov = this.state.showNYCgov;
    let NYCgovKey = this.state.NYCgovKey;
    const allEvents = this.props.allEvents;


    const { allMeetups } = this.props;
    let meetupKey = this.state.meetupKey;
    let showMeetup = this.state.showMeetup;

    const toggleEventful = this.toggleEventful;
    const showEventful = this.state.showEventful;
    let eventfulKey = this.state.eventfulKey;
    const eventfulEvents = this.props.eventfulEvents;

    return (
      <div>
        <section>
          <h3 id="event-selection-title">Discover NYC</h3>
          <button type="button" className="btn btn-success btn-md" onClick={toggleNYCgov}>NYC.gov</button>
          <button type="button" className="btn btn-success btn-md" onClick={toggleEventful} >Eventful</button>
          <button type="button" className="btn btn-success btn-md" onClick={this.toggleMeetup}>Meetups</button>
        </section>
        {/* NYCgov Event rendering*/}
        {
          showNYCgov && allEvents && allEvents.map((event, index) => {
            let hasTag = event.hasOwnProperty('lat') ? NYCgovKey.shift() : false;
            return (
              <SingleEventContainer key={event.id} event={event} cssClass={getCssClassName(index)} tag={hasTag} />
            );
          })
        }
        {/* Eventful Event rendering*/}
        {
          showEventful && eventfulEvents && eventfulEvents.map((event, index) => {
            let tag = eventfulKey.shift();
            return (
              <EventfulContainer key={event.id} event={event} cssClass={getCssClassName(index)} tag={tag} />
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
