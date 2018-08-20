import React, { Component } from 'react';
import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image 
        myImage={"https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg"}/>
      </div>
    );
  }
}

export default App;
