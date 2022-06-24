import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dummyapi.io/data/v1/',
    timeout: 10000,
    headers: {'app-id': process.env.REACT_APP_API_ACCESS_KEY}
  });