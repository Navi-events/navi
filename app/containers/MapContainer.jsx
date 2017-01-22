import { connect } from 'react-redux';
import Map from '../components/Map';

const mapStateToProps = ({ events }) => ({ events });

export default connect(mapStateToProps)(Map);
