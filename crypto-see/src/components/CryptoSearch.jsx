import React from 'react';
import { TextField, Autocomplete, Stack, Button } from '@mui/material';

const CryptoSearch = () => {
	return (
		<Stack direction="row" spacing={1}>
			<TextField id="outlined-basic" label="Search crypto" variant="outlined" />
			<Button variant="contained">Search</Button>
		</Stack>
	);
};

export default CryptoSearch;
