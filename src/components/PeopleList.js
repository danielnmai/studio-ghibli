import React from 'react';
import PersonInfo from './PersonInfo'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchAllPeople, fetchPersonInfo } from '../actions'

class PeopleList extends React.Component {

  componentDidMount() {
    this.props.fetchAllPeople();
  }

  render() {
    console.log(this.props.people)
    return (<div>
      <PersonInfo text='John'/>
    </div>)
  }

}

function mapStateToProps({ people }) {
  return { people }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAllPeople
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)
