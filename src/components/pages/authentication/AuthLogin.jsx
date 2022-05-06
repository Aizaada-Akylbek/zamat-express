import { Box, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useData from '../../../hooks/useData/index';
import api from '../../../services/service';

const style = {
	position: 'absolute',
	alignItems: 'center',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	borderRadius: '10px',
	bgcolor: '#fff',
	border: 'none',
	boxShadow: 14,
};

const center = {
	margin: '0 auto',
};

const Authlogin = ({ handleCloseModal }) => {
	const inputError = {
		border: '1px solid red',
		borderRadius: '4px',
	};

	const [errEmail, setErrEmail] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);
	const [isLogin, setIsLogin] = React.useState(true);
	const [isPass, setIsPass] = React.useState(true);
	const auth = useData();
	const navigate = useNavigate();

	const handleModalClose = () => {
		handleCloseModal();
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({});

	const onSubmit = async data => {
		if (data.email === '') {
			setIsLogin(false);
		} else {
			setIsLogin(true);
		}
		if (data.password === '') {
			setIsPass(false);
		} else {
			setIsPass(true);
		}
		try {
			setIsLoading(true);
			const { data: loginData } = await api.client.login(data);
			auth.setUserName(JSON.stringify(loginData.user));
			auth.setToken(loginData.access);
			navigate('/');
			handleModalClose();
		} catch (e) {
			if (e.response.status === 401) {
				setErrEmail('No active account found with the given credentials');
				console.error(e);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<Box
				style={style}
				sx={{
					bgcolor: { xs: '#fff', md: '#fff' },
					width: { xs: '250px', sm: '416px' },
				}}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Typography
						id='modal-modal-title'
						align='center'
						variant='h6'
						mt='38px'
						mb='10px'
						component='h2'>
						Вход
					</Typography>
					<Typography
						id='modal-modal-title'
						variant='p'
						align='center'
						sx={{ mb: { xs: '12px', md: '33px' } }}
						component='p'>
						в личный кабинет
					</Typography>
					<Box
						style={center}
						sx={{
							width: { xs: '180px', sm: '326px' },
						}}>
						<Box
							sx={{
								width: {
									xs: '180px',
									sm: '256px',
									md: '326px',
								},
								mb: { xs: '15px', md: '45px' },
								mx: { xs: 'auto' },
							}}>
							<FormControl
								sx={{
									bgcolor: '#f8f8f8',
									width: {
										xs: '180px',
										sm: '266px',
										md: '326px',
										lg: '326px',
									},
									mb: '45px',
								}}
								variant='outlined'>
								<Controller
									name='email'
									control={control}
									defaultValue=''
									render={({ field }) => (
										<TextField
											style={isLogin ? {} : inputError}
											{...field}
											error={Boolean(errors.email?.message)}
											fullWidth={true}
											type='email'
											placeholder='email'
											label='Email'
											variant='outlined'
											helperText={errors.email?.message}
										/>
									)}
								/>
							</FormControl>
							<FormControl
								sx={{
									bgcolor: '#f8f8f8',
									width: {
										xs: '180px',
										sm: '266px',
										md: '326px',
										lg: '326px',
									},
								}}
								variant='outlined'>
								<Controller
									name='password'
									control={control}
									defaultValue=''
									render={({ field }) => (
										<TextField
											style={isPass ? {} : inputError}
											{...field}
											error={Boolean(errors.password?.message)}
											type='password'
											fullWidth={true}
											label='Password'
											variant='outlined'
											helperText={errors.password?.message}
										/>
									)}
								/>
							</FormControl>
							<span style={{ color: 'red', margin: '0 auto' }}>{errEmail}</span>
						</Box>
					</Box>
					<Box
						style={center}
						sx={{
							width: { xs: '250px', sm: '326px', md: '326px' },
						}}>
						<Stack>
							<Button
								sx={{
									height: {
										xs: '30px',
										sm: '35px',
										md: '45px',
										lg: '50px',
									},
									width: {
										xs: '80px',
										sm: '250px',
										md: '326px',
									},
									mb: '15px',
									mx: 'auto',
									bgcolor: '#003399',
									borderRadius: 3,
								}}
								variant='contained'
								type='submit'
								disabled={isLoading}>
								Войти
							</Button>
						</Stack>

						<Link to='/registration'>
							<Typography
								align='center'
								sx={{ mb: '12px', cursor: 'pointer' }}
								onClick={() => handleModalClose()}>
								Регистрация
							</Typography>
						</Link>

						<Stack>
							<Typography
								variant='caption'
								display='block'
								gutterBottom
								sx={{
									mx: { xs: 'auto' },
									width: { xs: '80%', md: '100%' },
								}}
								mb='12px'
								align='inherit'>
								Авторизируясь, вы соглашаетесь с Политикой в отношении обработки
								персональных данных
							</Typography>
						</Stack>
					</Box>
				</form>
			</Box>
		</div>
	);
};

const mapDispatchToProps = state => {
	return state;
};

export default connect(mapDispatchToProps, null)(Authlogin);
