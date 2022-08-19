import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3";

const getAllCryptos = (page, perPage) => {
  return axios.get(
    `${baseUrl}/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`
  );
};

const getCrypto = (id) => {
  return axios.get(`${baseUrl}/coins/${id}?localization=false`);
};

const getExchanges = () => {
  return axios.get(`${baseUrl}/exchanges?per_page=20&page=1'`);
};

const getGlobal = () => {
  return axios.get(`${baseUrl}/global`);
};

const search = (query) => {
  return axios.get(`${baseUrl}/search?query=${query}`);
};

export default { getAllCryptos, getCrypto, getExchanges, getGlobal, search };
