import React from 'react';


const onClick = () => {
    console.log('clicked')
  }
const PersonInfo = ({info}) => (
  <tr onClick={onClick}>

    <td>
      <li>
        <label>Name:</label> { info.name }
      </li>
      <li>
        <label>Gender:</label> { info.gender }
      </li>
      <li>
        <label>Age:</label> { info.age }
      </li>

      </td>
  </tr>
)

export default PersonInfo
