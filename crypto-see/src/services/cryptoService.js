import axios from "axios";

const baseUrl = "https://api.coingecko.com/api/v3";

const getAllCryptos = () => {
  return axios.get(
    `${baseUrl}/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false`
  );
};

const getCrypto = (id) => {
  return axios.get(`${baseUrl}/coins/${id}?localization=false`);
};

const getExchanges = () => {
  return axios.get(`${baseUrl}/exchanges?per_page=20&page=1'`);
};

export default { getAllCryptos, getCrypto, getExchanges };
