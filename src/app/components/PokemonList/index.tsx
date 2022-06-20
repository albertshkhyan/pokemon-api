import { memo } from 'react';

import { PokemonDetailed } from 'app/models/pokemon/pokemon-detailed';
import { useNavigate } from 'react-router-dom';

import { PokemonResults } from '../../models/pokemon';
import PokemonItem from '../PokemonItem';
import { StyledListItemContainer } from './styled';

interface IPokemonListProps {
  pokemon: PokemonResults[];
  pokemonDetailed?: PokemonDetailed | null;
}

const PokemonList = ({ pokemonDetailed, pokemon }: IPokemonListProps) => {
  const navigate = useNavigate();

  const handleCardClick = (pokemonId: string | null) => {
    if (pokemonId) {
      navigate(`/pokemon/${pokemonId}`);
    }
  };

  if (pokemonDetailed) {
    return (
      <PokemonItem handleCardClick={handleCardClick} name={pokemonDetailed.name} />
    );
  }

  return (
    <StyledListItemContainer>
      {pokemon.length > 0 &&
        pokemon.map((p) => <PokemonItem handleCardClick={handleCardClick} key={p.name} url={p.url} name={p.name} />)}
    </StyledListItemContainer>
  );
};

export default memo(PokemonList);
