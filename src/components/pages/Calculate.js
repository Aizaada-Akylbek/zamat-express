import { Container, Typography } from '@mui/material';
import React from 'react';
import Calculate from '../form/tab-item';
import Footer from '../main/footer/footer';

let style = {
	background: '#fff',
	padding: '0 10px',
	boxShadow: `0px 5px 30px rgba(0, 0, 0, 0.1)`,
	borderRadius: '10px',
};
const CalculatePage = () => {
	return (
		<div>
			<Container maxWidth='lg' sx={{ pt: '100px' }}>
				<Typography variant='h5' gutterBottom component='div' mb='45px'>
					Расчитать
				</Typography>
				<div style={style}>
					<Calculate calculate={'Рассчитать'} />
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default CalculatePage;
