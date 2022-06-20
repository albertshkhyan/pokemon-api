import createStore from './creatStore';
import rootReducer from './rootReducers';
import rootSaga from './rootSaga';

export default createStore({ reducer: rootReducer, sagas: rootSaga });
