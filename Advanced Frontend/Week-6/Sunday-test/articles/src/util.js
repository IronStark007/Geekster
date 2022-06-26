import axios from "axios";

export const newsApi = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    timeout: 10000,
    headers: {'Authorization': process.env.REACT_APP_API_KEY}
  });