'use strict';

import { connect } from 'react-redux';
import Eventful from '../components/Eventful';
import { getAllEventfulEvents } from '../reducers/eventful';

function mapStateToProps (state, ownProps) {
  const imageUrl = ownProps.event.image.medium.url;
  return { imageUrl };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Eventful);
