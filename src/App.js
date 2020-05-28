import React, { Component } from 'react';
import './App.css';
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import TreeList from "./TreeList/TreeList";


class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Hello World, this my React App Dash...board.</h1>
        <div className="App-title">Making a Countdown and Timer in React Demo</div>
        <div className="Timers">
          <Countdown />
          <Stopwatch />
      </div>
      <br></br>
      <h2 className="Tree-List">Tree List Props Test</h2> 
      <br></br>
      <TreeList name="Weeping Willow" age="30 Years"/>Hello Content
      <TreeList name="Hungry Maple" age="162 Years"/>
      </div>
    );
  }
} 

export default App;
