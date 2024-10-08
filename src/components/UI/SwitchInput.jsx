import { useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../../context/ThemeProvider';

export const SwitchInput = () => {
	const { theme, handleChangeTheme } = useContext(ThemeContext);

	const handleOnChange = () => {
		handleChangeTheme();
	};

	return (
		<Form className="px-4 text-color-poke">
			<Form.Check
				type="switch"
				id="custom-switch"
				label={theme}
				onChange={handleOnChange}
			/>
		</Form>
	);
};
