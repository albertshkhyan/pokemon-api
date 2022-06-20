import { combineReducers } from 'redux';

import pokemonReducer from './pokemon/reducer';
import detailedPokemon from './detailedPokemon/reducer';

export default combineReducers({ pokemonReducer, detailedPokemon });
