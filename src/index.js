import GlobalStyles from '@mui/material/GlobalStyles';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ResponsiveAppBar from './components/main/header/header-appbar/responsiveAppBar';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import AllRoutes from './routes/Routes';
import { rootReducer } from './redux/reducers/rootReducer';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
	rootReducer,
	compose(
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<AuthProvider>
			<BrowserRouter>
				<GlobalStyles
					styles={{
						ul: { margin: 0, padding: 0, listStyle: 'none' },
					}}
				/>
				<ResponsiveAppBar />
				<AllRoutes />
			</BrowserRouter>
		</AuthProvider>
	</Provider>,
	document.getElementById('root')
);
