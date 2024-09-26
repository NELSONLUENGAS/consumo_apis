import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [login, setLogin] = useState({
		username: '',
		password: '',
	});

	const [userSession, setUserSession] = useState(null);

	const [message, setMessage] = useState(null);
	const [showMessage, setShowMessage] = useState(false);

	const [register, setRegister] = useState({
		username: '',
		password: '',
	});

	const navigate = useNavigate();

	const handleChangeLogin = (event) => {
		const { name, value } = event.target;
		setLogin({
			...login,
			[name]: value,
		});
	};

	const handleChangeRegister = (event) => {
		const { name, value } = event.target;
		setRegister({
			...register,
			[name]: value,
		});
	};

	const handleLogin = (event) => {
		event.preventDefault();
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o';
		setUserSession(token);
		navigate('/perfil');
	};

	const handleLoginAsync = async (event) => {
		event.preventDefault();

		const response = await fetch('http://localhost:5000/auth/login', {
			method: 'POST',
			headers: {
				contentType: 'application/json',
			},
			body: JSON.stringify(login),
		});

		const token = await response.json();
		setUserSession(token);
	};

	const handleRegister = (event) => {
		event.preventDefault();
		setMessage('Registro existoso');
		setShowMessage(true);

		setTimeout(() => {
			setShowMessage(false);
			navigate('/login');
		}, 3000);
	};

	const handleGetUserDetail = async (token) => {
		const response = await fetch('http://localhost:5000/auth/me', {
			method: 'POST',
			headers: {
				contentType: 'application/json',
				Authoritazion: `Bearer ${token}`,
			},
		});

		const userDetail = await response.json();
		// setUserDetails(userDetail);
	};

	return (
		<UserContext.Provider
			value={{
				handleChangeLogin,
				handleChangeRegister,
				handleLogin,
				userSession,
				handleRegister,
				message,
				showMessage,
				login,
				handleGetUserDetail,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
