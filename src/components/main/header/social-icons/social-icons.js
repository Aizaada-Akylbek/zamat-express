import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import './icons.css';

export default function SocialIcons() {
	return (
		<div className='social-icons'>
			<Stack
				sx={{
					mx: { xs: 2, sm: -8, md: -3 },
					my: { xs: 2, sm: 10, lg: 0 },
					cursor: 'pointer',
				}}
				direction={{ xs: 'row', sm: 'row', md: 'row', lg: 'column' }}
				spacing={{ xs: 0, sm: 1, md: 2, lg: 3 }}>
				<Avatar
					sx={{ backgroundColor: 'inherit' }}
					variant='square'
					onClick={() =>
						(window.location.href = 'https://www.instagram.com/zamat_express/')
					}>
					<InstagramIcon />
				</Avatar>
				<Avatar sx={{ backgroundColor: 'inherit' }} variant='square'>
					<FacebookIcon sx={{ color: 'inherit' }} />
				</Avatar>
				<Avatar
					variant='square'
					sx={{ backgroundColor: 'inherit' }}
					onClick={() => alert(`I'm whatsapp`)}>
					<WhatsAppIcon />
				</Avatar>
				<Avatar sx={{ backgroundColor: 'inherit' }} variant='square'>
					<TelegramIcon sx={{ backgroundColor: 'inherit' }} />
				</Avatar>
			</Stack>
		</div>
	);
}
