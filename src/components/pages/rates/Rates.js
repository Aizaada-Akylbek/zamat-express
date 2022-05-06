import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';
import Footer from '../../main/footer/footer';
import CustomTableRates from './CustomTableRates';
import HeaderItem from './header-item';
import RatesFooter from './rates-footer';

const Rates = () => {
	const arr = [
		{
			h: 'Из офиса в офис',
			span: '',
			adress: '',
		},
	];
	const arr2 = [
		{
			h: 'От двери до двери',
			span: 'Большие города:',
			adress: 'Ош, Талас, Жалал-Абад, Чолпон-Ата, Каракол',
		},
	];
	const arr3 = [
		{
			h: '',
			span: 'Малые города:',
			adress:
				'Озгон, Кара-Суу, Ноокат, Ноокен, Базар-Курган, Кочкор-Ата, Кочкор, Балыкчы, Кара-Балта, Сокулук, Кант',
		},
	];
	const arr4 = [
		{
			h: 'Баткен, Кызыл-Кыя, Исфана',
			span: 'Срок доставки в г. Баткен (Исфана) - 1,5 / 2 дня',
			adress: '',
		},
	];
	const arr5 = [
		{
			h: 'Отдаленные регионы',
			span: '',
			adress: '',
		},
	];
	const arr6 = [
		{
			h: 'Внутри города Бишкек и Ош (в радиусе 7км)',
			span: '',
			adress: '',
		},
	];
	const arr7End = [
		{
			h: 'Выкуп товаров',
			span: '',
			adress: '',
		},
	];
	return (
		<div>
			<Container maxWidth='md' sx={{ pt: '100px', mb: '190px' }}>
				<Typography variant='h5' mb='90px' gutterBottom component='div'>
					Тарифы
				</Typography>
				<HeaderItem />
				<Box
					sx={{
						maxWidth: '100%',
						borderRadius: 1,
						border: '1px solid #e1dcdc',
						mb: '72px',
					}}>
					<CustomTableRates
						text1={arr}
						price={'150c'}
						price2={'250c'}
						text2={'10с. за каждый кг.'}
					/>
					<CustomTableRates
						text1={arr2}
						price={'150c'}
						price2={'250c'}
						text2={'10с. за каждый кг.'}
					/>
					<CustomTableRates
						text1={arr3}
						price={'150c'}
						price2={'250c'}
						text2={'10с. за каждый кг.'}
					/>
					<CustomTableRates
						text1={arr4}
						price={'150c'}
						price2={'250c'}
						text2={'10с. за каждый кг.'}
					/>
					<CustomTableRates
						text1={arr5}
						price={'250c'}
						price2={'450c'}
						text2={'10с. за каждый кг.'}
					/>
					<CustomTableRates
						text1={arr6}
						price={'250c'}
						price2={'450c'}
						text2={'10с. за каждый кг.'}
					/>
					<CustomTableRates
						text1={arr7End}
						price={''}
						price2={''}
						text2={'10 000c'}
					/>
				</Box>
				<RatesFooter />
			</Container>
			<Footer />
		</div>
	);
};

export default Rates;
