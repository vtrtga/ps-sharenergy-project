import axios from 'axios';

require('dotenv');

const PORT = process.env.API_PORT || '3001';
const PROTOCOL = process.env.PROTOCOL || 'http';
const ENDPOINT = process.env.HOST || 'localhost';

const api = axios.create({
  baseURL: `${PROTOCOL}://${ENDPOINT}:${PORT}`,
  headers: {
    common: {
      Authorization: localStorage.getItem('token'),
    },
  },
});

export default api;
