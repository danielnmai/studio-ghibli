import React from 'react';
import CharacterInfo from './CharacterInfo'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchAllCharacters} from '../../actions'
import '../css/character.css'

class CharacterList extends React.Component {

  componentDidMount() {
    this.props.fetchAllCharacters();
  }

  renderCharacterInfo(data) {
    return <CharacterInfo key={data.id} info={data}/>
  }

  renderCharacters(chars) {
      return (
        <div className='container'>
          <table className="table table-hover">
          <thead>
            <tr>
              <th>
                <div className='row'>
                  <div className='col-sm-2'>
                    <strong>Characters</strong>
                  </div>
                  <div className='col-sm-3'><a href='/films'>Your Favorites</a></div>
                </div>

              </th>
            </tr>
          </thead>
          <tbody>
            {chars.map(data => this.renderCharacterInfo(data))}
          </tbody>
        </table>
        </div>
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
