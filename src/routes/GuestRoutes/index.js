import { Navigate } from 'react-router-dom';
import useData from '../../hooks/useData/index';

function GuestRoute({ children, ...rest }) {
	const auth = useData();

	return auth.user ? <Navigate to='/profile' /> : children;
}

export default GuestRoute;
