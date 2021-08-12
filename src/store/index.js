import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import movie from './movie';
import common from './common'

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['movie']
  }

  const moviePersistConfig = {
    key: 'movie',
    storage: storage,
    blacklist: ['movieList', 'movieCount']
  }

const rootReducer =  combineReducers({
    movie: persistReducer(moviePersistConfig, movie), 
    common
});

export default persistReducer(rootPersistConfig, rootReducer)