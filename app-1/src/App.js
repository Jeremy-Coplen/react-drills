import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }
  }

  updateInput(val) {
      this.setState({
        text: val
      })
  }
  render() {
    return (
      <div className="App">
        <input type="text"
        onChange={(e) => this.updateInput(e.target.value)}
        value={this.state.text}/>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
