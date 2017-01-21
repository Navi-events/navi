import React, {PropTypes, PureComponent} from 'react';
import GoogleMap from 'google-map-react';
import controllable from 'react-controllables';

import Marker from './Marker';
import { M_SIZE } from './MarkerStyle';

const bryantPark = {
  id: 'A',
  lat: 40.7536,
  lng: -73.9832
};
const madisonSquare = {
  id: 'B',
  lat: 40.7505,
  lng: -73.99
}

export default class SimpleMapPage extends PureComponent {

  static defaultProps = {
    center: [40.727, -73.99],
    zoom: 13,
    placesOfInterest: [ madisonSquare, bryantPark ]
  };

  constructor(props) {
    super(props);
  }

  render() {
    const places = this.props.placesOfInterest.map(place => {
      const { id, ...coords } = place;
      return (
        <Marker {...coords} key={ id } text={ id } />
      );
    });
    console.log('this is the props', this.props.center)

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



// <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
// <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />

// import NodeGeocoder from 'node-geocoder';

// const options = {
//   provider: 'google',
//   httpAdapter: 'https',
//   apiKey: 'AIzaSyAFPCRFuQJTc36hz4mNLQm_jh1zHMIcne4',
//   formatter: null
// };

// let geocoder = NodeGeocoder(options);

// geocoder.geocode('5 hanover square new york', (err, res) => {
//   console.log(res);
// });
