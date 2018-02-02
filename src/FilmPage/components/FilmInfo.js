import React from 'react';

const onClick = () => {
    console.log('clicked')
  }
const FilmInfo = ({info}) => (
  <tr onClick={onClick}>
    <td>
      <div className='row'>
        <div className='col-sm-4'>
          <strong>Title:</strong>
        </div>
        <div className='col-sm-4'>{ info.title }</div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <strong>Director:</strong>
        </div>
        <div className='col-sm-4'>{ info.director }</div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <strong>Producer:</strong>
        </div>
        <div className='col-sm-4'>{ info.producer }</div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <strong>Release Date:</strong>
        </div>
        <div className='col-sm-4'>{ info.release_date }</div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <strong>Rotten Tomatoes Score:</strong>
        </div>
        <div className='col-sm-4'>{ info.rt_score}</div>
      </div>
      </td>
  </tr>
)

export default FilmInfo
