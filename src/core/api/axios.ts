import axios, { AxiosInstance } from 'axios';

export const userServiceAxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_USER_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loanServiceAxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_LOAN_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const missionServiceAxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_MISSION_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
