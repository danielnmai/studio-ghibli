import { FETCH_ALL_CHARACTERS, FETCH_CHARACTER, FILTER_CHARACTERS } from '../actions/index'

export default function(state = { characters: null }, action) {
  switch (action.type) {
    case FETCH_CHARACTER:
      return { ...state}
    case FILTER_CHARACTERS:
      return {...state, filterCharacters: action.payload}
    case FETCH_ALL_CHARACTERS:
      return {...state, characters: action.payload.data }
    default:
      return state
  }
}
