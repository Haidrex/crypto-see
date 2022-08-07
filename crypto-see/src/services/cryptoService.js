import axios from 'axios';

const baseUrl = 'https://api.coingecko.com/api/v3/';

const getAllCryptos = async () => {
	return await axios.get(
		`${baseUrl}/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false`
	);
};

export { getAllCryptos };
