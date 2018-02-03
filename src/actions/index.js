import axios from 'axios'

export const FETCH_ALL_CHARACTERS = 'FETCH_ALL_CHARACTERS'
export const FETCH_CHARACTER = 'FETCH_CHARACTER'
export const FILTER_CHARACTERS = 'FILTER_CHARACTERS'
export const FILTER_FILMS = 'FILTER_FILMS'
export const FETCH_ALL_FILMS = 'FETCH_ALL_FILMS'
export const FETCH_FILM = 'FETCH_FILM'
export const ADD_FAVORITE_CHARACTER = 'ADD_FAVORITE_CHARACTER'
export const ADD_FAVORITE_FILM = 'ADD_FAVORITE_FILM'

const ROOT_URL = 'https://ghibliapi.herokuapp.com'

export const fetchAllCharacters = () => {
  const url =  `${ROOT_URL}/people`
  const request = axios.get(url)

  return (dispatch) => {
  request.then((data) => {
    dispatch({ type: FETCH_ALL_CHARACTERS, payload: data })
  });
};
}

export const fetchCharacter = (characterId) => {
  const url =  `${ROOT_URL}/people/${characterId}`
  const request = axios.get(url)

  return (dispatch) => {
  request.then((data) => {
    console.log(data);
    dispatch({ type: FETCH_CHARACTER, payload: data })
  });
};
}

export const filterCharacters = (characters) => {
  return {type: FILTER_CHARACTERS, payload: characters}
}


export const fetchAllFilms = () => {
  const url =  `${ROOT_URL}/films`
  const request = axios.get(url)

  return (dispatch) => {
  request.then((data) => {
    dispatch({ type: FETCH_ALL_FILMS, payload: data })
  });
};
}

export const fetchFilm = (filmId) => {
  const url =  `${ROOT_URL}/films/${filmId}`
  const request = axios.get(url)

  return (dispatch) => {
  request.then((data) => {
    dispatch({ type: FETCH_FILM, payload: data })
  });
};
}

export const filterFilms = (films) => {
  return {type: FILTER_FILMS, payload: films}
}


export const addFavoriteCharacter = (item) => {
  return {type: ADD_FAVORITE_CHARACTER, payload: item}
}
export const addFavoriteFilm = (item) => {
  return {type: ADD_FAVORITE_FILM, payload: item}
}
