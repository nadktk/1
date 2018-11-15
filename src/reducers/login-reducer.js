import { GET_USER_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../constants/action-types';

const initialState = {
    user: 'Guest',
    isAuthorized: false,
    loading: false,
    isAuthorizing: false,
    error: null
}

const loginReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case GET_USER_REQUEST: {
            return {
                ...state,
                isAuthorizing: true
            }
        }
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
                isAuthorizing: false,
                user: action.payload,
                error: null
            }            
        }
        case LOGIN_FAIL: {
            return {
                ...state,
                loading: false,
                user: 'Guest',
                isAuthorized: false,
                error: action.payload
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