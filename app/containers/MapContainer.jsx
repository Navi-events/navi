import React from 'react';
import Marker from '../components/Marker';
import { connect } from 'react-redux';
import Map from '../components/Map';

const mapStateToProps = (state) => {
  let places = '';
  if (state.mapState.length && state.mapState[0].hasOwnProperty('postal_code')) {
    places = state.mapState.filter(event => event.latitude !== undefined).map((place, i) => {
      const { id, latitude, longitude} = place;
      const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      return (
        <Marker lat={+latitude} lng={+longitude} key={ id } text={ key[i] } />
      );
    });
  } else if (state.mapState.length && state.mapState[0].hasOwnProperty('yes_rsvp_count')) {
    places = state.mapState.filter(event => event.hasOwnProperty('venue')).map((place, i) => {
      const latitude = place.venue.lat;
      const longitude = place.venue.lon;
      const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      return (
        <Marker lat={latitude} lng={longitude} key={ place.id } text={ key[i] } />
      );
    });
  } else {
    places = state.mapState.filter(event => event.hasOwnProperty('lat')).map((place, i) => {
      const { id, lat, lng} = place;
      const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      return (
        <Marker lat={lat} lng={lng} key={ id } text={ key[i] } />
      );
    });

  }
  return { places }
}

export default connect(mapStateToProps)(Map);
