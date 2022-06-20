import { all } from 'redux-saga/effects';

import pokemonSaga from './pokemon/sagas';
import detailedPokemon from './detailedPokemon/sagas';

export default function* rootSaga() {
  yield all([pokemonSaga(), detailedPokemon()]);
}
