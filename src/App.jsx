import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import './App.css';
import Pokemons from './views/Pokemons';
import Layout from './layout/Layout';
import { PokeProvider } from './context/PokeProvider';
import ThemeProvider from './context/ThemeProvider';
import { PokePower } from './views/PokePower';
import AdminLayout from './layout/AdminLayout';
import PokeDetail from './views/PokeDetail';
import AuthGuard from './guard/AuthGuard';
import { useState } from 'react';

function App() {
	const [session, setSession] = useState({
		roles: ['admin'],
		username: 'PepitoPerez_123',
		gmail: 'pepito@gmail.com',
	});

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

							<Route
								path="/pokemon/:id"
								element={<PokeDetail />}
							/>

							<Route
								path="/perfil"
								element={
									<AuthGuard
										isAllow={session.roles.includes('guest')}
										redirectTo="/login"
									/>
								}
							>
								<Route
									index
									element={<h1>Hola perfil</h1>}
								/>
							</Route>
						</Route>

						<Route
							path="/admin"
							element={
								<AuthGuard isAllow={session.roles.includes('admin')}>
									<AdminLayout />
								</AuthGuard>
							}
						>
							<Route
								index
								element={<h1>Hola Admin</h1>}
							/>
						</Route>
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
