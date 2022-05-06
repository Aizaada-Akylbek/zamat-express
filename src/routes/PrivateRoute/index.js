import AuthLogin from "../../components/pages/authentication/AuthLogin";
import useData from "../../hooks/useData/index";
function PrivateRoute({ children, ...rest }) {
	let auth = useData();

	return auth.user ? children : <AuthLogin />;
}

export default PrivateRoute;
