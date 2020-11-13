import axios from 'axios';
import { API_URL } from '../constants';

const Axios = axios.create({
	baseURL: API_URL,
	timeout: 5000,
});

Axios.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;
Axios.defaults.headers.common['Access-Control-Allow-Methods'] = `*`;
Axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
Axios.defaults.headers.common['Access-Control-Allow-Headers'] = `X-CSRF-Token`;

const getToken = async () => {
	return localStorage.getItem('token');
}


Axios.interceptors.request.use(async (config) => {
	const token = await getToken();
	// console.log('config', token);
	if (token) config.headers.Authorization = `Bearer ${token}`;
	return config;
})

export default Axios;
