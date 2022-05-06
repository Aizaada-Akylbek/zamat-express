import { Box, Typography } from '@mui/material';
import React from 'react';

const RatesFooter = () => {
	return (
		<div>
			<Box sx={{ maxWidth: '400px' }}>
				<Box component='div' sx={{}}>
					<Typography variant='body1' gutterBottom mb='14px' component='div'>
						*Для крупногабаритных и хрупких товаров доставка обговаривается
						отдельно.
					</Typography>
					<Typography variant='body1' gutterBottom component='div'>
						*До 1 кг. (конверты, письма)
					</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default RatesFooter;
