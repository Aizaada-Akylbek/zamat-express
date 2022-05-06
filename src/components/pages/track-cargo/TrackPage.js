import React, { useEffect, useState } from 'react';
import StatusTrackeCargo from '../../form/StatusTrackeCargo';
import TrackCargo from './track-cargo';
import './Track.css';

const TrackPage = () => {
	const [response, setResponse] = useState(false);
	const [statusText, setStatusText] = useState('');
	const [statusNumber, setStatusNumber] = useState(0);

	useEffect(() => {
		switch (statusText) {
			case 'adopted':
				setStatusNumber(1);
				break;
			case 'on_the_way':
				setStatusNumber(2);
				break;
			case 'delivered':
				setStatusNumber(3);
				break;
			default:
				break;
		}
	}, [statusText]);

	return (
		<div>
			<div className='shadow'>
				<TrackCargo setResponse={setResponse} setStatusText={setStatusText} />
			</div>

			{response ? <StatusTrackeCargo statusNumber={statusNumber} /> : null}
		</div>
	);
};

export default TrackPage;
