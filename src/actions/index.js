import axios from 'axios'

export const FETCH_ALL_CHARACTERS = 'FETCH_ALL_CHARACTERS'
export const FETCH_CHARACTER = 'FETCH_CHARACTER'

export const fetchAllPeople = () => {
  const url =  'https://ghibliapi.herokuapp.com/people'
  const request = axios.get(url)

  return (dispatch) => {
  request.then((data) => {
    dispatch({ type: FETCH_ALL_CHARACTERS, payload: data })
  });
};
}

export const fetchCharacterInfo = () => {
  return {type: FETCH_CHARACTER, payload: 'person info'}
}
