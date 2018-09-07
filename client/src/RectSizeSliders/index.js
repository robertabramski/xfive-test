import React, { Component } from 'react';
import { MIN_RECT_WIDTH, MAX_RECT_WIDTH } from '../App';
import { MIN_RECT_HEIGHT, MAX_RECT_HEIGHT } from '../App';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class RectSizeSliders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height
    };
  }

  containerStyle = {
    position: 'relative',
    width: '100px',
    height: '40px'
  };

  handleWidthChange = (value) => {
    this.setState({width: value}, function() {
      this.props.onChange({width: value, height: this.state.height});
    });
  };

  handleHeightChange = (value) => {
    this.setState({height: value}, function() {
      this.props.onChange({width: this.state.width, height: value});
    });
  };

  render() {
    return (
      <div style={this.containerStyle}>
        <Slider
          min={MIN_RECT_WIDTH} max={MAX_RECT_WIDTH}
          value={this.state.width}
          defaultValue={this.props.width}
          onChange={this.handleWidthChange} />
        <Slider
          min={MIN_RECT_HEIGHT} max={MAX_RECT_HEIGHT}
          value={this.state.height}
          defaultValue={this.props.height}
          onChange={this.handleHeightChange} />
      </div>
    );
  }
}

export default RectSizeSliders;
