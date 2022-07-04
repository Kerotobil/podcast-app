import Axios from 'axios';

export const axiosClient = Axios.create({
  withCredentials: true,
  baseURL: '/nox',
});
