import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActionArea
} from '@mui/material';

const ExchangeCard = ({ exchange }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					sx={{ width: '60px' }}
					component="img"
					image={exchange.image}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{exchange.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ExchangeCard;
