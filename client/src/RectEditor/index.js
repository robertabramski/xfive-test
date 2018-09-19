import React, { Component } from 'react';
import RectButton from '../RectButton';
import RectSizeSliders from '../RectSizeSliders';
import RectRadiusSlider from '../RectRadiusSlider';
import RectColorPicker from '../RectColorPicker';
import { API_RECT_ENDPOINT } from '../App';
import './style.css';

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
    this.setState({backgroundColor: color.hex}, () => {
      this.props.onChange(this.state);
    });
  };

  handleRangeChange = (props) => {
    this.setState(props, () => {
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
      <div className="RectEditor">
        <div className="section sliders">
          <RectSizeSliders
            width={this.state.width}
            height={this.state.height}
            onChange={this.handleRangeChange} />
          <RectRadiusSlider
            borderRadius={this.state.borderRadius}
            onChange={this.handleRangeChange} />
          </div>
        <div className="section color-picker">
          <RectColorPicker
            color={this.state.backgroundColor}
            onChange={this.handleColorChange} />
          </div>
        <RectButton name={'Save'} onClick={this.saveRect} />
      </div>
    );
  }
}

export default RectEditor;
