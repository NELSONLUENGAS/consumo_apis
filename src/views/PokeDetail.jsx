import React, { useContext, useEffect } from 'react';
import { PokeContext } from '../context/PokeProvider';
import { useParams } from 'react-router-dom';
import PokeSpinner from '../components/PokeSpinner';
import PokeCard from '../components/PokeCard';

const PokeDetail = () => {
	const { id } = useParams();

	const { handleFetchPokemonById, pokeDetail, loading, handleAddToCart } =
		useContext(PokeContext);

	useEffect(() => {
		handleFetchPokemonById(id);
	}, []);

	return (
		<>
			{loading ? (
				<PokeSpinner />
			) : (
				<div className="container">
					<PokeCard
						{...pokeDetail}
						handleAddToCart={handleAddToCart}
					/>
				</div>
			)}
		</>
	);
};

export default PokeDetail;
