import React, { Component } from 'react';
import RectGalleryItem from '../RectGalleryItem';
import { API_RECT_ENDPOINT } from '../App';
import './style.css';

class RectGallery extends Component {
  removeRect = (id) => {
    let options = {
      method: 'DELETE',
      body: JSON.stringify({_id: id}),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(API_RECT_ENDPOINT, options).then(res => res.json()).then(data => {
      if(data.hasOwnProperty('err') || data.success === 0) {
        // TODO: Handle error.
      } else {
        this.props.onRemove(id);
      }
    });
  };

  render() {
    let rects = this.props.rects;
    let byDate = function(a, b) {
      if(a.date && b.date) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return a;
    };

    return (
      <div className="RectGallery">
        <div className="gallery">
          {rects ? rects.sort(byDate).reverse().map((rect) =>
            <RectGalleryItem
              key={rect['_id']} id={rect['_id']}
              onRemove={this.removeRect}
              styleProps={{
                width: rect.width,
                height: rect.height,
                backgroundColor: rect.backgroundColor,
                borderRadius: rect.borderRadius
              }} />
          ) : []}
        </div>
      </div>
    );
  }
}

export default RectGallery;
