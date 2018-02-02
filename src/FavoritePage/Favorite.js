import React from 'react'
import {connect} from 'react-redux'

class Favorite extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.favorites)
    return (
      <div> This is your list of favorites</div>
    )
  }
}

function mapStateToProps({favorites}) {
  return {favorites}
}
export default connect(mapStateToProps)(Favorite)
