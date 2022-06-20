import { memo } from 'react';

import { Card } from 'antd';

import { PokemonResults } from '../../models/pokemon';
import { StyledCard } from './styled';

const { Meta } = Card;

interface IPokemonItemProps {
  name: PokemonResults['name'];
  url?: PokemonResults['url'];
  handleCardClick: (pokemonId: string | null) => void;
}

const PokemonItem = ({ name, url, handleCardClick }: IPokemonItemProps) => (
  <StyledCard
    onClick={() => {
      const id = url ? url?.split('/').reverse()[1] : null;
      handleCardClick(id);
    }}
  >
    <Meta title={name} />
  </StyledCard>
);

export default memo(PokemonItem);
