import { ThemeProvider } from '@emotion/react';
import { Container, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import React from 'react';
import '../header/header.css';
import SocialIcons from './social-icons/social-icons';

export default function Header() {
	let theme = createTheme({
		typography: {
			fontFamily: 'Montserrat',
			fontWeight: 700,
		},
	});
	theme.typography.h2 = {
		color: 'white',
		lineHeight: '66px',
		'@media (max-width:600px)': {
			fontSize: '12px',
			lineHeight: '22px',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '16px',
			lineHeight: '30px',
		},
	};
	theme.typography.h3 = {
		color: 'white',
		fontWeight: 400,
		fontSize: '16px',
		'@media (max-width:600px)': {
			fontSize: '12px',
			lineHeight: '12px',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '16px',
			lineHeight: '30px',
		},
	};

	return (
		<>
			<div className='app'>
				<Container maxWidth='lg'>
					<div className='header-text'>
						<ThemeProvider theme={theme}>
							<Typography
								sx={{
									fontSize: {
										lg: 40,
										md: 30,
									},
									lineHeight: {
										lg: '60px',
										md: '50px',
									},
									mt: { xs: 0, sm: 0, md: 20, lg: 0 },
								}}
								variant='h2'>
								Доставляем груз по всему <br /> Кыргызстану
							</Typography>
							<div className='header-p-text'>
								<Typography
									sx={{
										fontSize: {
											lg: '26px',
											md: '18px',
										},
										width: {
											lg: '454px',
											md: '350px',
											sm: '250px',
											xs: '150px',
										},
										lineHeight: {
											lg: '30px',
										},
										mt: { xs: 2 },
									}}
									variant='h3'>
									Сайт где можно отследить свой заказ. Пользоваться услугами и
									получить свой кэш-бэк. Для тех, кто ценит время.
								</Typography>
							</div>
						</ThemeProvider>
					</div>
					<div>
						<SocialIcons />
					</div>
				</Container>
			</div>
		</>
	);
}
