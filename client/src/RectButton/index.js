import React, { Component } from 'react';
import './style.css';

class RectButton extends Component {
  onClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <button onClick={this.onClick}>{this.props.name}</button>
    );
  }
}

export default RectButton;
