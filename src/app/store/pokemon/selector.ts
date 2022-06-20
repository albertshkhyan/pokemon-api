/* eslint-disable no-debugger */
import { createSelector } from 'reselect';

export const stateSelector = (state: any) => {
  return state.pokemonReducer;
};

export const limitSelector = createSelector(
  stateSelector,
  ({ limit }) => ({ limit }),
);

export const pageCountSelector = createSelector(
  stateSelector,
  ({ pageCount }) => ({ pageCount }),
);

export const pokemonSelector = createSelector(
  stateSelector,
  ({ pokemon }) => ({ pokemon }),
);

export const itemOffsetSelector = createSelector(
  stateSelector,
  ({ itemOffset }) => ({ itemOffset }),
);

export const pokemonIsLoadingSelector = createSelector(
  stateSelector,
  ({ isLoading }) => ({ isLoading }),
);

export const currentPageSelector = createSelector(
  stateSelector,
  ({ currentPage }) => ({ currentPage }),
);

export const searchValueSelector = createSelector(
  stateSelector,
  ({ searchValue }) => ({ searchValue }),
);

export const pokemonDetailedSelector = createSelector(
  stateSelector,
  ({ pokemonDetailed }) => ({ pokemonDetailed }),
);
