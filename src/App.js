import React, { Component } from 'react';
import './App.css';
import './index.css';
import Navigation from './Navigation';

class App extends Component {
  render () {
    return (
      <div className="App">
        < Navigation />
        <div>
          <h1>Hello World.</h1> 
        </div>
      </div>
    );
  }
} 

export default App;
