import React, { Component } from 'react';
import { CustomPicker } from 'react-color';
import { Hue, Saturation } from 'react-color/lib/components/common';
import './style.css';

class RectColorPickerHuePointer extends Component {
  render() {
    return <div className="hue-pointer"></div>
  }
}

class RectColorPickerSaturationPointer extends Component {
  render() {
    return <div className="saturation-pointer"></div>
  }
}

class RectColorPicker extends Component {
  render() {
    return (
      <div className="RectColorPicker">
        <div className="color-picker">
          <div className="hue">
            <Hue {...this.props} pointer={RectColorPickerHuePointer} />
          </div>
          <div className="saturation">
            <Saturation {...this.props} pointer={RectColorPickerSaturationPointer} />
          </div>
        </div>
      </div>
    );
  }
}

/*
http://casesandberg.github.io/react-color/#create
Wrapped with CustomPicker, which passes all props
to HelperComponents with spread args.
*/
export default CustomPicker(RectColorPicker);
