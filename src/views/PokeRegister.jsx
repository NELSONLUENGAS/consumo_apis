import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PokeAlert } from '../components/UI/PokeAlert';

const PokeRegister = () => {
	const { handleChangeRegister, handleRegister } = useContext(UserContext);

	return (
		<>
			<PokeAlert />
			<Form onSubmit={handleRegister}>
				<Form.Group
					className="mb-3"
					controlId="formBasicEmail"
				>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={handleChangeRegister}
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
						onChange={handleChangeRegister}
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
		</>
	);
};

export default PokeRegister;
