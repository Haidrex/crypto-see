import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import axios from 'axios';
import ExchangeCard from '../components/ExchangeCard';

const Exchanges = () => {
	const [exchanges, setExchanges] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(
					'https://api.coingecko.com/api/v3/exchanges?per_page=20&page=1'
				);
				console.log(response.data);
				setExchanges(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		getData();
	}, []);
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'row',
				gap: 2,
				flexWrap: 'wrap',
				padding: 5,
			}}
		>
			{exchanges.map((exchange) => {
				return <ExchangeCard exchange={exchange} key={exchange.id} />;
			})}
		</Container>
	);
};

export default Exchanges;
