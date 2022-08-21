import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { dateFormatter } from '../utils/formatter';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const CryptoChart = ({ chartDays }) => {
	const { id } = useParams();

	const [data, setData] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getData() {
			try {
				const interval = chartDays == 1 ? 'hourly' : 'daily';
				const response = await axios.get(
					`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${chartDays}&interval=${interval}`
				);
				const arrObjects = await response.data.prices.map((price) => ({
					time: dateFormatter(price[0]),
					Price: price[1],
				}));

				setData(arrObjects);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		getData();
	}, [chartDays]);

	if (loading) {
		return <div>Loading</div>;
	}

	return (
		<ResponsiveContainer width="100%" height={400}>
			<LineChart
				width={1000}
				height={400}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="time" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					dataKey="Price"
					stroke="#8884d8"
					dot={false}
					activeDot={{ r: 5 }}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default CryptoChart;
