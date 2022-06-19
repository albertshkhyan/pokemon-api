import { memo } from 'react';

import { PokemonResults } from '../../models/pokemon';
import PokemonItem from '../PokemonItem';

interface IPokemonListProps {
  pokemon: PokemonResults[];
}

const PokemonList = ({ pokemon }: IPokemonListProps) => {
  return (
    <div>
      {pokemon.length > 0 &&
        pokemon.map((p) => <PokemonItem item={p} />)}
    </div>
  );
};

export default memo(PokemonList);
