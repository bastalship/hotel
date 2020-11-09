import axios from 'axios';
import { API_URL } from '../constants';

const Axios = axios.create({
	baseURL: API_URL,
	timeout: 5000,
});

export default Axios;