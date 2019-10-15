import { combineReducers } from 'redux';
import nearby from './nearby';
import user from './user';
import general from './general';

export default combineReducers({
    nearby,
    user,
    general,
});