import { combineReducers } from 'redux';
import login from './login-reducer';
import userReducer from './user-reducer';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
 
const rootReducer = combineReducers({
    authorized: login,
    username: userReducer
});

export default rootReducer;