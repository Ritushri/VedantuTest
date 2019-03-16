import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import { persistStore, persistReducer } from 'redux-persist';
import reducer from '../redux/reducers';

const config = {
  key: 'root', // key is required
  blacklist: ['addresses', 'allCategories', 'promises', 'form', 'orderStatus'],
  storage, // storage is now required
};

const reducers = persistReducer(config, reducer);

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

  const persistor = persistStore(store);
  // persistor.purge();

  return { persistor, store };
}
