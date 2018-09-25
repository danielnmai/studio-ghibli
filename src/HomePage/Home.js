import React from 'react'
import {Link} from 'react-router-dom'
import Test from '../TestPage/test'

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
  <Test />
</div>)

export default Home
