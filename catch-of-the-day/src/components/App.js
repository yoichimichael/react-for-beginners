import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import fishes from '../sample-fishes';
import Fish from './Fish'

class App extends Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish
    this.setState({ fishes });
  }

  loadSampleFishes = () => {
    this.setState({ fishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
                    {/* component instance */}
           <Header tagline="Fresh Seafood Market"/>
           <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} fishDetails={this.state.fishes[key]}/>)}
           </ul>
        </div>
        {/* component instance */}
        <Order />
        {/* component instance */}
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes }/>
 
      </div>
    )
  }
}

export default App;