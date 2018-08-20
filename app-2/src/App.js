import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      friends: ["Jake", "Kaleb", "Miki", "Johnny", "Susie", "Robert", "Ethan", "Father"]
    }
  }
  render() {
    let displayFriends = this.state.friends.map((item, i) => {
      return (
        <h2 key={i}>{item}</h2>
      )
    })
    return (
      <div className="App">
        {displayFriends}
      </div>
    );
  }
}

export default App;
