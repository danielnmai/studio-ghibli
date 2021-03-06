import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchSpecies, fetchCharacter} from '../actions'

class Species extends React.Component {
  componentDidMount(){
    this.props.fetchSpecies(this.props.id)
  }

  renderCharacterList(characters){

  }
  render(){
    const { species } = this.props.species
    console.log(this.props.characters)
    if(species){

      return (
        <div>
          <div className='row'>
            <div className='col-sm-2'>
              <strong>Name</strong>
            </div>
            <div className='col-sm-2'>{ species.name }</div>
          </div>
          <div className='row'>
            <div className='col-sm-2'>
              <strong>Classification</strong>
            </div>
            <div className='col-sm-2'>{ species.classification }</div>
          </div>
          <div className='row'>
            <div className='col-sm-2'>
              <strong>Eye Colors</strong>
            </div>
            <div className='col-sm-8'>{ species.eye_colors }</div>
          </div>
        </div>
      )
    }
    return <div>Loading</div>

  }
}

function mapStateToProps({species, characters}) {
  return {species, characters}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchSpecies, fetchCharacter }, dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(Species)
