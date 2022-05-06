import { CREATE_ORDER, OPEN_MODAL } from '../actions/types';

function createOrder(order) {
	return {
		type: CREATE_ORDER,
		payload: order,
	};
}

function showModal(bool) {
	return {
		type: OPEN_MODAL,
		payload: bool,
	};
}

export { createOrder, showModal };
