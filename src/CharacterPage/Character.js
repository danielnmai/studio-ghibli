import React from 'react';
import CharacterList from './components/CharacterList'
import SearchBar from './components/SearchBar'

export default function Character(){
  return (
    <div className='container'>
      <SearchBar />
      <CharacterList />
    </div>
  )
}
