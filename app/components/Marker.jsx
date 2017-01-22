import React, {PropTypes, PureComponent} from 'react';
import {markerStyling, markerStylingOnHover} from './MarkerStyle';

export default class TopPlaces extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    $hover: PropTypes.bool
  };
  constructor(props) {
    super(props);
  }
  render() {
    const style = this.props.$hover ? markerStylingOnHover : markerStyling;
    return (
      <div style={ style }>
      { this.props.text }
      </div>
    )
  }
}
