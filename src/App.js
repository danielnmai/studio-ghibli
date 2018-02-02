import React, { Component } from 'react';
import Character from './CharacterPage/Character'
import Film from './FilmPage/Film'
import Home from './HomePage/Home'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/characters" component={Character}/>
          <Route path="/films" component={Film}/>
        </div>

      </Router>
    );
  }
}

export default App;
