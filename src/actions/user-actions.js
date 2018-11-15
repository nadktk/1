import instance from '../helpers/axios-instance';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTRATION_FAIL, REGISTRATION_SUCCESS } from '../constants/action-types';

export const getUserByToken = (token) => (dispatch) => {
    instance.get('./user', { headers: {"Authorization": "Bearer " + token} })
        .then( res => {
            localStorage.setItem('token', token);
            dispatch({
               type: LOGIN_SUCCESS,
               payload: res.data.login
            })
        })
        .catch( (err) => {
            console.log(err);
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
            console.log(err);           
            dispatch({
                type: LOGIN_FAIL
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
            console.log(res);
            dispatch({
                type: REGISTRATION_SUCCESS
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: REGISTRATION_FAIL
            });
        })
             
}

