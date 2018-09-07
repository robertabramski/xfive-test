import React, { Component } from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { MIN_RECT_BORDER_RADIUS, MAX_RECT_BORDER_RADIUS } from '../App';

class RectRadiusSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderRadius: this.props.borderRadius
    };
  }

  containerStyle = {
    position: 'relative',
    width: '100px',
    height: '40px'
  };

  handleChange = (value) => {
    this.setState({borderRadius: value}, function() {
      this.props.onChange(this.state);
    });
  };

  render() {
    return (
      <div style={this.containerStyle}>
        <Slider
          min={MIN_RECT_BORDER_RADIUS} max={MAX_RECT_BORDER_RADIUS}
          value={this.state.borderRadius}
          defaultValue={this.props.borderRadius}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default RectRadiusSlider;
