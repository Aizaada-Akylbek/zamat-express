import { Avatar, Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contacts = () => {
	return (
		<div>
			<Container maxWidth='md' sx={{ pt: '100px' }}>
				<Typography
					variant='h5'
					sx={{ mb: '45px' }}
					gutterBottom
					component='div'>
					Контакты
				</Typography>
				<Box sx={{ flexGrow: 1, mb: '44px' }}>
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<Typography variant='body1'>Наши офисы:</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography variant='body1' gutterBottom component='div'>
								Контакты
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box sx={{ flexGrow: 1, mb: '45px' }}>
					<Grid container spacing={2}>
						<Grid item xs={6} md={8}>
							<ul className='address'>
								<li>
									<Typography
										variant='subtitle2'
										gutterBottom
										fontSize='15px'
										component='div'>
										<LocationOnIcon fontSize='small' />
										г. Бишкек, ул. Оренбургская 32 (пер. М. Горького)
									</Typography>
									Чуй, Талас, Нарын, Ысык-Көл
								</li>
							</ul>
						</Grid>
						<Grid item xs={6} md={4}>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'flex-end',
								}}>
								<ul className='address'>
									<li>г.Бишкек</li>
									<li>+996 (77 1) 808 111</li>
									<li>+996 (709) 808 111</li>
									<li>+996 (997) 808 111</li>
								</ul>
							</Box>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ flexGrow: 1, mb: '45px' }}>
					<Grid container spacing={2}>
						<Grid item xs={6} md={8}>
							<ul className='address'>
								<li>
									<Typography variant='subtitle2' gutterBottom component='div'>
										<LocationOnIcon fontSize='small' />
										г. Ош, ул. Курманжан-Датка 151
									</Typography>
									Джалал-Абад, Баткен
								</li>
							</ul>
						</Grid>
						<Grid item xs={6} md={4}>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'flex-end',
								}}>
								<ul className='address'>
									<li>г. Ош:</li>
									<li>+996 (771) 808 112</li>
									<li>+996 (771) 808 112</li>
									<li>+996 (771) 808 112</li>
								</ul>
							</Box>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ width: 1, mb: '184px' }}>
					<Box display='grid' gridTemplateColumns='repeat(12, 1fr)'>
						<Box gridColumn='span 12'>
							<Typography
								variant='body1'
								gutterBottom
								sx={{ mb: '25px' }}
								component='div'>
								Email:
							</Typography>
							<ul className='address'>
								<li>
									<Avatar
										sx={{
											width: '270px',
											height: '20px',
											mb: '14px',
											backgroundColor: '#fff',
											color: '#18181880',
											borderRadius: 5,
										}}
										variant='square'
										onClick={() =>
											(window.location.href =
												'https://www.instagram.com/zamat_express/')
										}>
										<MailOutlineIcon sx={{ mr: '20px' }} />
										zamatoffice@gmail.com
									</Avatar>
								</li>
								<li>
									<Avatar
										sx={{
											width: '210px',
											height: '20px',
											backgroundColor: '#fff',
											color: '#18181880',
											borderRadius: 5,
										}}
										variant='square'
										onClick={() =>
											(window.location.href =
												'https://www.instagram.com/zamat_express/')
										}>
										<InstagramIcon sx={{ mr: '20px' }} />
										@zamat.express
									</Avatar>
								</li>
							</ul>
						</Box>
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default Contacts;
