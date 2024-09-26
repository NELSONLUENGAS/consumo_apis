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
import { useContext, useState } from 'react';
import PokeLogin from './views/PokeLogin';
import PokeRegister from './views/PokeRegister';
import { UserContext, UserProvider } from './context/UserProvider';
import PokeProfile from './views/PokeProfile';

function App() {
	return (
		<>
			<Router>
				<ThemeProvider>
					<UserProvider>
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
									path="/login"
									element={<PokeLogin />}
								/>
								<Route
									path="/register"
									element={<PokeRegister />}
								/>

								<Route
									path="/pokemon/:id"
									element={<PokeDetail />}
								/>

								<Route
									path="/perfil"
									element={
										<AuthGuard
											isAllow={false}
											redirectTo="/login"
										/>
									}
								>
									<Route
										index
										element={<PokeProfile />}
									/>
								</Route>
							</Route>

							<Route
								path="/admin"
								element={
									<AuthGuard isAllow={true}>
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
					</UserProvider>
				</ThemeProvider>
			</Router>
		</>
	);
}

export default App;
