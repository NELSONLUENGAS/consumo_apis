import { createContext, useEffect, useState } from 'react';

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(false);

	const [pokeCart, setPokeCart] = useState([]);

	const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=30';

	const handleAddToCart = (pokemon) => {
		pokemon['cantidad'] = 1;
		setPokeCart([...pokeCart, pokemon]);
	};

	const FetchPokemons = async (api_url) => {
		setLoading(true);
		const response = await fetch(api_url);
		const { results: pokemonsURL } = await response.json();

		const results = await Promise.all(
			pokemonsURL.map(async (pokemon) => {
				const pokemonDetail = await fetch(pokemon.url);
				const {
					base_experience,
					weight,
					height,
					id,
					name,
					types,
					species,
					stats,
					sprites,
				} = await pokemonDetail.json();

				return {
					id,
					name,
					weight,
					height,
					specie: species.name,
					base_experience,
					types: types.map((type) => type.type.name),
					stats: stats.map((stat) => ({
						name: stat.stat.name,
						value: stat.base_stat,
					})),
					image: sprites.other.home.front_default,
				};
			})
		);

		setLoading(false);
		setPokemons(results);
	};

	useEffect(() => {
		FetchPokemons(API_URL);
	}, []);

	return (
		<>
			<PokeContext.Provider
				value={{ pokemons, loading, handleAddToCart, pokeCart }}
			>
				{children}
			</PokeContext.Provider>
		</>
	);
};
