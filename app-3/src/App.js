import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      games: ["KH3", "Spyro Trilogy", "Darksiders 3", "Black ops 4"],
      userInput: "",
      filteredGame: []
    }
  }

  updateInput(val) {
    this.setState({
      userInput: val
    })
    
  }

  filterGames() {
    let game = this.state.games.filter(item => item.includes(this.state.userInput))

    this.setState({
      filteredGame: game
    })
  }
  render() {
    let displayGames = this.state.games.map((item, i) => {
      return (
        <h2 key={i}>{item}</h2>
      )
    })
    return (
      <div className="App">
        {displayGames}
        <input type="text"
        placeholder="Choose a Game"
        onChange={(e) => this.updateInput(e.target.value)}
        value={this.state.userInput}/>
        <button 
        onClick={() => this.filterGames()}>Filter</button>
        <h2>{this.state.filteredGame}</h2>
      </div>
    );
  }
}

export default App;
