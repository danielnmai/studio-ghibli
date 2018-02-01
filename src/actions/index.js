import axios from 'axios'

export const FETCH_ALL_PEOPLE = 'FETCH_ALL_PEOPLE'
export const FETCH_PERSON_INFO = 'FETCH_PERSON_INFO'

export const fetchAllPeople = () => {
  const url =  'https://ghibliapi.herokuapp.com/people'
  const request = axios.get(url)

  return (dispatch) => {
  request.then((data) => {
    dispatch({ type: FETCH_ALL_PEOPLE, payload: data })
  });
};
}

export const fetchCharacterInfo = () => {
  return {type: FETCH_PERSON_INFO, payload: 'person info'}
}
