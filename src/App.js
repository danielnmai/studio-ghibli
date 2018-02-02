import React, { Component } from 'react';
import Character from './CharacterPage/Character'
import Film from './FilmPage/Film'
import Home from './HomePage/Home'
import Favorite from './FavoritePage/Favorite'

import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/characters" component={Character}/>
          <Route path="/films" component={Film}/>
          <Route path="/favorites" component={Favorite}/>

        </div>

      </Router>
    );
  }
}

export default App;
