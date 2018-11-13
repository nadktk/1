import instance from '../helpers/axios-instance';

export const LOGIN_REQUEST = '[Auth] Login Request';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const LOGOUT = 'User Logout';
export const REGISTRATION_SUCCESS = 'User Registration Success';
export const REGISTRATION_FAIL = 'User Registration Fail';

export const login = (authData) => (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST
    });
    instance.post('/login', authData)
        .then((response) => {
            const token = 'Bearer ' + response.data.token;
            instance.get('./user', {headers:{"Authorization": token}})
                .then( res => {
                    localStorage.setItem('user', JSON.stringify(res.data));
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: res.data.login
                    })
                }
                )
                .catch((error) => {
                    dispatch({
                        type: LOGIN_FAIL
                    })
                })           
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

