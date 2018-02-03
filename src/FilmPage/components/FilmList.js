import React from 'react';
import FilmInfo from './FilmInfo'
import Item from '../../common/Item'
import ItemList from '../../common/ItemList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchAllFilms} from '../../actions'
import { Link } from 'react-router-dom'
import '../css/film.css'

class FilmList extends React.Component {

  componentDidMount() {
    this.props.fetchAllFilms();
  }

  renderItem(data){
    let filmType = 'film'
    return (
      <tr key={data.id}>
        <td>
          <Item data={data} type={filmType} />
        </td>
      </tr>

    )
  }
  renderFilms(films) {
    let title = 'Films'
      return (
        <ItemList title={title} items={films} showFavorites={true} />
      )
  }

  render() {
    const {filterFilms, films} = this.props.films;
    if(films) {
      if(filterFilms){
        return (
          <div>{this.renderFilms(filterFilms)}</div>
        )
      }
      return (
        <div>{this.renderFilms(films)}</div>
      )
    }
    return null
  }
}

function mapStateToProps({films}) {
  return {films}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAllFilms
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmList)
