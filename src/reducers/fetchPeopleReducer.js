import { FETCH_ALL_CHARACTERS, FETCH_CHARACTER } from '../actions/index'

export default function(state = { people: null }, action) {
  switch (action.type) {
    case FETCH_CHARACTER:
      return { ...state}
    case FETCH_ALL_CHARACTERS:
      return {people: action.payload.data }
    default:
      return state
  }
}
