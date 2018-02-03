import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import filmReducer from './filmReducer';
import speciesReducer from './speciesReducer';
import favoriteCharactersReducer from './favoriteCharactersReducer';
import favoriteFilmsReducer from './favoriteFilmsReducer';


const rootReducer = combineReducers({
  characters: characterReducer,
  films: filmReducer,
  favoriteCharacters: favoriteCharactersReducer,
  favoriteFilms: favoriteFilmsReducer,
  species: speciesReducer
});

export default rootReducer;
