import Cookies from 'js-cookie';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { GetContext } from '../../contexts/AuthContext/index';

function AuthProvider(props) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [user, setUser] = useState(null);
	const [token, setTokenData] = useState(null);

	const setToken = useCallback(token => {
		setTokenData(token);
		if (token) {
			Cookies.set('access', token);
		} else {
			Cookies.remove('access');
		}
	}, []);

	const setUserName = useCallback(user => {
		setUser(user);
		if (user) {
			Cookies.set('user', user);
		} else {
			Cookies.remove('user');
		}
	}, []);

	const logOut = useCallback(() => {
		setUserName(null);
		setToken(null);
	}, [setToken]);

	const loadData = useCallback(async () => {
		const tokenData = Cookies.get('access');
		const user = Cookies.get('user');

		setTokenData(tokenData);
		setUser(user);

		try {
			if (tokenData) {
				// const { data } = await api.auth.getProfile();
				// setUser(data);
			}
		} catch {
			setToken(null);
		} finally {
			setIsLoaded(true);
		}
	}, [setToken]);

	useEffect(() => {
		loadData();
	}, [loadData]);

	const contextValue = useMemo(
		() => ({
			isLoaded,
			user,
			token,
			setUserName,
			setToken,
			logOut,
		}),
		[isLoaded, user, setUserName, token, setToken, logOut]
	);

	return (
		<GetContext.Provider value={contextValue}>
			{props.children}
			{/* {user ? props.children : 'no auth'} */}
		</GetContext.Provider>
	);
}

export default AuthProvider;
