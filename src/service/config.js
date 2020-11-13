import axios from 'axios';
import { API_URL } from '../constants';

const Axios = axios.create({
	baseURL: API_URL,
	timeout: 5000,
});
const token = localStorage.getItem('token');

if (token) Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default Axios;
