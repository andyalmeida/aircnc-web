import axios from 'axios';

const api = axios.create({
    baseURL: "https://aircnc-api.herokuapp.com/" 
});

export default api;