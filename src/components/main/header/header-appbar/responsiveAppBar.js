import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../../assets/img/Logo.svg';
import useData from '../../../../hooks/useData/index';
import Authlogin from '../../../pages/authentication/AuthLogin';
import './appBar.css';

const style = {
	position: 'absolute',
	alignItems: 'center',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	borderRadius: '10px',
	backgroundColor: '#fff',
	border: 'none',
	boxShadow: 24,
	p: 2,
};

const ResponsiveAppBar = () => {
	/* start open menu profile*/
	const [menuOpen, setMenuOpen] = React.useState(null);
	const openMenu = Boolean(menuOpen);
	const handleClickMenuOPen = event => {
		setMenuOpen(event.currentTarget);
	};
	const handleCloseMenu = () => {
		setMenuOpen(null);
	};
	/* end open menu profile*/

	const [openModal, setOpenModal] = React.useState(false);
	const handleOpen = () => setOpenModal(true);
	const handleCloseModal = () => {
		setOpenModal(false);
	};
	const auth = useData();
	const navigate = useNavigate();
	const goProfile = () => {
		setMenuOpen(null);
		navigate('/profile');
	};

	const onLogOut = () => {
		auth.logOut();
		setMenuOpen(null);
		navigate('/');
	};

	const menuItem = [
		{
			title: 'Главная',
			pathName: '/',
		},
		{
			title: 'Отследить',
			pathName: '/track',
		},
		{
			title: 'Расчитать',
			pathName: '/calculate',
		},
		{
			title: 'Тарифы',
			pathName: '/rates',
		},
		{
			title: 'Правила',
			pathName: '/rules',
		},
		{
			title: 'Контакты',
			pathName: '/contacts',
		},
	];

	const ITEM_HEIGHT = 48;

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleCloseNavMenu = () => {};

	const user = !!auth.user ? JSON.parse(auth.user) : null;

	return (
		<div className='app-bar'>
			<AppBar position='static' sx={{ bgcolor: '#fff', py: '10px' }}>
				<Container maxWidth='lg'>
					<Toolbar disableGutters>
						<Link to='/'>
							<Box
								width={75}
								height={66}
								component='img'
								sx={{
									ml: 0,
									display: { xs: 'none', md: 'flex' },
								}}
								src={Logo}
							/>
						</Link>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', md: 'none' },
							}}>
							<IconButton
								aria-label='more'
								id='long-button'
								aria-controls='long-menu'
								aria-expanded={open ? 'true' : undefined}
								aria-haspopup='true'
								onClick={handleClick}>
								<MoreVertIcon />
							</IconButton>
							<Menu
								id='long-menu'
								MenuListProps={{
									'aria-labelledby': 'long-button',
								}}
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								PaperProps={{
									style: {
										maxHeight: ITEM_HEIGHT * 5.5,
										width: '20ch',
									},
								}}>
								{menuItem.map((option, index) => (
									<div key={index}>
										<MenuItem
											sx={{ color: 'black' }}
											underline='none'
											selected={option.title === 'Главная'}
											onClick={handleClose}>
											<Link
												to={option.pathName}
												style={{
													textDecoration: 'none',
													color: '#000',
												}}>
												<Typography display='block' gutterBottom>
													{option.title}
												</Typography>
											</Link>
										</MenuItem>
									</div>
								))}
							</Menu>
						</Box>
						<Box
							className='img-mobile'
							width={59}
							height={46}
							component='img'
							sx={{
								display: { xs: 'flex', md: 'none' },
							}}
							src={Logo}
						/>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
							}}>
							{menuItem.map((page, i) => (
								<Box
									key={i}
									sx={{
										ml: { xs: 6, lg: 10 },
										underline: 'none',
									}}>
									<Link
										className='nav-link'
										to={page.pathName}
										onClick={handleCloseNavMenu}>
										<Typography display='block' gutterBottom>
											{page.title}
										</Typography>
									</Link>
								</Box>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							{auth.isLoaded &&
								(auth.user ? (
									<>
										<Button
											sx={{ color: 'yellow' }}
											id='fade-button'
											aria-controls={openMenu ? 'fade-menu' : undefined}
											aria-haspopup='true'
											aria-expanded={openMenu ? 'true' : undefined}
											onClick={handleClickMenuOPen}>
											Личный кабинет
										</Button>
										<Menu
											id='fade-menu'
											MenuListProps={{
												'aria-labelledby': 'fade-button',
											}}
											anchorEl={menuOpen}
											open={openMenu}
											onClose={handleCloseMenu}
											TransitionComponent={Fade}>
											<MenuItem onClick={goProfile}>{user.username}</MenuItem>
											<MenuItem onClick={onLogOut}>Выйти</MenuItem>
										</Menu>
									</>
								) : (
									<>
										<Button
											onClick={handleOpen}
											variant='contained'
											disableRipple
											size='small'
											sx={{
												my: 0,
												ml: { xs: 14, sm: 0 },
											}}>
											Войти
										</Button>
										<Modal
											open={openModal}
											onClose={handleCloseModal}
											aria-labelledby='modal-modal-title'
											aria-describedby='modal-modal-description'>
											<Box style={style} className='modal-mobile'>
												<Authlogin handleCloseModal={handleCloseModal} />
											</Box>
										</Modal>
									</>
								))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};
export default ResponsiveAppBar;
