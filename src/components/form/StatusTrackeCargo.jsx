import CheckIcon from '@mui/icons-material/Check';
import Looks3Icon from '@mui/icons-material/Looks3';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepConnector, {
	stepConnectorClasses,
} from '@mui/material/StepConnector';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import './statusCargo.css';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 25,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: '#003399',
			borderRadius: 'dashed',
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: '#003399',
			borderRadius: 'dashed',
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 1,
		border: 0,
		backgroundColor:
			theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
		borderRadius: 1,
	},
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
	backgroundColor:
		theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
	zIndex: 1,
	color: '#fff', //внутри галочки
	width: 60,
	height: 50,
	display: 'flex',
	borderRadius: '50%',
	justifyContent: 'center',
	alignItems: 'center',
	...(ownerState.active && {
		backgroundColor: ' #003399',
	}),
	...(ownerState.completed && {
		backgroundColor: ' #003399', //borderRcolor
	}),
}));

function ColorlibStepIcon(props) {
	const { completed } = props;

	const icons = {
		1: completed ? <CheckIcon /> : <LooksOneIcon />,
		2: completed ? <CheckIcon /> : <LooksTwoIcon />,
		3: completed ? <CheckIcon /> : <Looks3Icon />,
	};

	return (
		<ColorlibStepIconRoot className='mV' ownerState={{ completed }}>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
}
const st = [
	{
		text: 'Груз принят',
		adress: 'г. Бишкек, ул. Оренбургская 32',
		date: '12.00 / 12.01.2021',
	},
	{
		text: 'Груз в пути',
		adress: '',
		date: '13.00 / 12.01.2021',
	},
	{
		text: 'Груз доставлен',
		adress: 'г. Ош, ул. Курманжан Датки 151',
		date: '12.00 / 13.01.2021',
	},
];

export default function StatusTrackeCargo({ statusNumber }) {
	return (
		<Box>
			<Stack
				sx={{
					width: '100%',
				}}
				spacing={4}>
				<Stepper
					alternativeLabel
					activeStep={statusNumber}
					connector={<ColorlibConnector />}>
					{st.map(label => (
						<Step key={label}>
							<StepLabel StepIconComponent={ColorlibStepIcon}>
								{label.text}
								<div style={{ color: 'rgba(24, 24, 24, 0.5)' }}>
									{label.adress}
								</div>
								<div style={{ color: 'rgba(24, 24, 24, 0.5)' }}>
									{label.date}
								</div>
							</StepLabel>
						</Step>
					))}
				</Stepper>
			</Stack>
		</Box>
	);
}
