import { useState, useEffect } from 'react';

import { PaginationProps, Input, Layout, Image } from 'antd';

import { PokemonResults } from './app/models/pokemon';
import { getPokemonApi } from './app/requests/pokemons';
import { IPagination } from './app/types/RequestTypes';
import Pagination from './app/components/Pagination';
import PokemonList from './app/components/PokemonList';
import pokeapi_logo from './assets/images/pokeapi_logo.png';

import './index.css';

const { Search } = Input;
const { Header, Content } = Layout;

const PAGE_SIZE = 16;

const App = () => {
  const [pokemon, setPokemon] = useState<PokemonResults[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState<number>(PAGE_SIZE);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        setIsLoading(true);
        const params: IPagination = {
          limit,
          offset: itemOffset,
        };

        const { results, count } = await getPokemonApi(params);

        setPageCount(count);
        setPokemon(results);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemon();
  }, [limit, itemOffset]);

  const handlePageChange: PaginationProps['onChange'] = (page: number) => {
    const newOffset = (page - 1) * limit;
    setCurrentPage(page);
    setItemOffset(newOffset);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
      >
        <Image width={50} src={pokeapi_logo} />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          marginTop: 64,
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <div className="App">
            <h2>Pokemon api</h2>
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              loading
            />

            <PokemonList pokemon={pokemon} />

            <Pagination
              pageSize={limit}
              total={pageCount}
              current={currentPage}
              onChange={handlePageChange}
              pageSizeOptions={[5, 16, 50, 100]}
              onShowSizeChange={(_, size) => setLimit(size)}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
