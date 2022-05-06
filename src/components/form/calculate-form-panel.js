//@ts-check
import { Grid, OutlinedInput, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useData from '../../hooks/useData';
import { createOrder } from '../../redux/reducers/action';
import api from '../../services/service';
import CalculateButton from './calculate-button';
import CustomSelectList from './custom-select/custom-select';

const ITEM_HEIGHT = 68;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 345,
		},
	},
};

const CalculateFormPanel = ({ btnText }) => {
	let numSize = /^\d+/;

	const clazz = {
		border: '1px solid red',
		borderRadius: '4px',
	};
	const navigate = useNavigate();
	const auth = useData();
	const [open, setOpen] = React.useState(false);
	const [size, setSize] = React.useState('');
	const [isOrder, setIsOrder] = React.useState(true);
	const [city, setCity] = React.useState([]);
	const [delivery, setDelivery] = React.useState('');
	const [pays, setPays] = React.useState('');
	const [order, setOrder] = React.useState({
		cost: 0,
		from_city: '',
		to_city: '',
		length: '',
		width: '',
		height: '',
		user: auth.user,
	});
	let width = +order.width.match(numSize);
	let height = +order.height.match(numSize);
	let length = +order.length.match(numSize);

	const getCalculate = async () => {
		const {
			data: { result: cost },
		} = await api.client.calculate(width, height, length);
		setOrder({ ...order, cost });
	};

	React.useEffect(() => {
		const getCity = async () => {
			const { data } = await api.client.get_citys();
			let { citys: cities } = data.types[1];
			setCity(cities);
		};
		getCity();
	}, []);

	const setCityFrom = e => {
		const {
			target: { value: from_city },
		} = e;

		setOrder({ ...order, from_city });
	};

	const setCityTo = e => {
		const {
			target: { value: to_city },
		} = e;
		setOrder({ ...order, to_city });
	};

	const methodPays = e => {
		const {
			target: { value },
		} = e;

		setPays(value);
	};

	const methodDelivery = e => {
		const {
			target: { value },
		} = e;

		setDelivery(value);
	};
	const closeSelect = () => {
		setOpen(false);
	};
	const selectOpen = () => {
		setOpen(true);
	};
	const onSubmitComplete = () => {
		if (size !== '' && city !== [] && delivery !== '' && pays !== '') {
			getCalculate();
			setIsOrder(true);
			navigate('/arrange');
			localStorage.setItem('order', JSON.stringify(order));
		}
		setIsOrder(false);
		return;
	};

	return (
		<Grid
			container
			spacing={{ xs: 1, md: 2 }}
			columns={{ xs: 4, sm: 8, md: 12 }}>
			<Grid item xs={0} sm={4} md={4}>
				<TextField
					style={isOrder ? {} : clazz}
					sx={{ mb: '18px', width: 347 }}
					id='outlined-select-currency'
					select
					label='Откуда'
					value={order.from_city}
					onChange={setCityFrom}>
					{city.map(city => (
						<MenuItem key={city.name} value={city.name}>
							{city.name}
						</MenuItem>
					))}
				</TextField>
			</Grid>

			<Grid item xs={0} sm={4} md={4}>
				<TextField
					style={isOrder ? {} : clazz}
					sx={{ mb: '18px', width: 347 }}
					id='outlined-select-currency'
					select
					label='Куда'
					value={order.to_city}
					onChange={setCityTo}>
					{city.map(option => (
						<MenuItem key={option.name} value={option.name}>
							{option.name}
						</MenuItem>
					))}
				</TextField>
			</Grid>
			<Grid item xs={0} sm={4} md={4}>
				<FormControl sx={{ width: 347 }} style={isOrder ? {} : clazz}>
					<InputLabel id='demo-multiple-name-label'>Размер</InputLabel>
					<Select
						onFocus={() => getCalculate()}
						labelId='demo-multiple-checkbox-label'
						id='demo-multiple-checkbox'
						open={open}
						onOpen={selectOpen}
						value={size}
						input={<OutlinedInput label='Размер' />}
						renderValue={selected => selected}
						MenuProps={MenuProps}>
						<CustomSelectList
							closeSelect={closeSelect}
							setPersonName={setSize}
							order={order}
							setOrder={setOrder}
						/>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={0} sm={4} md={4}>
				<TextField
					style={isOrder ? {} : clazz}
					sx={{ mb: '18px', width: 347 }}
					id='outlined-select-currency'
					select
					label='Способ доставки'
					value={delivery}
					onChange={methodDelivery}>
					<MenuItem value={'Из офиса в офис'}>Из офиса в офис</MenuItem>
					<MenuItem value={'От двери до двери'}>От двери до двери</MenuItem>
				</TextField>
			</Grid>
			<Grid item xs={0} sm={4} md={4}>
				<TextField
					style={isOrder ? {} : clazz}
					sx={{ mb: '18px', width: 347 }}
					id='outlined-select-currency'
					select
					label='Кто оплачивает'
					value={pays}
					onChange={methodPays}>
					<MenuItem value={'Отправитель'}>Отправитель</MenuItem>
					<MenuItem value={'Получатель'}>Получатель</MenuItem>
				</TextField>
			</Grid>
			<Grid item xs={0} sm={4} md={4}>
				<CalculateButton text={btnText} onSubmitComplete={onSubmitComplete} />
			</Grid>
		</Grid>
	);
};

const mapDispatchToProps = {
	createOrder,
};

export default connect(null, mapDispatchToProps)(CalculateFormPanel);
