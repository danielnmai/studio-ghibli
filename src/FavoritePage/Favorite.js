import React from 'react'
import {connect} from 'react-redux'

import ItemList from '../common/ItemList'

class Favorite extends React.Component {

  favoriteCharacters = () => {
      let title = 'Your Favorite Characters'
      return (
        <ItemList title={title} items={this.props.favoriteCharacters} favoriteType='char' />
      )

  }
  favoriteFilms = () => {
      let title = 'Your Favorite Films'
      return (
        <ItemList title={title} items={this.props.favoriteFilms} favoriteType='film' />
      )
  }
  render(){
    console.log(this.props)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {this.favoriteCharacters()}
          </div>
          <div className='col'>
            {this.favoriteFilms()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({favoriteCharacters, favoriteFilms}) {
  return {favoriteCharacters, favoriteFilms}
}
export default connect(mapStateToProps)(Favorite)
