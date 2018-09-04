import React, { Component } from 'react';
import './style.css';

class App extends Component {
  componentDidMount() {
    fetch('/api/rect').then(result => result.json()).then(data => {
      // TODO: Display data.
    });
  }

  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

export default App;
