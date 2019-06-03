import axios from 'axios';

const instance = axios.create({
        baseURL:'https://adventure-app-29076.firebaseio.com/'
});

export default instance;
