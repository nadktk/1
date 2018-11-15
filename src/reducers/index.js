import { combineReducers } from 'redux';
import loginReducer from './login-reducer';
import regReducer from './reg-reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    registration: regReducer
})

export default rootReducer;