import React, { Component } from 'react';
import RectEditor from '../RectEditor';
import RectOutput from '../RectOutput';
import RectGallery from '../RectGallery';
import promiseCancel from 'promise-cancel';
import './style.css';

// Export application wide constants for other components.
export const MIN_RECT_WIDTH = 20;
export const MIN_RECT_HEIGHT = 20;
export const MAX_RECT_WIDTH = 100;
export const MAX_RECT_HEIGHT = 100;
export const MIN_RECT_BORDER_RADIUS = 0;
export const MAX_RECT_BORDER_RADIUS = 10;
export const DEFAULT_RECT_BORDER_RADIUS = 0;
export const DEFAULT_RECT_BG_COLOR = '#FFFFFF';
export const API_RECT_ENDPOINT = '/api/rect';

/*
Helper function to derive inverted background
from background to avoid saving derived data.
*/
export const invertBackground = function(hex) {
  return require('invert-color')(hex);
}

// For true private variables, use a weak map.
let privates = new WeakMap();

class App extends Component {
  constructor() {
    super();

    let localStyleProps = localStorage.getItem('styleProps');

    // Set all privates for later usage.
    privates.set(this, {
      fetching: null,
      defaultRect: {
        width: MAX_RECT_WIDTH / 2,
        height: MAX_RECT_HEIGHT / 2,
        backgroundColor: DEFAULT_RECT_BG_COLOR,
        borderRadius: DEFAULT_RECT_BORDER_RADIUS,
        invertedBackgroundColor: invertBackground(DEFAULT_RECT_BG_COLOR)
      }
    });

    if(localStyleProps) {
      this.state = JSON.parse(localStyleProps);
    } else {
      this.state = privates.get(this).defaultRect;
    }

    this.state.rects = [];
  }

  componentDidMount() {
    // Wrap the promise to make it cancellable.
    let fetching = promiseCancel(fetch(API_RECT_ENDPOINT));

    fetching.promise
      .then(result => result.json())
      .then(data => this.setState({rects: data}))
      .catch(err => {
        // TODO: Handle error.
      });

    // Set the promise in privates for use in unmounting.
    privates.get(this).fetching = fetching;
  }

  componentWillUnmount() {
    // This prevents memory leaks by aborting promise.
    privates.get(this).fetching.abort();
  }

  removeRect = (id) => {
    this.setState(prevState => {
      // Use arr.slice to create a new array from previous.
      let prevRects = prevState.rects.slice();
      let rectIndex = prevRects.findIndex(el => el['_id'] === id);

      prevRects.splice(rectIndex, 1);
      return {rects: prevRects};
    });
  };

  handleChange = (props) => {
    // Set derived inverted background on change.
    props.invertedBackgroundColor = invertBackground(props.backgroundColor);

    // Set state to localStorage as well as React state.
    localStorage.setItem('styleProps', JSON.stringify(props));
    this.setState(props);
  };

  handleSave = (newRect) => {
    /*
    Save new rect as first item in array. Using the spread operator
    of the previous rects state to create a new array instead of using
    arr.shift to prevent a potential issue with React lifecycle events
    not seeing the update.
    */
    this.setState(prevState => ({
      rects: [newRect, ...prevState.rects]
    }));

    // TODO: Reset back to default rect state to avoid button blast duplicates.
    localStorage.setItem('styleProps', JSON.stringify(newRect));
    this.setState(newRect);
  };

  render() {
    return (
      <main>
        <header>
          <h2>
            {this.state.rects.length === 0 ? 'No' : this.state.rects.length}&nbsp;
            {this.state.rects.length === 1 ? 'Rect' : 'Rects'} Pimped
          </h2>
        </header>
        <section className="editor">
          <div className="output-container">
            <RectOutput
              width={this.state.width} height={this.state.height}
              backgroundColor={this.state.backgroundColor}
              borderRadius={this.state.borderRadius}
              invertedBackgroundColor={this.state.invertedBackgroundColor} />
          </div>
          <div className="editor-container">
            <RectEditor
              width={this.state.width} height={this.state.height}
              backgroundColor={this.state.backgroundColor}
              borderRadius={this.state.borderRadius}
              onSave={this.handleSave} onChange={this.handleChange} />
          </div>
        </section>
        <section className="gallery">
          <RectGallery onRemove={this.removeRect} rects={this.state.rects} />
        </section>
      </main>
    );
  }
}

export default App;
