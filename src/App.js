import React, { Component } from 'react';
import Character from './CharacterPage/Character'
import Home from './HomePage/Home'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/characters" component={Character}/>
          {/* <Route path="/topics" component={Topics}/> */}
        </div>

      </Router>
    );
  }
}

export default App;
