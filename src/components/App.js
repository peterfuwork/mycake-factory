import React, { Component } from 'react';
import Header from './Header';
import Cards from './Cards';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cakes: []
    }
  }

  async componentDidMount() {
    let result = await fetch('http://localhost:3001/cakes');
    let data = await result.json();
    console.log(data);
    this.setState({
      cakes: data.cakes
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <Cards cakes={this.state.cakes} />
        </div>
      </div>
    );
  }
}

export default App;
