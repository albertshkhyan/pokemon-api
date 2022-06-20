/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';

import { getPokemonByIdApi } from 'app/requests/pokemons';
import { useParams } from 'react-router-dom';
import { PokemonDetailed } from 'app/models/pokemon/pokemon-detailed';
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  detailedPokemonSelectoor,
  isLoadingSelector,
} from 'app/store/detailedPokemon/selectors';

import { attemptToGetDetailedPokemonByIdAction } from '../../store/detailedPokemon/actions';

const { Meta } = Card;

const SinglePokemon = () => {
  const dispatch = useDispatch();
  const router = useParams();
  const { pokemonId } = router;

  const { pokemonDetailed }: {pokemonDetailed: PokemonDetailed} = useSelector(detailedPokemonSelectoor);
  const { isLoading } = useSelector(isLoadingSelector);

  useEffect(() => {
    if (pokemonId) {
      dispatch(attemptToGetDetailedPokemonByIdAction({ pokemonId }));
    }
  }, [dispatch, pokemonId]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      SinglePokemon
      <h2>{pokemonDetailed?.name}</h2>
      <Card
        style={{
          width: 300,
        }}
        cover={(
          <img
            alt="pokemon_image"
            src={pokemonDetailed?.sprites.front_default}
          />
        )}
      >
        <Meta title={pokemonDetailed?.name} />
        <div>
          <h2>Abilities</h2>
          <ul>
            {pokemonDetailed?.abilities.map((ability) => (
              <li>{ability.ability.name}</li>
            ))}
            <li>{pokemonDetailed?.weight}</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default SinglePokemon;
