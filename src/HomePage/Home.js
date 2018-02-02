import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Home = () => (<div>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/characters">Characters</Link>
    </li>
    <li>
      <Link to="/films">Films</Link>
    </li>
  </ul>
</div>)

export default Home
