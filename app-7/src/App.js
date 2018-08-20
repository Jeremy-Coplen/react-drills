import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from "./NewTask"
import List from "./List"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskArr: []
    }

    this.updateTaskArr = this.updateTaskArr.bind(this)
  }

  updateTaskArr(task) {
    this.setState({
      taskArr: [...this.state.taskArr, task]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My Tasks:</h1>
        <NewTask 
        updateTask={this.updateTaskArr}/>
        <List 
        taskArr={this.state.taskArr}/>
      </div>
    );
  }
}

export default App;
