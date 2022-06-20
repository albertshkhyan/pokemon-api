/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
import { PokemonResponse } from 'app/models/pokemon';
import { PokemonDetailed } from 'app/models/pokemon/pokemon-detailed';
import { getPokemonApi, searchPokemonApi } from 'app/requests/pokemons';
import { IPagination } from 'app/types/RequestTypes';
import { all, takeEvery, select, put, call } from 'redux-saga/effects';

import {
  setIsLoadingAction,
  setPageCountAction,
  setPokemonAction,
  setPokemonDetailedAction,
} from './actions';
import { itemOffsetSelector, limitSelector } from './selector';
import {
  IAttemptToPokemonDetailedActionAction,
  IAttemptToSetPokemonAction,
  POKEMON_ACTION,
} from './types';

function* pokemonWorker({ payload }: Required<IAttemptToSetPokemonAction>) {
  const { itemOffset, limit } = payload;

  yield put(setIsLoadingAction({ isLoading: true }));

  const params: IPagination = {
    limit,
    offset: itemOffset,
  };

  const { results, count }: PokemonResponse = yield call(getPokemonApi, params);

  yield put(setPageCountAction({ pageCount: count }));
  yield put(setPokemonAction({ pokemon: results }));

  yield put(setIsLoadingAction({ isLoading: false }));

  try {
    yield '';
  } catch (error) {
    yield put(setIsLoadingAction({ isLoading: false }));
  }
}

function* detaildPokemonWorker({
  payload,
}: Required<IAttemptToPokemonDetailedActionAction>) {
  try {
    const { searchValue } = payload;

    const result: PokemonDetailed = yield call(searchPokemonApi, searchValue);

    yield put(setPokemonDetailedAction({ pokemonDetailed: result }));
  } catch (error) {
    yield put(setPokemonDetailedAction({ pokemonDetailed: null }));
  }
}

export default function* pokemonSaga() {
  yield all([takeEvery(POKEMON_ACTION.ATTEMPT_TO_SET_POKEMON, pokemonWorker)]);
  yield all([
    takeEvery(
      POKEMON_ACTION.ATTEMPT_TO_POKEMON_DETAILED_ACTION,
      detaildPokemonWorker,
    ),
  ]);
}
