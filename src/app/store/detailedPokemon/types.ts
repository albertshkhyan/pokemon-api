import { PokemonDetailed } from 'app/models/pokemon/pokemon-detailed';
import { IActionCreator } from 'app/types/action-creator';

export enum DETAILED_POKEMON_ACTION {
  ATTEMPT_TO_SET_DETAILED_POKEMON = '@pokemon/ATTEMPT_TO_SET_DETAILED_POKEMON',
  SET_DETAILED_POKEMON = '@pokemon/SET_DETAILED_POKEMON',
  IS_LOADING = '@pokemon/IS_LOADING',

}

export interface IDetailedPokemonState {
  isLoading: boolean;
  pokemonDetailed: PokemonDetailed | null;
}

export const attemptToGetPokemonByIdAction = (payload: IAttemptToGetPokemonByIdAction['payload']) => ({
  type: DETAILED_POKEMON_ACTION.ATTEMPT_TO_SET_DETAILED_POKEMON,
  payload,
});

export interface IAttemptToGetPokemonByIdAction extends IActionCreator<{pokemonId: string}> {
  type: DETAILED_POKEMON_ACTION.ATTEMPT_TO_SET_DETAILED_POKEMON;
}

export interface ISetDetailedPokemonAction extends IActionCreator<{pokemonDetailed: PokemonDetailed}> {
  type: DETAILED_POKEMON_ACTION.SET_DETAILED_POKEMON;
}

export interface ISetIsLoadingAction extends IActionCreator<{isLoading: boolean}> {
  type: DETAILED_POKEMON_ACTION.IS_LOADING;
}

export type DetailedPokemonActionPayloadType =
  | ISetIsLoadingAction
  | ISetDetailedPokemonAction
  | IAttemptToGetPokemonByIdAction;
