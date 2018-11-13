import instance from '../helpers/axios-instance';

export const LOGIN_REQUEST = '[Auth] Login Request';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';

const login = (authData) => (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST
    });
    instance.post('/login', authData)
        .then((response) => {
            const token = 'Bearer ' + response.data.token;
            instance.get('./user', {headers:{"Authorization": token}})
                .then( res => {
                    localStorage.setItem('user', '111')
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
}

export default login;

