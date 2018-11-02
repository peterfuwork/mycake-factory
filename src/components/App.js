import React, { Component } from 'react';
import image from '../assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World!<br/>
        <img className="App-logo" src={image} />
      </div>
    );
  }
}

export default App;
