import React, { Component } from "react";
import "./index.css";
import './Navigation.css';

class Navigation extends Component {
  render () {
    return (
      <div className="sticky-top">
        <div className="Navigation">
          <img className="nav-logo" src="./nav-logo.jpg" alt="Burnaman Designs"/>
          <div className="Navmenu">
            <h3>Projects</h3>
            <h3>Blog</h3>
            <h3>Contact Me</h3>
          </div>
        </div>
        <div className="rainbow-bridge"></div>
      </div>
    );
  }
} 

export default Navigation;
