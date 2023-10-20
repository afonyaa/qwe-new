import axios from 'axios';
import { getCookie } from '../../RedirectionProvider/utils/getCookie';

const BACKEND_URL =
  import.meta.env.MODE === 'development'
    ? '/api/'
    : import.meta.env.VITE_BACKEND_URL;

const instance = axios.create({
  baseURL: BACKEND_URL,
});

instance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = getCookie('Authorization');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
