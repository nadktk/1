import instance from '../helpers/axios-instance';

const registration = (regData) => {
    instance.post('/auth', regData)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
    return {
        type: "REGISTRATION"
    }         
}

export default registration;

