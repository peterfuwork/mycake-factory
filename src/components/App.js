import React, { Component } from 'react';
import Header from './Header';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div>
            <h1>{this.props.store.header}</h1>
          </div>
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;
