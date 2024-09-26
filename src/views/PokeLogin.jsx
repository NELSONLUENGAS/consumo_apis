import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../context/UserProvider';

const PokeLogin = () => {
	const { handleChangeLogin, handleLogin } = useContext(UserContext);

	return (
		<Form onSubmit={handleLogin}>
			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					onChange={handleChangeLogin}
					name="email"
					type="email"
					placeholder="Enter email"
					required
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicPassword"
			>
				<Form.Label>Password</Form.Label>
				<Form.Control
					onChange={handleChangeLogin}
					name="password"
					type="password"
					placeholder="Password"
					required
				/>
			</Form.Group>

			<Button
				variant="primary"
				type="submit"
			>
				Submit
			</Button>
		</Form>
	);
};

export default PokeLogin;
