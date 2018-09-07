import React, { Component } from 'react';
import { CustomPicker } from 'react-color';
import { Hue, Saturation } from 'react-color/lib/components/common';

class RectColorPicker extends Component {
  containerStyle = {
    position: 'relative',
    width: '100px',
    height: '40px'
  };

  render() {
    return (
      <div style={this.containerStyle}>
        <div style={{height: '10px', position: 'relative'}}>
          <Hue {...this.props} />
        </div>
        <div style={{height: '30px', position: 'relative'}}>
          <Saturation {...this.props} />
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
