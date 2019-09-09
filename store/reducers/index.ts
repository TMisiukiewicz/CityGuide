import { combineReducers } from 'redux';
import nearby from './nearby';
import user from './user';

export default combineReducers({
    nearby,
    user
});