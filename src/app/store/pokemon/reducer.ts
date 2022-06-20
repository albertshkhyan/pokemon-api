import {
  IPokemonState,
  PAGE_SIZE,
  PokemonActionPayloadType,
  POKEMON_ACTION,
} from './types';

export const initialState: IPokemonState = {
  isLoading: true,
  pokemon: [],
  pageCount: 0,
  itemOffset: 0,
  currentPage: 1,
  searchValue: '',
  limit: PAGE_SIZE,
  pokemonDetailed: null,
};

const pokemonReducer = (
  state: IPokemonState = initialState,
  action: PokemonActionPayloadType,
): IPokemonState => {
  switch (action.type) {
    case POKEMON_ACTION.SET_POKEMON: {
      const { pokemon } = action.payload;
      return {
        ...state,
        pokemon,
      };
    }

    case POKEMON_ACTION.SET_LIMIT: {
      const { limit } = action.payload;
      return {
        ...state,
        limit,
      };
    }

    case POKEMON_ACTION.CURRENT_PAGE: {
      const { currentPage } = action.payload;
      return {
        ...state,
        currentPage,
      };
    }

    case POKEMON_ACTION.ITEM_OFFSET: {
      const { itemOffset } = action.payload;
      return {
        ...state,
        itemOffset,
      };
    }

    case POKEMON_ACTION.SEARCH_VALUE: {
      const { searchValue } = action.payload;
      return {
        ...state,
        searchValue,
      };
    }

    case POKEMON_ACTION.PAGE_COUNT: {
      const { pageCount } = action.payload;
      return {
        ...state,
        pageCount,
      };
    }

    case POKEMON_ACTION.IS_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading,
      };
    }

    case POKEMON_ACTION.SET_POKEMON_DETAILED: {
      const { pokemonDetailed } = action.payload;
      return {
        ...state,
        pokemonDetailed,
      };
    }

    default:
      return state;
  }
};

export default pokemonReducer;
