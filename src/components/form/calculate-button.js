import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import * as React from 'react';

const CalculateButton = ({ text, onSubmitComplete }) => {
	return (
		<Stack spacing={2} direction='row'>
			<Box>
				<Button
					onClick={() => onSubmitComplete()}
					sx={{ height: '52px', width: '347px' }}
					variant='contained'>
					{text}
				</Button>
			</Box>
		</Stack>
	);
};
export default CalculateButton;
