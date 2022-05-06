import { createContext } from 'react';

export const GetContext = createContext({
	isLoaded: false,
	user: null,
	refresh: null,
	access: null,
	setUserName: () => {},
	setRefreshToken: () => {},
	setToken: () => {},
	logOut: () => {},
});
