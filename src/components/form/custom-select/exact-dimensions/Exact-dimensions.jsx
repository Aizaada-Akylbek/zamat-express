//@ts-check
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ExactDimensions = ({ setPersonName, order, setOrder, closeSelect }) => {
	const [size, setSize] = useState({
		width: '',
		height: '',
		length: '',
		kg: '',
	});

	useEffect(() => {
		let { width, height, length } = { ...size };
		setPersonName(`${width}${height}${length}`);
		setOrder({ ...order, width, height, length });
		// closeSelect();
	}, [size]);

	const setWidth = e => {
		let width = `${e.target.value}x`;
		setSize({ ...size, width });
	};

	const setHight = e => {
		let height = `${e.target.value}x`;
		setSize({ ...size, height });
	};

	const setLength = e => {
		let length = `${e.target.value} см`;
		setSize({ ...size, length });
	};
	const setWeight = e => {
		let kg = ` до ${e.target.value} кг`;
		setSize({ ...size, kg });
	};
	return (
		<>
			<Box sx={{ px: '25px' }}>
				<TextField
					fullWidth
					size='small'
					id='outlined-basic'
					label='Ширина, см'
					onBlur={e => setWidth(e)}
					variant='outlined'
					sx={{ mb: '21px' }}
				/>
				<TextField
					fullWidth
					size='small'
					id='outlined-basic'
					label='Высота, см'
					onBlur={e => setHight(e)}
					variant='outlined'
					sx={{ mb: '21px' }}
				/>
				<TextField
					fullWidth
					size='small'
					id='outlined-basic'
					label='Длина, см'
					onBlur={e => setLength(e)}
					variant='outlined'
					sx={{ mb: '21px' }}
				/>
				<TextField
					fullWidth
					size='small'
					id='outlined-basic'
					label='Вес, кг'
					onBlur={e => setWeight(e)}
					variant='outlined'
					sx={{ mb: '21px' }}
				/>
				<Button onClick={closeSelect} variant='outlined'>
					Ok
				</Button>
			</Box>
		</>
	);
};

export default ExactDimensions;
