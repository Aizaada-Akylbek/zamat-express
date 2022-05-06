import axios from '../axios/intance';

const endpoints = {
	registration: data => axios.post('/users/register/', data),
	login: data => axios.post('/users/login/', data),
	refresh_token: data => axios.post('/users/token/refresh/', data),
	calculate: (width, height, length) =>
		axios.get(
			`/orders/calculate/?q=width=${width}&height=${height}&length=${length}`
		),
	get_citys: () => axios.get('/orders/get_citys/'),
	get_news: () => axios.get('/news'),
	get_Profile: () => axios.get('/users/profile/'),
	get_status: code => axios.get('/orders/get_status/', { params: { code } }),
	create_order: order => axios.post('/orders/create/', order),
	get_news_byId: id => axios.get(`/news/${id}`),
};

export default endpoints;
