import instance from '../helpers/axios-instance';
import { GET_USER_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTRATION_FAIL, REGISTRATION_SUCCESS } from '../constants/action-types';

export const getUserByToken = (token) => (dispatch) => {
    dispatch({ 
        type: GET_USER_REQUEST
    })
    instance.get('./user', { headers: {"Authorization": "Bearer " + token} })
        .then( res => {
            localStorage.setItem('token', token);
            dispatch({
               type: LOGIN_SUCCESS,
               payload: res.data.login
            })
        })
        .catch( (err) => {
            console.log(err.response.data.error);           
            dispatch ({
                type: LOGIN_FAIL,
            })
        });
};

export const login = (authData) => (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST
    });
    instance.post('/login', authData)
        .then((res) => {
            const token = res.data.token;
            dispatch(getUserByToken(token));                
        })
        .catch((err) => {
            //console.log(err.response.data.error);           
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.error + '. Try again'
            })
        })
};

export const logout = () => {
    localStorage.clear();
    return {
        type: LOGOUT
    }
};

export const register = (regData) => (dispatch) => {
    instance.post('/auth', regData)
        .then((res) => {
            dispatch({
                type: REGISTRATION_SUCCESS
            });
            dispatch(login(regData));
        })
        .catch((err) => {
            const regResult = err.response.data.error;           
            dispatch({
                type: REGISTRATION_FAIL,
                payload: regResult
            });
        })
             
}

