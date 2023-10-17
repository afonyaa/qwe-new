import axios from 'axios';

const BACKEND_URL =
  import.meta.env.MODE === 'development'
    ? '/api/'
    : import.meta.env.VITE_BACKEND_URL;

const instance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 1000,
});

export default instance;