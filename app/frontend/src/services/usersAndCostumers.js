import api from './axios';

const postMethod = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

const getMethod = async (endpoint, body = null) => {
  const { data } = await api.post(endpoint, body);

  return data;
};

export { postMethod, getMethod };
