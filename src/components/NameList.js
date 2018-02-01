import React from 'react';
import NameItem from './NameItem'
import {connect} from 'react-redux'
import { fetchPeople } from '../actions'

class NameList extends React.Component {

  componentDidMount() {
    fetchPeople();
  }

  render() {
    const { people } = this.props
    return (
      people.map(person => {
        <div>
        <NameItem text='John'/>
        </div>
      })
    )
  }

}

function mapStateToProps({people}) {
  return {people}
}

export default connect(mapStateToProps)(NameList)
