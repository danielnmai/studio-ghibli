import {ADD_FAVORITE} from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload]
    default:
      return state
  }
}
