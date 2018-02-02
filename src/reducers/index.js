import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import filmReducer from './filmReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
  films: filmReducer
});

export default rootReducer;
