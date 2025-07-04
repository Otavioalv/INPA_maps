import axios from 'axios';


const URL:string = import.meta.env.VITE_API_INFRA_URL;
const PORT:string = import.meta.env.VITE_API_INFRA_PORT;

const baseUrl:string = `${URL}:${PORT}`;

const infraApi = axios.create({
    baseURL: baseUrl
});

export default infraApi;