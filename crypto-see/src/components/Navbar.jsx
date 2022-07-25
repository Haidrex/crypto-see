import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

const Navbar = ({ component }) => {
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
					{['Crypto', 'Nothing', 'Nothing', 'Nothing'].map((text, index) => (
						<>
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemText primary={text} sx={{ color: 'white' }} />
								</ListItemButton>
							</ListItem>
							<Divider />
						</>
					))}
				</List>
			</Drawer>
			{component}
		</Box>
	);
};

export default Navbar;
