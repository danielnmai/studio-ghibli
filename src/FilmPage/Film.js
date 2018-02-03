import React from 'react';
import FilmList from './components/FilmList'
import SearchBar from './components/SearchBar'
import NavBar from '../common/NavBar'

export default function Character(){
  return (
    <div className='container'>
      <NavBar />
      <SearchBar />
      <FilmList />
    </div>
  )
}
