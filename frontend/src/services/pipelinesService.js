import axios from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.API_URL || 'http://localhost:3001/' });

const parse = ({ nodes, edges }) =>
  axiosInstance.post('/pipelines/parse', {nodes, edges})
    .then(r => r.data)

const service = { parse }

export default service;
