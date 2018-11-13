import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/user-actions';

let user = 'Guest';
if (localStorage.getItem("user")!=null) {
    user = JSON.parse(localStorage.getItem("user")).login;
} 
const initialState = {
    user: 'Guest',
    isAuthorized: !(user==='Guest'),
    loading: false
}

const loginReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                isAuthorized: true,
                user: action.payload
            }            
        }
        case LOGIN_FAIL: {
            return {
                ...state,
                loading: false,
                user: 'Guest',
                isAuthorized: false
            }            
        }
        case LOGOUT: {
            return {
                ...state,
                user: 'Guest',
                isAuthorized: false
            }
        }
        default: {
            return {...state};
        }
    }
}

export default loginReducer;