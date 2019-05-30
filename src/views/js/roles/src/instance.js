import axios from 'axios';

const instance = axios.create({
    baseURL: `http://127.0.0.1:8000/`,
    headers: {'content-type': 'application/json', 'Accept': 'application/json',},

});
export default instance