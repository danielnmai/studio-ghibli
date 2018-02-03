import React from 'react';
import CharacterList from './components/CharacterList'
import SearchBar from './components/SearchBar'
import NavBar from '../common/NavBar'

export default function Character(){
  return (
    <div className='container'>
      <NavBar />
      <SearchBar />
      <CharacterList />
    </div>
  )
}
