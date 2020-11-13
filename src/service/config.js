import axios from 'axios';
import { API_URL } from '../constants';

const Axios = axios.create({
	baseURL: API_URL,
	timeout: 5000,
});
const token = localStorage.getItem('token');

Axios.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;
Axios.defaults.headers.common['Access-Control-Allow-Methods'] = `*`;
Axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
Axios.defaults.headers.common['Access-Control-Allow-Headers'] = `X-CSRF-Token`;

if (token) Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default Axios;
