import { FETCH_PEOPLE } from '../actions/index'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return  { people: [action.payload.data] }
    default:
      return {people: []}
  }
}
