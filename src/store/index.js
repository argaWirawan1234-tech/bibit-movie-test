import { combineReducers } from 'redux';
import movie from './movie';
import common from './common'

export default combineReducers({
    movie, common
});