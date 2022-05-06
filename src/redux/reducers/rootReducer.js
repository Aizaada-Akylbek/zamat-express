import { combineReducers } from 'redux';
import { orderReducer } from './create-order-educer';
import { showReducer } from './modal-reducer';

export const rootReducer = combineReducers({
	order: orderReducer,
	showModal: showReducer,
});

const reducer = (state = rootReducer, action) => {};

export default reducer;
