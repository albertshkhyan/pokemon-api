/* eslint-disable no-debugger */
import { createSelector } from 'reselect';

export const stateSelector = (state: any) => {
  console.log('%c state ', 'background: #756072; color: #765034', state);

  return state.detailedPokemon;
};

export const isLoadingSelector = createSelector(
  stateSelector,
  ({ isLoading }) => ({ isLoading }),
);

export const detailedPokemonSelectoor = createSelector(
  stateSelector,
  ({ pokemonDetailed }) => ({ pokemonDetailed }),
);
