import axios from "axios";

const endpoint = "https://api-pub.bitfinex.com/v2/";

export const getBook = () => {
  return axios.get(`${endpoint}book/tBTCUSD/P0`).then(res => res.data);
};

export const getTicker = () => {
  return axios.get(`${endpoint}ticker/tBTCUSD`).then(res => res.data);
};

export const getTrades = () => {
  return axios.get(`${endpoint}trades/tBTCUSD/hist`).then(res => res.data);
};
