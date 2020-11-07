import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-7c325.firebaseio.com/'
})

export default instance;