import { FETCH_ALL_FILMS, FETCH_FILM, FILTER_FILMS} from '../actions/index'

export default function(state = { film: null, filterFilms:null, films: null }, action) {
  switch (action.type) {
    case FETCH_FILM:
      return { ...state, film: action.payload.data}
    case FILTER_FILMS:
      return {...state, filterFilms: action.payload}
    case FETCH_ALL_FILMS:
      return {...state, films: action.payload.data }
    default:
      return state
  }
}
