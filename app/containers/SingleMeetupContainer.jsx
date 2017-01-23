import { connect } from 'react-redux';
import SingleMeetup from '../components/SingleMeetup';

const mapStateToProps = (state, ownProps) => {
  const imageUrl = ownProps.meetup.photo_url ? ownProps.meetup.photo_url : '/images/event-placeholder-image.gif';
  let date = new Date(ownProps.meetup.time);
  const day = date.toDateString();
  const time = date.getHours() + ':' + date.getMinutes();
  const description = ownProps.meetup.description;
  return {
    imageUrl,
    day,
    time,
    description
  }
}

export default connect(mapStateToProps)(SingleMeetup);

// function mapStateToProps (state, ownProps) {
//   const boroughKey = { Bk: 'Brooklyn', Bx: 'Bronx', Mn: 'Manhattan', SI: 'Staten Island', Qn: 'Queens', Ot: 'Other'};
//   const boroughs = ownProps.event.boroughs.map(boro => boroughKey[boro]).join(', ');
//   const imageUrl = ownProps.event.imageUrl ? `http://www1.nyc.gov${ownProps.event.imageUrl}` : '/images/event-placeholder-image.gif';
//   let description = ownProps.event.shortDesc.replace(/\\/gi, '');
//   return { boroughs, imageUrl, description };
// }
//
// .replace(/<(?:.|\s)*?>/g, "").slice(0, 25);
