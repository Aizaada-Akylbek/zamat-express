import { Container, Typography } from '@mui/material';
import React from 'react';
import Footer from '../main/footer/footer';
import UserRoomTabs from './user-room/user-room';

const Profile = () => {
	return (
		<>
			<Container maxWidth='md' sx={{ mt: '100px', mb: '300px' }}>
				<Typography variant='h5' gutterBottom component='div'>
					Личный кабинет
				</Typography>
				<UserRoomTabs />
			</Container>
			<Footer />
		</>
	);
};

export default Profile;
