import {
  DETAILED_POKEMON_ACTION,
  IAttemptToGetPokemonByIdAction,
  ISetDetailedPokemonAction,
  ISetIsLoadingAction,
} from './types';

export const attemptToGetDetailedPokemonByIdAction = (
  payload: IAttemptToGetPokemonByIdAction['payload'],
) => ({
  type: DETAILED_POKEMON_ACTION.ATTEMPT_TO_SET_DETAILED_POKEMON,
  payload,
});

export const setDetailedPokemonActioon = (
  payload: ISetDetailedPokemonAction['payload'],
) => ({
  type: DETAILED_POKEMON_ACTION.SET_DETAILED_POKEMON,
  payload,
});
export const setDetailedPokemonIsLoadingActioon = (
  payload: ISetIsLoadingAction['payload'],
) => ({
  type: DETAILED_POKEMON_ACTION.IS_LOADING,
  payload,
});
