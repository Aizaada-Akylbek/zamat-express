import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';

const HeaderItem = () => {
	return (
		<>
			<Box
				sx={{
					flexGrow: 1,
				}}>
				<Grid container spacing={0} columns={16}>
					<Grid item xs={6}></Grid>
					<Grid item xs={2}>
						<Typography variant='p' align='center' gutterBottom component='div'>
							до 1 кг.
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<Typography variant='p' align='center' gutterBottom component='div'>
							от 1 до 5 кг.
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant='p' align='center' gutterBottom component='div'>
							свыше 5 кг.
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};
export default HeaderItem;
