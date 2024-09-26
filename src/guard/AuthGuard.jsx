import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const AuthGuard = ({ isAllow, redirectTo = '/', children }) => {
	const { userSession } = useContext(UserContext);
	if (!userSession) {
		return (
			<Navigate
				to={redirectTo}
				replace
			/>
		);
	}

	return children ? children : <Outlet />;
};

export default AuthGuard;
