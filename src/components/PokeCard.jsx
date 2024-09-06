import React from 'react';
import PokeProgress from './PokeProgress';
import { Badge } from 'react-bootstrap';

const PokeCard = ({
	id,
	name,
	weight,
	height,
	specie,
	base_experience,
	types,
	stats,
	image,
	handleAddToCart,
}) => {
	const handleAdd = () => {
		const pokemon = {
			id,
			name,
			weight,
			height,
			specie,
			base_experience,
			types,
			stats,
			image,
		};
		handleAddToCart(pokemon);
	};

	return (
		<>
			<div className="card">
				<div
					className="bg-image hover-overlay ripple"
					data-mdb-ripple-color="light"
				>
					<img
						src={image}
						className="img-fluid"
					/>
					<a href="#!">
						<div
							className="mask"
							style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
						></div>
					</a>
				</div>
				<div className="card-body">
					<h5 className="card-title font-weight-bold">
						<a className="text-uppercase fw-bold text-decoration-none">
							{name}
						</a>
					</h5>
					<ul className="list-unstyled list-inline mb-0">
						{stats.length &&
							stats.map((stat, index) => (
								<PokeProgress
									key={index}
									{...stat}
								/>
							))}
					</ul>
					<hr />
					<ul className="list-unstyled list-inline d-flex justify-content-between">
						{types.length &&
							types.map((type, index) => (
								<li
									key={index}
									className="list-inline-item me-0"
								>
									<Badge bg="primary">{type}</Badge>
								</li>
							))}
					</ul>
					<button
						className="btn p-md-1 mb-0"
						onClick={handleAdd}
					>
						Add To Power Zone
					</button>
				</div>
			</div>
		</>
	);
};

export default PokeCard;
