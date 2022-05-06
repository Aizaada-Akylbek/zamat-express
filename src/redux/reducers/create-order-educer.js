import { CREATE_ORDER } from '../actions/types';

const initialState = {
	order: [],
};

export const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_ORDER:
			return {
				...state,
				order: [...state.order, action.payload],
			};
		default:
			return state;
	}
};
