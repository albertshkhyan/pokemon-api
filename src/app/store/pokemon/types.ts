import { PokemonResults } from 'app/models/pokemon';
import { PokemonDetailed } from 'app/models/pokemon/pokemon-detailed';
import { IActionCreator } from 'app/types/action-creator';

export enum POKEMON_ACTION {
  ATTEMPT_TO_SET_POKEMON = '@pokemon/ATTEMPT_TO_SET_POKEMON',
  ATTEMPT_TO_POKEMON_DETAILED_ACTION = '@pokemon/ATTEMPT_TO_POKEMON_DETAILED_ACTION',
  SET_POKEMON = '@pokemon/SET_POKEMON',
  SET_POKEMON_DETAILED = '@pokemon/SET_POKEMON_DETAILED',
  IS_LOADING = '@cart/IS_LOADING',
  SET_LIMIT = '@cart/SET_LIMIT',
  PAGE_COUNT = '@cart/PAGE_COUNT',
  ITEM_OFFSET = '@cart/ITEM_OFFSET',
  CURRENT_PAGE = '@cart/CURRENT_PAGE',
  SEARCH_VALUE = '@cart/SEARCH_VALUE',
}

export const PAGE_SIZE = 16;

export interface IPokemonState {
  isLoading: boolean;
  pokemon: PokemonResults[];
  limit: number;
  pageCount: number;
  itemOffset: number;
  currentPage: number;
  searchValue: string;
  pokemonDetailed: PokemonDetailed | null;
}

export interface IAttemptToSetPokemonAction extends IActionCreator<{limit: number; itemOffset: number}> {
  type: POKEMON_ACTION.ATTEMPT_TO_SET_POKEMON;
}

export interface IAttemptToPokemonDetailedActionAction extends IActionCreator<{searchValue: string}> {
  type: POKEMON_ACTION.ATTEMPT_TO_POKEMON_DETAILED_ACTION;
}

export interface ISetPokemonAction extends IActionCreator<{pokemon: PokemonResults[]}> {
  type: POKEMON_ACTION.SET_POKEMON;
}
export interface ISetPokemonDetailedAction extends IActionCreator<{pokemonDetailed: PokemonDetailed | null}> {
  type: POKEMON_ACTION.SET_POKEMON_DETAILED;
}

export interface ISetLimitAction extends IActionCreator<{limit: number}> {
  type: POKEMON_ACTION.SET_LIMIT;
}

export interface IPageCountAction extends IActionCreator<{pageCount: number}> {
  type: POKEMON_ACTION.PAGE_COUNT;
}

export interface IItemOffsetAction extends IActionCreator<{itemOffset: number}> {
  type: POKEMON_ACTION.ITEM_OFFSET;
}

export interface ICurrentPageAction extends IActionCreator<{currentPage: number}> {
  type: POKEMON_ACTION.CURRENT_PAGE;
}

export interface ISearchValueAction extends IActionCreator<{searchValue: string}> {
  type: POKEMON_ACTION.SEARCH_VALUE;
}
export interface IIsLoadingAction extends IActionCreator<{isLoading: boolean}> {
  type: POKEMON_ACTION.IS_LOADING;
}

export type PokemonActionPayloadType =
  | ISetPokemonAction
  | ISetLimitAction
  | IPageCountAction
  | IItemOffsetAction
  | ICurrentPageAction
  | ISearchValueAction
  | IIsLoadingAction
  | ISetPokemonDetailedAction
  | IAttemptToSetPokemonAction;
