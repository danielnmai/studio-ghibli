import React from 'react'
import CharacterInfo from '../CharacterPage/components/CharacterInfo'
import FilmInfo from '../FilmPage/components/FilmInfo'
import { Link } from 'react-router-dom'


const ItemList = ({title, items, favoriteType, showFavorites}) => {

  const renderItem = (data) => {
    if(title === 'Characters') {
      return (
      <CharacterInfo key={data.id} info={data} showFavorites={showFavorites} />
    )
    }

    if(title === 'Films') {
      return (
      <FilmInfo key={data.id} info={data} showFavorites={showFavorites} />
      )
    }

    if(favoriteType === 'char') {
      return (
      <CharacterInfo key={data.id} info={data} showFavorites={showFavorites} />
    )
    }

    if(favoriteType === 'film') {
      return (
      <FilmInfo key={data.id} info={data} showFavorites={showFavorites} />
    )
    }
  }
    return (
      <div className='container'>
        <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <div className='row'>
                <div className='col-sm-6'>
                  <strong>{title}</strong>
                </div>
                { showFavorites ? (
                  <div className='col-sm-3'><Link to='/favorites'>Your Favorites</Link></div>
                ) : null }
              </div>

            </th>
          </tr>
        </thead>
        <tbody>
          {items.map(data => renderItem(data))}
        </tbody>
      </table>
      </div>
    )

}

export default ItemList
