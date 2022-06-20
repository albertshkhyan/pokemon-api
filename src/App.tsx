import { Layout, Image } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'app/containers/Home';
import store from 'app/store';
import { Provider } from 'react-redux';

import SinglePokemon from './app/containers/SinglePokemon/index';
import pokeapi_logo from './assets/images/pokeapi_logo.png';

import './index.css';

const { Header, Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="pokemon/:pokemonId"
                  element={<SinglePokemon />}
                />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
