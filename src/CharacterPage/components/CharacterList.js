import React from 'react';
import CharacterInfo from './CharacterInfo'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchAllPeople} from '../../actions'

class CharacterList extends React.Component {

  componentDidMount() {
    this.props.fetchAllPeople();
  }

  renderCharacterInfo(data) {
    return <CharacterInfo key={data.id} info={data}/>
  }

  render() {
    const {people} = this.props.people;
    if (people) {
      console.log(people)
      return (<table className="table table-hover">
        <thead>
          <tr>
            <th>
              Characters
            </th>
          </tr>
        </thead>
        <tbody>
          {people.map(data => this.renderCharacterInfo(data))}
        </tbody>
      </table>)

    }
    return <div>Loading</div>
  }

}

function mapStateToProps({people}) {
  return {people}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAllPeople
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
