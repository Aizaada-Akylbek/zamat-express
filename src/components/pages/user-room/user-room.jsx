import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import * as React from 'react';
import StatusTrackeCargo from '../../form/StatusTrackeCargo';
import TrackPage from '../track-cargo/TrackPage';
import HistoryOrderTable from './history-order/history-order';

const primary = {
	50: '#FF0000',
	100: '#000',
	200: '#FF0000',
	300: '##FF0000',
	400: '##FF0000',
	500: '#fff',
	600: '#FF0000',
	700: '##FF0000',
	800: '##FF0000',
	900: '#454545',
};

const Tab = styled(TabUnstyled)`
	color: '#000';
	cursor: pointer;
	font-size: 1rem;
	background-color: ${primary[500]};
	padding: 47px 20px 23px;
	border: none;
	display: flex;

	&.Mui-selected {
		color: #000;
		font-size: '20px';
	}
	&:hover {
		color: #424242;
	}

	&.${buttonUnstyledClasses.focusVisible} {
		color: #000;
		outline: none;
		border-bottom: 3px solid ${primary[600]};
	}

	&.${tabUnstyledClasses.selected} {
		border-bottom: 3px solid #000;
	}

	&.${buttonUnstyledClasses.disabled} {
		opacity: 0.5;
		cursor: not-allowed;
		box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
	}
`;

const TabPanel = styled(TabPanelUnstyled)`
	width: 100%;
`;

const TabsList = styled(TabsListUnstyled)`
	background-color: ${primary[500]};
	box-shadow: 0 20px 25px rgb/a(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
	padding: 0px 10px 0 10px;
	margin-bottom: 59px;
	display: flex;
	align-content: space-between;
`;

function CashBackBox() {
	return (
		<>
			<Box
				component='div'
				sx={{
					p: '14px',
					border: '1px solid #EDEDED',
					display: 'flex',
					borderRadius: 1,
					justifyContent: 'space-between',
				}}>
				<Typography variant='p' gutterBottom component='div'>
					Ваши кэш-бэки составляют:
				</Typography>
				<Typography variant='body1' gutterBottom component='div'>
					45c
				</Typography>
			</Box>
		</>
	);
}

export default function UserRoomTabs() {
	return (
		<TabsUnstyled defaultValue={0}>
			<TabsList>
				<Tab>История заказов</Tab>
				<Tab>Накопленные кэш-бэки</Tab>
				<Tab>Статус груза</Tab>
			</TabsList>
			<TabPanel value={0}>
				<HistoryOrderTable />
			</TabPanel>
			<TabPanel value={1}>
				<Box sx={{ maxWidth: '100%' }}>
					<CashBackBox />
				</Box>
			</TabPanel>
			<TabPanel value={2}>
				<TrackPage />
				{/* <StatusTrackeCargo /> */}
			</TabPanel>
		</TabsUnstyled>
	);
}
