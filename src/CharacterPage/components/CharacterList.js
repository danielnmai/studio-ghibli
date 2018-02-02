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

  render() {
    const {characters} = this.props.characters;
    console.log(this.props)
    if (characters) {

      return (<table className="table table-hover">
        <thead>
          <tr>
            <th>
              Characters
            </th>
          </tr>
        </thead>
        <tbody>
          {characters.map(data => this.renderCharacterInfo(data))}
        </tbody>
      </table>)

    }
    return <div>Loading</div>
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
