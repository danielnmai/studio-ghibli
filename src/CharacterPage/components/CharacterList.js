import React from 'react';
import CharacterInfo from './CharacterInfo'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchAllCharacters} from '../../actions'

class CharacterList extends React.Component {

  componentDidMount() {
    this.props.fetchAllCharacters();
  }

  renderCharacterInfo(data) {
    return <CharacterInfo key={data.id} info={data}/>
  }

  renderCharacters(chars) {
      return (<table className="table table-hover">
        <thead>
          <tr>
            <th>
              Characters
            </th>
          </tr>
        </thead>
        <tbody>
          {chars.map(data => this.renderCharacterInfo(data))}
        </tbody>
      </table>)
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
