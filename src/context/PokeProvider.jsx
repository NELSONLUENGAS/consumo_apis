import { createContext, useEffect, useState } from 'react';

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
	const [pokemons, setPokemons] = useState([]);
	const [pokeDetail, setPokeDetail] = useState({});
	const [loading, setLoading] = useState(false);

	const [pokeCart, setPokeCart] = useState([]);

	const API_URL = 'https://pokeapi.co/api/v2/pokemon';

	const handleAddToCart = (pokemon) => {
		pokemon['cantidad'] = 1;
		setPokeCart([...pokeCart, pokemon]);
	};

	const FetchPokemons = async (api_url) => {
		setLoading(true);
		const response = await fetch(`${api_url}?limit=30`);
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

	const FetchPokemonById = async (api_url, poke_id) => {
		setLoading(true);
		const response = await fetch(`${api_url}/${poke_id}`);
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
		} = await response.json();

		const pokemonDetail = {
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

		setLoading(false);
		setPokeDetail(pokemonDetail);
	};

	const handleFetchPokemonById = async (poke_id) => {
		await FetchPokemonById(API_URL, poke_id);
	};

	useEffect(() => {
		FetchPokemons(API_URL);
	}, []);

	return (
		<>
			<PokeContext.Provider
				value={{
					pokemons,
					loading,
					handleAddToCart,
					pokeCart,
					handleFetchPokemonById,
					pokeDetail,
				}}
			>
				{children}
			</PokeContext.Provider>
		</>
	);
};
