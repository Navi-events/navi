import React from 'react';
import SingleEventContainer from '../containers/SingleEventContainer';
import EventfulContainer from '../containers/EventfulContainer';


export default class Events extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      NYCgovKey: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      showNYCgov: false,
      eventfulKey: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      showEventful: false
    };
    this.toggleNYCgov = this.toggleNYCgov.bind(this);
    this.toggleEventful = this.toggleEventful.bind(this);
  }

  toggleNYCgov () {
    this.setState({
      NYCgovKey: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      showNYCgov: !this.state.showNYCgov
    })
  }

  toggleEventful () {
    this.setState({
      eventfulKey: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      showEventful: !this.state.showEventful
    })
  }

  render () {
    //Shared constants
    const getCssClassName = this.props.getCssClassName;

    //NYCgov constants
    const toggleNYCgov = this.toggleNYCgov;
    const showNYCgov = this.state.showNYCgov;
    let NYCgovKey = this.state.NYCgovKey;
    const allEvents = this.props.allEvents;

    //Eventful constants
    const toggleEventful = this.toggleEventful;
    const showEventful = this.state.showEventful;
    let eventfulKey = this.state.eventfulKey;
    const eventfulEvents = this.props.eventfulEvents;

    return (
      <div>
        <section>
          <h3 id="event-selection-title">Events Selection</h3>
          <button type="button" className="btn btn-info btn-xs" onClick={toggleNYCgov}>NYC.gov</button>
          <button type="button" className="btn btn-info btn-xs" onClick={toggleEventful} >Eventful</button>
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
      </div>
  )}
}
