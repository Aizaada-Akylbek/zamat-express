import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';

const CustomTableRates = ({ text1, price, price2, text2 }) => {
	return (
		<>
			<Box
				sx={{
					flexGrow: 1,
					p: '21px  0',
					borderBottom: '1px solid #e1dcdc',
				}}>
				<Grid container spacing={0} columns={16}>
					<Grid item xs={6} sx={{ pl: '40px' }}>
						{text1.map((item, i) => (
							<>
								<div key={i}>
									<Typography variant='body1' gutterBottom component='div'>
										{item.h}
									</Typography>
									<Typography variant='caption' gutterBottom component='div'>
										{item.span}
									</Typography>
									<Typography variant='body1' gutterBottom component='div'>
										{item.adress}
									</Typography>
								</div>
							</>
						))}
					</Grid>
					<Grid item xs={2} sx={{}}>
						<Typography
							variant='body1'
							align='center'
							gutterBottom
							component='div'>
							{price}
						</Typography>
					</Grid>
					<Grid item xs={2} sx={{}}>
						<Typography
							variant='body1'
							align='center'
							gutterBottom
							component='div'>
							{price2}
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography
							p='0 72px 0'
							align='right'
							variant='body1'
							gutterBottom
							component='div'>
							{text2}
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default CustomTableRates;
