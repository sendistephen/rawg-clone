import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
	id: number;
	name: string;
}

interface GamesResponse {
	count: number;
	results: Array<Game>;
}

/**
 * Custom hook that fetches a list of games.
 * @returns {{games: Array<Game>, error:string}}
 * Returns object containing two items: an array of games and a string of any error messages.
 */
function useGames() {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		// create an instance of the AbortController so we can cancel the API request in-flight
		const controller = new AbortController();
		apiClient
			.get<GamesResponse>('/games', { signal: controller.signal })
			.then((response) => setGames(response.data.results))
			.catch((err) => setError(err.message));

		// Cleanup to abort any ongoing request if component is unmounted or a new render is triggered
		return () => controller.abort();
	}, []);
	return { games, error };
}

export default useGames;
