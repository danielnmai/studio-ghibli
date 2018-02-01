import React from 'react';


const onClick = () => {
    console.log('clicked')
  }
const PersonInfo = ({info}) => (
  <li onClick={onClick} > { info.name }</li>
)

export default PersonInfo
