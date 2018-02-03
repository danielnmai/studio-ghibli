import React from 'react';
import CharacterInfo from './CharacterInfo'
import Item from '../../common/Item'
import ItemList from '../../common/ItemList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchAllCharacters} from '../../actions'
import { Link } from 'react-router-dom'
import '../css/character.css'

class CharacterList extends React.Component {

  componentDidMount() {
    this.props.fetchAllCharacters();
  }

  renderItem(data){
    let filmType = 'film', characterType = 'character'
    return (
      <tr key={data.id}>
        <td>
          <Item data={data} type={characterType} />
        </td>
      </tr>

    )
  }
  renderCharacters(chars) {
    let title = 'Characters'
      return (
        <ItemList title={title} items={chars} type={'char'} showFavorites={true} />
      )
  }

  render() {
    const {filterCharacters, characters} = this.props.characters;
    console.log(this.props)
    if(characters) {
      if(filterCharacters){
        return (
          <div>{this.renderCharacters(filterCharacters)}</div>
        )
      }
      return (
        <div>{this.renderCharacters(characters)}</div>
      )
    }
    return null
  }
}

function mapStateToProps({characters}) {
  return {characters}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAllCharacters
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
