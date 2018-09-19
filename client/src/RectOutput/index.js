import React, { Component } from 'react';
import { MAX_RECT_WIDTH, MAX_RECT_HEIGHT } from '../App';
import './style.css';

const OUTPUT_BORDER = 20;

class RectOutput extends Component {
  render() {
    return (
      <div className="RectOutput">
        <div className="background" style={{
          width: MAX_RECT_WIDTH + OUTPUT_BORDER,
          height: MAX_RECT_HEIGHT + OUTPUT_BORDER,
          backgroundColor: this.props.invertedBackgroundColor
        }}>
          <div className="output" style={{
            top: MAX_RECT_WIDTH / 2 - (this.props.height / 2) + (OUTPUT_BORDER / 2),
            left: MAX_RECT_HEIGHT / 2 - (this.props.width / 2) + (OUTPUT_BORDER / 2),
            width: this.props.width,
            height: this.props.height,
            borderRadius: this.props.borderRadius,
            backgroundColor: this.props.backgroundColor
          }}></div>
        </div>
      </div>
    );
  }
}

export default RectOutput;
