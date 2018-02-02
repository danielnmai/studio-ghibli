import React from 'react';
import FilmList from './components/FilmList'
import SearchBar from './components/SearchBar'

export default function Character(){
  return (
    <div className='container'>
      <SearchBar />
      <FilmList />
    </div>
  )
}
