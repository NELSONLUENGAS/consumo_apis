import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const PokeProfile = () => {
	const { login, userSession, handleGetUserDetail } = useContext(UserContext);
	// const { userDetails } = useContext(UserContext);

	// useEffect(() => {
	// 	handleGetUserDetail(userSession);
	// }, []);

	return (
		<div>
			<h1>
				Hola querido {login.email}, tu sesión es {userSession}
			</h1>
		</div>
	);
};

export default PokeProfile;
