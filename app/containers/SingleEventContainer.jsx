'use strict';

import { connect } from 'react-redux';
import SingleEvent from '../components/SingleEvent';

function mapStateToProps (state, ownProps) {
  const boroughKey = { Bk: 'Brooklyn', Bx: 'Bronx', Mn: 'Manhattan', SI: 'Staten Island', Qn: 'Queens', Ot: 'Other'};
  const boroughs = ownProps.event.boroughs.map(boro => boroughKey[boro]).join(', ');
  const imageUrl = ownProps.event.imageUrl ? `http://www1.nyc.gov${ownProps.event.imageUrl}` : '/images/event-placeholder-image.gif';
  let description = ownProps.event.shortDesc.replace(/\\/gi, '');
  return { boroughs, imageUrl, description };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);
