import { Container, Typography } from '@mui/material';
import React from 'react';
import Footer from '../main/footer/footer';

const Rules = () => {
	return (
		<div>
			<Container maxWidth='lg' sx={{ pt: '100px' }}>
				<Typography variant='h5' gutterBottom component='div'>
					Правила
				</Typography>
			</Container>
			<Footer />
		</div>
	);
};

export default Rules;
