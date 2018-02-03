import {ADD_FAVORITE_FILM} from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE_FILM:
      return [...state, action.payload]
    default:
      return state
  }
}
