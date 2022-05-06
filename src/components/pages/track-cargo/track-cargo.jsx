import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import api from '../../../services/service';
import './Track.css';

const TrackCargo = ({ setResponse, setStatusText }) => {
	const [code, setCode] = useState('');
	const [isCode, setIsCode] = useState(true);
	const checkTrack = {
		border: '1px solid red',
		borderRadius: '4px',
	};

	const setCodeTrack = e => {
		setCode(e.target.value);
	};

	const getStatus = async code => {
		const status = await api.client.get_status(code);
		setStatusText(status.data.status);

		if (status.data.status) {
			setResponse(true);
		} else {
			setResponse(false);
		}
	};

	return (
		<>
			<div>
				<Box className='dinput' sx={{ bgcolor: '#fff', mb: '65px' }}>
					<TextField
						style={isCode ? {} : checkTrack}
						label='Указать номер заказа'
						id='orderNumber '
						sx={{
							width: { xs: '250px', md: '350px' },
							m: '80px 18px 80px 47px',
							border: '2px',
						}}
						onChange={e => {
							setCodeTrack(e);
							setIsCode(true);
						}}
					/>
					<Button
						sx={{
							width: { xs: '250px', md: '350px' },
							m: {
								xs: '0 50px',
								sm: '80px 0  ',
								md: '80px  0px',
							},
							border: '2px',
							height: '52px',
							bgcolor: '#003399',
						}}
						variant='contained'
						id='tracking'
						onClick={() => {
							if (code.length < 1) {
								setIsCode(false);
							}
							getStatus(code);
						}}
						disableElevation>
						Отследить
					</Button>
				</Box>
				<input
					style={isCode ? {} : checkTrack}
					className='input-mobile'
					placeholder='Указать номер заказа'
					onChange={e => {
						setCodeTrack(e);
						setIsCode(true);
					}}></input>
				<button
					onClick={() => {
						if (code.length < 1) {
							setIsCode(false);
						} else {
							getStatus(code);
						}
					}}
					className='button-mobile'>
					Отследить
				</button>
			</div>
		</>
	);
};

export default TrackCargo;
