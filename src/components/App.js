import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import {EventHeader} from "./EventHeader"

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventHeader/>
      </div>
    );
  }
}

export default App;
