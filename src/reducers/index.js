import {combineReducers} from 'redux';
import login from './login';
import username from './username';

const rootReducer = combineReducers({
    authorized: login,
    username: username
});

export default rootReducer;