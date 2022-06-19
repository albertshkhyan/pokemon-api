import { PokemonResponse } from '../models/pokemon';
import { http } from '../services/RequestService';
import { IPagination } from '../types/RequestTypes';

const prefix = '/pokemon';

export const getPokemonApi = async (params: IPagination | null) => {
  console.log('%c params 777 ', 'background: #d1d15f; color: #f1865f', params);

  const response = await http.get<PokemonResponse>(prefix, { params });

  return response.data;
};
