export interface PokemonResults {
  name: string;
  url?: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous?: any;
  results: PokemonResults[];
}
