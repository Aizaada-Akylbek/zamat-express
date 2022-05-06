import { Container, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../main/footer/footer';
import TrackPage from '../track-cargo/TrackPage';
import './Track.css';

const Track = () => {
	return (
		<div>
			<Container maxWidth='md' sx={{ pt: '100px', mb: '248px' }}>
				<Typography variant='h5' mb='84px' gutterBottom component='div'>
					Отследить груз
				</Typography>
				<TrackPage />
			</Container>
			<Footer />
		</div>
	);
};

export default Track;
