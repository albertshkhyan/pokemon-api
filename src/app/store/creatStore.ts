import { applyMiddleware, compose, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

type ICreateStore = {
  reducer: any;
  sagas: any;
  middlewares?: any;
};

export default ({ reducer, sagas, middlewares = [] }: ICreateStore): Store => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  /**
   * @returns {Array} - middleware
   */
  const switchMode = () => {
    if (process.env.NODE_ENV === 'development') {
      return [sagaMiddleware, ...middlewares];
    }

    return [sagaMiddleware, ...middlewares];
  };

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...switchMode())),
  );

  sagaMiddleware.run(sagas);

  return store;
};
