import { useEffect, useState } from 'react';
import './App.css';
import Pokemons from './views/Pokemons';

function App() {
	const [pokemonsState, setPokemonsState] = useState([]);
	const [loading, setLoading] = useState(false);
	const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=30';

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
		setPokemonsState(results);
	};

	// const FecthPizzas = async (url) => {
	// 	const response = await fetch(url);
	// 	const pizzas = await response.json();

	// 	console.log(pizzas);
	// };

	useEffect(() => {
		// Fetch pokemons
		FetchPokemons(API_URL);

		// FecthPizzas('http://localhost:5000/api/pizzas');
	}, []);

	return (
		<>
			<Pokemons
				data={pokemonsState}
				loading={loading}
			/>
		</>
	);
}

export default App;
