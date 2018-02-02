import React from 'react'
import CharacterInfo from '../CharacterPage/components/CharacterInfo'
import { Link } from 'react-router-dom'


const ItemList = ({items, type, showFavorites}) => {

  const renderItem = (data) => (
    <CharacterInfo key={data.id} info={data} showFavorites={showFavorites} />
  )

  if(type === 'char') {
    return (
      <div className='container'>
        <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <div className='row'>
                <div className='col-sm-3'>
                  <strong>Characters</strong>
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


}

export default ItemList
