import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Grid, Typography } from '@mui/material';
import DataCard from '../components/DataCard';
import TopCryptos from '../components/TopCryptos';

const Home = () => {
	const [data, setData] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(
					'https://api.coingecko.com/api/v3/global'
				);
				setData(response.data.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		getData();
	}, []);

	const roundTo2Decimal = (number) => {
		const result = Math.round((number + Number.EPSILON) * 100) / 100;
		return result;
	};

	if (loading) {
		return <div>loading</div>;
	}

	return (
		<Container
			sx={{
				padding: 5,
			}}
		>
			<Typography variant="h4" textAlign="center" mb={5}>
				Global data
			</Typography>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
				mb={10}
			>
				<Grid item xs={2} sm={4} md={4}>
					<DataCard
						label="Cryptocurrencies"
						data={data.active_cryptocurrencies}
					/>
				</Grid>
				<Grid item xs={2} sm={4} md={4}>
					<DataCard label="Markets" data={data.markets} />
				</Grid>
				<Grid item xs={2} sm={4} md={4}>
					<DataCard
						label="Market cap change(24h)"
						data={`${roundTo2Decimal(
							data.market_cap_change_percentage_24h_usd
						)}%`}
					/>
				</Grid>
				<Grid item xs={2} sm={4} md={4}>
					<DataCard label="Upcoming ICOs" data={data.upcoming_icos} />
				</Grid>
				<Grid item xs={2} sm={4} md={4}>
					<DataCard label="Ongoing ICOs" data={data.ongoing_icos} />
				</Grid>

				<Grid item xs={2} sm={4} md={4}>
					<DataCard label="Ended ICOs" data={data.ended_icos} />
				</Grid>
			</Grid>
			<Box>
				<TopCryptos cryptos={data.market_cap_percentage} />
			</Box>
		</Container>
	);
};

export default Home;
