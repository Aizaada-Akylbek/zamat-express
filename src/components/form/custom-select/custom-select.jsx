import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import ExactDimensions from '../../form/custom-select/exact-dimensions/';
import Approximately from './approximately/Approximately';

function CustomSelectList({ setPersonName, order, setOrder, closeSelect }) {
	const [value, setValue] = React.useState('1');

	const handleChange = (event, tabNum) => {
		setValue(tabNum);
	};

	return (
		<Box sx={{ width: '100%', typography: 'p' }}>
			<TabContext value={value} sx={{ width: '100%' }}>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: 'divider',
						width: '100%',
					}}>
					<TabList onChange={handleChange} aria-label='lab API tabs example'>
						<Tab label='Примерно' value='1' />
						<Tab label='Точные размеры' value='2' />
					</TabList>
				</Box>
				<TabPanel value='1'>
					<Approximately
						closeSelect={closeSelect}
						order={order}
						setPersonName={setPersonName}
						setOrder={setOrder}
					/>
				</TabPanel>
				<TabPanel value='2'>
					<ExactDimensions
						closeSelect={closeSelect}
						order={order}
						setPersonName={setPersonName}
						setOrder={setOrder}
					/>
				</TabPanel>
			</TabContext>
		</Box>
	);
}

export default CustomSelectList;
