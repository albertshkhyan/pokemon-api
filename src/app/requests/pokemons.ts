import { PokemonDetailed } from 'app/models/pokemon/pokemon-detailed';

import { PokemonResponse, PokemonResults } from '../models/pokemon';
import { http } from '../services/RequestService';
import { IPagination } from '../types/RequestTypes';

const prefix = '/pokemon';

export const getPokemonApi = async (params: IPagination | null) => {
  const response = await http.get<PokemonResponse>(prefix, { params });

  return response.data;
};

export const searchPokemonApi = async (search: PokemonResults['name']) => {
  const response = await http.get<PokemonDetailed>(`${prefix}/${search}`);

  return response.data;
};

export const getPokemonByIdApi = async (pokemonId: PokemonResults['name']) => {
  const response = await http.get<PokemonDetailed>(`${prefix}/${pokemonId}`);

  return response.data;
};
