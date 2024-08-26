import axios from 'axios';

export const login = async (username: string, password: string) => {
  const response = await axios.post('/api/login', { username, password });
  return response.data;
};

export const logout = async () => {
  const response = await axios.post('/api/logout');
  return response.data;
};
