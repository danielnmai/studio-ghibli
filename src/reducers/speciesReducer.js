import { FETCH_SPECIES } from '../actions/index'

export default function(state = {species: null}, action) {
  switch (action.type) {
    case FETCH_SPECIES:
      return {...state, species: action.payload.data}
    default:
      return state
  }
}
