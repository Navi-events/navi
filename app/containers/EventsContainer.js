'use strict';

import { connect } from 'react-redux';
import Events from '../components/Events';

function mapStateToProps (state, ownProps) {
  function getCssClassName(index) {
    return `single-event${index % 2}`;
  }
  return { getCssClassName, allEvents: state.events, eventfulEvents: state.eventful};
}

function mapDispatchToProps (dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
