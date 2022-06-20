import {
  IAttemptToPokemonDetailedActionAction,
  IAttemptToSetPokemonAction,
  ICurrentPageAction,
  IIsLoadingAction,
  IItemOffsetAction,
  IPageCountAction,
  ISearchValueAction,
  ISetLimitAction,
  ISetPokemonAction,
  ISetPokemonDetailedAction,
  POKEMON_ACTION,
} from './types';

export const attemptToAttemptToSetPokemonAction = (payload: IAttemptToSetPokemonAction['payload']) => ({
  type: POKEMON_ACTION.ATTEMPT_TO_SET_POKEMON,
  payload,
});

export const attemptToPokemonDetailedAction = (payload: IAttemptToPokemonDetailedActionAction['payload']) => ({
  type: POKEMON_ACTION.ATTEMPT_TO_POKEMON_DETAILED_ACTION,
  payload,
});

export const setPokemonAction = (payload: ISetPokemonAction['payload']) => ({
  type: POKEMON_ACTION.SET_POKEMON,
  payload,
});

export const setPokemonDetailedAction = (payload: ISetPokemonDetailedAction['payload']) => ({
  type: POKEMON_ACTION.SET_POKEMON_DETAILED,
  payload,
});

export const setPageCountAction = (payload: IPageCountAction['payload']) => ({
  type: POKEMON_ACTION.PAGE_COUNT,
  payload,
});

export const setIsLoadingAction = (payload: IIsLoadingAction['payload']) => ({
  type: POKEMON_ACTION.IS_LOADING,
  payload,
});

export const setCurrentPageAction = (
  payload: ICurrentPageAction['payload'],
) => ({
  type: POKEMON_ACTION.CURRENT_PAGE,
  payload,
});

export const setItemOffsetction = (payload: IItemOffsetAction['payload']) => ({
  type: POKEMON_ACTION.ITEM_OFFSET,
  payload,
});

export const setLimitAction = (payload: ISetLimitAction['payload']) => ({
  type: POKEMON_ACTION.SET_LIMIT,
  payload,
});

export const seSearchAction = (payload: ISearchValueAction['payload']) => ({
  type: POKEMON_ACTION.SEARCH_VALUE,
  payload,
});
