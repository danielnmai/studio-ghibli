import React from 'react'

const Item = ({info, type}) => {
  if(type === 'character') {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-3'>
            <strong>Name</strong>
          </div>
          <div className='col-sm-3'>{ info.name }</div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <strong>Gender</strong>
          </div>
          <div className='col-sm-3'>{ info.gender }</div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <strong>Age</strong>
          </div>
          <div className='col-sm-3'>{ info.age }</div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <strong>Eye Color</strong>
          </div>
          <div className='col-sm-3'>{ info.eye_color }</div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <strong>Hair Color</strong>
          </div>
          <div className='col-sm-3'>{ info.hair_color }</div>
        </div>
      </div>

    )
  }

  if(type === 'film') {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-3'>
            <strong>Title</strong>
          </div>
          <div className='col-sm-3'>{ info.title }</div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <strong>Director</strong>
          </div>
          <div className='col-sm-3'>{ info.director }</div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <strong>Producer</strong>
          </div>
          <div className='col-sm-3'>{ info.producer }</div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <strong>Release Date</strong>
          </div>
          <div className='col-sm-3'>{ info.release_date}</div>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <strong>Rotten Tomatoes Score</strong>
          </div>
          <div className='col-sm-3'>{ info.rt_score }</div>
        </div>
      </div>

    )
  }

}

export default Item
