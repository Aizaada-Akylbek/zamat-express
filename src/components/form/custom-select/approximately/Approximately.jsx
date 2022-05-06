import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import boxImg from '../../../../assets/img/flat-ui_box.svg';
import './custom-select.css';

let dataList = [
	{
		id: 1,
		title: 'Конверт ',
		img: boxImg,
		boxLength: '50 см, до 2кг',
		boxWidth: '350х',
		boxHeight: '350x',
		description: 'Маленькие предметы: документы, бижутерия, аксессуары',
	},
	{
		id: 2,
		title: 'Конверт XS ',
		img: boxImg,
		boxLength: '90 см, до 0.5кг',
		boxWidth: '570х',
		boxHeight: '250x',
		description: 'Как каробка от смартфона',
	},
	{
		id: 3,
		title: 'Конверт S ',
		img: boxImg,
		boxLength: '110 см, до 1.5кг',
		boxWidth: '200х',
		boxHeight: '280x',
		description: 'Как каробка от утюга',
	},
	{
		id: 4,
		title: 'Конверт M ',
		img: boxImg,
		boxLength: '150 см, до 5кг',
		boxWidth: '250х',
		boxHeight: '450x',
		description: 'Чуть больше обувной каробки',
	},
];

function Approximately({ setPersonName, order, setOrder, closeSelect }) {
	const selectChange = id => {
		let example = dataList.filter(list => list.id === id);
		const { title, boxLength, boxWidth, boxHeight } = example[0];
		const boxExamples = `${title}${boxWidth}${boxHeight}${boxLength}`;
		setPersonName(boxExamples);
		setOrder({
			...order,
			length: boxLength,
			width: boxWidth,
			height: boxHeight,
		});
		closeSelect();
	};

	return (
		<List sx={{ width: '100%', cursor: 'pointer' }}>
			{dataList.map(list => (
				<div key={list.id} onClick={() => selectChange(list.id)}>
					<ListItem alignItems='flex-start'>
						<ListItemAvatar>
							<img alt='Remy Sharp' className='im-box' src={boxImg} />
						</ListItemAvatar>
						<ListItemText
							primary={list.title}
							secondary={
								<div>
									<Typography
										sx={{ display: 'block' }}
										variant='body1'
										color='text.primary'>
										{`${list.boxWidth}${list.boxHeight}${list.boxLength}`}
									</Typography>
									<Typography variant='subtitle'>{list.description}</Typography>
								</div>
							}
						/>
					</ListItem>
				</div>
			))}
		</List>
	);
}

export default Approximately;
