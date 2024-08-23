import React from 'react';
import PokeSpinner from '../components/PokeSpinner';
import PokeCard from '../components/PokeCard';

const Pokemons = ({ data, loading }) => {
	return (
		<>
			{loading ? (
				<PokeSpinner />
			) : (
				<div className="container">
					<div className="poke-grid">
						{data.map((pokemon, index) => (
							<PokeCard
								key={index}
								{...pokemon}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Pokemons;
