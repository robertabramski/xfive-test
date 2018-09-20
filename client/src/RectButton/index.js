import React, { Component } from 'react';
import './style.css';

class RectButton extends Component {
  onClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="RectButton">
        <button onClick={this.onClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default RectButton;
