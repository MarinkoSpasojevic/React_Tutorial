import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        headerType: 'some new header'
    }
});

export default axiosInstance;