import {
  DetailedPokemonActionPayloadType,
  DETAILED_POKEMON_ACTION,
  IDetailedPokemonState,
} from './types';

export const initialState: IDetailedPokemonState = {
  isLoading: true,
  pokemonDetailed: null,
};

const detailedPokemonReducer = (
  state: IDetailedPokemonState = initialState,
  action: DetailedPokemonActionPayloadType,
): IDetailedPokemonState => {
  switch (action.type) {
    case DETAILED_POKEMON_ACTION.SET_DETAILED_POKEMON: {
      const { pokemonDetailed } = action.payload;
      return {
        ...state,
        pokemonDetailed,
      };
    }

    case DETAILED_POKEMON_ACTION.IS_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading,
      };
    }

    default:
      return state;
  }
};

export default detailedPokemonReducer;
