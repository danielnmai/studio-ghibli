import { combineReducers } from 'redux';
import peopleReducer from './fetchPeopleReducer';

const rootReducer = combineReducers({
  people: peopleReducer
});

export default rootReducer;
