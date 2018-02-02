import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import filmReducer from './filmReducer';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
  characters: characterReducer,
  films: filmReducer,
  favorites: favoriteReducer
});

export default rootReducer;
