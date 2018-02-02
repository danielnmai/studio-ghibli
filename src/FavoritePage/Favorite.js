import React from 'react'
import {connect} from 'react-redux'

import ItemList from '../common/ItemList'

class Favorite extends React.Component {

  favoriteCharacters = () => {
      let title = 'Your Favorite Characters'
      return (
        <ItemList title={title} items={this.props.favorites} type='char' />
        // <tr key={info.id} onClick={this.onClick}>
        //   <td>
        //     <div className='row'>
        //       <div className='col-sm-4'>
        //         <strong>Name</strong>
        //       </div>
        //       <div className='col-sm-4'>{ info.name }</div>
        //     </div>
        //     <div className='row'>
        //       <div className='col-sm-4'>
        //         <strong>Gender</strong>
        //       </div>
        //       <div className='col-sm-4'>{ info.gender }</div>
        //     </div>
        //     <div className='row'>
        //       <div className='col-sm-4'>
        //         <strong>Age</strong>
        //       </div>
        //       <div className='col-sm-4'>{ info.age }</div>
        //     </div>
        //     <div className='row'>
        //       <div className='col-sm-4'>
        //         <strong>Eye Color</strong>
        //       </div>
        //       <div className='col-sm-4'>{ info.eye_color }</div>
        //     </div>
        //     <div className='row'>
        //       <div className='col-sm-4'>
        //         <strong>Hair Color</strong>
        //       </div>
        //       <div className='col-sm-4'>{ info.hair_color }</div>
        //     </div>
        //     {/* <div>
        //       {
        //         showDetailInfo ? (
        //           this.renderDetailInfo()) : null
        //       }
        //     </div> */}
        //     </td>
        // </tr>

      )
    // return (
    //   <table className="table table-hover">
    //   <thead>
    //     <tr>
    //       <th>
    //         <div className='row'>
    //           <div className='col-sm-5'>
    //             <strong>Your Favorite Characters</strong>
    //           </div>
    //         </div>
    //
    //       </th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {this.props.favorites.map(data => renderCharacter(data))}
    //   </tbody>
    // </table>
    // )
  }
  favoriteFilms = () => {
    return (
      <table className="table table-hover">
      <thead>
        <tr>
          <th>
            <div className='row'>
              <div className='col-sm-5'>
                <strong>Your Favorite Films</strong>
              </div>
            </div>

          </th>
        </tr>
      </thead>
      <tbody>
        {/* {chars.map(data => this.renderCharacterInfo(data))} */}
      </tbody>
    </table>
    )
  }
  render(){
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {this.favoriteCharacters()}
          </div>
          <div className='col'>
            {this.favoriteFilms()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({favorites}) {
  return {favorites}
}
export default connect(mapStateToProps)(Favorite)
