//@ts-check
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/system';
import * as React from 'react';
import TrackPage from '../pages/track-cargo/TrackPage';
import './calculate-wrap.css';
import CallCourier from './call-courier';
import Calculate from './tab-item';

const primary = {
	50: '#F0F7FF',
	100: '#000',
	200: '#80BFFF',
	300: '#66B2FF',
	400: '#3399FF',
	500: '#fff',
	600: '#0072E5',
	700: '#0059B2',
	800: '#004C99',
	900: '#424242',
};

const Tab = styled(TabUnstyled)`
	color: ${primary[100]};
	cursor: pointer;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	font-size: '20px';
	line-height: 24, 38px;
	background: ${primary[500]};
	padding: 21px 40px;
	margin-left: 5px;
	border: none;
	display: flex;
	margin-bottom: 47px;

	&.Mui-selected {
		color: #fff;
		font-weight: bold;
		background: ${primary[900]};
	}

	&:hover {
		color: #181818;
	}

	&.${buttonUnstyledClasses.focusVisible} {
		color: #fff;
		outline: none;
	}

	&.${tabUnstyledClasses.selected} {
	}

	&.${buttonUnstyledClasses.disabled} {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

const TabPanel = styled(TabPanelUnstyled)`
	width: 100%;
	background: ${primary[500]};
`;

const TabsList = styled(TabsListUnstyled)`
	display: flex;
	align-content: space-between;
`;

const CalculateForm = () => {
	return (
		<div>
			<Container maxWidth='lg' sx={{ mt: -7 }}>
				<TabsUnstyled defaultValue={0}>
					<TabsList>
						<Tab>Калькулятор</Tab>
						<Tab>Вызвать курьера</Tab>
						<Tab>Отследить</Tab>
					</TabsList>
					<TabPanel value={0}>
						<div className='wrap-calc'>
							<Box sx={{ pl: '47px' }}>
								<Calculate calculate='Рассчитать' />
							</Box>
						</div>
					</TabPanel>
					<TabPanel value={1}>
						<Box sx={{ pl: '47px' }}>
							<CallCourier callCourier='Вызвать курьера' />
						</Box>
					</TabPanel>
					<TabPanel value={2}>
						<Box>
							<TrackPage />
						</Box>
					</TabPanel>
				</TabsUnstyled>
			</Container>
		</div>
	);
};

export default CalculateForm;
