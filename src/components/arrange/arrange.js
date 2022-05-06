import { Button, Container, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import miniBalance from '../../assets/img/miniBalance.svg';
import miniElsom from '../../assets/img/miniElsom.svg';
import miniMbank from '../../assets/img/miniMbank.svg';
import miniOdengi from '../../assets/img/miniOdengi.svg';
import miniVisa from '../../assets/img/miniVisa.svg';
import api from '../../services/service';
import Footer from '../main/footer/footer';
import './payment-arrenge.css';
import useData from '../../hooks/useData/index';

export default function Arrange() {
	const auth = useData();
	const navigate = useNavigate();

	const user = auth.user ? JSON.parse(auth.user) : null;

	const getOrder = JSON.parse(localStorage.getItem('order'));

	const createOrder = async () => {
		const order = {
			user: user.id,
			cost: Math.floor(getOrder.cost),
			recipient_address: getOrder.from_city,
			recipient_name: 'Alatte biroo',
			recipient_phone: '0555 55 88 66',
			sender_address: getOrder.to_city,
			sender_name: 'Biroo',
			sender_phone: '0588 55 55 55',
		};
		await api.client.create_order(order);
		navigate('/');
	};

	return (
		<>
			<Container maxWidth='lg' sx={{ mt: '100px', mb: '200px' }}>
				<Typography variant='h5' sx={{ mb: '45px' }}>
					Оформить отправление
				</Typography>
				<div className='wrap_box'>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							pt: '20px',
						}}>
						<div className='box1'>
							<Box
								sx={{
									bgcolor: '#fff',
									padding: '25px 15px',
									boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.05)',
									borderRadius: '10px',
									width: { xs: '400px', md: '520px' }, //'520px'
									height: '600px',
									lineHeight: '50px',
									position: 'relative',
								}}>
								<Typography sx={{ mb: '0px', pt: '0px' }} variant='h5'>
									Ваш расчет
								</Typography>

								<Grid
									Grid
									container
									spacing={{ xs: 2, md: 4 }}
									columns={{ xs: 4, sm: 8, md: 12 }}
									sx={{ mb: '20px' }}>
									<Grid item xs={0} sm={4} md={6}>
										<div className='left-elements'>
											<Typography
												align='left'
												variant='span'
												gutterBottom
												component='div'>
												Откуда:
											</Typography>
											<Typography
												align='left'
												variant='span'
												gutterBottom
												component='div'>
												Куда:
											</Typography>
											<Typography
												align='left'
												variant='span'
												gutterBottom
												component='div'>
												Груз:
											</Typography>
											<Typography
												align='left'
												variant='span'
												gutterBottom
												component='div'>
												Доставка:
											</Typography>
											<Typography
												align='left'
												variant='span'
												gutterBottom
												component='div'>
												Срок доставки:
											</Typography>
										</div>
									</Grid>
									<Grid item xs={0} sm={4} md={6}>
										<div className='right-elements'>
											<Typography
												align='right'
												variant='span'
												gutterBottom
												component='div'>
												г. {getOrder.from_city}
											</Typography>
											<Typography
												align='right'
												variant='span'
												gutterBottom
												component='div'>
												г. {getOrder.to_city}
											</Typography>
											<Typography
												align='right'
												variant='span'
												gutterBottom
												component='div'>
												{/* 35 * 35 * 5 до 2 кг */}
												{`${getOrder.width}${getOrder.height}${getOrder.length}`}
											</Typography>
											<Typography
												align='right'
												variant='span'
												gutterBottom
												component='div'>
												250 сом
											</Typography>
											<Typography
												align='right'
												variant='span'
												gutterBottom
												component='div'>
												1 - 2 рабочих дней
											</Typography>
										</div>
									</Grid>
								</Grid>
								<Box sx={{ mb: '15px' }}>
									<hr />
								</Box>

								<Grid
									Grid
									container
									spacing={{ xs: 2, md: 4 }}
									columns={{ xs: 4, sm: 8, md: 12 }}>
									<Grid item xs={0} sm={4} md={6}>
										<Typography
											fontSize={'25px'}
											align='left'
											variant='h5'
											gutterBottom
											component='div'>
											Итого:
										</Typography>
									</Grid>
									<Grid item xs={0} sm={4} md={6}>
										<Typography
											fontSize={'25px'}
											align='right'
											variant='h5'
											gutterBottom
											component='div'>
											{Math.floor(getOrder.cost)}c
										</Typography>
									</Grid>
								</Grid>
								<Typography
									align='center'
									onClick={() =>
										user ? createOrder() : alert('User Not Found')
									}
									sx={{ pt: '35px', cursor: 'pointer' }}>
									<Button
										sx={{
											bgcolor: '#003399',
											color: '#fff',
											pointerEvents: 'none',
											width: '340px',
											height: '40px',
										}}
										variant='outlined'>
										Оформить
									</Button>
								</Typography>
							</Box>
							<Box>
								<div className='parents'>
									<Grid item xs={2} sm={4} md={6}>
										<Stack direction='row' spacing={4}>
											<div className='child'>
												<Typography variant='h5' sx={{ p: '20px' }}>
													Способы оплаты:
												</Typography>
												<img src={miniMbank} alt='alt' />
												<img src={miniBalance} alt='alt' />
												<img src={miniOdengi} alt='alt' />
												<img src={miniElsom} alt='alt' />
												<img src={miniVisa} alt='alt' />
											</div>
										</Stack>
									</Grid>
								</div>
							</Box>
						</div>
					</Box>
				</div>
			</Container>
			<Footer />
		</>
	);
}
