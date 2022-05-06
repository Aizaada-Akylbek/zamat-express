import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import React from 'react';
import footerLogo from '../../../assets/img/Logo.svg';
import './footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<Container
				maxWidth='lg'
				component='footer'
				justifyContent='space-between'
				sx={{
					mt: 8,
					py: [8],
				}}>
				<div className='parent'>
					<Grid
						id='footer-container'
						container
						spacing={1}
						justifyContent='space-between'>
						<Grid item xs={4}>
							<span className='address-span'>Наши офисы</span>
							<ul className='address'>
								<li className='bishkek'>
									г. Бишкек, ул. Оренбургская 32 (пер. М. Горького)
								</li>
								<li className='osh'>г. Ош, ул. Курманжан-Датка 151</li>
							</ul>
							<img src={footerLogo} alt='' id='logo-footer' />
						</Grid>
						<Grid item xs={4} direction='column'>
							<span className='contacts-span'>Контакты филиалов</span>
							<Grid container spacing={2}>
								<Grid item xs={0}>
									<ul className='address'>
										<li>г.Бишкек</li>
										<li>+996 (771) 808 111</li>
										<li>+996 (709) 808 111</li>
										<li>+996 (997) 808 111</li>
									</ul>
								</Grid>
								<Grid item xs={0}>
									<ul className='address'>
										<li>г. Ош:</li>
										<li>+996 (771) 808 112</li>
										<li>+996 (771) 808 112</li>
										<li>+996 (771) 808 112</li>
									</ul>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={4}>
							<span className='social-span'>Соц.сети:</span>
							<Box
								sx={{
									ml: { xs: '0px', md: '-24px' },
								}}>
								<Stack
									sx={{
										mx: { xs: 3 },
										my: { xs: 4 },
										cursor: 'pointer',
									}}
									direction={{
										xs: 'column',
										sm: 'row',
										md: 'row',
										lg: 'row',
									}}
									spacing={{ xs: 0, sm: 1, md: 2, lg: 3 }}>
									<Avatar
										sx={{
											backgroundColor: '#fff',
											color: '#18181880',
											borderRadius: 5,
										}}
										variant='square'
										onClick={() =>
											(window.location.href =
												'https://www.instagram.com/zamat_express/')
										}>
										<InstagramIcon />
									</Avatar>
									<Avatar
										sx={{
											backgroundColor: '#fff',
											color: '#18181880',
											borderRadius: 5,
										}}
										variant='square'>
										<FacebookIcon sx={{ color: 'inherit' }} />
									</Avatar>
									<Avatar
										sx={{
											backgroundColor: '#fff',
											color: '#18181880',
											borderRadius: 5,
										}}
										variant='square'
										onClick={() => alert(`I'm whatsapp`)}>
										<WhatsAppIcon />
									</Avatar>
									<Avatar
										sx={{
											backgroundColor: '#fff',
											color: '#18181880',
											borderRadius: 5,
										}}
										variant='square'>
										<TelegramIcon />
									</Avatar>
								</Stack>
							</Box>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
