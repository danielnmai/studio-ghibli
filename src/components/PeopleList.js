import React from 'react';
import PersonInfo from './PersonInfo'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchAllPeople, fetchPersonInfo} from '../actions'

class PeopleList extends React.Component {

  componentDidMount() {
    this.props.fetchAllPeople();
  }

  renderPersonInfo(data) {
    return <PersonInfo key={data.id} info={data}/>
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
          {people.map(data => this.renderPersonInfo(data))}
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

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)
