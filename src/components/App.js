import React, { Component } from 'react';
import '../styles/App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import {EventHeader} from "./EventHeader"
import {EventFooter} from "./EventFooter"
import {EventContainer} from "./EventContainer"
import {EventsDetails} from "./EventsDetails"
import Particles from 'react-particles-js';

const particleOptions = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        },
        size: {
            value: 30,
            random: true
        },

    }
}

class App extends Component {
  render() {
      return(
          <div className="App">
              <Particles className= 'particles'
                         params={particleOptions}
              />

              <EventHeader/>

              <BrowserRouter>
                  <Switch>
                      <Route exact path="/" component={EventContainer}></Route>
                      <Route path="/details/:id" component={EventsDetails}></Route>
                  </Switch>
              </BrowserRouter>

              <EventFooter/>
          </div>
      );
  }
}

export default App;
