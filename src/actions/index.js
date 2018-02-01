import axios from 'axios'

export const FETCH_ALL_PEOPLE = 'FETCH_ALL_PEOPLE'

export const fetchPeople = () => {
  const url =  'https://ghibliapi.herokuapp.com/people'
  const request = axios.get(url).then((data) => {
    console.log(data)
  })
  return (dispatch) => {
  request.then((data) => {
    dispatch({ type: FETCH_ALL_PEOPLE, payload: data })
  });
};
}
