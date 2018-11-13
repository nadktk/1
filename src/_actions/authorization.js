import axios from 'axios';

export const authorization = (data) => {

    console.log('authorization action', data);

    axios({
        method: 'get',
        url: 'https://incode-shop.herokuapp.com/ping',
    })
    .then( res => {
        console.log(res);
    })
    .catch( error => {
        console.log(error);
    });

    return {
        type: "AUTHORIZATION",
        payload: true
    }
}

//incode-shop.herokuapp.com/ping

