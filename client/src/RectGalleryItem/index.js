import React, { Component } from 'react';
import RectButton from '../RectButton';
import RectOutput from '../RectOutput';
import './style.css';

class RectGalleryItem extends Component {
  removeRect = () => {
    this.props.onRemove(this.props.id);
  };

  render() {
    return (
      <div key={this.props.id} className="gallery-item">
        <RectOutput {...this.props.styleProps} />
        <RectButton name={'Remove'} onClick={this.removeRect} />
      </div>
    );
  }
}

export default RectGalleryItem;
