import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import CryptoSearch from './CryptoSearch';

const CoinsHeader = () => {
	return (
		<Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Typography variant="h5" fontWeight="bold">
				Cryptocurrency prices by Market cap
			</Typography>
			<Box>
				<CryptoSearch />
			</Box>
		</Container>
	);
};

export default CoinsHeader;
