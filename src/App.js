import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Leaflet from './components/Leaflet';

import './App.css';


class App extends Component {

  render() {
    return(
      <div>
       <Switch>
          <Route exact path='/' render={() => <Leaflet />} />
       </Switch>

      </div>
    )
  }
}

export default App;
