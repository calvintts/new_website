import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-portfolio-7930f.firebaseio.com/'
});

export default instance;