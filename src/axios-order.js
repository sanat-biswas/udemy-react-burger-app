import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-dee9a-default-rtdb.firebaseio.com/'
});

export default instance;