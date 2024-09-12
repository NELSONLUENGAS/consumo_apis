import React from 'react';

export const PokeFooter = () => {
	return (
		<>
			<footer className="py-3 my-4">
				<div className="container">
					<ul className="nav justify-content-center border-bottom pb-3 mb-3">
						<li className="nav-item">
							<a
								href="#"
								className="nav-link px-2 text-color-poke"
							>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								href="#"
								className="nav-link px-2 text-color-poke"
							>
								Features
							</a>
						</li>
						<li className="nav-item">
							<a
								href="#"
								className="nav-link px-2 text-color-poke"
							>
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a
								href="#"
								className="nav-link px-2 text-color-poke"
							>
								FAQs
							</a>
						</li>
						<li className="nav-item">
							<a
								href="#"
								className="nav-link px-2 text-color-poke"
							>
								About
							</a>
						</li>
					</ul>
					<p className="text-center text-color-poke">© 2024 Company, Inc</p>
				</div>
			</footer>
		</>
	);
};
