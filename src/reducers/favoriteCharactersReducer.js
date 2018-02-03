import {ADD_FAVORITE_CHARACTER} from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE_CHARACTER:
      return [...state, action.payload]
    default:
      return state
  }
}
