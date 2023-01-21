import api from './axios';

const postMethod = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

const getMethod = async (endpoint, body = null) => {
  const { data } = await api.get(endpoint, body);

  return data;
};

const deleteMethod = async (endpoint) => {
  const { data } = await api.delete(endpoint); // recebe id no params

  return data;
};

const putMethod = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body); // recebe id no params

  return data;
};

export { postMethod, getMethod, deleteMethod, putMethod };
