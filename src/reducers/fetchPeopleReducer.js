import { FETCH_ALL_PEOPLE } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_PEOPLE:
      return [ action.payload.data, ...state]
    default:
      return state
  }
}
