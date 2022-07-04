import { axiosClient } from './axios-instance';

export async function login(email, password) {
  const { data } = await axiosClient.post('login', { email, password });
  return data;
}
export async function search(params) {
  const { data } = await axiosClient.get('search', { params });
  return data;
}
