import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
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
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// create an instance of the AbortController so we can cancel the API request in-flight
		const controller = new AbortController();
		setIsLoading(true);
		apiClient
			.get<GamesResponse>('/games', { signal: controller.signal })
			.then((response) => {
				setGames(response.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		// Cleanup to abort any ongoing request if component is unmounted or a new render is triggered
		return () => controller.abort();
	}, []);
	return { games, error, isLoading };
}

export default useGames;
