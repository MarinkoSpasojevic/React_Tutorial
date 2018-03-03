import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-4e498.firebaseio.com/',
    headers: {
        auth: 'authorization token'
    }
});

export default instance;