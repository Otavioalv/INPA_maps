import axios from 'axios';

// const URL:string = import.meta.env.VITE_API_SW_URL;
// const PORT:string = import.meta.env.VITE_API_SW_PORT;

// const baseUrl:string = `${URL}:${PORT}`;

// url caso o server seja DHCP
const baseUrl:string =  `${window.location.protocol}//${window.location.hostname}:5000`;
// console.log("BASE URL: ", baseUrl)

const switchApi = axios.create({
    baseURL: baseUrl
});

export default switchApi;