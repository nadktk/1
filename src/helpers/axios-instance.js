import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://incode-shop.herokuapp.com'
}); 

export default instance;