//@ts-check
import * as React from 'react';
import Calculate from './tab-item';

export default function CallCourier({ callCourier }) {
	return (
		<>
			<Calculate calculate={callCourier} />
		</>
	);
}
