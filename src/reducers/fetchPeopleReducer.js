import { FETCH_ALL_PEOPLE, FETCH_PERSON_INFO } from '../actions/index'

export default function(state = { people: null }, action) {
  switch (action.type) {
    case FETCH_PERSON_INFO:
      return { ...state}
    case FETCH_ALL_PEOPLE:
      return {people: action.payload.data }
    default:
      return state
  }
}
