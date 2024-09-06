import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(null);

	const handleChangeTheme = () => {
		let color = theme == 'dark' ? 'light' : 'dark';
		setTheme(color);
		document.querySelector('body').setAttribute('data-theme', color);
	};

	return (
		<>
			<ThemeContext.Provider value={{ theme, handleChangeTheme }}>
				{children}
			</ThemeContext.Provider>
		</>
	);
};

export default ThemeProvider;
