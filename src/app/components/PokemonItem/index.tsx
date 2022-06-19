import { PokemonResults } from '../../models/pokemon';

interface IPokemonItemProps {
  item: PokemonResults;
}

const PokemonItem = ({ item }: IPokemonItemProps) => {
  return (
    <div>
      <h3>PokemonItem</h3>
      <div>
        name -
        {' '}
        {item.name}
      </div>
      <div>
        url -
        {' '}
        {item.url}
      </div>
    </div>
  );
};

export default PokemonItem;
