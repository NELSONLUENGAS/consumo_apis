import React, { useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import { Alert } from 'react-bootstrap';

export const PokeAlert = () => {
	const { message, showMessage } = useContext(UserContext);

	return (
		<Alert
			show={showMessage}
			variant={'success'}
		>
			{message}
		</Alert>
	);
};
