import { FETCH_ALL_FILMS, FETCH_FILM, FILTER_FILMS} from '../actions/index'

export default function(state = { films: null }, action) {
  switch (action.type) {
    case FETCH_FILM:
      return { ...state}
    case FILTER_FILMS:
      return {...state, filterFilms: action.payload}
    case FETCH_ALL_FILMS:
      return {...state, films: action.payload.data }
    default:
      return state
  }
}
