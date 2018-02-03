import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCharacter} from '../../actions';
import Item from '../../common/Item';
import CharacterInfo from './CharacterInfo'

class CharacterDetail extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    const charInfo = this.props.fetchCharacter(id);
  }
  render() {
    const {character} = this.props.characters
    if (character) {
      return (<div className='container'>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                <div className='row'>
                  <div className='col-sm-6'>
                    <strong>Character</strong>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <CharacterInfo info={character}/>
          </tbody>
        </table>
      </div>)
    }
    return <div>Loading</div>
  }
}

function mapStateToProps({characters}) {
  return {characters}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCharacter
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
