import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptosTable from '../components/CryptosTable';

const Home = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(
					'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'
				);
				console.log(response.data);
				setData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		getData();
	}, []);

	return (
		<>
			<CryptosTable data={data} />
		</>
	);
};

export default Home;
