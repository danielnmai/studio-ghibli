import React from 'react';
import '../css/character.css'
import {connect} from 'react-redux'
import Item from '../../common/Item'
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {addFavoriteCharacter} from '../../actions'

class CharacterInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {showDetailInfo: false}
  }
  onClick = () => {
      let currentState = this.state.showDetailInfo
      this.setState({showDetailInfo: !currentState})
    }

  addFavorite = (event, info) => {
    event.stopPropagation();
    console.log('Item added!')
    console.log(this.props.match.params.id);
    this.props.addFavoriteCharacter(info)
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
        {this.renderFilms(info)}
      </div>
    )
  }
  render(){
    const { info } = this.props
    const { showDetailInfo } = this.state
    return (
      <tr onClick={this.onClick}>
        <td>
          {
            this.props.showFavorites ? (
            <div className='row'>
              <div className='col-sm-2'>
                <button type='button' onClick={event => this.addFavorite(event, info)} className='btn btn-sm btn-outline-info'>Add Favorite</button>
              </div>
            </div>
          ) : null
          }

          <Item info={info} type={'character'} />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addFavoriteCharacter
  }, dispatch);
}
export default connect(null, mapDispatchToProps)(CharacterInfo)
