// fetchData.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
export const fetchData = async (endpoint) => {
    console.log(endpoint,'clientdatafounder')
  const response = await axios.get(`${API_URL}${endpoint}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
};
