import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
	baseURL: 'https://api.zamatta.kg/api/v1',
});

axiosInstance.interceptors.request.use(
	config => {
		const authToken = Cookies.get('access');

		if (authToken) {
			config.headers.authorization = `Bearer ${authToken}`;
		}

		return config;
	},
	error => Promise.reject(error)
);

export default axiosInstance;
