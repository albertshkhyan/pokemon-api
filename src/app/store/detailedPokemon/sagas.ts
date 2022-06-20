/* eslint-disable func-style */
import { PokemonDetailed } from 'app/models/pokemon/pokemon-detailed';
import { getPokemonByIdApi } from 'app/requests/pokemons';
import { all, takeEvery, put, call } from 'redux-saga/effects';

import { setDetailedPokemonActioon, setDetailedPokemonIsLoadingActioon } from './actions';
import { DETAILED_POKEMON_ACTION, IAttemptToGetPokemonByIdAction } from './types';

function* pokemonByIdWorker({
  payload,
}: Required<IAttemptToGetPokemonByIdAction>) {
  try {
    yield put(setDetailedPokemonIsLoadingActioon({ isLoading: true }));

    const { pokemonId } = payload;
    console.log('%c ++++++ pokemonId ', 'background: #63d939; color: #462c33', pokemonId);

    const result: PokemonDetailed = yield call(getPokemonByIdApi, pokemonId);

    yield put(setDetailedPokemonActioon({ pokemonDetailed: result }));
    yield put(setDetailedPokemonIsLoadingActioon({ isLoading: false }));
  } catch (error) {
    yield put(setDetailedPokemonIsLoadingActioon({ isLoading: false }));
  }
}

export default function* pokemonSaga() {
  yield all([
    takeEvery(
      DETAILED_POKEMON_ACTION.ATTEMPT_TO_SET_DETAILED_POKEMON,
      pokemonByIdWorker,
    ),
  ]);
}
