import { FETCH_ALL_PEOPLE, FETCH_PERSON_INFO } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PERSON_INFO:
      return ['something', ...state]
    case FETCH_ALL_PEOPLE:
      return [ action.payload.data, ...state ]
    default:
      return state
  }
}
