import { OPEN_MODAL } from '../actions/types';

const initialState = {
	show: false,
};

export const showReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				show: [...state.show, action.payload],
			};
		default:
			return state;
	}
};
