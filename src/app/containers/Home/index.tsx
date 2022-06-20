import { ChangeEventHandler, useCallback, useEffect, useMemo } from 'react';

import { Input, PaginationProps, Spin } from 'antd';
import debouce from 'lodash/debounce';
import PokemonList from 'app/components/PokemonList';
import Pagination from 'app/components/Pagination';
import {
  attemptToAttemptToSetPokemonAction,
  attemptToPokemonDetailedAction,
  seSearchAction,
  setCurrentPageAction,
  setItemOffsetction,
  setLimitAction,
  setPokemonDetailedAction,
} from 'app/store/pokemon/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  currentPageSelector,
  limitSelector,
  pageCountSelector,
  pokemonDetailedSelector,
  pokemonIsLoadingSelector,
  pokemonSelector,
  searchValueSelector,
} from 'app/store/pokemon/selector';

import { itemOffsetSelector } from '../../store/pokemon/selector';

const Home = () => {
  const dispatch = useDispatch();

  const { pokemon } = useSelector(pokemonSelector);
  const { isLoading } = useSelector(pokemonIsLoadingSelector);
  const { limit } = useSelector(limitSelector);
  const { pageCount } = useSelector(pageCountSelector);
  const { currentPage } = useSelector(currentPageSelector);
  const { itemOffset } = useSelector(itemOffsetSelector);
  const { searchValue } = useSelector(searchValueSelector);
  const { pokemonDetailed } = useSelector(pokemonDetailedSelector);

  const handlePageChange: PaginationProps['onChange'] = (page: number) => {
    const newOffset = (page - 1) * limit;
    dispatch(setCurrentPageAction({ currentPage: page }));
    dispatch(setItemOffsetction({ itemOffset: newOffset }));
  };

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    dispatch(seSearchAction({ searchValue: e.target.value }));
  }, [dispatch]);

  const debouncedResults = useMemo(() => {
    return debouce(handleSearchChange, 1000);
  }, [handleSearchChange]);

  useEffect(() => {
    if (searchValue.length >= 3) {
      dispatch(attemptToPokemonDetailedAction({ searchValue }));
      return;
    }

    dispatch(setPokemonDetailedAction({ pokemonDetailed: null }));
  }, [dispatch, searchValue]);

  useEffect(() => {
    dispatch(attemptToAttemptToSetPokemonAction({ itemOffset, limit }));
  }, [dispatch, itemOffset, limit]);

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div className="Home">
      <h2>Pokemon api</h2>
      <Input
        style={{ marginBottom: '20px' }}
        placeholder="Enter pokemon name"
        size="large"
        onChange={debouncedResults}
      />

      <PokemonList
        pokemonDetailed={pokemonDetailed}
        pokemon={pokemon}
      />

      {!pokemonDetailed && (
      <Pagination
        pageSize={limit}
        total={pageCount}
        current={currentPage}
        onChange={handlePageChange}
        pageSizeOptions={[5, 16, 50, 100]}
        onShowSizeChange={(_, size) => dispatch(setLimitAction({ limit: size }))}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`}
      />
      )}
    </div>
  );
};

export default Home;
