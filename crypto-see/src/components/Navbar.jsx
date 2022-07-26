import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Box,
	Drawer,
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';

const drawerWidth = 240;

const Navbar = ({ component }) => {
	const navigate = useNavigate();

	const handleClick = (path) => {
		navigate({ path });
	};
	return (
		<Box sx={{ display: 'flex' }}>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						backgroundColor: 'primary.main',
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<List>
					<ListItem key="home" disablePadding>
						<ListItemButton onClick={() => handleClick('/')}>
							<ListItemText primary="Coins" sx={{ color: 'white' }} />
						</ListItemButton>
					</ListItem>
					<Divider />
					<ListItem key="exchanges" disablePadding>
						<ListItemButton onClick={() => handleClick('/exchanges')}>
							<ListItemText primary="Exchanges" sx={{ color: 'white' }} />
						</ListItemButton>
					</ListItem>
					<Divider />
				</List>
			</Drawer>
			{component}
		</Box>
	);
};

export default Navbar;
