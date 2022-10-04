import axios from 'axios';


//criando base url
const url = 'http://localhost:3333';
const api =  axios.create({
	baseURL: url
});


export default api;