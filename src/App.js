import React, { Component } from 'react';
import Character from './CharacterPage/Character'
import CharacterDetail from './CharacterPage/components/CharacterDetail'
import FilmDetail from './FilmPage/components/FilmDetail'
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
          <Route exact path="/characters" component={Character}/>
          <Route exact path="/films" component={Film}/>
          <Route path="/favorites" component={Favorite}/>
          <Route path="/characters/:id" component={CharacterDetail}/>
          <Route path="/films/:id" component={FilmDetail}/>
        </div>

      </Router>
    );
  }
}

export default App;
