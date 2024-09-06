import React, { useContext } from 'react';
import PokeSpinner from '../components/PokeSpinner';
import PokeCard from '../components/PokeCard';
import { PokeContext } from '../context/PokeProvider';

const Pokemons = () => {
	const { pokemons, loading, handleAddToCart } = useContext(PokeContext);

	return (
		<>
			{loading ? (
				<PokeSpinner />
			) : (
				<div className="container">
					<div className="poke-grid">
						{pokemons?.map((pokemon, index) => (
							<PokeCard
								key={index}
								{...pokemon}
								handleAddToCart={handleAddToCart}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Pokemons;
