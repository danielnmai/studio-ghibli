import axios from 'axios'

export const FETCH_PEOPLE = 'FETCH_PEOPLE'

const fetchPeople = () => {
  const url =  'https://ghibliapi.herokuapp.com/people'
  const request = axios.get(url).then((data) => {
    console.log(data)
  })



  return (dispatch) => {
  request.then((data) => {
    dispatch({ type: FETCH_PEOPLE, payload: data })

  });
};
}

export default fetchPeople
