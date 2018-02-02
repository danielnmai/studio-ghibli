import React from 'react';

const onClick = () => {
    console.log('clicked')
  }
const CharacterInfo = ({info}) => (
  <tr onClick={onClick}>
    <td>
      <div className='row'>
        <div className='col-sm-2'>
          <strong>Name:</strong>
        </div>
        <div className='col-sm-2'>{ info.name }</div>
      </div>
      <div className='row'>
        <div className='col-sm-2'>
          <strong>Gender:</strong>
        </div>
        <div className='col-sm-2'>{ info.gender }</div>
      </div>
      <div className='row'>
        <div className='col-sm-2'>
          <strong>Age:</strong>
        </div>
        <div className='col-sm-2'>{ info.age }</div>
      </div>
      <div className='row'>
        <div className='col-sm-2'>
          <strong>Eye Color:</strong>
        </div>
        <div className='col-sm-2'>{ info.eye_color }</div>
      </div>
      </td>
  </tr>
)

export default CharacterInfo
