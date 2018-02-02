import React from 'react';
import '../css/character.css'

class CharacterInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {showDetailInfo: false}
  }
  onClick = () => {
      let currentState = this.state.showDetailInfo
      this.setState({showDetailInfo: !currentState})
    }

  addFavorite = (info) => {
    console.log('Item added!')
    console.log(info)
  }
  renderSpecies = (info) => {
    return (
    <div className='row'>
      <div className='col-sm-2'>
        <strong>Species</strong>
      </div>
      <div className='col-sm-2'>
        <a href={ info.species }>Link</a>
      </div>
    </div>
    )
  }
  renderFilms = (info) => {
    return (
    <div className='row'>
      <div className='col-sm-2'>
        <strong>Films</strong>
      </div>
      <div className='col-sm-2'>
        <a href={ info.films }>Link</a>
      </div>
    </div>
    )
  }
  renderDetailInfo = () =>{
    const { info } = this.props
    return (
      <div>
        {this.renderSpecies(info)}
        {this.renderFilms(info)}
      </div>
    )
  }
  render(){
    const styles = {
      button: {
        outline: 'none'
      }
    }
    const { info } = this.props
    const { showDetailInfo } = this.state
    return (
      <tr onClick={this.onClick}>
        <td>
          <div className='row'>
            <div className='col-sm-2'>
              <button type='button' onClick={this.addFavorite(info)} className='btn btn-sm btn-outline-info'>Add Favorite</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-2'>
              <strong>Name</strong>
            </div>
            <div className='col-sm-2'>{ info.name }</div>
          </div>
          <div className='row'>
            <div className='col-sm-2'>
              <strong>Gender</strong>
            </div>
            <div className='col-sm-2'>{ info.gender }</div>
          </div>
          <div className='row'>
            <div className='col-sm-2'>
              <strong>Age</strong>
            </div>
            <div className='col-sm-2'>{ info.age }</div>
          </div>
          <div className='row'>
            <div className='col-sm-2'>
              <strong>Eye Color</strong>
            </div>
            <div className='col-sm-2'>{ info.eye_color }</div>
          </div>
          <div className='row'>
            <div className='col-sm-2'>
              <strong>Hair Color</strong>
            </div>
            <div className='col-sm-2'>{ info.hair_color }</div>
          </div>
          <div>
            {
              showDetailInfo ? (
                this.renderDetailInfo()) : null
            }
          </div>

          </td>
      </tr>
    )
  }

}

export default CharacterInfo
