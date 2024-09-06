import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { PokeHeader } from '../components/PokeHeader';
import { PokeFooter } from '../components/PokeFooter';
import { ThemeContext } from '../context/ThemeProvider';

const Layout = () => {
	const { handleChangeTheme } = useContext(ThemeContext);

	useEffect(() => {
		handleChangeTheme();
	}, []);

	return (
		<>
			<PokeHeader />
			<main>
				<Outlet />
			</main>
			<PokeFooter />
		</>
	);
};

export default Layout;
