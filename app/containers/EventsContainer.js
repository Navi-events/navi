'use strict';

import { connect } from 'react-redux';
import Events from '../components/Events';

function mapStateToProps (state, ownProps) {
  function getCssClassName(index) {
    return `single-event${index % 2}`;
  }
  return { allEvents: state.events.allEvents, getCssClassName };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);
