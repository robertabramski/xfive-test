import React, { Component } from 'react';
import { MIN_RECT_BORDER_RADIUS, MAX_RECT_BORDER_RADIUS } from '../App';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class RectRadiusSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderRadius: this.props.borderRadius
    };
  }

  handleChange = (value) => {
    this.setState({borderRadius: value}, function() {
      this.props.onChange(this.state);
    });
  };

  render() {
    return (
      <div className="slider-group">
        <label>Radius</label>
        <Slider className="radius"
          min={MIN_RECT_BORDER_RADIUS} max={MAX_RECT_BORDER_RADIUS}
          value={this.state.borderRadius}
          defaultValue={this.props.borderRadius}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default RectRadiusSlider;
