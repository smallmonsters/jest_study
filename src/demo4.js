import axios from 'axios';

export const fetchData = () => {
  return axios.get("/url").then(res => res.data)
}

export const fetchData1 = () => {
  return axios.get("/url").then(res => res.data)
}