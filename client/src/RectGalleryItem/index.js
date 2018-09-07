import React, { Component } from 'react';
import './style.css';

class RectGalleryItem extends Component {
  removeRect = () => {
    this.props.onRemove(this.props.id);
  };

  render() {
    return (
      <li key={this.props.id}>
        <div style={this.props.styleProps}></div>
        <button onClick={this.removeRect}>Remove</button>
      </li>
    );
  }
}

export default RectGalleryItem;
