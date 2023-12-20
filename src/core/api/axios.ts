import axios, { AxiosInstance } from 'axios';

export const pocketMoneyServiceAxiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
