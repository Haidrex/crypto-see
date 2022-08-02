import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Typography,
	Button,
} from '@mui/material';

const Navbar = () => {
	let navigate = useNavigate();

	const handleClick = (path) => {
		navigate({ path });
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					></IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Crypto-See
					</Typography>
					<Button color="inherit" onClick={() => handleClick('/')}>
						Coins
					</Button>
					<Button color="inherit" onClick={() => handleClick('/exchanges')}>
						Exchanges
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
