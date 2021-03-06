import React from 'react';
import '../css/film.css'
import {connect} from 'react-redux'
import Item from '../../common/Item'
import Species from '../../common/Species'
import {bindActionCreators} from 'redux';
import {addFavoriteFilm} from '../../actions'

class FilmInfo extends React.Component {
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
    this.props.addFavoriteFilm(info)
  }
  renderSpecies = (info) => {
    const speciesURL = info.species.toString()
    const id = speciesURL.substr(speciesURL.lastIndexOf('/') + 1)
    return (
    <div className='row'>
      <div className='col-sm-2'>
        <strong>Species</strong>
      </div>
      <div className='col-sm-10'>
        <Species id={id} />
      </div>
    </div>
    )
  }
  renderDetailInfo = () =>{
    const { info } = this.props
    return (
      <div>
        <p>{info.description}</p>
        {this.renderSpecies(info)}
      </div>
    )
  }
  render(){
    const { info } = this.props
    console.log(this.props)
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

          <Item info={info} type={'film'} />
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
    addFavoriteFilm
  }, dispatch);
}
export default connect(null, mapDispatchToProps)(FilmInfo)
