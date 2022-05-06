import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import { default as Accordion } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import TrackPage from '../../pages/track-cargo/TrackPage';
import CallCourier from '../call-courier';

export default function AccordionForm() {
	return (
		<div>
			<Container maxWidth='lg'>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'>
						<Typography>Калькулятор</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<CallCourier callCourier={'Рассчитать'} />
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel2a-content'
						id='panel2a-header'>
						<Typography>Вызвать курьера</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<CallCourier callCourier={'Вызвать курьера'} />
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel3a-content'
						id='panel3a-header'>
						<Typography>Отследить</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<TrackPage />
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Container>
		</div>
	);
}
