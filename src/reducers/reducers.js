import {combineReducers} from 'redux';
import UsernameReducer from './username';

const reducers = combineReducers({
    username: UsernameReducer
});

export default reducers;