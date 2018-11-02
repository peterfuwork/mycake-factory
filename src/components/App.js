import React, { Component } from 'react';
import Header from './Header';
import Cards from './Cards';
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer class App extends Component {

  renderCakes = () => {
    return this.props.store.cakes

  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div>
            <h1>{this.props.store.cakes}</h1>
          </div>
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;
