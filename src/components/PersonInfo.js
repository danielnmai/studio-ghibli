import React from 'react';


const onClick = () => {
    console.log('clicked')
  }
const PersonInfo = ({text}) => (

  <li onClick={onClick} > {text}</li>
)

export default PersonInfo
