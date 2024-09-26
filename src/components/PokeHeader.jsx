import React, { useContext } from 'react';
import { SwitchInput } from './UI/SwitchInput';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UserContext } from '../context/UserProvider';

export const PokeHeader = () => {
	const handleIsAvtive = ({ isActive }) => {
		return isActive
			? 'nav-link px-2 text-color-poke_active navLink_active'
			: 'nav-link px-2  text-color-poke';
	};

	const { userSession } = useContext(UserContext);

	return (
		<>
			<header className="p-3 mb-3 border-bottom">
				<div className="container">
					<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
						<SwitchInput />

						<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
							<li>
								<NavLink
									to="/"
									className={handleIsAvtive}
								>
									Pokemons
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/power"
									className={handleIsAvtive}
								>
									Power Zone
								</NavLink>
							</li>
						</ul>

						<form
							className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
							role="search"
						>
							<input
								type="search"
								className="form-control"
								placeholder="Search..."
								aria-label="Search"
							/>
						</form>

						<div className="dropdown text-end">
							{!userSession ? (
								<>
									<Button
										variant="info"
										as={Link}
										to="/login"
									>
										Login
									</Button>{' '}
									<Button
										variant="light"
										as={Link}
										to="/register"
									>
										Register
									</Button>
								</>
							) : (
								<>
									<a
										href="#"
										className="d-block text-decoration-none dropdown-toggle"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<img
											src="./pokeball.png"
											alt="mdo"
											width="32"
											height="32"
											className="rounded-circle"
										/>
									</a>
									<ul
										style={{ display: 'block' }}
										className="dropdown-menu text-small"
									>
										<li>
											<a
												className="dropdown-item text-color-poke"
												href="#"
											>
												New project...
											</a>
										</li>
										<li>
											<a
												className="dropdown-item text-color-poke"
												href="#"
											>
												Settings
											</a>
										</li>
										<li>
											<Link
												className="dropdown-item text-color-poke"
												to="/perfil"
											>
												Profile
											</Link>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a
												className="dropdown-item text-color-poke"
												href="#"
											>
												Sign out
											</a>
										</li>
									</ul>
								</>
							)}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
