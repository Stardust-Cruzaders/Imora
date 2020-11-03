import axios from 'axios';

const api = axios.create({
  baseURL: 'https://imora-rest-api.herokuapp.com',
  //Localhost: 'http://192.168.15.14:3333',
});
export default api;
