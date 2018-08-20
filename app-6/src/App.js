import React, { Component } from 'react';
import Todo from "./Todo"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: "",
      todo: []
    }
  }

  updateInput(val) {
    this.setState({
      userInput: val
    })
  }

  updateTodo() {
    this.setState({
      todo: [...todo, this.state.userInput],
      userInput: ""
    })
    console.log(this.state.todo)
  }
  render() {
    return (
      <div className="App">
      <h1>Things To Do:</h1>
        <div>
        <input type="text"
        placeholder="Add To Todo List"
        value={this.state.userInput}
        onChange={e => this.updateInput(e.target.value)}/>
        <button
        onClick={() => this.updateTodo()}>Add</button>
        <Todo 
        todoArray={this.state.todo}/>
        </div>
      </div>
    );
  }
}

export default App;
