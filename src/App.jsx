import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Pokemons from './views/Pokemons';
import Layout from './layout/Layout';
import { PokeProvider } from './context/PokeProvider';
import ThemeProvider from './context/ThemeProvider';
import { PokePower } from './views/PokePower';

function App() {
	return (
		<>
			<ThemeProvider>
				<Router>
					<Routes>
						<Route
							path="/"
							element={
								<PokeProvider>
									<Layout />
								</PokeProvider>
							}
						>
							<Route
								index
								element={<Pokemons />}
							/>

							<Route
								path="/power"
								element={<PokePower />}
							/>
						</Route>
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
