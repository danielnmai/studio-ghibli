import { FETCH_ALL_FILMS, FETCH_FILM} from '../actions/index'

export default function(state = { films: null }, action) {
  switch (action.type) {
    case FETCH_FILM:
      return { ...state}
    case FETCH_ALL_FILMS:
      return {...state, films: action.payload.data }
    default:
      return state
  }
}
