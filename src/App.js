import React, { Component } from 'react';
import './App.css';
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";


class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <div className="App-title">Timers Demo</div>
        <div className="Timers">
          <Countdown />
          <Stopwatch />
      </div>
      </div>
    );
  }
} 

export default App;
