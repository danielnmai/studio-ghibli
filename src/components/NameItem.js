import React from 'react';
import fetchPeople from '../actions/index'


const onClick = () => {
    console.log('clicked')
  }
const NameItem = ({text}) => (

  <li onClick={onClick} > {text}</li>
)

export default NameItem
