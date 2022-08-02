import React from 'react';
import { styled } from '@mui/material/styles';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';
import { rootShouldForwardProp } from '@mui/material/styles/styled';

const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
	fontWeight: 'bold',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
	'&:hover': {
		cursor: 'pointer',
		backgroundColor: theme.palette.action.hover,
	},
}));

const ExchangesTable = ({ data }) => {
	return (
		<TableContainer component={Paper} sx={{ mt: 1 }}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<StyledHeaderCell align="left">Name</StyledHeaderCell>
						<StyledHeaderCell align="right">Trust score</StyledHeaderCell>
						<StyledHeaderCell align="right">
							BTC trade volume 24H
						</StyledHeaderCell>
						<StyledHeaderCell align="right">24h Low</StyledHeaderCell>
						<StyledHeaderCell align="right">Market cap</StyledHeaderCell>
						<StyledHeaderCell align="right">Total volume</StyledHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<StyledTableRow key={row.name}>
							<TableCell align="left" sx={{ display: 'flex' }}>
								<img
									src={row.image}
									style={{ width: '20px', marginRight: '5px' }}
								/>
								{row.name}
							</TableCell>
							<TableCell align="right">{row.trust_score}</TableCell>
							<TableCell align="right">{row.trade_volume_24h_btc}</TableCell>
							<TableCell align="right"></TableCell>
							<TableCell align="right"></TableCell>
							<TableCell align="right"></TableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ExchangesTable;
