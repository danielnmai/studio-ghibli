import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/films">Films</Link>
        <Link to="/favorites">Favorites</Link>

      </div>
    </nav>)
  }
}

export default NavBar
