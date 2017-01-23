import React from 'react';
import SingleEventContainer from '../containers/SingleEventContainer';


export default class Events extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      NYCgovKey: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      showNYCgov: false
    };
    this.toggleNYCgov = this.toggleNYCgov.bind(this);
  }

  toggleNYCgov () {
    this.setState({
      NYCgovKey: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      showNYCgov: !this.state.showNYCgov
    })
  }

  render () {
    //NYCgov constants
    const toggleNYCgov = this.toggleNYCgov;
    const showNYCgov = this.state.showNYCgov;
    let NYCgovKey = this.state.NYCgovKey;
    const allEvents = this.props.allEvents;

    //Eventful constants
    //comming soon...
    return (
      <div>
        <section>
          <h3 id="event-selection-title">Events Selection</h3>
          <button type="button" className="btn btn-info btn-xs" onClick={toggleNYCgov}>NYC.gov</button>
          <button type="button" className="btn btn-info btn-xs">Eventful</button>
        </section>
        {
          showNYCgov && allEvents && allEvents.map((event, index) => {
            let hasTag = event.hasOwnProperty('lat') ? NYCgovKey.shift() : false;
            return (
              <SingleEventContainer key={event.id} event={event} cssClass={this.props.getCssClassName(index)} tag={hasTag} />
            );
          })
        }
      </div>
  )}
}
