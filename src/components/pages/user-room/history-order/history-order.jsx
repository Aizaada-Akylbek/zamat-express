import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import api from '../../../../services/service';

const columns = [
	{
		field: 'id',
		headerName: '№ Заказа',
		type: 'string',
		width: 120,
	},
	{
		field: 'date',
		headerName: 'Дата отправки',
		type: 'number',
		width: 180,
	},
	{
		field: 'dateEnd',
		headerName: 'Дата прибытия',
		type: 'number',
		width: 180,
	},
	{
		field: 'cost',
		headerName: 'Сумма',
		type: 'number',
		width: 150,
	},
	{
		field: 'cashBack',
		headerName: 'Кэш-бэк 3%',
		type: 'number',
		sortable: false,
		width: 210,
	},
];

export default function HistoryOrderTable() {
	let patternDate = /\d{4}-\d{2}-\d{2}/;

	const [rows, setRows] = React.useState([
		{
			id: '',
			dateEnd: '4',
			date: '4 - 6 р. дней',
			cost: 5,
			cashBack: '',
		},
	]);

	const getProfile = async () => {
		try {
			let orders = [];
			const { data } = await api.client.get_Profile();
			data.user_orders.map(item => {
				let date = item.date.match(patternDate);
				orders.push({
					id: item.orders_code,
					dateEnd: '4 - 6 р. дней',
					date: date[0],
					cost: item.cost,
					cashBack: '7.5c',
				});
			});
			setRows(orders);
		} catch (error) {
			console.error('==> err', error);
		}
	};

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<div style={{ height: '650px', width: '100%' }}>
			<DataGrid
				rows={rows}
				headerHeight={57}
				columns={columns}
				rowHeight={60}
				pamountSize={10}
				sx={{
					boxShadow: 1,
					borderRadius: '10px 10px 0 0',
					color: '#000',
					fontSize: 16,
					border: 1,
					borderColor: '#EDEDED',
				}}
				rowsPerPamountOptions={[10]}
			/>
		</div>
	);
}
