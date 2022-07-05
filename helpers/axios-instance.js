import Axios from 'axios';
import store from '../store';

export const axiosClient = Axios.create({
  withCredentials: true,
  baseURL: '/nox',
});

axiosClient.interceptors.request.use(function (config) {
  const { token } = store.getState().auth;
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});
