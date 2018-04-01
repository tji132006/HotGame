import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import {EventHeader} from "./EventHeader"
import {EventFooter} from "./EventFooter"

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventHeader/>
          <EventFooter/>
      </div>
    );
  }
}

export default App;
