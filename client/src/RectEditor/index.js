import React, { Component } from 'react';
import RectSizeSliders from '../RectSizeSliders';
import RectRadiusSlider from '../RectRadiusSlider';
import RectColorPicker from '../RectColorPicker';
import { API_RECT_ENDPOINT } from '../App';

class RectEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
      backgroundColor: props.backgroundColor,
      borderRadius: props.borderRadius
    };
  }

  handleColorChange = (color) => {
    this.setState({backgroundColor: color.hex}, function() {
      this.props.onChange(this.state);
    });
  };

  handleRangeChange = (props) => {
    this.setState(props, function() {
      this.props.onChange(this.state);
    });
  };

  saveRect = () => {
    let body = Object.assign({date: new Date()}, this.state);
    let options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(API_RECT_ENDPOINT, options).then(res => res.json()).then(newRect => {
      this.props.onSave(newRect);
    });
  };

  render() {
    return (
      <div>
        <RectSizeSliders
          width={this.state.width}
          height={this.state.height}
          onChange={this.handleRangeChange} />
        <RectRadiusSlider
          borderRadius={this.state.borderRadius}
          onChange={this.handleRangeChange} />
        <RectColorPicker
          color={this.state.backgroundColor}
          onChange={this.handleColorChange} />
        <button
          onClick={this.saveRect}>Save</button>
      </div>
    );
  }
}

export default RectEditor;
