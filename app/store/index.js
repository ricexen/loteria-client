import { applyMiddleware, createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { AsyncStorage } from 'react-native';

export { createContainer } from './create-container';

const persistConfig = {
    transforms: [immutableTransform()],
    storage: AsyncStorage,
    key: 'root',
    whitelist: ['loteria'],
};

const reducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunk, logger));

export default store;