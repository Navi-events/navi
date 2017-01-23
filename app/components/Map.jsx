import React, {PropTypes, PureComponent} from 'react';
import GoogleMap from 'google-map-react';
import controllable from 'react-controllables';

import Marker from './Marker';
import { M_SIZE } from './MarkerStyle';

export default class SimpleMapPage extends PureComponent {

  static defaultProps = {
    center: [40.727, -73.99],
    zoom: 11,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const places = this.props.events.filter(event => event.hasOwnProperty('lat')).map((place, i) => {
      const { id, lat, lng} = place;
      const key = 'ABCDEFGHIJK'.split('');
      return (
        <Marker lat={lat} lng={lng} key={ id } text={ key[i] } />
      );
    });

    return (
       <GoogleMap
        bootstrapURLKeys={{key: 'AIzaSyAFPCRFuQJTc36hz4mNLQm_jh1zHMIcne4', language: 'en'}}
        center={this.props.center}
        zoom={this.props.zoom}
        hoverDistance={ M_SIZE / 2 }
        >
        {places}
      </GoogleMap>
    );
  }
}

