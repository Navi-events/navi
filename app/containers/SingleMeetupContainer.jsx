import { connect } from 'react-redux';
import SingleMeetup from '../components/SingleMeetup';

const mapStateToProps = (state, ownProps) => {
  const imageUrl = ownProps.meetup.photo_url ? ownProps.meetup.photo_url : '/images/event-placeholder-image.gif';
  let date = new Date(ownProps.meetup.time);
  const day = date.toDateString();
  const time = date.getHours() + ':' + date.getMinutes();
  const description = ownProps.meetup.description ? ownProps.meetup.description.replace(/<(?:.|\s)*?>/g, '').slice(0, 250) + '...' : 'TBD';
  return {
    imageUrl,
    day,
    time,
    description
  };
};

export default connect(mapStateToProps)(SingleMeetup);
