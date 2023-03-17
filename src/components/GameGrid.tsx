import { Fragment, useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
	id: number;
	name: string;
}

interface GamesResponse {
	count: number;
	results: Array<Game>;
}

function GameGrid() {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		apiClient
			.get<GamesResponse>('/games')
			.then((response) => setGames(response.data.results))
			.catch((err) => setError(err.message));
	}, []);

	return (
		<Fragment>
			{error && <p>{error}</p>}
			<ul>
				{games?.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</Fragment>
	);
}

export default GameGrid;
