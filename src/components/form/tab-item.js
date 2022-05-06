import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import CalculateFormPanel from './calculate-form-panel';

const TabPanel = props => {
	const { children, value, index, ...other } = props;

	return (
		<div
			className='tabs'
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ pt: '26px', mb: '82px' }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function Calculate({ calculate }) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box>
				<Tabs
					value={value}
					index={3}
					sx={{
						[`& .${tabsClasses}`]: {
							'&.Mui-selected': { bgcolor: '#000' },
						},
					}}
					onChange={handleChange}
					aria-label='basic tabs example'>
					<Tab
						className='tabs'
						sx={{ mb: '6px' }}
						label='Юр.лицо'
						{...a11yProps(0)}
					/>

					<Tab className='tabs' label='Физ.лицо' {...a11yProps(1)} />
				</Tabs>
			</Box>

			<TabPanel
				className='active-tabs'
				value={value}
				sx={{ mb: '26px' }}
				index={0}>
				<CalculateFormPanel btnText={calculate} />
			</TabPanel>

			<TabPanel className='active-tabs' value={value} index={1}>
				<CalculateFormPanel btnText={calculate} />
			</TabPanel>
		</Box>
	);
}
