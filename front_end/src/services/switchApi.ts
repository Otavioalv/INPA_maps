import axios from 'axios';

const URL:string = import.meta.env.VITE_API_SW_URL;
const PORT:string = import.meta.env.VITE_API_SW_PORT;

const baseUrl:string = `${URL}:${PORT}`;

const switchApi = axios.create({
    baseURL: baseUrl
});

export default switchApi;