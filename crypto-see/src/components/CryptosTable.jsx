import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, currentPrice, high24, low24, marketCap, totalVolume) {
	return { name, currentPrice, high24, low24, marketCap, totalVolume };
}

const CryptosTable = ({ data }) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="left">Name</TableCell>
						<TableCell align="right">Current Price</TableCell>
						<TableCell align="right">24h High</TableCell>
						<TableCell align="right">24h Low</TableCell>
						<TableCell align="right">Market cap</TableCell>
						<TableCell align="right">Total volume</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow
							key={row.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell align="left">{row.name}</TableCell>
							<TableCell align="right">{row.current_price}</TableCell>
							<TableCell align="right">{row.high_24h}</TableCell>
							<TableCell align="right">{row.low_24h}</TableCell>
							<TableCell align="right">{row.market_cap}</TableCell>
							<TableCell align="right">{row.total_volume}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CryptosTable;
