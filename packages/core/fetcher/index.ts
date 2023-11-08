import axios from 'axios';

export const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
};
const BACKEND_URL =
  import.meta.env.MODE === 'development'
    ? '/api/'
    : import.meta.env.VITE_BACKEND_URL;

const instance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 20000,
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
