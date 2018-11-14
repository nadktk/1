import instance from '../helpers/axios-instance';

export const LOGIN_REQUEST = 'User Login Request';
export const LOGIN_SUCCESS = 'User Login Success';
export const LOGIN_FAIL = 'User Login Fail';
export const LOGOUT = 'User Logout';
export const REGISTRATION_SUCCESS = 'User Registration Success';
export const REGISTRATION_FAIL = 'User Registration Fail';


export const getUserByToken = (token) => (dispatch) => {
    instance.get('./user', { headers: {"Authorization": "Bearer " + token} })
        .then( res => {
            localStorage.setItem('user', token);
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
            localStorage.setItem('user', token);
            dispatch(getUserByToken(token));                
        })
        .catch((error) => {            
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

